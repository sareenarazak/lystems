export const createContext = ({ axiom, turtle, ...rest }) => {
    if (axiom === undefined) throw new Error("axiom required");
    if (turtle === undefined) throw new Error("turtle required");

  return {
      rules: {},
      symbolTable: BaseSymbolTable,

      axiom,
      turtle,
      ...rest
  };
}

export function generate({ axiom, rules }, iterations) {
    let state = axiom;
    for (let i = 0; i < iterations; i++) {
        state = state.split('')
            .map(symbol => rules[symbol] || symbol)
            .join('');
    }
    return state;
}

export function draw(ctx, generated) {
    const { symbolTable } = ctx;
    for(let i = 0; i < generated.length; i++) {
        const r = generated[i];
        if (! (r in symbolTable)) {
            throw new Error("invalid symbol '" + r + "' " + r.charCodeAt(0));
        }

        symbolTable[r](ctx);
    }
}

export const BaseSymbolTable = {
    F: ({ turtle }) => {
        turtle.forward(10);
    },
    '+': ({ turtle }) => {
        turtle.turnLeft(90);
    },

    '-':({ turtle }) => {
        turtle.turnRight(90);
    },

    '[': ({ turtle }) => {
        turtle.save();
    },

    ']': ({ turtle }) => {
        turtle.restore();
    },
};
