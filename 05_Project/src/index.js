// require('dotenv').config({path:'./env'}) --> Isse bhi chal Jaayega agar ye use krenge to package.json mein kuch change krne ki zarurat nhi hai import use krne ke liye package.json mein change krna hoga nodemon mein jahan change kiya hai varna require se bhi kaam chal jaayega

import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: '../env'
})

connectDB()






















/*


Ye neeche wala bhi ek approach hai

// import mongoose, { connect } from "mongoose"
// import { DB_NAME } from "./constants";
// import express from "express"

const app = express();


// Database se baat krte time async await lagao aur try-catch lagao


( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log("App is listening on: ", process.env.PORT);
        })


    } catch (error) {
        console.log("Error: ",error);
        throw error
        
    }
} )()


*/