import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from 'react-router-dom';

export const DashboardPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    useEffect(() => {
       if(!isLoggedIn) {
        navigate('/login', {replace: true});
       }
    }, [isLoggedIn, navigate]);

    return(
      <div>Dashboard</div>
    );
};




  