require('custom-env').env('localhost');

const {Pool} = require('pg')
const pool = new Pool()


module.exports = pool