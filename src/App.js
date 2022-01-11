import { useState, useContext, useEffect } from "react";
import Entries from "./Sections/Entries/Entries";
import Button from "./Components/Button/Button";
import PlainButton from "./Components/Button/PlainButton";
import { EntriesContext } from "./Context/entries";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import SuccessMessage from "./Components/SuccessMessage";

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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [entriesCount, setEntriesCount] = useState(0);

  const { addEntry, entries, resetEntries } = useContext(EntriesContext);

  const addNewEntry = () => {
    if (entries.length < 5) {
      addEntry(defaultFields);
    }
  };

  const onSendRefferals = () => {
    console.log("Form successfully submitted", entries);
    setIsFormSubmitted(true);
    setEntriesCount(entries.length);
    resetEntries();
    addNewEntry();
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
        {isFormSubmitted && <SuccessMessage count={entriesCount} />}

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
          onClick={onSendRefferals}
          text="Send referrals"
          isDisabled={isError}
        />
      </div>
    </>
  );
}

export default App;
