import React from 'react'


export default function CTAButton({ text, onClick, icon, bgColor, textColor, type }) {
    return (
        <button type={type} onClick={onClick} className={`mt-4 ${bgColor} ${textColor} px-4 py-2 rounded-full cursor-pointer`}>
            {icon}
            {text}
        </button>
    )
}
