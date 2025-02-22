import { useState } from "react";
import classes from "./style.module.css";
import { evaluate } from "mathjs";
import Result from "../Result/Result";

const Numbers = () => {
    const numbersButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operationsButtons = ["/", "*", "+", "-", "=", "C", "⌫"];
    const allButtons = [...numbersButtons, ...operationsButtons];

    const operations = new Set(["+", "-", "/", "*"]);

    const [inputs, setInputs] = useState<string>("");
    const [isResults, setIsResults] = useState<boolean>(false);

    const handleInput = (value: string) => {
        if (value === "=") {
            setInputs(evaluate(inputs).toString());
            setIsResults(true);

        } else if (value === "C") {
            setInputs("");
            setIsResults(false);
        } else if (value === "⌫") {
            setInputs((prev) => prev.slice(0, -1));
        } else {
            setInputs((prev) => {
                if (isResults) {
                    return operations.has(value) ? prev + value : value;
                }
                if (operations.has(prev.slice(-1)) && operations.has(value)) {
                    return prev;
                }

                return prev + value;
            });
            setIsResults(false);
        }
    };

    return (
        <div className={classes.container}>
            <Result result={inputs} />
            <div className={classes.grid}>
                {allButtons.map((item) => (
                    <button
                        key={item}
                        className={`${classes.btn} ${operationsButtons.includes(item) ? classes.operationsBtn : classes.numbersBtn}`}
                        onClick={() => handleInput(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Numbers;
