// In test.js
function handleOrder() {
    processValidRepoFunction();      // If this exists in repo -> PASS
    executeGhostFunctionXYZ3();   // Ghost function -> FLAGGED as Undefined Bug!
}
