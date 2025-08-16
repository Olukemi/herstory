import { useState } from "react";
import CTAButton from "./CTAButton";
import herstory from "../assets/herstory_book.png";

export default function Event({ addEvent, setShowAddEvent }) {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");


    const onSubmit = (e) => {
        setShowAddEvent(false)
        e.preventDefault();
        if (!name || !date) return;
        addEvent({ date, name, description, location, image, link });
        setDate(new Date());
        setName("");
        setDescription("");
        setLocation("");
        setImage("");
        setLink("");
    }
    

    return (
        <div className="bg-white rounded-3xl p-8 w-[450px] max-w-[90vw] shadow-md relative">
             <button className="absolute top-4 right-4 rounded-full hover:bg-gray-100 cursor-pointer px-2 py-1" onClick={() => setShowAddEvent(false)}>
             <i class="ri-close-large-line"></i>
            </button>
            <div className="flex flex-col items-center gap-4">
                <img src={herstory} alt="event" className="w-1/4 h-1/4 object-contain" />
            </div>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <input type="text" value={name} placeholder="name*" onChange={(e) => setName(e.target.value)} required  className="bg-gray-100 placeholder-gray-300 rounded-full px-4 py-2 focus:outline-none"/>
                    <input type="date" value={date} placeholder="date*" onChange={(e) => setDate(e.target.value)} required className="bg-gray-100 placeholder-gray-300 rounded-full px-4 py-2 focus:outline-none"/>
                    <input type="text" value={location} placeholder="location*" onChange={(e) => setLocation(e.target.value)} required className="bg-gray-100 placeholder-gray-300 rounded-full px-4 py-2 focus:outline-none"/>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            const previewURL = URL.createObjectURL(file); // preview
                            setImage(previewURL);
                            setImageFile(file); // store file object
                        }}
                        className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none cursor-pointer"
                        />
                    <input type="url" value={link} placeholder="link" onChange={(e) => setLink(e.target.value)} className="bg-gray-100 placeholder-gray-300 rounded-full px-4 py-2 focus:outline-none" />
                    {/* {image && <img src={image} alt="preview" className="mt-2 w-48 rounded" />} */}
                    <textarea type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} className="bg-gray-100 placeholder-gray-300 rounded-xl px-4 py-2 focus:outline-none"/>
                </div>
                <CTAButton type="submit" text="add event" icon=" + " bgColor="bg-black" textColor="text-white" />
            </form>
        </div>
    )
}