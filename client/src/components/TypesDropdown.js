import { Link } from "react-router-dom";

const TypesDropdown = () => {
    return (
        <li className="nav-item dropdown">
            <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Types
            </Link>

            <ul className="dropdown-menu bg-secondary columns-2" aria-labelledby="navbarDropdown">
                <div className="row">
                    <div className="col-6 ps-3 pe-0">
                        <ul className="multi-column-dropdown">
                            <li>
                                <Link className="dropdown-item" to="/type/normal">
                                    Normal
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/fire">
                                    Fire
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/water">
                                    Water
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/grass">
                                    Grass
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/electric">
                                    Electric
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/ice">
                                    Ice
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/fighting">
                                    Fighting
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/poison">
                                    Poison
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/ground">
                                    Ground
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 ps-0 pe-3">
                        <ul className="multi-column-dropdown">
                            <li>
                                <Link className="dropdown-item" to="/type/flying">
                                    Flying
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/psychic">
                                    Psychic
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/bug">
                                    Bug
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/rock">
                                    Rock
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/ghost">
                                    Ghost
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/dark">
                                    Dark
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/dragon">
                                    Dragon
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/steel">
                                    Steel
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/type/fairy">
                                    Fairy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </li>
    );
};

export default TypesDropdown;
