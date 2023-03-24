import express from "express"

const app = express()
const PORT = 9090

app.use((req, res, next) => {
    console.log('Ein neuer', req.method,"req","zum", req.url,"endpoint");
    next()
})

app.use(express.static('./assets'))

app.listen(PORT , () => console.log("Running"))