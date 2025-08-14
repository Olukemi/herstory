import { useState } from "react";
import CTAButton from "./CTAButton";
import herstory from "../assets/herstory_book.png";

export default function Event({ addEvent }) {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");


    const onSubmit = (e) => {
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
        <div>
            <h1>Event</h1>
            <img src={herstory} alt="event" className="w-1/4 h-auto" />
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required />
                    <input type="date" value={date} placeholder="date" onChange={(e) => setDate(e.target.value)} required />
                    <input type="text" value={location} placeholder="location" onChange={(e) => setLocation(e.target.value)} />
                    <input type="url" value={image} placeholder="image" onChange={(e) => setImage(e.target.value)} />
                    <input type="url" value={link} placeholder="link" onChange={(e) => setLink(e.target.value)} />
                    <textarea  type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <CTAButton type="submit" text="add event" icon=" + " bgColor="bg-white" textColor="text-black" outline={true} />
            </form>
        </div>
    )
}