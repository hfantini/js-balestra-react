// == IMPORT(S)
// ============================================================================

import { BRenderGearCanvas, BUpdateGear, BWorldCanvas } from "balestra";

// == CLASSE(S)
// ============================================================================

class TestChamberWorld extends BWorldCanvas
{
	// == ATTRIBUTES
	// ========================================================================

	// == VAR

	// == CONST

	// == CONSTRUCTOR(S)
	// ========================================================================

	// == METHOD(S) & EVENT(S)
	// ========================================================================

    update(updateGear: BUpdateGear)
    {
		console.log(updateGear.extra);
    }

    draw(renderGear: BRenderGearCanvas)
    {
		renderGear.context.fillStyle = "red";
		renderGear.context.fillRect(0, 0, 50, 50);
    }

	// == GETTER(S) AND SETTER(S)
	// ========================================================================
};

// == EXPORTS
// ============================================================================

export default TestChamberWorld;