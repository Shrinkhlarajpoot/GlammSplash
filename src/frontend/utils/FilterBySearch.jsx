const FilterBySearch = (data, searchterm) => {
   if(searchterm.trim()!==""){
    return data.filter((video)=>{
        return (
            video.title.toUpperCase().includes(searchterm.trim().toUpperCase()) ||
            video.desp.toUpperCase().includes(searchterm.trim().toUpperCase())
        )
    })
   }
   return data;
  };
  export { FilterBySearch };


