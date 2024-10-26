import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Destinations from '../destinations/Destination';
import BestHotels from '../hotels/BestHotels';
import Services from '../services/Services';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/footer';

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <div className='home-container'>
                <Destinations />
                <BestHotels />
                <Services />
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}

export default Home;