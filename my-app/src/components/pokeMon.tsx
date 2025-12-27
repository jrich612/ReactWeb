import { useEffect, useState } from "react";

interface Ability {
    name:string;
    url:string;
}

interface AbilitySlot {
    ability:Ability;
    is_hidden:boolean;
    slot:number;
}

interface front_default {
    front_default:string;
}

interface Pokemon {
    name:string;
    abilities:AbilitySlot[];
    sprites:front_default;
}

const PokeMon = () => {
    const [apiData, setApiData] = useState<Pokemon | null>(null);

    useEffect(() =>{
        fetchDataApi()
    }, []);
    //*fetching api data using async await

    const fetchDataApi = async() => {

        try{
           const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
           const data = await response.json();
           setApiData(data);
           console.log(data);
        } catch (error) {
            console.error("Something Went Wrong Try Again", error);
        }
    }
    return (
        <div>
            {apiData && <h2> Pokemon {apiData.name} </h2>}
            <ul>
                {apiData?.abilities.map((slot) => (
                    <li key={slot.ability.name}>
                        {slot.ability.name}
                    </li>
                ))}
            </ul>
            <div>
                <img src={apiData?.sprites.front_default}>

                </img>
                
            
            </div>
        </div>
    )
}
export default PokeMon;