import { FaHome, FaUser, FaBuilding } from 'react-icons/fa';

import './style.css';
export const SideNav = () => {
    return (
        <div className="side-nav">
            <ul className="nav-menu">
                <li><FaHome /></li>
                <li className="selected"><FaUser /></li>
                <li><FaBuilding /></li>
            </ul>
        </div>
    )
}
