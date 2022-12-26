import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from "./components/useFetch";

function App() {
   const {users, loading}:any = useFetch()
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    useEffect(()=>{
      if(loading) return
      setFollowers(users[page])
    },[loading,page])

    const handlePage =(index:number)=>{
        setPage(index)
    }

    const searchSpecificItem = (value:string)=>{
        console.log(value)
       const output = users[page].filter((item:any)=> item.login.toLowerCase().includes(value.toLowerCase()))
       setFollowers(output)
    }

    return (
    <>
        <h1>{loading? 'Loading...' : "Pagination"}</h1>
        <form >
            <input type="text" onChange={(e:any)=> searchSpecificItem(e.target.value)}/>
        </form>
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-around"
        }}>
            {followers.map((item:any)=>{
                const {id, avatar_url,login}:any = item;
                return <article key={id}>
                    <img src={avatar_url} alt={login} height="200px" width="200px"/>
                    <p>{login}</p>
                </article>
            })}
            {!loading &&
                <div style={{
                    alignSelf:"flex-end",
                    justifyContent:"center"
                }}>
                    {
                        users.map((item:any,index:number)=>{
                           return <button
                               onClick={()=> handlePage(index)}
                           >{index +1}</button>
                        })
                    }
                </div>
            }
        </div>

    </>
  )
}

export default App
