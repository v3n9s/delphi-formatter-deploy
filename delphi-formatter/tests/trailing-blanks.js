import { deepStrictEqual } from "assert";
import { getFormatted, getTokens } from "../main.js";
export const trailingBlanks = [
    {
        description: "expect to remove trailing empty tokens before newlines",
        f: () => {
            const textExpected = `if True then {} begin {}
A := True;
end
else // asdf
begin
A := False;
end
if True then B := True;
`;
            const text = `if True then {} begin {}       
A := True;      
end            
else // asdf
begin    
A := False;   
end  
if True then B := True; 
`;
            const formatted = getFormatted(getTokens(text), {
                blankCharacters: { trailing: "remove" },
            });
            deepStrictEqual(formatted, textExpected);
        },
    },
    {
        description: "expect to remove trailing empty tokens at end",
        f: () => {
            {
                const textExpected = `program name;`;
                const text = `program name; `;
                const formatted = getFormatted(getTokens(text), {
                    blankCharacters: { trailing: "remove" },
                });
                deepStrictEqual(formatted, textExpected);
            }
            {
                const textExpected = `program name;`;
                const text = `program name;  `;
                const formatted = getFormatted(getTokens(text), {
                    blankCharacters: { trailing: "remove" },
                });
                deepStrictEqual(formatted, textExpected);
            }
            {
                const textExpected = `program name;`;
                const text = `program name;   `;
                const formatted = getFormatted(getTokens(text), {
                    blankCharacters: { trailing: "remove" },
                });
                deepStrictEqual(formatted, textExpected);
            }
            {
                const textExpected = `program name;`;
                const text = `program name;                                    `;
                const formatted = getFormatted(getTokens(text), {
                    blankCharacters: { trailing: "remove" },
                });
                deepStrictEqual(formatted, textExpected);
            }
        },
    },
];
