import { useRef } from "react";


export const usePressHolder = (onHold: () => any, holdThreshold: number = 400) => {
    const ref = useRef({
        cntr: 0,
        timerID: 0,
        previousTimestamp: -1
    });

    const onPressDown = () => {
        requestAnimationFrame(timer)
    }


    const onPressUp = () => {

        cancelAnimationFrame(ref.current.timerID);
        ref.current.cntr = 0;
        ref.current.previousTimestamp = -1;
    }

    function timer(timestamp: number) {
        if (ref.current.previousTimestamp === -1) ref.current.previousTimestamp = timestamp;

        const dt = timestamp - ref.current.previousTimestamp;
        ref.current.previousTimestamp = timestamp;

        if (ref.current.cntr < holdThreshold) {
            ref.current.cntr += dt;
        } else {
            onHold();
        }

        ref.current.timerID = requestAnimationFrame(timer);
    }

    return { onPressUp, onPressDown }

}