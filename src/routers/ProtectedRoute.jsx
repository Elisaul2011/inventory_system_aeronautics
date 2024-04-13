import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";
import PropTypes from "prop-types";

export const ProtectedRoute = ({children}) => {
    const auth = useAuth();

    return auth.isAuthenticated ? children : <Navigate to="/login" />;
}

ProtectedRoute.propTypes = {
    children: PropTypes.any,
};
