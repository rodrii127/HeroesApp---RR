import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ( { history } ) => {
    
    const { user, dispatch } = useContext(AuthContext);

    const handleClick = () =>{
        // history.push('/');
        history.replace('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Rodrigo'
            }
        })
    }
    
    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr/>

            <button className='btn btn-primary' onClick={ handleClick }>
                Login
            </button >
        </div>
    )
}
