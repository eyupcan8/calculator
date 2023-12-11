import "./Calculator.css"
import {useState} from "react";
const Calculator = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);


        const handleNumber1Change = (e) => {
            setNumber1(Number(e.target.value));
        };
        const handleNumber2Change = (e) => {
            setNumber2(Number(e.target.value))
        };
        const handleAddition = () => {
            setResult(number1 + number2)
        }

    return (
        <div className="calculator-container">
            <h1>UseState</h1>
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label" htmlFor="number1">number1</label>
                    <input id="number1" type="number" className="form-input"
                    onChange={handleNumber1Change}
                           value={number1}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="number2">number2</label>
                    <input id="number2" type="number" className="form-input"
                    onChange={handleNumber2Change}
                           value={number2}
                    />
                </div>
                <button className="form-button" onClick={handleAddition}>add</button>
                <div className="form-group">
                    <label className="form-label" htmlFor="result">
                        Result
                    </label>
                    <input className="form-input" type="number" id="result"
                           value={result}
                           readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default Calculator;