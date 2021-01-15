import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../customHooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);

    const initialForm = {
        hero: q
    }
    const [heroSearch, handleInputChange] = useForm(initialForm);

    const { hero } = heroSearch;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`);
    }

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />


            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input type='text' name='hero' placeholder='Find your hero' autoComplete='off' className='form-control' value={hero} onChange={handleInputChange} />
                        <button type='submit' className='btn m-1 btn-block btn-outline-primary'>Search</button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {/* Si no se busca nada que ponga un alert pidiendo una busqueda */}
                    {
                        (q === '') &&
                        <div className='alert alert-info'>
                            Please, search a hero
                        </div>
                    }

                    {/* Si no existe un heroe con lo buscado que nos avise */}
                    {
                        (q !== '' && heroesFilter.length === 0) &&
                        <div className='alert alert-danger'>
                            There is not a hero with that name
                        </div>
                    }

                    <div className='animate__animated animate__fadeIn'>
                        {
                            heroesFilter.map(hero => (<HeroCard key={hero.id} {...hero} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
