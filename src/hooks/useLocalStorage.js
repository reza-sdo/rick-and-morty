import { useEffect, useState } from "react";

function useLocalStorage(key, iniState) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || iniState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
