const OverallStat=require('../model/overallStat');
async function getSales(req,res){
    try {
        const overallStats = await OverallStat.find();
    
        return res.status(200).json(overallStats[0]);
      } catch (error) {
        return res.status(404).json({ message: error.message });
      }
}

module.exports= getSales;