import instruccionesListener from "./generated/instruccionesListener.js";

export class CustominstruccionesListener extends instruccionesListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}