import React from 'react';
import { Navigate } from 'react-router-dom'; 
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { auth } from './firebase/firebaseConfig';

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth); 

    if (loading) return <p>Loading...</p>; 
    return user ? children : <Navigate to="/login" />; 
};

export default ProtectedRoute;
