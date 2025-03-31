const  express = require('express');
const {getProducts, getCustomers, getTransaction}=require("../controller/client");

const Router = express.Router();

Router.get('/products',getProducts);
Router.get('/customers',getCustomers);
Router.get('/transaction',getTransaction);

module.exports = Router
