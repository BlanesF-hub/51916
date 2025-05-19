import { Parser } from "antlr4";
import instruccionesVisitor from "./generated/instruccionesVisitor.js";
import instruccionesParser from "./generated/instruccionesParser.js";

export class CustominstruccionesVisitor extends instruccionesVisitor {
  visitInstrucciones(ctx) {
    if (ctx.instruccion().length) {
      return ctx.instruccion().map(instr => this.visit(instr)).join("\n");
    } else {
      return this.visit(ctx.instruccion());
    }
  }

  visitDecisionInstruction(ctx) {
    return this.visit(ctx.decision());
  }

  visitIfElseDecision(ctx) {
    const condicion = this.visit(ctx.condicion());
    if (condicion) {
      return this.visit(ctx.sentencia(0));
    } else if (ctx.ELSE()) {
      return this.visit(ctx.sentencia(1));
    } else {
      return "";
    }
  }

  visitSingleOutput(ctx) {
    return this.visit(ctx.salida());
  }

  visitMultipleOutputs(ctx) {
    return this.visit(ctx.salida()) + "\n" + this.visit(ctx.sentencia());
  }

  visitReturnStatement(ctx) {
    return "return;";
  }

  visitPrintString(ctx) {
    const texto = ctx.CADENA().getText(); // incluye comillas
    console.log("Devolucion:", texto);
    return eval(texto);
 // devuelve contenido de la cadena
  }

  visitTrueCondition(ctx) {
    return true;
  }

  visitFalseCondition(ctx) {
    return false;
  }
}

export default CustominstruccionesVisitor;
