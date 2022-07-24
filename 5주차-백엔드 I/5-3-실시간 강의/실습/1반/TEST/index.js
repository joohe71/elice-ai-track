const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('responding...')
})

// ----------------------------------------
app.get('/data/:search', (req,res) => {
    res.send(req.params.search)
})
// ----------------------------------------------
// http://localhost:8080/search?name=kangjuhee
app.get('/search', (req,res)=> {
    const reqQry = req.query
    console.log(reqQry)
    res.send({
        input: reqQry.name,
    })
})

app.listen(8080, () => {
    console.log('8080 포트 실행중입니다.')
})