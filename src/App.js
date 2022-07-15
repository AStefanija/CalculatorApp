import React from "react";


function App() {
    const [result, setResult] = React.useState("");
    const [textBox, setTextBox] = React.useState("");

    function display(value) {
        setResult(result + value);
    }
    const clear = () => {
        setResult("");
    }
    const sum = () => {
        setResult(eval(result));
        setTextBox(result + "=" + eval(result));
    }
    const backspace = () => {
        setResult(result.slice(0,-1));
    }

  return (
    <div className="App">
        <table className="calculator">
            <tr>
                <td colSpan="3"><input id="textBox" readOnly={true} value={textBox}/></td>
                <td>
                    <button type="button" onClick={backspace} id="backspace">Backspace</button>
                </td>
            </tr>
            <tr>
                <td colSpan="3"><input value={result} id="result"/></td>
                <td>
                    <button type="button" onClick={clear} id="ce">CE</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" onClick={() => display(1)}>1</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(2)}>2</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(3)}>3</button>
                </td>
                <td>
                    <button type="button" onClick={() => display("+")}>+</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" onClick={() => display(4)}>4</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(5)}>5</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(6)}>6</button>
                </td>
                <td>
                    <button type="button" onClick={() => display("-")}>-</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" onClick={() => display(7)}>7</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(8)}>8</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(9)}>9</button>
                </td>
                <td>
                    <button type="button" onClick={() => display("*")}>*</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" onClick={() => display("/")}>/</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(0)}>0</button>
                </td>
                <td>
                    <button type="button" onClick={() => display(".")}>.</button>
                </td>
                <td>
                    <button type="button" onClick={sum} id="sum">=</button>
                </td>
            </tr>
        </table>
    </div>
  );
}

export default App;
