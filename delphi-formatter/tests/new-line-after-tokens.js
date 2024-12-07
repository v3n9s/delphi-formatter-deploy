import { deepStrictEqual } from "assert";
import { getFormatted, getTokens } from "../main.js";
export const newLineAfterTokens = [
    {
        description: "expect to add newline, allow comments",
        f: () => {
            const textExpected = `if true then {} begin {}
A := true;
end
else
begin
A := false; {}
end
if true then B := true;`;
            const text = `if true then {} begin {} A := true; end
else
begin A := false; {} end
if true then B := true;`;
            const tokens = getTokens(text);
            deepStrictEqual(getFormatted(tokens, {
                newLine: {
                    afterBegin: { comments: "preserve" },
                    afterSemicolon: { comments: "preserve" },
                },
                blankCharacters: { trailing: "remove" },
            }), textExpected);
        },
    },
    {
        description: "expect to add newline, forbid comments",
        f: () => {
            const textExpected = `if true then {} begin
{} A := true;
end
else
begin
A := false;
// asdf
end
if true then B := true;`;
            const text = `if true then {} begin {} A := true; end
else
begin A := false; // asdf
end
if true then B := true;`;
            const tokens = getTokens(text);
            deepStrictEqual(getFormatted(tokens, {
                newLine: {
                    afterBegin: { comments: "next-line" },
                    afterSemicolon: { comments: "next-line" },
                },
                blankCharacters: { trailing: "remove" },
            }), textExpected);
        },
    },
];
