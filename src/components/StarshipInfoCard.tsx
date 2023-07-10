/* import { FC } from "react"; */

import { useEffect, useState } from "react"

/* interface Starship{
  films: string[];
  pilots: string[];
  hyperdrive_rating: string;
  max_atmosphering_speed: string;
  length: string;
  consumables: string;
  cargo_capacity: string;
  passengers: string;
  crew: string;
  cost_in_credits: string;
  manufacturer: string;
  starship_class: string;
  name: string;
  model: string;
} */

  export const StarshipInfoCard = ({selectedStarship}:any)=>{
  const[image, setImage] = useState('');

  useEffect(()=>{
  const imageID = selectedStarship.url.slice(32,-1)
  setImage(`https://starwars-visualguide.com/assets/img/starships/${imageID}.jpg`)
  }, [selectedStarship.url])

  return(
    <div className="starshipInfoCardDiv">
      <div className="starshipImageDiv">
        <img className="starshipImage" src={image} alt="image" />
      </div>
      <div>
        <ul>
          <li><span className="infoCategory">Model: </span>{selectedStarship.model}</li>
          <li><span className="infoCategory">Starship Class: </span>{selectedStarship.starship_class}</li>
          <li><span className="infoCategory">Manufacturer: </span>{selectedStarship.manufacturer}</li>
          <li><span className="infoCategory">Cost: </span>{selectedStarship.cost_in_credits} credits</li>
          <li><span className="infoCategory">Crew: </span>{selectedStarship.crew}</li>
          <li><span className="infoCategory">Passengers Capacity: </span>{selectedStarship.passengers}</li>
          <li><span className="infoCategory">Cargo Capacity: </span>{selectedStarship.cargo_capacity}</li>
          <li><span className="infoCategory">Conumables: </span>{selectedStarship.consumables}</li>
          <li><span className="infoCategory">Length: </span>{selectedStarship.length} meters</li>
          <li><span className="infoCategory">Hyperdrive rating: </span>{selectedStarship.hyperdrive_rating}</li>
          <li><span className="infoCategory">Maximum speed in Realspace: </span>{selectedStarship.MGLT} MGLT</li>
        </ul>
      </div>
    </div>
  )

}
