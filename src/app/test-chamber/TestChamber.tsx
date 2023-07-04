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

import "./TestChamber.scss";
import { useEffect, useRef } from "react";
import { BalestraFrame } from "../../lib";
import TestChamberWorld from "./TestChamberWorld";

// == DEFINITION(S)
// ============================================================================

// == COMPONENT(S)
// ============================================================================

const TestChamber = () =>
{
    const world = useRef<TestChamberWorld|undefined>(undefined);

    useEffect( () =>
    {
        world.current = new TestChamberWorld("TestChamberWorld");
    }, []);

    return (
        <div className="TestChamberContainer">
		    <BalestraFrame id="tc_BFrame" worldRef={world} extra={"PortalGun"} />
        </div>
    );
};

// == EXPORTS
// ============================================================================

export default TestChamber;