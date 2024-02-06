'use client';
import { useState } from "react";
import FilterPriorityIcon from "./filter-by-priority-icon";
import useFilter from "@/hooks/useFilter";
import { PriorityTypeEnum } from "@/types/priority-types";

interface FilterByPriority {

};

type FilterByPriorityProps = {

};

export default function FilterByPriority() {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdatePriority = (priority: PriorityTypeEnum) => {
        setPriority(priority);
        setIsOpen(false);
    };


    return (
        <div className="flex items-center relative">
            <button
                className="font-normal text-custom-textDark text-sm flex items-center justify-center"
                onClick={handleOpen}>
                Organizar por
                <FilterPriorityIcon />
            </button>
            {isOpen && (
                <ul className="absolute py-3 px-4 bg-white shadow-xl w-56 top-full right-2.5">
                    <li
                        className="cursor-pointer text-custom-textDark"
                        onClick={() => handleUpdatePriority(PriorityTypeEnum.NOVIDADES)}>
                        Novidades
                    </li>
                    <li
                        className="cursor-pointer text-custom-textDark mt-1"
                        onClick={() => handleUpdatePriority(PriorityTypeEnum.MAIOR_PRECO_MENOR)}>
                        Preço maior - menor
                    </li>
                    <li
                        className="cursor-pointer text-custom-textDark mt-1"
                        onClick={() => handleUpdatePriority(PriorityTypeEnum.MENOR_PRECO_MAIOR)}>
                        Preço menor - maior
                    </li>
                    <li
                        className="cursor-pointer text-custom-textDark mt-1"
                        onClick={() => handleUpdatePriority(PriorityTypeEnum.MAIS_VENDIDOS)}>
                        Mais vendidos
                    </li>
                </ul>
            )}
        </div>
    );
};