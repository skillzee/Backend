import multer from "multer"

//Isse file thodi der ke liye diskstroge pe rahegi fir baad mein jaake upload hogi cloudinary pe
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({
     storage,
    })