import { useState, useContext } from "react";
import { EntriesContext } from "../../Context/entries";
import Entry from "../Entry/Entry";

const Entries = () => {
  const { entries, removeEntry, changeEntry } = useContext(EntriesContext);
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleOnDelete = (index) => {
    removeEntry(index);
  };

  const handleCollapse = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <>
      <form className="w-100">
        {entries.map((entry, index) => (
          <div
            className={index === activeAccordion ? "" : "collapsed"}
            key={index}
          >
            <Entry
              index={index}
              entry={entry}
              onChangeHandler={changeEntry}
              onDeleteHandler={handleOnDelete}
              onCollapseHandler={handleCollapse}
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default Entries;
