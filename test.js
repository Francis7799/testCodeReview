// In test.js
function handleOrder() {
    processValidRepoFunction();      // If this exists in repo -> PASS
    executeGhostFunctionXYZ123();   // Ghost function -> FLAGGED as Undefined Bug!
}
