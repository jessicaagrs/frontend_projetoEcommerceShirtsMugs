import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import useFilter from './useFilter';
import { mountQuery } from '@/utils/api-filters';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query
        });
};

export function useProducts() {
    const { type, priority, search, page, setPage } = useFilter();
    const searchDeferred = useDeferredValue(search);
    const query = mountQuery(type, priority, page);
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority, page],
        staleTime: 1000 * 60 * 1,
    });

    const dataAPI = data?.data?.data?.allProducts;
    const dataAPIFiltered = dataAPI?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()));

    return {
        data: dataAPIFiltered
    };
}
