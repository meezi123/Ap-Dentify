import UserProfile from "@/react-components/UserProfile";
import { useUser } from '../../../context/UserContext';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function UserProfilePage () {
  //const { user } = useUser();
  const [userDetails, setUser] = useState(null);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    // Check if the user is not null before attempting to fetch data
    if (id) {
      console.log("in useEffect in [id].js, fetching data for user:", id);
      fetch(`/api/user?name=${encodeURIComponent(id)}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.messageArr || null);
          console.log("data of user: ", data.messageArr); 
        })
        .catch(() => setUser(null)); 
    }
  }, [id]);

  return (
    <div>
      {/* Conditionally render UserProfile if userDetails is not null */}
      {userDetails ? <UserProfile User={userDetails} /> : <p>Loading...</p>}
    </div>
  );
};
