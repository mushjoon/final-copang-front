import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/member/1">Member1</Link>
                </li>
                <li>
                    <Link to="/member/2">Member2</Link>
                </li>
                <li>
                    <Link to="/member/3">Member3</Link>
                </li>
                <li>
                    <Link to="/member/4">Member4</Link>
                </li>
                <li>
                    <Link to="/member/5">Member5</Link>
                </li>
                <li>
                    <Link to="/member/6">Member6</Link>
                </li>
                <li>
                    <Link to="/member/7">Member7</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;