'use client';
import { FilterByTypeEnum } from "@/types/filter-types";
import { PriorityTypeEnum } from "@/types/priority-types";
import { createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterByTypeEnum.TODOSOSPRODUTOS,
    priority: PriorityTypeEnum.NOVIDADES,
    setPriority: (value: PriorityTypeEnum) => { },
    setSearch: (value: string) => { },
    setPage: (value: number) => { },
    setType: (value: FilterByTypeEnum) => { }
});

interface ProviderProps {
    children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterByTypeEnum.TODOSOSPRODUTOS);
    const [priority, setPriority] = useState(PriorityTypeEnum.NOVIDADES);
    return (
        <FilterContext.Provider value={{ search, page, type, priority, setSearch, setType, setPage, setPriority }}>
            {children}
        </FilterContext.Provider>
    );
};