import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [res, setRes] = useState('');
    const [error, setError] = useState('');

    const fetchRepo = async (link) => {
        try {
            let res = await fetch(`${link}`);
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
