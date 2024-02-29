'use client'
import { FilterContext } from "@/contexts/filterBar/filter-context";
import { useContext } from "react";

export default function useFilter() {
    return useContext(FilterContext);
}

