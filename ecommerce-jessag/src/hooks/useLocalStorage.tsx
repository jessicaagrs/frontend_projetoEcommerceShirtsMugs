import { useState } from "react";

export default function useLocalStorage<T>(item: string) {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(item) : '';
    const initialValue = storedValue ? JSON.parse(storedValue) : '';

    const [value, setValue] = useState<T | string>(initialValue);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    };

    return {
        value,
        updateLocalStorage
    };
}
