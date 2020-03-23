import React from 'react';
import PropTypes from 'prop-types';

import './PopularPage.scss';
import { MoviesList } from '../../Components/MoviesList/MoviesList';
import { Error } from '../../Components/Errors/Erorr';
class PopularPage extends React.Component {

    renderPopularList = () => {
        const { movies } = this.props;
        if (movies.length) {
            return (
                <MoviesList movies={movies} />
            );
        }
        return <Error text='Массив фильмов пуст' />;
    };

    render() {       
        return (
            <div className='popular-page'>
                <h1 className='popular-page__title'>
                    Популярное
                </h1>
                <div className='popular-page__container'>
                    {this.renderPopularList()}
                </div>
            </div>
        );
    }
}

export default PopularPage;

PopularPage.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            total_pages: PropTypes.number,
            results: PropTypes.arrayOf
        })
    )
};
