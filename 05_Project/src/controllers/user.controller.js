import { asyncHandler } from "../utils/asyncHandler.js";
//Neeche wala syntax hi harr jagah repeat hoga
const registerUser = asyncHandler( async(req,res) =>{
    res.status(200).json({
        message: "ok"
    })
} )



export {registerUser}