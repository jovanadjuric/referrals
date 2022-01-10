import { useState, useContext, useEffect } from "react";
import Entries from "./Sections/Entries/Entries";
import Button from "./Components/Button/Button";
import { EntriesContext } from "./Context/entries";
import "bootstrap/dist/css/bootstrap.min.css";
import PlainButton from "./Components/Button/PlainButton";

function App() {
  const defaultFields = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contactLanguage: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  };

  const [isError, setIsError] = useState(true);

  const { addEntry, entries } = useContext(EntriesContext);

  const addNewEntry = () => {
    if (entries.length < 5) {
      addEntry(defaultFields);
    }
  };

  const onSaveRefferals = () => {
    console.log(entries);
  };

  useEffect(() => {
    addNewEntry(defaultFields);
  }, []);

  return (
    <>
      <header className="d-flex flex-column align-items-center">
        <h3>Agent Referral Form</h3>
        <h3>Agents Only</h3>
      </header>
      <div className="container w-80">
        <div className="text-center pt-4 pb-4">
          <h4>Agent referral list</h4>
          <h5>You can add up to five refferals at a time</h5>
        </div>

        <Entries setIsError={setIsError} />

        <PlainButton
          onClick={addNewEntry}
          text={"+Add another referral"}
        ></PlainButton>
        <Button
          onClick={onSaveRefferals}
          text="Save referrals"
          isDisabled={isError}
        />
      </div>
    </>
  );
}

export default App;
