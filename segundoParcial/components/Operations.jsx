import { useState, useEffect } from 'react';

export const Operations = ({ a, b, operation }) => {
    const [result, setResult] = useState(null);

    const handleAdd = () => {
        const screen = document.getElementById('screen');
        screen.value += '+';
    };
    const handleSubtract = () => {
        const screen = document.getElementById('screen');
        screen.value += '-';
    };
    const handleMultiply = () => {
        const screen = document.getElementById('screen');
        screen.value += '*';
    };
    const handleDivision = () => {
        const screen = document.getElementById('screen');
        screen.value += '/';
    };
    const handleClear = () => {
        const screen = document.getElementById('screen');
        screen.value = '';
    };

    const whichOperation = (operation) => {

        if (operation === '+') {
            handleAdd();
        } else if (operation === '-') {
            handleSubtract();
        } else if (operation === 'x') {
            handleMultiply();
        } else if (operation === '/') {
            handleDivision();
        } else if (operation === 'c') {
            handleClear();
        } else {
            setResult('wtf bro');
        }
    };

    useEffect(() => {
        whichOperation(operation);
    }, [a, b, operation]);

    return (
        <>
        <h1>Calculadora</h1>
            <input type="text" value={operation} id='screen' readOnly/>
            <br/><br/>
            <div id='operaciones'>
                <button onClick={ () => whichOperation('+') }> + </button>
                <button onClick={ () => whichOperation('-') }> - </button>
                <button onClick={ () => whichOperation('x') }> x </button>
                <button onClick={ () => whichOperation('/') }> / </button>
                <button onClick={ () => whichOperation('c') }> C </button>
            </div>
        </>
    );
};