import { useState } from "react";
import Card from "./Components/Card";
import "./Home.css";
import useFetch from "./Hooks/useFetch";
import usePage from "./Hooks/usePage";

const Home = ()=>{
    const {page,setPage} = usePage();
    const {data} = useFetch(page);
    const [enablePrev,setEnablePrev] = useState(false);
    // data && console.log(data);
    const handleNext = (nextPage)=>{
        if(page>=0 && nextPage)
        {
            setPage(prev=>prev+1);
        }
        else if(page>1 && !nextPage)
        {
            setPage(prev=>prev-1)
        }
    }
    return <div className="home">
        <div className="news_contain">
            {
                data && data.map((each,index)=>{
                    return <Card data={each} key={index}/>
                })
            }
        </div>
        <div className="pages">
            <div className="prev_page btn" onClick={()=>{handleNext(false)}}><h3>Previous Page</h3></div>
            <div className="current_page">#{page}</div>
            <div className="next_page btn" onClick={()=>{handleNext(true)}}><h3>Next Page</h3></div>
        </div>
    </div>
}
export default Home;