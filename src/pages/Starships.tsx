import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";

interface Starship{
    name: string
    model: string
    index: number
}

export function Starships() {
const [starships, setStarships]= useState<Starship[]>([])

const callAPI = async()=>{
const res = await axios.get('https://swapi.dev/api/starships/')
console.log('llamada API', res.data)
return res.data
}

const getStarships = async()=>{
    const data = await callAPI()
    setStarships(data.results as Starship[])
}

useEffect(()=>{
    getStarships()
}, [])
console.log('starships', starships)

    return (
        <>
            <Navbar />
            <div className="starshipsPageDiv">
                {starships.map((starship, index)=>{
                    return(
                        <div key={index} className="starshipInfoDiv">
                            <div className="starshipName">{starship.name.toUpperCase()}</div>
                            <div className="starshipModel">{starship.model}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}