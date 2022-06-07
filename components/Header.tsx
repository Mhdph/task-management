import React, { useState } from "react";
import { FaRegBell, FaRegCalendarAlt } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCloud,
} from "react-icons/ai";
import { BiLogOut, BiUser, BiLocationPlus, BiAbacus } from "react-icons/bi";
import { BsCurrencyExchange, BsGrid, BsTranslate } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
            <div className="h-16 w-full flex items-center px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={144}
                height={30}
                viewBox="0 0 144 30"
              >
                <path
                  fill="#5F7DF2"
                  d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"
                />
              </svg>
            </div>
            <ul aria-orientation="vertical" className=" py-6">
              <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <div>
                    <BsGrid className="w-5 h-5" />
                  </div>
                  <span className="ml-2">Dashboard</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <BsTranslate className="w-6 h-6" />
                  <span className="ml-2">Translator</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <FaRegCalendarAlt className="w-6 h-6" />
                  <span className="ml-2">Calendar</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal  mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <MdOutlineNoteAlt className="h-6 w-6" />
                  <span className="ml-2">Take Note</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <AiOutlineCloud className="h-6 w-6" />
                  <span className="ml-2">Drive</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <BsCurrencyExchange className="h-6 w-6" />
                  <span className="ml-2">Currency Exchange</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <BiLocationPlus className="h-6 w-6" />
                  <span className="ml-2">Location</span>
                </div>
              </li>
              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <div className="flex items-center">
                  <BiAbacus className="h-6 w-6" />
                  <span className="ml-2">Expense Tracker</span>
                </div>
              </li>
            </ul>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full h-full absolute z-40  transform  translate-x-0 "
                : "   w-full h-full absolute z-40  transform -translate-x-full"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
              onClick={() => setShow(!show)}
            />
            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between px-8">
                    <div className="h-16 w-full flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={144}
                        height={30}
                        viewBox="0 0 144 30"
                      >
                        <path
                          fill="#5F7DF2"
                          d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"
                        />
                      </svg>
                    </div>
                    <div
                      id="closeSideBar"
                      className="flex items-center justify-center h-10 w-10"
                      onClick={() => setShow(!show)}
                    >
                      <AiOutlineClose className="h-6 w-6" />
                    </div>
                  </div>
                  <ul aria-orientation="vertical" className=" py-6">
                    <li className="pl-6 cursor-pointer  text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div>
                          <BsGrid className="w-5 h-5" />
                        </div>
                        <span className="ml-2">Dashboard</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <BsTranslate className="w-6 h-6" />
                        <span className="ml-2">Translator</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <FaRegCalendarAlt className="w-6 h-6" />
                        <span className="ml-2">Calendar</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal  mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <MdOutlineNoteAlt className="h-6 w-6" />
                        <span className="ml-2">Take Note</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <AiOutlineCloud className="h-6 w-6" />
                        <span className="ml-2">Drive</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <BsCurrencyExchange className="h-6 w-6" />
                        <span className="ml-2">Currency Exchange</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <BiLocationPlus className="h-6 w-6" />
                        <span className="ml-2">Location</span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <BiAbacus className="h-6 w-6" />
                        <span className="ml-2">Expense Tracker</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <div className="flex justify-center mb-4 w-full px-6">
                    <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <AiOutlineSearch />
                      </div>
                      <input
                        className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-300">
                    <div className="w-full flex items-center justify-between px-6 pt-1">
                      <div className="flex items-center">
                        <img
                          alt="profile-pic"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                          className="w-8 h-8 rounded-md"
                        />
                        <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
                          Jane Doe
                        </p>
                      </div>
                      <ul className="flex">
                        <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                          <TbMessages className="w-6 h-6" />
                        </li>
                        <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                          <FaRegBell className="w-6 h-6" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}
          <div className="w-full">
            {/* Navigation starts */}
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
              <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                  <div className="relative w-full">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <AiOutlineSearch className="h-5 w-5" />
                    </div>
                    <input
                      className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-1/2 hidden lg:flex">
                  <div className="w-full flex items-center pl-8 justify-end">
                    <div className="h-full w-20 flex items-center justify-center border-r border-l">
                      <div className="relative cursor-pointer text-gray-600">
                        <FaRegBell className="w-6 h-6" />
                        <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0  left-2 mt-1 mr-1 m-auto" />
                      </div>
                    </div>
                    <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                      <TbMessages className="w-6 h-6" />
                    </div>
                    <div
                      className="flex items-center relative cursor-pointer"
                      onClick={() => setProfile(!profile)}
                    >
                      <div className="rounded-full">
                        {profile ? (
                          <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                              <div className="flex items-center">
                                <BiUser className="w-5 h-5" />
                                <span className="text-sm ml-2">My Profile</span>
                              </div>
                            </li>
                            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                              <div className="flex items-center">
                                <BiLogOut className="w-5 h-5" />
                                <span className="text-sm ml-2">Sign out</span>
                              </div>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                        <div className="relative">
                          <img
                            className="rounded-full h-10 w-10 object-cover"
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png"
                            alt="avatar"
                          />
                          <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                        </div>
                      </div>
                      <p className="text-gray-800 text-sm mx-3">Jane Doe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
              >
                {show ? " " : <AiOutlineMenu className="h-6 w-6" />}
              </div>
            </nav>
            {/* Navigation ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
              {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
              <div className="w-full h-full rounded border-dashed border-2 border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
