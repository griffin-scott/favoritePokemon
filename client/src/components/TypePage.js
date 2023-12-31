import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import FilteredList from "./FilteredList";

import { useContext } from "react";
import context from "../context/context";
import { useState, useEffect } from "react";

const TypePage = () => {
    // const [pokemon, setPokemon] = useState([])
    const pokemonList = useContext(context)

    const nav = useNavigate()
    const type = window.location.pathname.slice(6)
    const types = ['normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy']

    const navHome = () => {
        nav('/')
    }

    const capsFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    if(!types.includes(type)){ return (<ErrorPage />) }

    return (
        <div className="TypePage h-100 d-flex justify-content-center">
            <div className="col-10 d-flex flex-column align-items-center">
                <h1 className="display-3 text-center text-white">{capsFirstLetter(type)} Type</h1>
                <FilteredList type={type}/>
            </div>
        </div>
    );
};

export default TypePage;
