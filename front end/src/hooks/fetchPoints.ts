import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function useFetchPoint<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setFetching] = useState(true);

    useEffect(() => {
        axios.get(url)
          .then(response => {
            setData(response.data)
          })
          .finally(() => {
            setFetching(false)
          })
    }, [url])

    return { data, isFetching }
}