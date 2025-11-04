import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    originalLink:{
        type:String,
        required:true,
    },
    generatedLinkId:{
        type:String,
        required:true,
        unique:true,
    },
    generatedLink:{
        type:String,
        required:true,
    }
});

const Link = mongoose.model('links_data',linkSchema);

export default Link;