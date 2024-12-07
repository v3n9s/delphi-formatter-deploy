import { createIndentEnforcer } from "./enforcers/indent.js";
import { enforceKeywordsCasing, enforceNewLine, enforceNewLineInStructuredStatements, enforceNoTrailingEmpty, } from "./enforcers/rest.js";
export const createEnforcers = () => {
    return [
        enforceNewLine,
        enforceNewLineInStructuredStatements,
        createIndentEnforcer(),
        enforceNoTrailingEmpty,
        enforceKeywordsCasing,
    ];
};
