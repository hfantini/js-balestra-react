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

import "./BalestraFrame.scss";
import { useEffect, useRef } from "react";
import { BEngineCanvas, BVector2, BWorldCanvas } from "balestra";

// == DEFINITION(S)
// ============================================================================

interface BalestraFrameProps 
{
    id:string
	worldRef:React.MutableRefObject<BWorldCanvas|undefined>
	extra?: any
};

// == COMPONENT(S)
// ============================================================================

const BalestraFrame = ( {id, worldRef, extra = undefined}:BalestraFrameProps ) =>
{
	const containerRef = useRef<HTMLDivElement|null>(null);
	const canvasRef = useRef<HTMLCanvasElement|null>(null);
	const resizeObservableRef = useRef<ResizeObserver|null>(null);
	const canvasSizeRef = useRef<BVector2|undefined>(undefined);
	const engineRef = useRef<BEngineCanvas|undefined>(undefined);
	const requestAnimationFrameRef = useRef<number|undefined>(undefined);
	const extraRef = useRef<any|undefined>(undefined); 

	useEffect( () =>
	{
		resizeObservableRef.current = new ResizeObserver(onElementResize);

		if(!requestAnimationFrameRef.current)
		{
			requestAnimationFrameRef.current = window.requestAnimationFrame(tick);
		}

		return () =>
		{
			resizeObservableRef.current?.disconnect();

			if(requestAnimationFrameRef.current)
			{
				window.cancelAnimationFrame(requestAnimationFrameRef.current)
				requestAnimationFrameRef.current = undefined;
			}
		}
	}, [])

	useEffect( () =>
	{
		if(resizeObservableRef.current && containerRef.current)
		{
			resizeObservableRef.current.observe(containerRef.current);
			onContainerResize(new BVector2(containerRef.current.offsetWidth, containerRef.current.offsetHeight));
		}
	}, [containerRef])

	useEffect( () => 
	{
		if(canvasSizeRef.current)
		{
			if(!engineRef.current)
			{
				init();
			}
		}
	}, [canvasSizeRef]);

	useEffect( () => {
		extraRef.current = extra;
	}, [extra]);

	const init = () =>
	{
		if(containerRef.current, canvasRef.current)
		{
			engineRef.current = new BEngineCanvas(`${id}_BEngine`, containerRef.current!, canvasRef.current);
		}
	};

	const tick = (totalElapsedTime: number) =>
	{
		if(canvasRef.current && canvasSizeRef.current && engineRef.current && worldRef.current)
		{
			canvasRef.current.width = canvasSizeRef.current.X;
			canvasRef.current.height = canvasSizeRef.current.Y;

			worldRef.current.parent = engineRef.current;
			engineRef.current.world = worldRef.current;
			engineRef.current.tick(totalElapsedTime, extraRef.current);
		}

		requestAnimationFrameRef.current = window.requestAnimationFrame(tick);
	};

	const onElementResize = (entries:ResizeObserverEntry[]) =>
	{
		entries.forEach( (element) =>
		{
			if(element.target === containerRef.current)
			{
				onContainerResize(new BVector2(element.target.clientWidth, element.target.clientHeight))
			}
		} );
	};

	const onContainerResize = (size:BVector2) =>
	{
		canvasSizeRef.current = new BVector2(size);
	};

    return (
		<div id={`${id}_CanvasContainer`} 
			 ref={containerRef} 
			 className="BalestraFrame">
            <canvas 
				id={`${id}_CanvasElement`}
				ref={canvasRef}>
			</canvas>
		</div>
    );
};

// == EXPORTS
// ============================================================================

export default BalestraFrame;
export type { BalestraFrameProps };