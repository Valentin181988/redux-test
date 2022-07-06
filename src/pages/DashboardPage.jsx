
import { useLogOutRedirect } from "../hoks/useLogOutRedirect";


export const DashboardPage = () => {
    useLogOutRedirect();

    return(
      <div>Dashboard</div>
    );
};




  