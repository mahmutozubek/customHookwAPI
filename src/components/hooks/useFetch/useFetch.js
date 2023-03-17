import { useEffect ,useState} from "react";
import axios from 'axios'
export default    function useFetch(url){
    const  [error,setError] =useState(null)
    const [list, setList] = useState([]);
    const [loading,setLoading] =useState(true)


    async function FetchData() {
        try {
         const respone = await axios.get(url);
         setList(respone.data); 
         setLoading(false)
        } catch (error) {
         setError(error.message)
         setLoading(false)
        }
       }
    useEffect(() => {

        FetchData()  
        },[])
        return {error,loading,list}
    }