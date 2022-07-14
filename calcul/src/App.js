import React, {useState} from "react";
import Button from "./Components/Button/Button";
import Wrapper from "./UI/Wrapper/Wrapper";
import Card from "./UI/Card/Card";
import classes from "./UI/Global.module.css";

function App() {

const [display, setDisplay] = useState("");

const addToDisplay = (event) => {
     setDisplay(display + event.target.innerText)
}

const equal = () => {
  setDisplay(eval(display));
}

const reset = () => {
  setDisplay("");
}

  return (
    <Wrapper>
      <Card className={classes.container}>
         <Card>
           {display}
        </Card>
        <Button onClick={addToDisplay}>0</Button>
        <Button onClick={addToDisplay}>.</Button>
        <Button onClick={addToDisplay}>1</Button>
        <Button onClick={addToDisplay}>2</Button>
        <Button onClick={addToDisplay}>3</Button>
        <Button onClick={addToDisplay}>4</Button>
        <Button onClick={addToDisplay}>5</Button>
        <Button onClick={addToDisplay}>6</Button>
        <Button onClick={addToDisplay}>7</Button>
        <Button onClick={addToDisplay}>8</Button>
        <Button onClick={addToDisplay}>9</Button>
        <Button onClick={reset}>AC</Button>
        <Button onClick={addToDisplay}>/</Button>
        <Button onClick={addToDisplay}>*</Button>
        <Button onClick={addToDisplay}>-</Button>
        <Button onClick={addToDisplay}>+</Button>
        <Button onClick={equal}>=</Button>
      </Card>
    </Wrapper>
  );
}

export default App;
