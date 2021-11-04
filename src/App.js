import Button from "./Button";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [counter, setValue] = useState();
  return (
    <div>
      <Button text={"continue"}/>
      <h1 className={styles.title}>welcome</h1>
    </div>
  );
}

export default App;
