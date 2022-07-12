function App() {

    function display(value) {
        return document.getElementById("result").value += value;
    }

    function sum() {
        let str = document.getElementById("result").value;
        let result = eval(str);
        document.getElementById("result").value = result;
        document.getElementById("textBox").value = str + " = " + result;
    }

  return (
    <div className="App">
        <table className="calculator">
            <tr>
                <td colSpan="3"><input id="textBox" readOnly={true}/></td>
            </tr>
            <tr>
                <td colSpan="3"><input id="result"/></td>
                <td>
                    <button type="button" onClick={() => document.getElementById('result').value = ''} id="ce">CE</button>
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
                    <button type="button" onClick={() => sum()} id="sum">=</button>
                </td>
            </tr>
        </table>
    </div>
  );
}

export default App;
