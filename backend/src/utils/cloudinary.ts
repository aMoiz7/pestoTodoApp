import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"


cloudinary.config({ 
    cloud_name: "dnxsxnsdz", 
    api_key: process.env.CLOUDAPIKEY, 
    api_secret:process.env.CLOUDAPISECRET  // Click 'View Credentials' below to copy your API secret
});

console.log(process.env.CLOUDAPIKEY)
console.log(process.env.CLOUDAPISECRET)

const uploadOnCloud = async (localFilePath:string)=>{
   

    try {
        if(!localFilePath){return null}
        //upload the filr on cloudinary
        console.log(localFilePath,"path")
    
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
       
          fs.unlinkSync(localFilePath)
        console.log("file uploaded success on cludinary" , response.url);
        return(response.url);
    
    
    
    
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation failed
        return null;
    }
    
    }


export {uploadOnCloud}


