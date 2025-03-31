const Product=require('../model/product');
const ProductStat=require('../model/ProductStat');
const User=require('../model/user');
const Transaction=require('../model/transaction');

async function getProducts(req,res){
    try {
        const products=await Product.find();
        const productWithStat=await Promise.all(
            products.map(async(product)=>{
                const stat =await ProductStat.find({
                    productId:Product._id
                })
                return {
                    ...product.toObject(),
                    stat,
                }
            })
        );        
        res.status(200).json(productWithStat);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

async function getCustomers(req,res){
    try{
        const customers=await User.find({role: "user"}).select("-password");
        res.status(200).json(customers);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

async function getTransaction(req,res){
    try {
        const {page =1, pageSize=20, sort= null, search=""}=req.query;
        function generalSort(){
            const sortParsed=JSON.parse(sort);
            const sortFormatted={
                [sortParsed.field]: (sortParsed.sort="asc"?1:-1),
            };

            return sortFormatted;
        }

        const sortFormatted=sort?generalSort():{};

        const transaction = await Transaction.find({
            $or:[
                {cost: {$regex: new RegExp(search,"i")}},
                {userId: {$regex: new RegExp(search, "i")}}
            ],
        }).sort(sortFormatted)
        .skip(pageSize*page)
        .limit(pageSize);
        const searchQuery = search ? search : ".*";

        const total = await Transaction.collection.countDocuments({
            $or:[
                {cost: {$regex: new RegExp(searchQuery, "i")}},
                {userId: {$regex: new RegExp(searchQuery, "i")}}
            ],
          });

        res.status(200).json({
            transaction,
            total,
        });
    } catch (error) {
        res.status(404).json({message: error.message
        });
    }
}

module.exports={getProducts,getCustomers,getTransaction};