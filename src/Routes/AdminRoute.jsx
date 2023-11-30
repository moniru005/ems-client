import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isHR, isAdminAndHRLoading] = useAdmin();
    
    const location = useLocation();

    if(loading || isAdminAndHRLoading){
        return <RingLoader color="#36d7b7"/>
    }

    if(user && isAdmin && isHR){
        return children;
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default AdminRoute;