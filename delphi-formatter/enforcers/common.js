const minusOneToNull = (n) => {
    return n === -1 ? null : n;
};
export const createBlank = (content = " ") => {
    return { type: "blank-character", content };
};
export const getPrevToken = ({ tokens, index, predicate }) => {
    const ind = minusOneToNull(tokens.slice(0, index).reverse().findIndex(predicate));
    if (ind !== null) {
        const tokenIndex = index - 1 - ind;
        const token = tokens[tokenIndex];
        if (token) {
            return { index: tokenIndex, tokensAmountBetween: ind, token };
        }
    }
    return null;
};
export const getNextToken = ({ tokens, index, predicate }) => {
    const ind = minusOneToNull(tokens.slice(index + 1).findIndex(predicate));
    if (ind !== null) {
        const tokenIndex = index + 1 + ind;
        const token = tokens[tokenIndex];
        if (token) {
            return { index: tokenIndex, tokensAmountBetween: ind, token };
        }
    }
    return null;
};
