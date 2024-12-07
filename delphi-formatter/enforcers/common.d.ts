import type { Config } from "../config.js";
import type { Token } from "../matchers.js";
export type Predicate = (token: Token) => boolean;
export type Enforcer = (args: {
    tokens: Token[];
    index: number;
    config: Config;
}) => void | {
    indexNext: number;
};
type GetToken = (args: {
    tokens: Token[];
    index: number;
    predicate: Predicate;
}) => {
    index: number;
    tokensAmountBetween: number;
    token: Token;
} | null;
export declare const createBlank: (content?: string) => Token;
export declare const getPrevToken: GetToken;
export declare const getNextToken: GetToken;
export {};
//# sourceMappingURL=common.d.ts.map