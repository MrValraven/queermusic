import React from 'react'
import Hero from './Hero/Hero'
import News from './News/News'
import ArtistShowcase from './ArtistsShowcase/ArtistsShowcase'

const Homepage = () => {
    return (
        <>
            <Hero />
            <ArtistShowcase />
            <News />
        </>
    )
}

export default Homepage