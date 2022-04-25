
const videolistingReducerFun = (state,{payload,type})=>{
   switch(type){
       case"LOAD_INITIAL_DATA":
       return {...state,data:payload.data,loading:payload.loading}
       case"SET_LOADING":
       return {...state,loading:payload.loading}
   }
}

export {videolistingReducerFun}