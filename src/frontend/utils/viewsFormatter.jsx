
const viewsFormatter = (views)=>{
    if(views>999 && views <1000000){
        return ( (views/1000).toFixed(2) + "k");
    }
    if(views>1000000 && views<10000000 ){
        return ((views/100000).toFixed(2) + "M");
    }
    if(views<999){
        return views
    }
}
export {viewsFormatter}