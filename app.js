import React from 'react';
import ReactDOM from 'react-dom/client';

function handleClick(){
    console.log("Button was clicked");
}

// const Goal=() => (
//     <div>
//         <h1 id="goal" className="goal">Mastering React with full Focused</h1>

//         <button onClick={handleClick}>Click me</button>
//     </div>
// );

let expectedSalary=8000000;
function Goal(){
    return <div>
        <h1 id="goal" className="goal">Mastering React with full Focused</h1>
        {expectedSalary}
        <button onClick={handleClick}>Click me</button>
    </div>;
}

const Goal2= () => (
    <div id="AllGoals">
        <Goal/>
        <h1 className="Another goal">Do a lot of Hardwork and Earn lot of money!</h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal2/>);