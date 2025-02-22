import { useState } from "react";
import classes from "./style.module.css";
import { evaluate } from "mathjs";
import Result from "../Result/Result";


const Numbers = () => {
    const numbersButton = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-"];
    const opertion = ["=", "/", "*", "C", "⌫"]
    const buttons = [...numbersButton, ...opertion]
    const [inputs, setInputs] = useState<string>("");
    const [isResults, setIsResults] = useState<boolean>(false);


    const handleInput = (value: string) => {
        if (value === '=') {
            setInputs(evaluate(inputs).toString());
            setIsResults(true);
        }
        else if (value === 'C') {
            setInputs('');
            setIsResults(false)

        }
        else if (value === '⌫') {
            const news = inputs.slice(0, -1);
            setInputs(news)
        }
        else {
            setInputs((prev) => (isResults && !["+", "-", "/", "*"].includes(value) ? value : prev + value));
            setIsResults(false);
        }

    };

    return (

        <div className={classes.Container}>


            <Result result={inputs} />

            <div className={classes.grid}>
                {buttons.map((item, index) => (
                    <button
                        className={`${classes.btn} ${opertion.includes(item) ? classes.opertionbtn : classes.numberbtn}`}
                        onClick={() => handleInput(item)}
                        key={index}
                    >
                        {item}
                    </button>

                ))}
            </div>


        </div>
    );
};

export default Numbers; 