/*
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

	BALESTRA ENGINE - REACT
	---------------
	Balestra engine support for react library.
	
	Author: Henrique Fantini
	Contact: henrique.fantini@hotmail.com
	LinkedIn: https://www.linkedin.com/in/henrique-fantini/
	
	-- X --
	
	Published over MIT License @ 2023

= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

// == IMPORT(S)
// ============================================================================

import { BWorldCanvas } from "balestra";
import BalestraFrame from "./BalestraFrame";
import {render} from '@testing-library/react'

// == MOCK FUNCTION(S)
// ============================================================================

// == TEST SUITE(S)
// ============================================================================

describe("BalestraFrame Tests", () => 
{

    // == TEST ACTIONS(S)
    // ========================================================================

    // == TEST CASE(S)
    // ========================================================================

    test("Component: Should render component", () => 
	{
		const worldRef = {
			current: new BWorldCanvas("City17")
		}
		const {container} = render(<BalestraFrame id="bFrameTest" worldRef={worldRef} />)

		expect(container).toBeDefined();
    });
} );