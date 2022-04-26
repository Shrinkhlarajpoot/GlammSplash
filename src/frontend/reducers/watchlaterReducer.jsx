const watchlaterReducerFun=(state,{payload,type})=>{
    switch(type){
        case "SET_WATCHLATER":
            return {...state,watchLater:payload.watchLater}
        default:
            return {...state}
    }
}
export {watchlaterReducerFun}