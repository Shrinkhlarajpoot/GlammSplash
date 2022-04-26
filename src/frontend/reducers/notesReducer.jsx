const notesReduceFunc = (state, { payload, type }) => {
    switch (type) {
      case "GET_NOTES":
        return { ...state,
           notes: payload.notes,
           loading:payload.loading,
          };
      case "SET_NOTES":
        return { ...state,
            notes: payload.notes ,
            loading:payload.loading,
           };
      case "SET_LOADING":
        return {
          ...state,loading:true,
        }
      case "SET_VIDEO_ID":
          return {...state,
            videoId:payload.videoId
        }
     
        default:
            return state
    }
  };
  export {notesReduceFunc}