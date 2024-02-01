import { useState } from "react";

export default function useLocalStorage<T>(item: string) {
    const storedValue = localStorage.getItem(item);
    const initialValue = storedValue ? JSON.parse(storedValue) : null;

    const [value, setValue] = useState<T | null>(initialValue);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}
