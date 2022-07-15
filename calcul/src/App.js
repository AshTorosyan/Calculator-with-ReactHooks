import React, {useState} from "react";
import Button from "./Components/Button/Button";
import Wrapper from "./UI/Wrapper/Wrapper";
import Card from "./UI/Card/Card";
import classes from "./UI/Global.module.css";

function App() {

const [display, setDisplay] = useState("");

const addToDisplay = (event) => {
     setDisplay(display + event.target.innerText);
}

const equal = () => {
  setDisplay(eval(display));
}

const reset = () => {
  setDisplay("");
}

  return (
    <Wrapper className={classes.wrapper}>
      <Card className={classes.container}>
         <Card className={classes.display}>
           {display}
        </Card>
        <Card className={classes.buttons}>
        <Button className={classes.button} onClick={addToDisplay}>7</Button>
        <Button className={classes.button} onClick={addToDisplay}>8</Button>
        <Button className={classes.button} onClick={addToDisplay}>9</Button>
        <Button className={classes.button_operator} onClick={addToDisplay}>+</Button>

        <Button className={classes.button} onClick={addToDisplay}>4</Button>
        <Button className={classes.button} onClick={addToDisplay}>5</Button>
        <Button className={classes.button} onClick={addToDisplay}>6</Button>
        <Button className={classes.button_operator} onClick={addToDisplay}>-</Button>

        <Button className={classes.button} onClick={addToDisplay}>1</Button>
        <Button className={classes.button} onClick={addToDisplay}>2</Button>
        <Button className={classes.button} onClick={addToDisplay}>3</Button>
        <Button className={classes.button_operator} onClick={addToDisplay}>*</Button>

        <Button className={classes.button} onClick={addToDisplay}>0</Button> 
        <Button className={classes.button} onClick={addToDisplay}>.</Button>
        <Button className={classes.button} onClick={addToDisplay}>00</Button>
        <Button className={classes.button_operator} onClick={addToDisplay}>/</Button>

        <Button className={classes.button_reset} onClick={reset}>AC</Button>
        <Button className={classes.button_equal} onClick={equal}>=</Button>
        </Card>
      </Card>
    </Wrapper>
  );
}

export default App;
