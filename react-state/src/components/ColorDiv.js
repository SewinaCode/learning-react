import React from 'react';
import {useState, useEffect} from 'react';

function ColorDiv() {
    const [h1Color, setH1Color] = useState('yellow');
    
    function changeColor() {
        switch (h1Color) {
            case 'yellow':
                setH1Color('orange');
                break;
            case 'orange':
                setH1Color('red');
                break;
            case 'red':
                setH1Color('green');
                break;
            case 'green':
                setH1Color('pink');
                break;
            
            default:
                setH1Color('yellow');
                break;
        }
        console.log('changeColor() called');
    }

    useEffect (() => {
        console.log(`the color of the h1 tag changed to ${h1Color}`);
    })

    return (
        <>
            <h1 style={{backgroundColor: h1Color}}>This element background is going to be changed.</h1>
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default ColorDiv;