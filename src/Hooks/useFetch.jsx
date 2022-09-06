import { useEffect, useState } from "react";

const useFetch = (page)=>{
    const [data,setData] = useState();
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cf4fd07510764ff396924b5df49a565f&pageSize=15&page="+page)
        .then(raw=> raw.json())
        .then(data=>{
            setData(data.articles);
        })
    },[page])
    return {data}
}
export default useFetch;