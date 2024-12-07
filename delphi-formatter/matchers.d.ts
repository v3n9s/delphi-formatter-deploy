export type TokenType = "blank-character" | "string" | "single-line-comment" | "multi-line-comment" | "special-single-symbol" | "special-double-symbol" | "keyword" | "identifier" | "number";
export type Token = {
    type: TokenType;
    content: string;
};
type Matcher = (args: {
    text: string;
    indexStart: number;
}) => {
    token: Token;
    indexNext: number;
} | null;
export declare const getMatch: Matcher;
export {};
//# sourceMappingURL=matchers.d.ts.map