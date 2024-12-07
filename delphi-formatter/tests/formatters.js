import { deepStrictEqual } from "assert";
import { getFormatted, getTokens } from "../main.js";
export const formatters = [
    {
        description: "expect to do nothing",
        f: () => {
            const text = `if true then {} begin {} 
A := true; 
end
else // asdf
begin 
A := false; 
end
if true then B := true;`;
            const formatted = getFormatted(getTokens(text), {});
            deepStrictEqual(formatted, text);
        },
    },
];
