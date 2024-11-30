import Navbar from "@/components/Navbar";
import Image from "next/image";
import upload from "@/public/cloud.png";
import dr from "@/public/image10.png";
import Button from "@/components/Button";
import { useState } from "react";
function index() {
  const [xRayForm, setXRayForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    bgroup: "",
  });
  const Request = () => {
    console.log(xRayForm);
  };
  return (
    <>
      <div className="w-full px-16 py-10">
        <div className="flex flex-col py-10 space-y-5">
          <h1 className="text-[48px] font-semibold text-center">
            Request X-ray Analysis
          </h1>

          <div className="px-32 space-y-5">
            <div>
              <h1 className="text-[36px] font-semibold">Patient Info</h1>
            </div>

            <div className="w-full h-[900px] flex   ">
              <div className="w-[50%] h-full flex   ">
                <div
                  style={{ border: "1px solid rgba(37, 180, 248, 1) " }}
                  className="h-[790px] w-[600px] flex flex-col py-5 px-10 space-y-5   rounded-[10px]"
                >
                  <div className="flex items-start  w-full  h-[94px] space-x-2">
                    <div className="w-[50%] h-full flex flex-col justify-end space-y-2 ">
                      <label className="text-textBody text-[18px] font-medium">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="first name"
                        onChange={(e) =>
                          setXRayForm({ ...xRayForm, fname: e.target.value })
                        }
                        value={xRayForm.fname}
                        className="px-4 py-3 rounded-[10px] outline-none"
                        style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                      />
                    </div>
                    <div className="w-[50%] h-full justify-end flex flex-col space-y-2 ">
                      <label className="text-textBody text-[18px] font-medium">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="last name"
                        onChange={(e) =>
                          setXRayForm({ ...xRayForm, lname: e.target.value })
                        }
                        value={xRayForm.lname}
                        className="px-4 py-3 rounded-[10px] outline-none"
                        style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                      />
                    </div>
                  </div>
                  <div className="w-full  flex flex-col space-y-2 ">
                    <label className="text-textBody text-[18px] font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) =>
                        setXRayForm({ ...xRayForm, email: e.target.value })
                      }
                      value={xRayForm.email}
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                    />
                  </div>
                  <div className="w-full  flex flex-col space-y-2 ">
                    <label className="text-textBody text-[18px] font-medium">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) =>
                        setXRayForm({ ...xRayForm, phone: e.target.value })
                      }
                      value={xRayForm.phone}
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                    />
                  </div>
                  <div className="w-full  flex flex-col space-y-2 ">
                    <label className="text-textBody text-[18px] font-medium">
                      Select Date
                    </label>
                    <input
                      type="Date"
                      placeholder="select date"
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                    />
                  </div>
                  <div className="w-[50%]  flex flex-col space-y-2 ">
                    <label className="text-textBody text-[18px] font-medium">
                      Blood group
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      onChange={(e) =>
                        setXRayForm({ ...xRayForm, bgroup: e.target.value })
                      }
                      value={xRayForm.bgroup}
                      className="px-4 py-3 rounded-[10px] outline-none"
                      style={{ border: "1px solid rgba(208, 213, 221, 1)" }}
                    />
                  </div>
                  <div className="w-full flex flex-col h-[300px] justify-between">
                    <div className="w-[50%] flex spacex-1 items-center">
                      <p className="text-[20px] font-medium text-center ">
                        Upload X-Ray
                      </p>
                      <div>
                        <Image src={upload} aalt="cloud" />
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <Button text="Request" onClick={Request} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] justify-center  flex ">
                <div>
                  <Image src={dr} alt="img" />
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
