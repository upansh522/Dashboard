const  express = require('express');
const getSales=require('../controller/sales');

const Router = express.Router();
Router.get("/sales", getSales);

module.exports= Router
