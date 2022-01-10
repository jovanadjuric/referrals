import { useContext } from "react";
import { EntriesContext } from "../../Context/entries";
import Entry from "../Entry/Entry";

const Entries = () => {
  const { entries, removeEntry, changeEntry } = useContext(EntriesContext);

  return (
    <>
      <form>
        {entries.map((entry, index) => (
          <Entry key={index} 
            entry={entry} 
            index={index} 
            onChangeHandler={changeEntry}
            onDeleteHandler={() => removeEntry(index)} 
          />
        ))}
      </form>
    </>
  );
};

export default Entries;
