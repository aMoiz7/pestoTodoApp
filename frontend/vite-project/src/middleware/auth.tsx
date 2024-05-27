import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface AuthRouteProps {
    children: React.ReactNode;
    type: 'private' | 'public';
}

const Auth: React.FC<AuthRouteProps> = ({ children, type }) => {
    const navigate = useNavigate();
   
    const userStatus = useSelector((state: any) => state.user.userStatus);
    const accessToken = Cookies.get("accessToken")
  
    let isAuth = false;
    if(userStatus || accessToken){
      isAuth=true
    }
  
    console.log(userStatus, 'userStatus');

    useEffect(() => {
        if (isAuth && type === 'public') {
            navigate('/');
        } else if (!isAuth && type === 'private') {
            navigate('/login');
        }
    }, [isAuth, type, navigate]);

    if ((isAuth && type === 'public') || (!isAuth && type === 'private')) {
        return null;
    }

    return <>{children}</>;
};

export default Auth;
