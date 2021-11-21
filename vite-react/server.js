const express =require('express');
const fs = require('fs');

const app = express();

const { createServer: createViteServer } = require('vite')

createViteServer({
    server: {
        middlewareMode: 'html'
    }
}).then(vite => {
    app.use(vite.middlewares)

    app.get('*',(req,res) => {
        // ssr
        const template = fs.readFileSync('index.html', 'utf-8')
    })
    app.listen(4000)
    console.log('4000')
})

