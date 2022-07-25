import mongoose from "mongoose";

const automationSchema = new mongoose.Schema({
    itemCode:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    serialNumber:{
        type:String,
        required:true,
        unique: true,
    },
    coolAutomationCode:{
        type:String,
        required:true
    },
    invoiceDate:{
        type:Date,
        // required:true
    },
    customerName:{
        type:String,
        required:true
    },
    state:{
        type:String,
    },

    invoice:{
       type:String
    },
    datePosted:{
        type:Date,
    },
    trackingNumber:{
        type:Number
    },
    comments:{
        type:String
    }

})

export default mongoose.model('automation',automationSchema)