import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Component for rendering the home page.
 *
 * @component
 */

function HomePage() {
    const [id, setId] = useState("");

    return (
        <div className="pr-24 pl-52 pt-36 pb-12 flex flex-col justify-center items-center">
            <p className="text-white font-medium text-lg">
                Visiter et tester les différentes pages en utilisant un ID existant (12 / 18) ou non.
            </p>
            <div className="flex flex-col justify-center items-center mt-14">
                <input
                    type="text"
                    value={id}
                    placeholder="Rentrer un ID..."
                    className="p-2 text-white bg-cardDark rounded-md border border-transparent hover:border-primary focus-visible:outline-none focus:border-primary"
                    onChange={(e) => setId(e.target.value)}
                />
                <Link
                    to={`/profil/${id}`}
                    className="py-2 px-4 bg-cardDark rounded-md text-white transition-all hover:bg-primary mt-4"
                >
                    Aller à la page du profil
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
