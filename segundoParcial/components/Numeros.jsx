export const Numeros= () => {

    const interfaceOne = () => {
        const screen = document.getElementById('screen');
        screen.value += 1;
    }

    const interfaceTwo = () => {
        const screen = document.getElementById('screen');
        screen.value += 2;
    }

    const interfaceThree = () => {
        const screen = document.getElementById('screen');
        screen.value += 3;
    }

    const interfaceFour = () => {
        const screen = document.getElementById('screen');
        screen.value += 4;
    }

    const interfaceFive = () => {
        const screen = document.getElementById('screen');
        screen.value += 5;
    }

    const interfaceSix = () => {
        const screen = document.getElementById('screen');
        screen.value += 6;
    }

    const interfaceSeven = () => {
        const screen = document.getElementById('screen');
        screen.value += 7;
    }

    const interfaceEight = () => {
        const screen = document.getElementById('screen');
        screen.value += 8;
    }

    const interfaceNine = () => {
        const screen = document.getElementById('screen');
        screen.value += 9;
    }

    const interfaceZero = () => {
        const screen = document.getElementById('screen');
        screen.value += 0;
    }

    const interfacePoint = () => {
        const screen = document.getElementById('screen');
        screen.value += '.';
    }

    const operation = () => {
        let input = document.getElementById('screen').value;
        let result = 0;
        if (input.includes('+')) {
            let [a, b] = input.split('+').map(Number);
            result = a + b;
        } else if (input.includes('-')) {
            let [a, b] = input.split('-').map(Number);
            result = a - b;
        } else if (input.includes('*')) {
            let [a, b] = input.split('*').map(Number);
            result = a * b;
        } else if (input.includes('/')) {
            let [a, b] = input.split('/').map(Number);
            result = a / b;
        }

        if (result == 'Infinity') {
            result = 'MATH ERROR';

        } else if (isNaN(result)) {
            result = 'SYNTAX ERROR';
        } else {
            result = result;
        }
    
        document.getElementById('screen').value = result;
    }
    
    return (
        <>
            <br/><br/>
            <button onClick={ () => interfaceSeven() }> 7 </button>
            <button onClick={ () => interfaceEight() }> 8 </button>
            <button onClick={ () => interfaceNine() }> 9 </button>
            <br/>
            <button onClick={ () => interfaceFour() }> 4 </button>
            <button onClick={ () => interfaceFive() }> 5 </button>
            <button onClick={ () => interfaceSix() }> 6 </button>
            <br/>
            <button onClick={ () => interfaceOne() }> 1 </button>
            <button onClick={ () => interfaceTwo() }> 2 </button>
            <button onClick={ () => interfaceThree() }> 3 </button>
            <br/>
            <button onClick={ () => interfaceZero() }> 0 </button>
            <button onClick={ () => interfacePoint() }> . </button>
            <button onClick={ () => operation() }> = </button>
        </>
    )
}