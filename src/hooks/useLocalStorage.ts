import { useEffect, useState } from "react";

function getStorageValue<T>(key: string, defaultValue: T) {
  // getting stored value
  const saved = localStorage.getItem(key);
  if (saved === null) {
    return defaultValue;
  }
  const initial = JSON.parse(saved);
  return initial;
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
