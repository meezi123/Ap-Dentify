import UserProfile from "@/react-components/UserProfile";
import { useUser } from '../../context/UserContext';
import { useState } from "react";
import { useEffect } from "react";

export default function UserProfilePage () {
    const { user } = useUser();
    const [userDetails, setUser] = useState([])
    useEffect (()=>{
        fetch(`/api/user?name=${encodeURIComponent(user)}`)
        .then((res) => res.json())
        .then((data) => setUser(data.messageArr));
    },[])
    

  return (
    <UserProfile User={userDetails}/>
  );
};
