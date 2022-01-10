import { useContext } from "react";
import { EntriesContext } from "../../Context/entries";
import Entry from "../Entry/Entry";

const Entries = ({ setIsError }) => {
  const { entries, removeEntry, changeEntry } = useContext(EntriesContext);

  const handleOnDelete = (index) => {
    removeEntry(index);
  };

  return (
    <>
      <div className="w-100">
        {entries.map((entry, index) => (
          <Entry
            key={index}
            index={index}
            entry={entry}
            onChangeHandler={changeEntry}
            onDeleteHandler={handleOnDelete}
            setIsError={setIsError}
          />
        ))}
      </div>
    </>
  );
};

export default Entries;
