import "../styles.css";
import { useState } from "react";
export default function MyFirstComponent() {
  const [value, setValue] = useState(2);

  const clickHandler = (arg) => {
    console.log(value);
    setValue((value) => value + arg);
  };

  return (
    <div className="my-first-comp">
      <div>My first component - {value}</div> 
      <button onClick={clickHandler.bind(null, 1)}>Click</button>
    </div>
  );
}
