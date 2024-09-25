import { useState, useCallback } from "react";
import {ShowIncrement} from "./ShowIncrement";

export const CallbackHook = () => {
    const [countner, setCounter] = useState(10);

    const incrementFather = useCallback(() => {
        console.log('calling setcounter');
        setCounter((value) => value + 1);
    },
    [],
)

return (
    <>
        <div>CallbackHook: {countner}</div>

        <ShowIncrement increment={incrementFather}/>
    
    </>
)
}