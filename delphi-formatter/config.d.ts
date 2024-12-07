type PartialWithUndefined<T> = {
    [K in keyof T]?: undefined | T[K];
};
type NewLineAfter = {
    comments: "preserve" | "next-line";
};
type Position = "same-line" | "next-line";
type CasingStyle = "preserve" | "lower-case" | "upper-case" | "pascal-case";
export type Config = PartialWithUndefined<{
    keywords: {
        casing: CasingStyle;
        override?: {
            [keyword: string]: CasingStyle;
        };
    };
    indent: {
        size: number;
        spaceAfterIf?: undefined | "add";
    };
    blankCharacters: {
        trailing: "remove";
    };
    newLine: PartialWithUndefined<{
        afterSemicolon: NewLineAfter;
        afterBegin: NewLineAfter;
        inControlFlowStatements: PartialWithUndefined<{
            begin: Position;
            other: Position;
        }>;
    }>;
}>;
export {};
//# sourceMappingURL=config.d.ts.map