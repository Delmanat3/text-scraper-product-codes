const axios=require('axios')
var colors = require('colors');




const scripScrap=async(query)=>{
    try{
        console.log(query.bgBrightBlue.brightRed)
    // const resData=await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`);
    //  console.log(resData)
    // return resData
    }catch(err){
        console.error(err)
    }
}

module.exports=scripScrap