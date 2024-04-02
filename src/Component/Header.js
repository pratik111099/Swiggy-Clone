import { useSelector } from "react-redux";
import Logo from "../../logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    const { cartItem } = useSelector((store) => store.cart);

    return (
        <div className="flex justify-between px-4 py-1 align-middle bg-red-200 shadow-xl sticky top-0 z-30">
            <div className="logo">
                <img
                    className="h-20 bg-red-200 rounded-full"
                    src={Logo}
                    alt="logo"
                />
            </div>
            <ul className="flex p-4">
                <li className="active p-2">
                    <Link to="/">Home</Link>
                </li>

                <li className="p-2">
                    <Link to="/about">About</Link>
                </li>

                <li className="p-2">
                    <Link to="/services">Service</Link>
                </li>
                <li className="p-2">
                    <Link to="/cart">Cart: {cartItem.length}</Link>
                </li>
                <li className="p-2">
                    <Link to="/instamart">Instamart</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
