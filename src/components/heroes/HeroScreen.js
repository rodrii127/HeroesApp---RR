import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ( {history} ) => {
    
    const { heroeId } = useParams();

    const hero = useMemo(()=> getHeroesById( heroeId ), [heroeId]);

    if (hero === undefined){
        return <Redirect to='/marvel'/>
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleReturn = () =>{
        history.replace(`/${publisher}`);
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`../assets/heroes/${heroeId}.jpg`} className='img-thumbnail animate__animated animate__fadeInLeft' alt={superhero}/>
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3> {superhero} </h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b> Alter ego: </b> {alter_ego}</li>
                    <li className='list-group-item'> <b> Publisher: </b> {publisher}</li>
                    <li className='list-group-item'> <b> First Appearance: </b> {first_appearance}</li>
                </ul>

                <h5> Characters </h5>
                <p>{characters}</p>

                <button className='btn btn-outline-info btn-lg' onClick={ handleReturn }> Return </button>
            </div>
        </div>
    )
}
