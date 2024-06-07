import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let res = await inquirer.prompt([{
        name: "user",
        type: "number",
        message: "Enter amount of second",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter valid number";
            }
            else if (input > 60) {
                return "seconds must be in 60";
            }
            else {
                return true;
            }
        }
    }]);
let timer = res.user;
function setTimer(val) {
    let inTime = new Date().setSeconds(new Date().getSeconds() + val);
    let setIntervalTime = new Date(inTime);
    setInterval(() => {
        let currentTime = new Date();
        let timeDiff = differenceInSeconds(setIntervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("your time is expired");
            process.exit();
        }
        const min = Math.floor(timeDiff % (3600 * 24) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
setTimer(timer);
