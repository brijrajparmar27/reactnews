import { useContext } from "react";
import { PageContext } from "../Context/PageContext";

const usePage = ()=>{
    const {page,setPage} = useContext(PageContext);
    return {page,setPage};
}
export default usePage;