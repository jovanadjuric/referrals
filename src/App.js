import { useState, useContext, useEffect } from "react";
import Entries from "./Sections/Entries/Entries";
import Button from "./Components/Button/Button";
import { EntriesContext } from "./Context/entries";

function App() {
  const [entriesCount, setEntriesCount] = useState(0);
  const { addEntry, entries } = useContext(EntriesContext);

  const addNewEntry = () => {
    if (entriesCount < 5) {
      setEntriesCount((entriesCount) => entriesCount + 1);
      addEntry({});
    }
  };

  const onSaveRefferals = () => {
    console.log(entries);
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
      <Button onClick={onSaveRefferals} text="Save referrals" />
    </div>
  );
}

export default App;
