import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    
   url:{
    type:String,
    required:true,
   }
  },
  { timestamps: true }
);

const Post = mongoose.model("URL", urlSchema);

export default Post;