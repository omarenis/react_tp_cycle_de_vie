import './App.css';
import NewComponent from "./NewComponent";
import ComponentWithStateUpdated from "./ComponentWithStateUpdated";
import ComponentWithStateUpdateOnUnmountComponent from "./ComponentWithStateUpdateOnUnmountComponent";

function App() {
  return (

    <>
        <NewComponent /><br />
    <ComponentWithStateUpdated /><br />
      <ComponentWithStateUpdateOnUnmountComponent />
    </>
  );
}

export default App;
