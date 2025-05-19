// Generated from c:/Users/Facu/VISUAL STUDIO/ssl-51916/instrucciones.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link instruccionesParser}.
 */
public interface instruccionesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the {@code singleInstruction}
	 * labeled alternative in {@link instruccionesParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterSingleInstruction(instruccionesParser.SingleInstructionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code singleInstruction}
	 * labeled alternative in {@link instruccionesParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitSingleInstruction(instruccionesParser.SingleInstructionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multipleInstructions}
	 * labeled alternative in {@link instruccionesParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterMultipleInstructions(instruccionesParser.MultipleInstructionsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multipleInstructions}
	 * labeled alternative in {@link instruccionesParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitMultipleInstructions(instruccionesParser.MultipleInstructionsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code decisionInstruction}
	 * labeled alternative in {@link instruccionesParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterDecisionInstruction(instruccionesParser.DecisionInstructionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code decisionInstruction}
	 * labeled alternative in {@link instruccionesParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitDecisionInstruction(instruccionesParser.DecisionInstructionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ifElseDecision}
	 * labeled alternative in {@link instruccionesParser#decision}.
	 * @param ctx the parse tree
	 */
	void enterIfElseDecision(instruccionesParser.IfElseDecisionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ifElseDecision}
	 * labeled alternative in {@link instruccionesParser#decision}.
	 * @param ctx the parse tree
	 */
	void exitIfElseDecision(instruccionesParser.IfElseDecisionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code singleOutput}
	 * labeled alternative in {@link instruccionesParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSingleOutput(instruccionesParser.SingleOutputContext ctx);
	/**
	 * Exit a parse tree produced by the {@code singleOutput}
	 * labeled alternative in {@link instruccionesParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSingleOutput(instruccionesParser.SingleOutputContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multipleOutputs}
	 * labeled alternative in {@link instruccionesParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterMultipleOutputs(instruccionesParser.MultipleOutputsContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multipleOutputs}
	 * labeled alternative in {@link instruccionesParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitMultipleOutputs(instruccionesParser.MultipleOutputsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code returnStatement}
	 * labeled alternative in {@link instruccionesParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(instruccionesParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code returnStatement}
	 * labeled alternative in {@link instruccionesParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(instruccionesParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code printString}
	 * labeled alternative in {@link instruccionesParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterPrintString(instruccionesParser.PrintStringContext ctx);
	/**
	 * Exit a parse tree produced by the {@code printString}
	 * labeled alternative in {@link instruccionesParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitPrintString(instruccionesParser.PrintStringContext ctx);
	/**
	 * Enter a parse tree produced by the {@code endExecution}
	 * labeled alternative in {@link instruccionesParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterEndExecution(instruccionesParser.EndExecutionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code endExecution}
	 * labeled alternative in {@link instruccionesParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitEndExecution(instruccionesParser.EndExecutionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code trueCondition}
	 * labeled alternative in {@link instruccionesParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterTrueCondition(instruccionesParser.TrueConditionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code trueCondition}
	 * labeled alternative in {@link instruccionesParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitTrueCondition(instruccionesParser.TrueConditionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code falseCondition}
	 * labeled alternative in {@link instruccionesParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterFalseCondition(instruccionesParser.FalseConditionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code falseCondition}
	 * labeled alternative in {@link instruccionesParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitFalseCondition(instruccionesParser.FalseConditionContext ctx);
}