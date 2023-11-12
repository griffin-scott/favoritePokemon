import { useEffect, useState } from "react";
import "../pokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    const [pokeInfo, setPokeInfo] = useState(null);

    const getData = async () => {
        const id = pokemon.id - 1
        const res = await fetch(`http://localhost:8000/api/pokemon/${id}`);
        const data = await res.json();
        setPokeInfo(data);
    };

    const typeClassNames = (type) => `col rounded mx-1 px-1 fw-bold w-auto pkmn_card ${type}`;

    const capsFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const padZeroes = (num) => {
        const n = num.toString();
        return "0000".slice(n.length) + n;
    };

    useEffect(() => {
        getData();
    }, []);

    if (!pokeInfo || !pokeInfo.types) {
        return <></>;
    }

    return (
        <div className="PokemonCard col-4 my-3 d-flex align-items-stretch text-center">
            <div id="card" className="card container-fluid bg-dark text-white m-2">
                <img src={pokeInfo.image} className="card-img-top" alt="Card Image" />
                <div className="card-body d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="row justify-content-center">
                            <h5 className="card-title">
                                #{padZeroes(pokeInfo.id)} {capsFirstLetter(pokeInfo.name)}
                            </h5>
                            {pokeInfo.types.map((type) => (
                                <div className={typeClassNames(type)} key={type}>
                                    {capsFirstLetter(type)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
