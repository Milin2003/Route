import { Link } from 'react-router-dom';


function Sidebar() {
    return(
        <aside>
            <h2  className=" text-2xl font-bold py-2">Sidebar</h2>
            <nav>
                <ul className='inline-block'>
                    <li className='my-3 font-semibold px-4 py-2 bg-red-400'><Link to="/">Home</Link></li>
                    <li className='my-3 font-semibold px-4 py-2 bg-red-400'><Link to="/about">About</Link></li>
                    <li className='my-3 font-semibold px-4 py-2 bg-red-400'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;