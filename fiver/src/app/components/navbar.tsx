'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useStateProvider } from "../context/StateContext";
import { reducerCases } from "../context/constants";
import FiverrLogo from "./FiverrLogo";
import { useRouter } from "next/router";
import { GET_USER_INFO } from "../utils/constants";
import { HOST } from "../utils/constants";


const Navbar: React.FC = () => {
  const [cookies, setCookie] = useCookies(["jwt"]);
  const router = useRouter();
   const links = [
    { linkName: "Home", href: "/", type: "link", handler: () => {} },
    { linkName: "Services", href: "/services", type: "link", handler: () => {} },
    { linkName: "Contact", href: "/contact", type: "link", handler: () => {} },
  ];
    
  const [navFixed, setNavFixed] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [{ showLoginModal, showSignupModal, isSeller, userInfo }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const positionNavbar = () => {
      setNavFixed(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", positionNavbar);
    return () => window.removeEventListener("scroll", positionNavbar);
  }, []);

  const handleOrdersNavigate = () => {
    router.push(isSeller ? "/seller/orders" : "/buyer/orders");
  };

  const handleModeSwitch = () => {
    dispatch({ type: reducerCases.SWITCH_MODE });
    router.push(isSeller ? "/buyer/orders" : "/seller");
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data: { user } } = await axios.post(GET_USER_INFO, {}, { headers: { Authorization: `Bearer ${cookies.jwt}` } });
        let projectedUserInfo = { ...user };
        if (user.profileImage) {
          projectedUserInfo = {
            ...projectedUserInfo,
            imageName: HOST + "/" + user.profileImage,
          };
        }
        delete projectedUserInfo.image;
        dispatch({
          type: reducerCases.SET_USER,
          userInfo: projectedUserInfo,
        });
        setIsLoaded(true);
        if (user.isProfileInfoSet === false) {
          router.push("/profile");
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (cookies.jwt && !userInfo) {
      getUserInfo();
    } else {
      setIsLoaded(true);
    }
  }, [cookies.jwt, userInfo, dispatch, router]);

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  useEffect(() => {
    const clickListener = () => {
      if (isContextMenuVisible) setIsContextMenuVisible(false);
    };

    if (isContextMenuVisible) {
      window.addEventListener("click", clickListener);
    }

    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, [isContextMenuVisible]);

  const ContextMenuData = [
    {
      name: "Profile",
      callback: () => {
        setIsContextMenuVisible(false);
        router.push("/profile");
      },
    },
    {
      name: "Logout",
      callback: () => {
        setIsContextMenuVisible(false);
        router.push("/logout");
      },
    },
  ];

  return (
    <>
      {isLoaded && (
        <nav
          className={`w-full px-24 flex justify-between items-center py-6  top-0 z-30 transition-all duration-300 ${
            navFixed || userInfo
              ? "fixed bg-white border-b border-gray-200"
              : "absolute bg-transparent border-transparent"
          }`}
        >
          <div>
            <Link href="/">
              <FiverrLogo
                fillColor={!navFixed && !userInfo ? "#ffffff" : "#404145"}
              />
            </Link>
          </div>
          <div
            className={`flex ${
              navFixed || userInfo ? "opacity-100" : "opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-[30rem] py-2.5 px-4 border"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              className="bg-gray-900 py-1.5 text-white w-16 flex justify-center items-center"
              onClick={() => {
                setSearchData("");
                router.push(`/search?q=${searchData}`);
              }}
            >
              <IoSearchOutline className="fill-white text-white h-6 w-6" />
            </button>
          </div>
          {!userInfo ? (
            <ul className="flex gap-10 items-center">
               {links.map(({ linkName, handler, type, href }) => {
                return (
                  <li
                    key={linkName}
                    className={`${
                      navFixed ? "text-black" : "text-white"
                    } font-medium`}
                  >
                    {type === "link" && <Link href={href}>{linkName}</Link>}
                    {type === "button" && (
                      <button onClick={handler}>{linkName}</button>
                    )}
                    {type === "button2" && (
                      <button
                        onClick={handler}
                        className={`border   text-md font-semibold py-1 px-3 rounded-sm ${
                          navFixed
                            ? "border-[#1DBF73] text-[#1DBF73]"
                            : "border-white text-white"
                        } hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] transition-all duration-500`}
                      >
                        {linkName}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="flex gap-10 items-center">
              {isSeller && (
                <li
                  className="cursor-pointer text-[#1DBF73] font-medium"
                  onClick={() => router.push("/seller/gigs/create")}
                >
                  Create Gig
                </li>
              )}
              <li
                className="cursor-pointer text-[#1DBF73] font-medium"
                onClick={handleOrdersNavigate}
              >
                Orders
              </li>

              <li
                className="cursor-pointer text-[#1DBF73] font-medium"
                onClick={handleModeSwitch}
              >
                Switch to {isSeller ? "Buyer" : "Seller"}
              </li>
            </ul>
          )}
        </nav>
      )}
    </>
  );
}

export default Navbar;
