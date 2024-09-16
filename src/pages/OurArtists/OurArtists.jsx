import React from 'react';
import Header from '../../components/Header/Header.jsx'
import { Link } from 'react-router-dom';
import artistsData from '../../static/artistsData.js';
import './styles.css';

const OurArtists = () => {
    const MAX_NUMBER_OF_CHARS_IN_ARTIST_BIO = 180
    function truncateText(text, maxLength = MAX_NUMBER_OF_CHARS_IN_ARTIST_BIO) {
        if (text.length <= maxLength) {
            return text;
        }

        // Find the last space within the limit to avoid cutting words in half
        const truncated = text.slice(0, maxLength);
        const lastSpaceIndex = truncated.lastIndexOf(' ');

        // If there's no space within the limit, just cut off the text
        return lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
    }
    return (
        <>
            <Header />
            <div className="our-artists">
                <div className="our-artists-intro">
                    <h1>Discover Our Talented Queer Artists</h1>
                    <p>Explore the creative world of diverse queer music talents from various genres.</p>
                </div>

                <div className="artist-grid">
                    {artistsData.map((artist) => (
                        <div className="artist-card" key={artist.stageName}>
                            <Link to={`/artists/${artist.stageName.toLowerCase()}`} className="artist-link">
                                <div className="artist-image-container">
                                    <img src={artist.imageGallery[2]} alt={artist.stageName} className="our-artist-image" />
                                    <div className="artist-overlay">
                                        <div className="artist-details">
                                            <h3>{artist.stageName}</h3>
                                            <div className="artist-genres">
                                                {artist.musicalGenres.map((genre) => (
                                                    <p key={genre} className='genreTag'>{genre}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="artist-description">
                                    <p>{truncateText(artist.bio)}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurArtists;
