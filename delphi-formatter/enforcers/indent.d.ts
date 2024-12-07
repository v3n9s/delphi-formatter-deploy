import type { Token } from "../matchers.js";
import { type Enforcer } from "./common.js";
type IndentToken = Pick<Token, "content"> & {
    activeSinceIndex: number;
    push: (this: IndentToken, args: {
        tokens: Token[];
        index: number;
        stack: IndentToken[];
    }) => void;
    onNextTokenRemoved: (this: IndentToken, args: {
        token: IndentToken;
        stack: IndentToken[];
    }) => void;
    getIndent: (args: {
        stack: IndentToken[];
        index: number;
    }) => number;
};
export declare const getIndent: ({ index, stack, }: {
    index: number;
    stack: IndentToken[];
}) => number;
export declare const createIndentEnforcer: () => Enforcer;
export {};
//# sourceMappingURL=indent.d.ts.map