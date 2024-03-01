import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// cors is used for cross origin request sharing problem (Cors error jo ata tha vo nhi aayega isse)
app.use(cors({
    origin: process.env.CORS_ORIGIN, // requset kahan se aa rhi hai
    credentials: true

})) 

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))
app.use(cookieParser())







export { app }