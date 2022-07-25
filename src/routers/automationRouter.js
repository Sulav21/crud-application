import express from "express";
import { deleteData, getData, insertData,getDataById, updateData } from "../models/automation.Model.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    const {_id} = req.params
    const result = _id ? await getDataById({_id}) : await getData()
    // console.log(result)
    if(result){
      res.json({
        status:"success",
        message:"List of all the entered automation info's",
        result
      })
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await insertData(req.body);
    console.log(result);
   if(result){
    res.json({
      status:'success',
      message:"New data successfully entered !"
    })
   }else{
    res.json({
      status:'error',
      message:"There was an error during the data entry process, please try again later !"
    })
   }
    
  } catch (error) {
    if(error.message.includes("E11000 duplicate key error collection")){
        error.message = 'Serial Number already exists'
    }
    next(error);
  }
});

router.put("/update", async (req, res, next) => {
  try {
    const {_id,...rest} = req.body
    const result = await updateData(_id,rest);
    console.log(result);
   if(result){
    res.json({
      status:'success',
      message:"Update successful !"
    })
   }else{
    res.json({
      status:'error',
      message:"There was an error during the update, please try again later !"
    })
   }
    
  } catch (error) {
    next(error);
  }
});

router.delete('/delete',async(req,res,next)=>{
  const {_id} = req.body
const result = await deleteData(_id)
result?._id 
?res.json({
  status:'success',
  message:"Data deleted successfully !"
})
:res.json({
  status:'success',
  message:"Unable to delete data, try again later !"
})
})

export default router
