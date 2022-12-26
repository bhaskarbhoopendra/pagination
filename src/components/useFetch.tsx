import React, {useEffect, useState} from 'react';
import axios from "axios";
import pagination from "../util/pagination";

const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]) as any;
    const githubUsers = async():Promise<void>=>{
        const {data} = await axios.get(`https://api.github.com/users`);
        setUsers(pagination(data))
        setLoading(false)
    }
    useEffect(()=>{
        githubUsers()
    },[])

   return {users, loading};
};

export default useFetch;
