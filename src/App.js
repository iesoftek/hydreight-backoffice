import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactTreeDropdown, {
  OPTION_STYLE
} from "react-multi-style-dropdown-tree";
import "react-multi-style-dropdown-tree/lib/index.css";
import { OPTIONS } from "./DummyData";


function App() {

  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <div className="App">
   <ReactTreeDropdown
        value={selectedValues}
        dropdownOptions={OPTIONS}
        initializeValue={[{ id: "0.1", value: "0.1" }]}
        handleValueChange={(selectedData) => {
          setSelectedValues(selectedData);
        }}
        optionStyle={OPTION_STYLE.HORIZONTAL}
        placeholder="Select Options"
      />
    </div>
  );
}

export default App;
