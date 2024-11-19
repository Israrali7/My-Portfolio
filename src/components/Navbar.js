import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="flex items-center space-y-0.5 bg-slate-500 border-black justify-between w-full h-[100px]">
                <div><h1 className="text-2xl text-white ml-5 font-bold">MyPortfolio</h1></div>
                <div className="flex">
                    <ul className="flex">
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3">
                            <Link to={"/intro"}>Intro</Link>
                        </li>
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3">
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li className="inline  text-white font-semibold mr-9 mt-3 mb-3">
                            <Link to={"/thanks"}>Thanks</Link>
                        </li>
                    </ul>
                    <button className="bg-gray-400 mr-8 py-1 px-3 rounded-md mt-3 mb-3 text-white font-bold">Sign Up</button>
                    <button className="bg-gray-400 mr-8 py-1 px-3 rounded-md mt-3 mb-3 text-white font-bold">Sign In</button>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;