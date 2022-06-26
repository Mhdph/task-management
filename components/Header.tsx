import React, { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiHelpCircle, BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { TbPuzzle } from "react-icons/tb";
import { useSession, signOut } from "next-auth/react";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [name, setName] = useState("");
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      setName(session.user.name);
    }
  }, [session]);

  const [show, setShow] = useState<HeaderProps | null>(null);
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState(false);
  const handleclick = () => {
    setSearch(!search);
  };
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full bg-white hidden xl:block shadow">
          <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
            <div className="flex items-center">
              <div className="mr-10 flex items-center">
                <svg
                  aria-label="Home"
                  id="logo"
                  enableBackground="new 0 0 300 300"
                  height={44}
                  viewBox="0 0 300 300"
                  width={43}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      fill="#4c51bf"
                      d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                    />
                  </g>
                </svg>
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                  The North
                </h3>
              </div>
              <ul className="hidden xl:flex items-center h-full">
                <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out">
                  <span className="mr-2">
                    <BsGrid className="h-4 w-4" />
                  </span>
                  Dashboard
                </li>
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out">
                  <span className="mr-2">
                    <TbPuzzle className="h-4 w-4" />
                  </span>
                  Products
                </li>
              </ul>
            </div>
            <div className="h-full hidden xl:flex items-center justify-end">
              <div className="h-full flex">
                <div className="px-6 h-full justify-center border-l border-gray-300 text-gray-400 flex items-center">
                  <input
                    id="inpot-search"
                    type="text"
                    className={`${
                      search ? "w-40" : "w-0"
                    } bg-transparent focus:outline-none text-xs transition duration-150 ease-in-out`}
                    placeholder="Type something..."
                  />
                  <AiOutlineSearch className="w-6 h-6" onClick={handleclick} />
                </div>
                <div className="w-20 h-full flex items-center justify-center border-l border-r border-gray-300 text-gray-400">
                  <TbMessages className="w-6 h-6" />
                </div>
                <div className="w-20 h-full flex items-center justify-center border-r border-gray-300 cursor-pointer text-gray-400">
                  <FaRegBell className="w-6 h-6" />
                </div>
                <div
                  className="flex items-center pl-8 relative cursor-pointer"
                  onClick={() => setProfile(!profile)}
                >
                  {profile && (
                    <ul className="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ">
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <BiUser className="w-4 h-4" />
                          <span className="ml-2">My Profile</span>
                        </div>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                        <BiHelpCircle className="w-4 h-4" />
                        <span className="ml-2">Help Center</span>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <IoSettingsOutline className="w-4 h-4" />
                        <span className="ml-2">Account Settings</span>
                      </li>
                    </ul>
                  )}
                  <img
                    className="rounded h-10 w-10 object-cover"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                    alt="logo"
                  />
                  <p className="text-gray-800 text-sm ml-2">Jane Doe</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
            <div className="w-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={43}
                height={44}
                viewBox="0 0 43 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                  fill="#667EEA"
                />
              </svg>
            </div>
            <div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? " " : <AiOutlineMenu className="w-7 h-7" />}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40"
                : "absolute xl:hidden w-full h-full transform -translate-x-full z-40"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={43}
                            height={44}
                            viewBox="0 0 43 44"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                              fill="#667EEA"
                            />
                          </svg>
                          <p className="text-base text-gray-800 ml-3">
                            The North
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <AiOutlineClose className="w-7 h-7" />
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                              <BsGrid className="w-7 h-6" />
                            </div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Dashboard
                            </p>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                <TbPuzzle className="w-7 h-6" />
                              </div>
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Products
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="flex justify-center mb-4 w-full">
                      <div className="relative w-full">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <AiOutlineSearch className="w-4 h-4" />
                        </div>
                        <input
                          className="focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                            className="w-8 h-8 rounded-md"
                          />
                          <p className=" text-gray-800 text-base leading-4 ml-2">
                            Jane Doe
                          </p>
                        </div>
                        <ul className="flex">
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <TbMessages className="h-7 w-7" />
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <FaRegBell className="h-7 w-7" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
