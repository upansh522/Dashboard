const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Mongoose= require('mongoose');
const helmet = require('helmet');   
const morgan = require('morgan');
const dotenv = require('dotenv');
const clientRoutes=require('./routes/clientRoutes');
const generalRoutes=require('./routes/generalRoutes');
const managementRoutes=require('./routes/managementRoutes');
const salesRoutes=require('./routes/salesRoute');


// CONFIG;
const app = express();
app.use(helmet());
dotenv.config();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan("common"));
app.use(cors());

// Routes 
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);

// Mongoose setup
const PORT = process.env.PORT || 3000;
Mongoose.connect(process.env.MONGO_URL)
.then(async ()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});

