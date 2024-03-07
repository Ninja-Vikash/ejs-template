const fs = require("fs");

/**
 * ====================== Code for creating required directories ========================
 * 
 * For creating all the required directories I used "mkdir"
 * fs.mkdir(path, callbackfn()) 
 */

fs.mkdir('views', ()=>console.log("DIRECTORY: view has been created!"))
fs.mkdir('public', ()=>console.log("DIRECTORY: public has been created!"))
fs.mkdir('public/css', ()=>console.log("DIRECTORY: css has been created!"))

/**
 * ================== Code for creating index.js file ========================
 * 
 * For writing file I used "fs.writeFile"
 * fs.writeFile(path, data, callbackfn())
 * 
 * In the same way I have created all the files for ejs template
 */

const IndexJS1 = `const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  `

fs.writeFile("index.js", IndexJS1 , ()=>console.log("FILE: index.js has been deployed!"))

const IndexJS2 = 'console.log(`Your app is running at localhost:${port}`)'
const IndexJS3 = `
});
`

setTimeout(() => {
    fs.appendFile('index.js', IndexJS2, ()=>console.log("FILE: index.js is updated!"))
    fs.appendFile('index.js', IndexJS3, ()=>console.log("FILE: index.js is updated!"))
}, 0);

/**
 * ==================== Code for creating index.ejs file ===================
 */

const IndexEJS1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is a EJS-Template, Which is deployed using nodejs and fs-module.">
    <link rel="shortcut icon" href="ejs.svg" type="image/x-icon">
    <title>Express + EJS Template</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/index.css" type="text/css">
</head>

<body>
    <main>
        <h2>
            <span>Developer <img src="code.svg" height="10"></span> 
            <div>Ninja Vikash</div>
        </h2>

        <section class="main">
            <picture>
                <img src="ejs.svg" height="150">
            </picture>
            <span id="text"></span>
        </section>

        <div class="link">
            <%- include('link', {'SRC':'github.svg', 'URL': 'https://github.com/Ninja-Vikash'}) %>
            <%- include('link', {'SRC':'linkedin.svg', 'URL': 'https://www.linkedin.com/in/vikashkumar003/'}) %>
        </div>
    </main>

    <!-- Code for typedjs -->

    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

    <script>
        const nodejs = '<i class="fa-brands fa-node"></i>';
        const love = '<i class="fa-solid fa-heart" style="color: #ff1a1a;"></i>'
        const craft = '<i class="fa-solid fa-wand-magic-sparkles"></i>'

        var typed = new Typed('#text', {
            `

fs.writeFile("views/index.ejs", IndexEJS1 , ()=>console.log("FILE: index.ejs has been deployed!"))

const IndexEJS2 = 'strings: [`This is EJS Template Builder ${craft}`, `Developed by ${love} and nodejs ${nodejs}`],'
const IndexEJS3 = `
            typeSpeed: 40,
        });
    </script>
</body>
</html>`

setTimeout(() => {
    fs.appendFile('views/index.ejs', IndexEJS2, ()=>console.log('FILE: index.ejs is updated!'))
}, 500);

setTimeout(() => {
    fs.appendFile('views/index.ejs', IndexEJS3, ()=>console.log("FILE: index.ejs is updated!"))
}, 1000);


/**
 * ================= Code for creating link.ejs file ==================
 */

const LinkEJS =  `<head>
<link rel="stylesheet" href="css/link.css" type="text/css">
</head>

<div class="links">
<a href="<%= URL %>" target="_blank">
    <img src="<%= SRC %>" height="10">
