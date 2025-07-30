import { useState } from "react";

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
            <form onSubmit={onSubmit}>
                <input type="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)} required />
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <textarea  type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                <input type="url" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)} />
                <input type="url" value={link} placeholder="Link" onChange={(e) => setLink(e.target.value)} />
                <button type="submit" >Add event</button>
            </form>
        </div>
    )
}