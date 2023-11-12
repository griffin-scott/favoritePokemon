import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import context from "../context/context";
import LoadingGif from "./LoadingGif";

const FilteredList = (props) => {
    const pokemonContext = useContext(context);
    console.log(`type is ${props.type}`);

    const filterByType = (pokemon) => {
        return pokemon.types.includes(props.type);
    };

    const filterByGen = () => {
        return 0;
    };

    const filteredPokemon = pokemonContext.filter(filterByType);

    console.log(filteredPokemon);

    return (
        <div className="FilteredList container-fluid">
            <div className="row">
                {filteredPokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default FilteredList;
