import Link from "../models/LinkModels.js";
import { getCache, setCache } from "../utils/redis.js";

const saveLink = async (req, res) => {
  try {
    const linkData = await Link(req.body);
    await linkData.save();
    await setCache(linkData.generatedLinkId, linkData, 3600);
    res.status(200).json(linkData);
  } catch (error) {
    res.status(500).json(error);
  }
}

const checkLink = async (req, res) =>{
  try {
    const id = req.params.id;

    const linkData = await getCache(id);
    
    if(!linkData){
      console.log('cash miss');
      linkData = await Link.find({ 'generatedLinkId':id });
      await setCache(id, linkData, 3600);
    }
    if(linkData == ''){
      res.status(404).json({'message':'Id not found'});
      return;
    }
    res.status(200).json(linkData);
  } catch (error) {
    console.log("Error occured");
    res.status(500).json(error);
  }
}

export {
    saveLink,
    checkLink,
}
