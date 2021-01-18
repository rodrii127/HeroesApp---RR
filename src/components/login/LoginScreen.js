import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../customHooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const [ { user }, handleInputChange ] = useForm({
                       user: '' 
                    });

    const path = localStorage.getItem('lastPath') || '/';

    const handleSubmit = (  ) => {
        // history.push('/');
        history.replace(path);
        dispatch({
            type: types.login,
            payload: {
                name: user
            }
        })
    }

    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr />

            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="col-md-5 col-md-offset-4 mx-auto">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className='btn btn-primary' type='submit'> Login </button >
                            </span>
                            <input 
                                type="text" 
                                name='user'
                                className="form-control" 
                                placeholder="User" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1"
                                value= { user }
                                onChange={ handleInputChange }/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
