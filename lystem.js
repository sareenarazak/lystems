export class Lystem {
    constructor(axiom, rules = new Map()) {
        this.axiom = axiom;
        this.rules = rules;
    }

    addRule(symbol, rule) {
        this.rules.set(symbol, rule);
    }

    generate(iterations) {
        let state = this.axiom;
        for (let i = 0; i < iterations; i++) {
            state = this.applyRules(state);
        }
        return state;
    }


    applyRules(state) {
        return state.split('')
            .map(symbol => this.rules.get(symbol) || symbol)
            .join('');
    }


    draw(count, turtle) {
        const result = this.generate(count);
        console.log(result);

        turtle.setupCanvas();
        for(let i = 0; i < result.length; i++) {
            const r = result[i];
            switch(r) {
                case  'F':
                    turtle.forward(10);
                    break;
                case '+':
                    turtle.turnLeft(90);
                    break;
                case '−':
                    turtle.turnRight(90);
                    break;
                case '[':
                    turtle.save();
                    break;
                case ']':
                    turtle.restore();
                    break;

                default:
                    console.log(r);
                    console.log("invalid symbol");

            }
        }
    }
}
