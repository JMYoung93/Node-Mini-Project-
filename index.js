var inquirer = require("inquirer");
var fs = require("fs");

var userInput = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "location",
            message: "Where are you from?"
        },
        {
            type: "input",
            name: "bio",
            message: "Tell me about yourself."
        },
        {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn URL?"
        },
        {
            type: "input",
            name: "github",
            message: "what is your GitHub URL?",
        }
    ])
    )
});

userInput.then(function(data){
    const html = `
    <!DOCTYPE html>
    <html class="no-js" lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My New Profile!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>

    <body>
    <header>
        <h1> Hey there! Welcome to my profile page that I built on my own! My name is ${data.name}</h1>
    </header>

    <img src="">

    <main>
    <div class="profile" id="location">
    <p>I am from ${data.location}</p></div>

    <div class="profile" id="bio">
    <p>Something interesting about me is ${data.bio}</p></div>

    <div class="profile" id="linkedin">
    <p>If you want to contact me on LinkedIn visit me at: ${data.linkedin} </p></div>

    <div class="profile" id="github">
    <p>To view some of my work, visit my repositories on GitHub:${data.github}</p></div>
    </main>

    <footer></footer>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script.js"></script>
    </body>

    </html>  
`;
    fs.writeFile('index.html', html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
})