import { useEffect, useState } from "react";
import '../pokemonCard.css'

const PokemonCard = ({ pokemon }) => {
    const [pokeInfo, setPokeInfo] = useState(null);

    const getData = async () => {
        const id = pokemon.url.slice(33).replaceAll("/", "");
        const res = await fetch(`http://localhost:8000/api/pokemon/${id}`);
        const data = await res.json();
        console.log(data)
        setPokeInfo(data);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!pokeInfo || !pokeInfo.types){
        return(
            <></>
        )
    }

    return (
        <div className="PokemonCard col-4 my-3 d-flex align-items-stretch text-center">
            <div className="card container-fluid bg-dark text-white m-2">
                <img
                    src={pokeInfo.image}
                    className="card-img-top"
                    alt="Card Image"
                />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">#00{pokeInfo.id} {pokemon.name}</h5>
                    <div className="row justify-content-center">
                        {pokeInfo.types.map((type) => (
                            <div className="col-6" key={type} >{type}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
