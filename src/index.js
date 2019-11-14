const express = require('express')
const app     =  express()
const path    = require('path')


app.set('port', process.env.PORT || 4000)
app.set('view engine', 'html')

// middleware

app.use(express.urlencoded({extended:false}))
app.use(express.json())


// route
app.use(require('./routes/index.js'))


// static
app.use(express.static(path.join(__dirname,'public')))



app.listen(app.get('port'), ()=> {
    console.log('server on port ', app.get('port'))
})