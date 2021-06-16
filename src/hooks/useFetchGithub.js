import { useState, useEffect } from "react";

export const useFetchGithub = (url) => {
    const [repo, setRepo] = useState('');
    const [error, setError] = useState('');
    const fetchRepo = async (link) => {
        try {
            let res = await fetch(`${link}`);
            let data = await res.json()
            setRepo(data)
        } catch(e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchRepo(url)
    }, [])
   
    if(repo) {
        return repo
    } else {
        return error
    }
} 
