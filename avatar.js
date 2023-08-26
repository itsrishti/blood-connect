import axios from "axios";
import React, { useState } from "react";
import { toast} from "react-toastify";
import { Button } from "reactstrap" ;
const UploadAvatar = ({ userId ,token, setisUpdated}) => {
    const[modal,setmodal] = useState(false);
       const[file,setfile] =useState(null) ;

       const toggle =() => {
        setmodal(!modal);
       };
       const handleFileChange = ({target: { files  }}) =>{
        if (files?.length) {
            const {type} = files[0];
            if (type === "image.png"|| type === "image/jpeg") {
                setfile(files[0]) ;
                
            } else {
                TransformStream.error("Accept only jpeg and png image types are allowed",{
                    hideProgressBar: true,
                });
            }
                
        }
       };
       const updateUseAvatarId = async (avatarId, avatarUrl) => {
        try{
            await axios.put(
                `http://localhost: 1337/api/users/${userId}`,
                {avatarId, avatarUrl} ,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authoroization: `bearee${token}`,
                    },
                }
            );
            setisUserUpdated(true);
        }catch(error) {
            console.log({error});
        }
        };
        
       const handleSubmit = async () => {
        if(!file){
            TransformStream.error("file is required}*" ,{
                hideProgressBar: true,
            });
            return;
        
    }try{
        const files= newformData();
        files.append("files",file);
        files.append("name", `${username} avatar`);
        const{
            data: [{ id, url }],
        } =await axios.post(`http://localhost: 1337/api/upload`,files, {
headers: {
    "Content-Type": "multipart/form-data" ,
    Authoroization: `bearer ${token}`,
},
});
updateUserAvatarId(id,url);
setfile(null);
setmodal(false);
    
    
} catch (error) {
        console.log({ error });
    }
    };




       return <div>
        <Button size="sm" onClick={toggle}>
            {`${avatarUrl ? "change" : "upload"} picture`}
        </Button>
        <modal isOpen={modal}toggle={toggle}>{`${
            </>
       </div>;
};

export default UploadAvatar;