import { useState } from "react"; 
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import  "./App.css";

const App = () => {
  const [showComponentA, setShowComponentA] = useState(true);

  const handleSwitchComponent = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <>
      <div>
        {showComponentA ? 
          (<ComponentA handleClick={handleSwitchComponent}/>) : (<ComponentB handleClick={handleSwitchComponent} />)
        }
      </div>
    </>
  );
}

export default App;
