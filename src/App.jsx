import {useEffect ,useState} from "react";
import Search from "./components/Search.jsx";

const API_BASE_URL =

const App = () => {
    const[searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

    }, [])
    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                </header>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h1 className="text-white">{searchTerm}</h1>
            </div>

        </main>
    )
}
export default App
