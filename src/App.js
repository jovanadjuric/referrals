import { useState, useContext, useEffect } from "react";
import Entries from "./Sections/Entries/Entries";
import Button from "./Components/Button/Button";
import PlainButton from "./Components/Button/PlainButton";
import { EntriesContext } from "./Context/entries";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import SuccessMessage from "./Components/SuccessMessage";
import { checkIfEntriesAreValid } from "./utils/functions";

function App() {
  const defaultFields = {
    firstName: "",
    lastName: "",
    contactLanguage: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [entriesCount, setEntriesCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const { addEntry, entries, resetEntries } = useContext(EntriesContext);

  const addNewEntry = (type) => {
    if (entries.length < 5 || type === "reset") {
      addEntry(defaultFields);
    }
  };

  const onSendRefferals = () => {
    const isFormValid = checkIfEntriesAreValid();
    if (isFormValid) {
      setIsError(false);
      setIsFormSubmitted(true);
      setEntriesCount(entries.length);
      resetEntries();
      addNewEntry("reset");
      console.table(entries);
      setTimeout(() => {
        alert("Entries successfully submitted! \n\nCheck the console.");
      }, 100);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    addNewEntry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="d-flex flex-column align-items-center">
        <h3>Agent Referral Form</h3>
        <h3>Agents Only</h3>
      </header>

      <div className="container w-60">
        {isFormSubmitted && <SuccessMessage count={entriesCount} />}

        <div className="text-center pt-4 pb-4">
          <h4>Agent referral list</h4>
          <h5>You can add up to five refferals at a time</h5>
        </div>

        <Entries />

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
