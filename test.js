// In test.js
function handleOrder() {
    processValidRepoFunction();      // If this exists in repo -> PASS
    executeGhostFunctionX3();   // Ghost function -> FLAGGED as Undefined Bug!
}