</a>
</div>`

fs.writeFile("views/link.ejs", LinkEJS, ()=>console.log("FILE: link.ejs has been deployed!"))

/**
 * ================ Code for creating index.css ================
 */

const IndexCSS = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html,
body {
  height: 100vh;
}

main {
  height: max(100vh, 100%);
  width: 100%;
  background: #010111;
  display: flex;
  align-items: center;
  justify-content: center;
}

main h2 {
  position: absolute;
  left: 50px;
  top: 30px;
  color: white;
  font-size: 22px;
  font-weight: 600;
}

main h2 div:hover {
  color: yellow;
  cursor: pointer;
}

main h2 span {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 300;
  font-size: 16px;
}

main h2 span img {
  height: 22px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main picture {
  position: fixed;
  transform: translateY(-90px);
}

#text {
  font-size: 24px;
  color: white;
}`

fs.writeFile("public/css/index.css", IndexCSS, ()=>console.log("FILE: index.css has been created!"))

/**
 * ====================== Code for creating link.css =======================
 */

const LinkCSS =  `.link {
    position: absolute;
    bottom: 36px;
    left: 50px;
    color: white;
    display: flex;
    gap: 7px;
  }
  
  .links {
    height: 40px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .link img {
    padding: 0;
    height: 32px;
    transition: border linear 0.4s;
    border-radius: 20px;
  }
  
  .link img:hover {
    outline: 2px solid white;
    outline-offset: 1px;
  }
  `

fs.writeFile("public/css/link.css", LinkCSS, ()=>console.log("FILE: link.css has been deployed!"))

/**
 * ====================== Code for creating svg files ==========================
 */

const codeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>`
const ejsSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<polygon fill="#c0ca33" points="19.981,15.84 19.981,10.575 -0.014,21.019 -0.014,26.92 20.066,37.363 20.066,32.099 5.208,23.948"></polygon><polygon fill="#c0ca33" points="23.547,36.281 29.575,36.281 47.066,11.807 41.08,11.807"></polygon><path fill="#c0ca33" d="M28.429,12.274c-2.79,0-5.052,2.262-5.052,5.052s2.262,5.052,5.052,5.052s5.052-2.262,5.052-5.052	C33.481,14.535,31.219,12.274,28.429,12.274z M28.472,18.981c-0.821,0-1.486-0.77-1.486-1.719s0.665-1.719,1.486-1.719	s1.486,0.77,1.486,1.719S29.292,18.981,28.472,18.981z"></path><path fill="#c0ca33" d="M41.429,27.274c-2.79,0-5.052,2.262-5.052,5.052s2.262,5.052,5.052,5.052s5.052-2.262,5.052-5.052	C46.481,29.535,44.219,27.274,41.429,27.274z M41.472,33.981c-0.821,0-1.486-0.77-1.486-1.719s0.665-1.719,1.486-1.719	s1.486,0.77,1.486,1.719C42.958,33.211,42.292,33.981,41.472,33.981z"></path>
</svg>`
const githubSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>`
const linkedinSVG = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM18,35h-4v-15h4zM16,17c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,35h-4v-5v-2.5c0,-1.925 -1.575,-3.5 -3.5,-3.5c-1.925,0 -3.5,1.575 -3.5,3.5v7.5h-4v-15h4v1.816c1.168,-1.122 2.752,-1.816 4.5,-1.816c3.59,0 6.5,2.91 6.5,6.5z"></path></g></g>
</svg>`

setTimeout(() => {
    fs.writeFile('public/code.svg', codeSVG, ()=>console.log("FILE: code.svg has been created!"))
    fs.writeFile('public/ejs.svg', ejsSVG , ()=>console.log("FEIL: ejs.svg has been created!"))
    fs.writeFile('public/github.svg', githubSVG, ()=>console.log("FILE: github.svg has been created!"))
    fs.writeFile('public/linkedin.svg', linkedinSVG, ()=>console.log("FILE: linkedin.svg has been created!"))
}, 2000);

/**
 * ===================== Everything done ===================
 */

setTimeout(() => {
    console.log("\nCOMPLETE: EJS-Template has been deployed successfully!\n")
}, 2100);

/**
 * ===================== Thank You! ====================
 */