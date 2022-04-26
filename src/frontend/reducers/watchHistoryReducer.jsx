const watchHistoryReducerFun=(state,{payload,type})=>{
    switch(type){
        case "SET_WATCHHISTORY":
            return {...state,watchHistory:payload.watchHistory}
        default:
            return {...state}
    }
}
export {watchHistoryReducerFun}