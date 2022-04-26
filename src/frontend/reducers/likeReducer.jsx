const likeReducerFun=(state,{payload,type})=>{
    switch(type){
        case "SET_LIKES":
            return {...state, Likeslist:payload. Likeslist}
        default:
            return {...state}
    }
}
export {likeReducerFun}