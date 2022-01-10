import { useContext } from "react";
import { EntriesContext } from "../../Context/entries";
import Entry from "../Entry/Entry";

const Entries = () => {
  const { entries, removeEntry, changeEntry } = useContext(EntriesContext);

  const handleOnDelete = (index) => {
    removeEntry(index);
  };

  return (
    <>
      <div>
        {entries.map((entry, index) => (
          <Entry
            key={index}
            index={index}
            entry={entry}
            onChangeHandler={changeEntry}
            onDeleteHandler={handleOnDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Entries;
