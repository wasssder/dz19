const fs = require('fs')

fs.readFile('./index.html', 'utf-8', (error, data) => {
    fs.writeFileSync('./index2.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        
</body>
</html>`, (error) => {})
fs.mkdirSync('./STYLE', () => {})
fs.writeFileSync('./STYLE/style2.css', `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}`, (error) => {})
})

setTimeout(() => {
    if(fs.existsSync('./STYLE/style2.css')){
        fs.unlink('./STYLE/style2.css', () => {})
    }
}, 4000)

setTimeout(() => {
    if(fs.existsSync('./STYLE')){
        fs.rmdir('./STYLE', () => {})
    }
}, 5000)

setTimeout(() => {
    if(fs.existsSync('./index2.html')){
        fs.unlink('./index2.html', () => {})
    }
}, 6000)