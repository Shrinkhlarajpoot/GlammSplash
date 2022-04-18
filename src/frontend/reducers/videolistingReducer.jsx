
const videolistingReducerFun = (state,{payload,type})=>{
   switch(type){
       case"LOAD_INITIAL_DATA":
       return {...state,data:payload.data}
   }
}

export {videolistingReducerFun}