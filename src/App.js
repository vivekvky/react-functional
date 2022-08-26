import "./styles.css";
import MyFirstComponent from "./components/MyFirstComponent";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyFirstComponent />
    </div>
  );
}
