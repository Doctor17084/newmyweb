import React, { useState } from 'react';
import { HERO_MOVIES, NEW_MOVIES } from '../data';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [active, setActive] = useState(HERO_MOVIES[0]);

    return (
        <div className="home-content">
            {/* HERO SECTION */}
            <section className="hero-section" style={{ backgroundImage: `url('${active.bg}')` }}>
                
                {/* მარცხენა ვერტიკალური ინდიკატორები */}
                <div className="hero-indicators">
                    {HERO_MOVIES.map((m) => (
                        <div key={m.id} className={`dash ${active.id === m.id ? 'active' : ''}`}></div>
                    ))}
                </div>

                {/* ცენტრალური ინფორმაცია */}
                <div className="hero-info">
                    <h1 className="hero-title">{active.title}</h1>
                    
                    <div className="meta-row">
                        <span className="imdb-tag">IMDb: {active.imdb}</span>
                        <div className="genre-tags">
                            <span className="genre-tag">თრილერი</span>
                            <span className="genre-tag">კრიმინალური</span>
                            <span className="genre-tag">საშინელება</span>
                        </div>
                    </div>

                    <p className="hero-desc">{active.desc}</p>
                    
                    <div className="hero-actions">
                        <button className="btn-main-play">
                            ფილმის ნახვა
                            <div className="play-circle"><i className="fa-solid fa-play"></i></div>
                        </button>
                        
                        <div className="hero-nav-arrows">
                            <button className="arrow-btn"><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="arrow-btn"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

                {/* მარჯვენა 3x3 გრიდი */}
                <div className="hero-grid-3x3">
                    {HERO_MOVIES.map((movie) => (
                        <div 
                            key={movie.id}
                            className={`grid-card ${active.id === movie.id ? 'active' : ''}`}
                            style={{ backgroundImage: `url('${movie.poster}')` }}
                            onMouseEnter={() => setActive(movie)}
                        ></div>
                    ))}
                </div>
            </section>

            {/* ახალი დამატებულების სექცია */}
            <section className="new-movies-section">
                <div className="section-header">
                    <h2>ახალი დამატებული</h2>
                    <a href="#">ყველას ნახვა <i className="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className="movies-container">
                    {NEW_MOVIES.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </section>
        </div>
    );
};

export default Home;