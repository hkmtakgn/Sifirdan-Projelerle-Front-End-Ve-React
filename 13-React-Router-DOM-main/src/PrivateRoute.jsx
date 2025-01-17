import { Navigate } from "react-router-dom"


export default function PrivateRoute({children,user}) {

    if(!user?.id) {
        return <Navigate to="/login" />
    }

    return children

};
