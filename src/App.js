import { useState, useContext, useEffect } from "react";
import Entries from "./Sections/Entries/Entries";
import SubmitButton from "./Components/SubmitButton/SubmitButton";
import { EntriesContext } from "./Context/entries";

function App() {
  const [entriesCount, setEntriesCount] = useState(1);
  const { addEntry } = useContext(EntriesContext);

  const addNewEntry = () => {
    if (entriesCount <= 5) {
      setEntriesCount((entriesCount) => entriesCount + 1);
      addEntry({});
    }
  };

  useEffect(() => {
    addNewEntry();
  }, []);

  return (
    <div className="container">
      <h3>Agent referral list</h3>
      <p>You can add up to five refferals at a time</p>
      <Entries />
      <button style={{ marginBottom: "10px" }} onClick={addNewEntry}>
        +Add another referral
      </button>
      <SubmitButton />
    </div>
  );
}

export default App;
