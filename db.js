//require('custom-env').env('localhost');
/*
const {Pool} = require('pg')
const pool = new Pool({
    user: 'philipt',
    host: 'localhost',
    port: 5432,
    password: '1234',
    database: 'db0'
})

pool.query('SELECT NOW();', (err, res)=>{
    console.log(err,res)
    pool.end()
})
*/

const {Client} = require('pg')

const client = new Client({
    user: 'philipt',
    host: 'localhost',
    port: 5432,
    password: '1234',
    database: 'db0'
}) 

client.connect().then((x)=>{console.log(x)}).catch((x)=>{console.log(x)})

client.query('SELECT NOW();',(err,res)=>{
    console.log(err,res)
    client.end()
})