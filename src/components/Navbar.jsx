import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm );

  const handleSarch = () => {
    if(location.pathname !== '/search') navigate("/search")
      else{
        dispatch(clearVideos);
        dispatch(getSearchPageVideos(false));
      }
  }

  return (
    <div className="flex justify-between px-14 h-14 items-center bg-white opacity-95 sticky">
      <div className="flex gap-8 items-center text-2xl text-white">
        <div>
          <IoMenu className="flex text-black" />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-2xl text-red-600" />
          <span className="flex text-black">YouTube India</span>
          <sup className="font-thin text-black">IN</sup>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form onSubmit={(e)=>{
          e.preventDefault();
          handleSarch();
        }}>
          <div className="flex items-center h-10 px-4 pr-0 rounded-3xl ">
            <div className="flex gap-5 items-center pr-1">
              <input
                type="text"
                placeholder="Search"
                className="w-96 justify-center focus:putline-none border-none"
                value={searchTerm}
                onChange={e=>dispatch(changeSearchTerm(e.target.value ))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center  rounded-r-3xl">
              <CiSearch className="text-black" />
            </button>
          </div>
        </form>
        <div>
          <FaMicrophone className="text-black h-5" />
        </div>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <RiVideoAddLine className="text-black items-center size-5  gap-80" />
            <div className="relative">
              <FaRegBell className=" text-black size-5" />
              <span className="absolute bottom-3  left-3 text-xs bg-red-600 rounded-full px-1 text-white">
                7+
              </span>
            </div>
            <img src="logo192.png" alt="error" className="w-9 h-9 rouded-xs" />
          </div>
        </div>
      
    </div>
  );
}
