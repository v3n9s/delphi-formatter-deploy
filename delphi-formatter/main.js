import { createEnforcers } from "./enforcers.js";
import { getMatch } from "./matchers.js";
export const getTokens = (text) => {
    const tokensList = [];
    let indexStart = 0;
    while (indexStart < text.length) {
        const match = getMatch({ text, indexStart });
        if (match) {
            tokensList.push(match.token);
            indexStart = match.indexNext;
        }
        else {
            throw new Error(JSON.stringify({
                indexStart,
                token: text.slice(indexStart, indexStart + 50),
                tokensList: tokensList.slice(-10),
            }, null, 2));
        }
    }
    return tokensList;
};
export const getFormatted = (tokens, config) => {
    tokens = [...tokens];
    const enforcers = createEnforcers();
    for (let index = 0; index < tokens.length; index++) {
        enforcers.forEach((f) => {
            const result = f({ tokens, index, config });
            if (result) {
                index = Math.min(tokens.length - 1, result.indexNext);
            }
        });
    }
    return tokens.map((t) => t.content).join("");
};
