const inquirer = require("inquirer");
const txtCall = require("./txtCalls.js");

const questions = [
  {
    type: "list",
    name: "formating",
    message: "What format is the file you wish to mutilate?",
    choices: [
      "JSON",
      "Txt",
      "Csv",
      "Xml",
      "steven if you need something else u can do it",
    ],
  },
  {
    type: "input",
    name: "inTitle",
    message: "What is the name of the file to scrape",
  },
  {
    type: "input",
    name: "breakpoint",
    message: "what is the breakpoint you wish to target?",
  },
  {
    type: "input",
    name: "title",
    message:
      "What name would you like to give the output file? if using to make 3rd party calls, type N/A",
  },
  {
    type: "input",
    name: "uri",
    message:
      "please enter the endpoint you wish to query, if generating local file, please enter N/A",
  },
];
function init() {
  inquirer.prompt(questions).then(async (inquirerResponses) => {
    const callsMe = await inquirerResponses.title;
    const endy = await inquirerResponses.uri;
    const inTitle = await inquirerResponses.inTitle;
    const format = await inquirerResponses.formating;
    const breakpoint = await inquirerResponses.breakpoint;
    console.log(format);
    switch (format) {
      case "JSON":
        console.log("not yet");
        break;
      case "Txt":
        txtCall(inTitle, inquirerResponses, breakpoint);
        break;
      default:
        console.log("nope");
    }
  });
}
init();
