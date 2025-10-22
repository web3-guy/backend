// Require the cloudinary library
import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //File has been uploaded successfully
        // console.log("File is uploaded on cloudinary ", response.url)
        fs.unlinkSync(localFilePath) //remove the file from the server after successfull upload
        return response;
    } catch (error) {
        // remove the locally saved temporary file as the cloudinary file upload was failed.
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}