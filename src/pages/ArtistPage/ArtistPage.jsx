import React from 'react';
import Header from '../../components/Header/Header.jsx'
import './styles.css'; // Assuming you'll style it with CSS
import artistData from '../../static/artistsData.js'; // Import JSON data
import { useParams } from 'react-router-dom';

const ArtistPage = () => {
    const { artistName } = useParams()
    const artist = artistData.find((artist) => artist.stageName.toLowerCase() === artistName);
    console.log('useParams: ' + useParams());
    console.log(artist)
    return (
        <>
            <Header />
            <div className="artist-page">
                {/* Header Section with Image, Name and Pronouns */}
                <header className="artist-header">
                    <img src={artist.imageGallery[2]} alt={`${artist.stageName}`} className="artist-header-image" />
                    <div className="artist-header-content">
                        <h1>{artist.stageName}</h1>
                        <p>Pronomes: {artist.pronouns}</p>
                    </div>
                </header>

                {/* Bio Section */}
                <section className="artist-bio">
                    <h2>Bio</h2>
                    <p>{artist.bio}</p>
                </section>

                {/* Gallery Section */}
                <section className="artist-gallery">
                    <h2>Galeria de Imagens</h2>
                    <div className="gallery-grid">
                        {artist.imageGallery.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index + 1} of ${artist.stageName}`} />
                        ))}
                    </div>
                </section>

                {/* Video Section */}
                <section className="artist-video">
                    <h2>Vídeo</h2>
                    <iframe
                        src={`${artist.video}?autoplay=0&controls=0`}
                        title="Artist Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </section>

                {/* Social Media Section */}
                <section className="artist-socials">
                    <h2>Redes Sociais</h2>
                    <ul>
                        <li><a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href={artist.socialMedia.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
                        <li><a href={artist.socialMedia.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        <li><a href={artist.socialMedia.spotify} target="_blank" rel="noopener noreferrer">Spotify</a></li>
                        <li><a href={artist.socialMedia.appleMusic} target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                        <li><a href={artist.socialMedia.soundcloud} target="_blank" rel="noopener noreferrer">SoundCloud</a></li>
                    </ul>
                </section>

                {/* Awards Section */}
                <section className="artist-awards">
                    <h2>Prémios</h2>
                    <ul>
                        {artist.awards.map((award, index) => (
                            <li key={index}>{award}</li>
                        ))}
                    </ul>
                </section>

                {/* Press Section */}
                <section className="artist-clipping">
                    <h2>Press</h2>
                    <ul>
                        {artist.press.map((clip, index) => (
                            <li key={index}>
                                <a href={clip.link} target="_blank" rel="noopener noreferrer">{clip.title}</a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Manager, Booking, and Label Section */}
                {artist.manager || artist.booking || artist.label ? (
                    <section className="artist-management">
                        <h2>Manager, Booking e Editora</h2>
                        <p><strong>Manager:</strong> {artist.manager}</p>
                        <p><strong>Booking:</strong> {artist.booking}</p>
                        <p><strong>Editora:</strong> {artist.label}</p>
                    </section>
                ) : null}

                {/* Events Section */}
                <section className="artist-events">
                    <h2>Agenda de Eventos</h2>
                    <ul>
                        {artist.events.map((event, index) => (
                            <li key={index}>
                                <p><strong>{event.datw}:</strong> {event.event} - {event.venue}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default ArtistPage;
