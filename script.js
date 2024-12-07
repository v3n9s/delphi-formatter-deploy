import { getTokens, getFormatted } from "./delphi-formatter/main.js";

const programTextInput = document.querySelector("#program-text-input");
const programTextOutput = document.querySelector("#program-text-output");

const handleInput = () => {
  localStorage.setItem("program-text", programTextInput.value);
  const tokens = getTokens(programTextInput.value);
  const formatted = getFormatted(tokens, {
    indent: { size: 2, spaceAfterIf: "add" },
    keywords: {
      casing: "lower-case",
      override: {
        program: "pascal-case",
        uses: "pascal-case",
        const: "pascal-case",
        var: "pascal-case",
        begin: "pascal-case",
        end: "pascal-case",
        string: "pascal-case",
        if: "pascal-case",
        else: "pascal-case",
        for: "pascal-case",
        while: "pascal-case",
      },
    },
    blankCharacters: { trailing: "remove" },
    newLine: {
      afterSemicolon: { comments: "preserve" },
      afterBegin: { comments: "preserve" },
      inControlFlowStatements: { begin: "next-line", other: "next-line" },
    },
  });
  programTextOutput.textContent = formatted;
};

programTextInput.addEventListener("input", handleInput);

programTextInput.textContent =
  localStorage.getItem("program-text") ??
  `\
program swap_vars;
var
A, B: Integer;
  begin
A := A + B;B := A - B;
A := A - B;
END.
`;
handleInput();
