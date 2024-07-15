import React from 'react'
import { MdOutlineSubscriptions,MdOutlineLibraryBooks,MdOutlineHistory,MdOutlineWatchLater } from "react-icons/md";
import {IoMdHome} from "react-icons/io"
import {SiYoutubeshorts} from "react-icons/si";
export default function Sidebar() {
    const mainLinks = [
        {
            icon:<IoMdHome/>,
            name:'Home'
        },
        {
            icon:<SiYoutubeshorts/>,
            name:'Shorts'
        },
        {
            icon:<MdOutlineSubscriptions/>,
            name:'Subscription'
        },
       
    ];

    const otherLinks = [
        {
            icon:<MdOutlineLibraryBooks/>,
            name:'Library'
        },
        {
            icon:<MdOutlineHistory/>,
            name:'History'
        },
        {
            icon:<MdOutlineWatchLater/>,
            name:'Watch'
        },
       
    ];
  return (
    <div className='w-2/12 '>
      <ul className='flex flex-col '>
        {mainLinks.map(
            ({icon,name}) => {
                return(
                    <li key={name} className='pl-4 py-3 items-center ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl' >
                        <a href="#" className='flex gap-5 items-center px-10'>
                            {icon}
                            <span>{name}</span>
                        </a>

                    </li>
                )
            }
        )}
      </ul>
      <ul className='flex flex-col'>
      <div className="flex pl-12 py-3 items-center">
      <h1 className='flex font-bold'>You</h1><span className='flex px-3'></span>
      </div>
        {otherLinks.map(
            ({icon,name}) => {
                return(
                    <li key={name} className='pl-4 py-3 items-center' >
                        <a href="#" className='flex gap-5 items-center px-10'>
                            {icon}
                            <span>{name}</span>
                        </a>

                    </li>
                )
            }
        )}
      </ul>
      
    </div>
  )
}
