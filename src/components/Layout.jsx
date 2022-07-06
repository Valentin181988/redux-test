import { Outlet } from 'react-router-dom';
import { Link } from './Layout.styled';

export const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/login">Log in</Link>
                <Link to="/counter">Counter</Link>
            </nav>
            <hr />
            <Outlet />
        </div>

    );
};