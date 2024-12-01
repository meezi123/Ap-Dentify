import Image from "next/image";
import upload from "@/public/cloud.png";
import dr from "@/public/image10.png";
import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRef } from "react";
import PopUp from "@/react-components/PopUp";

function index() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        console.log("No session found");
        setShowPopup(true);
      }
    };
    checkSession();
  }, [router]);

  const btnHandle = () => {
    setShowPopup(false);
    router.push("/Login");
  };

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const bloodRef = useRef();
  const imageRef = useRef(null);

  const handleClick = () => {
    imageRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("File selected:", file);
    }
  };

  const Request = (e) => {
    e.preventDefault();

    const fname = fnameRef.current.value;
    const lname = lnameRef.current.value;
    const email = emailRef.current.value;
    const date = dateRef.current.value;
    const blood = bloodRef.current.value;
    const image = imageRef.current.value;

    if (fname && lname && email && date && blood && image) {
      alert("Request Submitted Successfully");
    } else {
      alert("Fill all entries");
    }
  };

  return (
    <>
      {showPopup && (
        <PopUp
          text="Login to Upload X-Ray"
          buttonText="Login"
          onClose={btnHandle}
        />
      )}
      <div className="w-full px-16 py-10">
        <div className="flex flex-col py-10 space-y-5">
          <h1 className="text-[48px] font-semibold text-center">
            Request X-ray Analysis
          </h1>

          <div className="px-32 space-y-5">
            <div>
              <h1 className="text-[36px] font-semibold">Patient Info</h1>
            </div>

            <div className="w-full h-[900px] flex">
              <div className="w-[50%] h-full flex flex-col">
                <div
                  style={{ border: "1px solid rgba(37, 180, 248, 1)" }}
                  className="h-[790px] w-[600px] flex flex-col py-5 px-10 space-y-5 rounded-[10px]"
                >
                  {/* First and Last Name */}
                  <div className="flex items-start w-full h-[94px] space-x-2">
                    <div className="w-[50%] h-full flex flex-col justify-end space-y-2">
                      <label className="text-textBody text-[18px] font-medium">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="first name"
                        className="px-4 py-3 rounded-[10px] outline-none"
                        style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                        ref={fnameRef}
                      />
                    </div>
                    <div className="w-[50%] h-full justify-end flex flex-col space-y-2">
                      <label className="text-textBody text-[18px] font-medium">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="last name"
                        className="px-4 py-3 rounded-[10px] outline-none"
                        style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                        ref={lnameRef}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full flex flex-col space-y-2">
                    <label className="text-textBody text-[18px] font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                      ref={emailRef}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="w-full flex flex-col space-y-2">
                    <label className="text-textBody text-[18px] font-medium">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                      ref={phoneRef}
                    />
                  </div>

                  {/* Date */}
                  <div className="w-full flex flex-col space-y-2">
                    <label className="text-textBody text-[18px] font-medium">
                      Select Date
                    </label>
                    <input
                      type="Date"
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                      ref={dateRef}
                    />
                  </div>

                  {/* Blood Group */}
                  <div className="w-[50%] flex flex-col space-y-2">
                    <label className="text-textBody text-[18px] font-medium">
                      Blood group
                    </label>
                    <input
                      type="text"
                      placeholder="Blood group"
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                      ref={bloodRef}
                    />
                  </div>

                  {/* Upload X-Ray Section */}
                  <div className="w-full flex flex-col h-[300px] justify-between">
                    <div className="w-[50%] flex space-x-2 items-center">
                      <p className="text-[20px] font-medium">Upload X-Ray</p>
                      <div>
                        <Image
                          src={upload}
                          alt="cloud"
                          className="cursor-pointer"
                          onClick={handleClick}
                        />
                        <input
                          type="file"
                          ref={imageRef}
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    {/* Display the uploaded file name */}
                    {selectedFile && (
                      <div className="mt-2 text-[16px] text-gray-600">
                        <p>Uploaded file: {selectedFile.name}</p>
                      </div>
                    )}
                    {/* Request button */}
                    <div className="w-full flex justify-center items-center mt-4">
                      <Button text="Request" onClick={Request} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Image on Right */}
              <div className="w-[50%] justify-center  flex">
                <div>
                  <Image src={dr} alt="Doctor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
