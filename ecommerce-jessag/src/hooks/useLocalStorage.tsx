import { useState } from "react";

export default function useLocalStorage<T>(item: string) {
    const storedValue =  window?.localStorage?.getItem(item);
    const initialValue = storedValue ? JSON.parse(storedValue) : '';

    const [value, setValue] = useState<T | string>(initialValue);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        window?.localStorage?.setItem(item, JSON.stringify(newValue));
    };

    return {
        value,
        updateLocalStorage
    };
}
