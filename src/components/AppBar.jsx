import { Link } from './Layout.styled';
import { useSelector } from 'react-redux/es/exports';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return (
        <header 
          style={{ 
             display: 'flex',
             justifyContent: 'space-between',
             padding: 8, 
             borderBottom: "1px solid black", 
             marginBottom: 12}}
        >
            <nav>
                <Link to="/login">Log in</Link>
                <Link to="/counter">Counter</Link>
            </nav>
            {isLoggedIn && <UserMenu />}  
        </header>
    );
};