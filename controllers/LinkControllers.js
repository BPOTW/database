import Link from "../models/LinkModels.js";

const saveLink = async (req, res) => {
  try {
    const linkData = await Link(req.body);
    await linkData.save();
    res.status(200).json(linkData);
  } catch (error) {
    res.status(500).json(error);
  }
}

const checkLink = async (req, res) =>{
  try {
    const id = req.params.id;
    
    const linkData = await Link.find({ 'generatedLinkId':id });
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
