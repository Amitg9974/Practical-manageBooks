import { useEffect } from "react";
import "./App.css";
import Main from "./Components/Main";

function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
