import { useState, useRef } from "react";
import "./styles.css";

const images = [
    "https://aurn.com/wp-content/uploads/2020/06/2.png",
    "https://media.them.us/photos/6557f9f536fcbeef03ed22de/16:9/w_2560%2Cc_limit/indigenous-playlist_header.jpg",
    "https://media.them.us/photos/619e883557b96ec7f727bee1/16:9/w_2560%2Cc_limit/queer-grammy.jpg",
    "https://cdn.abcotvs.com/dip/images/12102968_080522-localish-AGD6476-QUEERVIBES-KGO-vid.jpg",
    "https://www.attitude.co.uk/wp-content/uploads/sites/5/2023/12/Albums-Collage-Web-Banner.jpg",
    "https://www.billboard.com/wp-content/uploads/media/evolution-of-the-queer-pop-star-2019-billboard-fea-1500.jpg",
]

const artistsData = [
    {
        image: "https://aurn.com/wp-content/uploads/2020/06/2.png",
        video: "https://www.youtube.com/embed/huGd4efgdPA?si=vebzfgb-jBx2xsBI",
        name: "Alex Rivera",
        genre: ["Indie Pop", "Alternative"],
        description: "An indie pop artist known for their eclectic sound and energetic performances."
    },
    {
        image: "https://media.them.us/photos/6557f9f536fcbeef03ed22de/16:9/w_2560%2Cc_limit/indigenous-playlist_header.jpg",
        video: "https://www.youtube.com/embed/3tmd-ClpJxA",
        name: "Jade Smith",
        genre: ["Electronic"],
        description: "A rising star in electronic music with a unique style that blends various influences."
    },
];


const ArtistShowcase = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const iframeRefs = useRef([]);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
        if (iframeRefs.current[index]) {
            iframeRefs.current[index].src = `${artistsData[index].video}?autoplay=1&controls=0`;
        }
    };

    const handleMouseLeave = (index) => {
        setHoverIndex(null);
        if (iframeRefs.current[index]) {
            iframeRefs.current[index].src = `${artistsData[index].video}?controls=0`;
        }
    };

    return (
        <div className="artist-section">
            <h2 className="artist-heading">Queer Artists</h2>
            <div className="artist-grid">
                {artistsData.map((artist, index) => (
                    <div
                        className="artist-card"
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img src={artist.image} alt={artist.name} className="artist-image" />
                        <iframe
                            ref={(el) => (iframeRefs.current[index] = el)}
                            src={`${artist.video}?controls=0&mute=1`} // Initial state without autoplay
                            className="artist-video"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                        <div className="artist-overlay">
                            <div className="artist-info">
                                <h3 className="artist-name">{artist.name}</h3>
                                <div className="artist-genres">
                                    {artist.genre.length > 0 ? (
                                        artist.genre.map((g, i) => (
                                            <a href={`/genres/${g.toLowerCase()}`} key={i} className="artist-genre-link">
                                                {g}
                                            </a>
                                        ))
                                    ) : (
                                        <p className="no-genres">No genre listed</p>
                                    )}
                                </div>
                                <p className="artist-description">{artist.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistShowcase;
