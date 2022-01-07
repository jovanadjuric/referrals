import { useContext } from "react";
import { EntriesContext } from "../../Context/entries";
import Entry from "../Entry/Entry";

const Entries = () => {
  const { entries } = useContext(EntriesContext);

  return (
    <>
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} />
      ))}
    </>
  );
};

export default Entries;
