import { useState, useEffect } from 'react';


export const useDebounce = (value:string,delay = 300): string => {
    const [debouce,setDebouce] = useState(value)

    useEffect(() => { 
        const debounceHandler = setTimeout(() => setDebouce(value),delay)
        return () => clearTimeout(debounceHandler)
    },[value,delay])

    return debouce

}