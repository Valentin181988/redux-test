import { Link } from './Layout.styled';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
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
            <UserMenu />
        </header>
    );
};