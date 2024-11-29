import Login from "@/react-components/Login";

export default function displayLogin()
{
    // conditional rendering of signup and login on the basis of session token
    return(
        <>
        <Login/>
        </>
    );
}