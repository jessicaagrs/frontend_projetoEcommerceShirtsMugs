import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import useFilter from './useFilter';
import { mountQuery } from '@/utils/api-filters';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query
        });
};

export function useProducts() {
    const { type, priority } = useFilter();
    const query = mountQuery(type, priority);
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    });

    return {
        data: data?.data?.data?.allProducts
    };
}

