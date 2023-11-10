import PokemonList from "./PokemonList";


const HomePage = () => {
    return (

        <div className="HomePage h-100 d-flex justify-content-center">
            <div className="col-10 d-flex flex-column">
                <h1 className="display-3 text-center text-white">Home Page</h1>
                <PokemonList />
            </div>
        </div>
    );
}

export default HomePage;
