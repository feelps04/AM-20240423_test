import React, { useState } from "react";
import { useRouter } from "next/router";
import { useStateProvider } from "../context/StateContext";

function Profile() {
    const router = useRouter();
    const [{ userInfo }, dispatch] = useStateProvider();
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageHover, setImageHover] = useState(false);
    const [image, setImage] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState({
        userName: "",
        fullName: "",
        description: ""
    });

    const handleFile = (e) => {
        let file = e.target.files;
        const fileType = file[0]["type"];
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if (validImageTypes.includes(fileType)) {
          setImage(file[0]);
        }
      };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const setProfile = async () => {
    const inputClassName = "block p-4 w-full text-sm-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500";
    const labelClassName = "mb-2 text-lg font-medium text-gray-900 dark:text-white";

    return (
        <>
            {isLoaded &&  
                <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
                    {errorMessage && (
                        <div>
                            <span className="text-red-600 font-bold">{errorMessage}</span>
                        </div>
                    )}
                    <h2 className="text-3xl">Welcome to Fiverr Clone</h2>
                    <h4 className="text-xl">
                        Please complete your profile to get started
                    </h4>
                    <div className="flex flex-col items-center w-full gap-5">
                        <div className="flex flex-col items-center cursor-pointer"
                            onMouseEnter={() => setImageHover(true)}
                            onMouseLeave={() => setImageHover(false)}
                        >
                            <label className={labelClassName} htmlFor="profilePicture">
                                Select a Profile Picture
                            </label>
                            <div className="bg-purple-500 h-10 flex items-center rounded-full
                             relative">
                                {image ? (
                                    <img src={URL.createObjectURL(image)} alt="profile" 
                                    className="rounded-full" />
                                ) : (
                                   
                                        <span className="text-6xl text-white"
                                        >{userInfo?.email[0].toUpperCase()}</span>
                                
                                )}

                        <span className="flex items-center justify-center relative">

                                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white absolute"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="file"
                      onChange={handleFile}
                      className="opacity-0"
                      multiple={true}
                      name="profileImage"
                    />
                                </span>   
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-[500px]">
                    
              <div>
                <label className={labelClassName} htmlFor="userName">
                  Please select a username
                </label>
                <input
                  className={inputClassName}
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Username"
                  value={data.userName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="fullName">
                  Please enter your full Name
                </label>
                <input
                  className={inputClassName}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  value={data.fullName}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="description"
                id="description"
                value={data.description}
                onChange={handleChange}
                className={inputClassName}
                placeholder="description"
              ></textarea>
            </div>
            <button
              className="border   text-lg font-semibold px-5 py-3   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
              type="button"
              onClick={setProfile}
            >
              Set Profile
            </button>

                    </div>
            
                 
            }
        </>
    );
}

export default Profile;
