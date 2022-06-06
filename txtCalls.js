const scripScrap = require("./controllers/api/index")
const readFromFile=require('./utils/fsMods.js')



const txtCall = async (inTitle, inquirerResponses,breakpoint) => {
    const { title } = await inquirerResponses;
    console.log(breakpoint)
    const fuck = readFromFile(inTitle);
    const yy = fuck.split(",");
  
    switch (title) {
      case "N/A":
        console.log("not yet".brightRed);
        for (let i = 0; i < yy.length + 40; i++) {
          //\\\\\\\\\\\\\ FOR WHAT EVER REASON .LENGTH STOPPED 40 INDICES BEFORE THE END OF THE ARRAY SO + 40, PROBABLY NEEDS TO BE CHANGED WITH DIFFERENT INPUTS, BOOF IK
          const x = yy.slice(0, 20).toString();
          scripScrap(x);
          yy.splice(0, breakpoint);
          x.trim();
        }
        break;
  
      case !"N/A":
        writeToFile(inTitle, x);
  
        break;
      default:
        writeToFile(inTitle, x);
        console.log("default".red); //CANT FIGURE OUT THE SCOPING TO USE VALUE X FROM FIRST CASE
    }
  };

module.exports=txtCall