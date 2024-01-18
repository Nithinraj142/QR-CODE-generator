import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "url",
        message: "Enter your url: "
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // var qr_png = qr.image(answers.url, { type: 'png' });
    // qr_png.pipe(fs.createWriteStream('qr.png'));
    console.log(answers);
    var url = answers.url;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qrs.png'));

    fs.writeFile("currentURL.txt", url, function(err){
        if(err){
            console.log("Your File cannot be saved, Sorry!");
        }
        else{
            console.log("Your QR-Code is generated in qrs.png and your current url is stored in currentURL.txt!");
        }
    })
  })
