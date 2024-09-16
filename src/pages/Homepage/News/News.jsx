import React from "react";
import "./styles.css";

const newsData = [
    {
        image: "https://bpb-us-e2.wpmucdn.com/newsevents.illinoisstate.edu/dist/c/2/files/2023/08/qc-sashay-2023-11.jpg",
        title: "Queer Music Festival Rocks the City",
        description: "The biggest queer music event of the year brought together artists from around the globe in a spectacular celebration of diversity and music."
    },
    {
        image: "https://media.them.us/photos/65959f9a311867dbae746a77/master/pass/2024-albums.jpg",
        title: "Emerging Queer Artists to Watch in 2024",
        description: "Meet the rising stars in the queer music scene, pushing boundaries and creating waves in the industry."
    },
    {
        image: "https://www.udiscovermusic.com/wp-content/uploads/2021/06/LGBTQ-Women-in-Music-history.jpg",
        title: "The Evolution of Queer Representation in Music",
        description: "A look back at how queer artists have changed the face of music over the past decade."
    }
];

const News = () => {
    return (
        <div className="news-section">
            <h2 className="news-heading">Latest News</h2>
            <div className="news-cards">
                {newsData.map((item, index) => (
                    <div className="news-card" key={index}>
                        <img src={item.image} alt={item.title} className="news-image" />
                        <div className="news-content">
                            <h3 className="news-title">{item.title}</h3>
                            <p className="news-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
