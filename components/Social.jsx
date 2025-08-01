"use client";

import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaBehance, FaDribbble} from "react-icons/fa"


const socials = [
    
    // { icon: <FaGithub />, path: 'https://github.com/Moiz-ul-haq' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/Moiz-ul-haq/' },
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
        </div>
  )
}

export default Social