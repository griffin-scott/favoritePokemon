import { useContext, useState } from "react";
import PokemonCard from "./PokemonCard";
import LoadingGif from "./LoadingGif";

import context from "../context/context";

const PokemonList = () => {
    // const [filter, setFilter] = useState({});

    // Display loading gif if context hasn't loaded yet.
    const pokemonList = useContext(context);

    if (!pokemonList || pokemonList.length === 0) {
        return <LoadingGif />;
    }

    const shortList = pokemonList.slice(0, 30);

    return (
        <div className="PokemonList container-fluid">
            <h1 className="display-5 text-center text-white">Pokemon List</h1>
            <div className="row">
                {shortList.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
