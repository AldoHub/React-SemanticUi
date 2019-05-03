const fetchData=(state={
    fetchData:[],
    }, action)=>{
        if(action.type === "FETCH_DATA"){
            
            state= {...state, fetchData: action.payload}
        }
    
        return state;
    };
export default fetchData;