export const everythingPredicate = () => true;
export const blankCharacterPredicate = (token) => {
    return token.type === "blank-character";
};
export const newLinePredicate = (token) => {
    return token.content === "\n";
};
export const commentPredicate = (token) => {
    return ["single-line-comment", "multi-line-comment"].includes(token.type);
};
