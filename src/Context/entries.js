import { createContext, useState } from "react";

export const EntriesContext = createContext({
  entries: [],
  addEntry: () => {},
  removeEntry: () => {},
});

export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((entries) => [...entries, { ...entry }]);
  };

  const removeEntry = (index) => {
    setEntries((entries) => entries.filter((_, i) => i !== index));
  };

  const changeEntry = (index, entry) => {
    let cloneEntry = {...entry};
    setEntries(entries[index] = cloneEntry);
  }

  return (
    <EntriesContext.Provider value={{ entries, addEntry, removeEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
