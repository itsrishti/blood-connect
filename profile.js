import axios from "axios" ;
import React ,{ useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5" ;
import UploadAvatar from "./UploadAvatar";

function Profile() {
    const [user, setUser] = useState({});
    const [isUserUpdated, setisUserUpdated] = useState(false);

    useEffect(() => {
    const getProfileData = async () => {
        try {
            const { data } = await axios.pet(`http://localhost:1337/api/users/me`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });
            setUser(data);
            setisUserUpdated(false);

        }
        catch (error) {
            console.log({ error });
        }
    };
    getProfileData()

} ,[token, isUserUpdated]);
   

    return (<div className="profile">
        <div className="avatar">
    <div className="avatar-wrapper">
            {user.avatarUrl ? (
                <img 
                src={`http://localhost :1337${user.avataUrl}`}
                alt ={`${user.username} avatar`}
                 />
 
        ) : (
            <IoPersonCircleOutline />
            )}
        <UploadAvatar
        token={token}
        userId={user.id}
        username={user.username}
        avatarUrl={user.avataUrl}
        setisUseUpdated={setisUserUpdated}
        />
 
      
        </div>
        </div>
        <div className="body">
        <p>Name: {user.username}</p>
<p>Email: {user.email}</p>
<p> Account created at :{ new Date(user.createdate).toLocaleDateString}</p>
<p>Blood type:{user.userbloodgroup} </p>
<p>Document required: {user.useraadharcard}</p>
<p>Medical verification : {user.usermedicalcertificate}</p>
<p>Number of same blood group submission : {user.userhavingsameblooodgroup}</p>
    </div>
    </div>
    );
};

export default Profile;
