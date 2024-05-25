import mongoose, { mongo } from "mongoose";

const reviewSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
},{
    timestamps:true
});

const productSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required:true,
    },
    brand:{
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    countinStock:{
        type:Number,
        required:true,
        default:0,
    }
},{
    timestamps:true
});

const products = mongoose.model("Product", productSchema);

export default Product;