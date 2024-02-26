'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "../filterBar/filter-context";

type DefaultProviderProps = {
    children: React.ReactNode;
};

export default function DefaultProvider(props: DefaultProviderProps) {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                {props.children}
            </FilterContextProvider>
        </QueryClientProvider>
    );
};