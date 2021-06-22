import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [res, setRes] = useState('');
    const [error, setError] = useState('');

    const fetchRepo = async (url) => {
        try {
            let res = await fetch(`${url}`);
            let data = await res.json()
            setRes(data)
        } catch(e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchRepo(url)
    }, [url])
   
    if(res) {
        return res
    } else {
        return error
    }
} 
