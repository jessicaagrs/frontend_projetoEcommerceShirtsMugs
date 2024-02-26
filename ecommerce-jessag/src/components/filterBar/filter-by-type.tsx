'use client'
import useFilter from "@/hooks/useFilter";
import { FilterByTypeEnum } from "@/types/filter-types";

interface FilterByType {
    selected: boolean;
};

export default function FilterByType() {
    const { type, setType } = useFilter();
    const handleChangeType = (type: FilterByTypeEnum) => {
        setType(type);
    };

    return (
        <ul className="flex items-center justify-center gap-10">
            <li
                className={`font-normal cursor-pointer text-base max-[800px]:text-sm text-center uppercase ${type === FilterByTypeEnum.TODOSOSPRODUTOS ? 'text-custom-optionFilterByType border-b-custom-borderFilterByType border-b-4' : 'text-custom-textDark'}`}
                onClick={() => handleChangeType(FilterByTypeEnum.TODOSOSPRODUTOS)}>
                Todos os produtos
            </li>
            <li
                className={`font-normal cursor-pointer text-base text-center uppercase ${type === FilterByTypeEnum.CAMISETAS ? 'text-custom-optionFilterByType border-b-custom-borderFilterByType border-b-4' : 'text-custom-textDark'}`}
                onClick={() => handleChangeType(FilterByTypeEnum.CAMISETAS)}>Camisetas
            </li>
            <li
                className={`font-normal cursor-pointer text-base text-center uppercase ${type === FilterByTypeEnum.CANECAS ? 'text-custom-optionFilterByType border-b-custom-borderFilterByType border-b-4' : 'text-custom-textDark'}`}
                onClick={() => handleChangeType(FilterByTypeEnum.CANECAS)}>Canecas
            </li>
        </ul>
    );
};