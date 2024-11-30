import Login from "@/react-components/Login";
import SignUpForm from "@/react-components/SignUp";

export default function displayLogin()
{
    // conditional rendering of signup and login on the basis of session token
    return(
        <>
        <Login/>
        {/* <SignUpForm></SignUpForm> */}
        </>
    );
}