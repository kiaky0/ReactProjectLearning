import { allHotels, facilities, rooms } from '../data'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import './Hotel.css'
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark, FaCity, FaMapLocationDot } from 'react-icons/fa6'
import { GiDoubleStreetLights } from 'react-icons/gi'
import { MdPool } from 'react-icons/md'
import { TbParkingCircle } from 'react-icons/tb'
import Footer from '../components/footer/footer'
import { useState } from 'react'

function Hotel() {

    const [open, setOpen] = useState(false)
    const [sliderNumber, setSliderNumber] = useState(0)

    const handleOpen = (i) => {
        setSliderNumber(i)
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber

        if(direction == "1") {
            newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
        } else {
            newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1
        }
        setSliderNumber(newSlideNumber)
    }


    const {id} = useParams()

    const hotel = allHotels.find((hotel) => hotel.id === parseInt(id))

    return (
        <div>
            <Navbar />

            <div className='hotel-container'>

        {open && (
            <div className='slider'>
                <FaCircleXmark className='close' onClick={() => setOpen(false)} />
                <FaCircleArrowLeft className='arrow' onClick={() => handleMove("1")} />
                <div className='slider-wrapper'>
                    <img src={rooms[sliderNumber].image} alt='' className='slider-img'/>
                </div>
                <FaCircleArrowRight className='arrow' onClick={() => handleMove("r")} />
            </div>
        )}

                <div className='hotel-wrapper'>
                    <h1 className='hotel-title'>{hotel.title}</h1>
                    <div className='hotel-location'>
                        <FaMapLocationDot />
                        <span>{hotel.location}</span>
                    </div>
                    <span className='hotel-distance'>Excellent location - 500m from center</span>
                    <span className='hotel-price'>Enjoy a comfortable stay starting at ${hotel.price} per night</span>
                    <div className='hotel-images'>
                        {rooms.map((room,i) => (
                            <div key={i} className='hotel-images-wrapper'>
                                <img src={room.image} alt='' className='hotel-img' onClick={() => handleOpen(i)}/>
                            </div>
                        ))}
                    </div>
                    <div className='hotel-details'>
                        <div className='hotel-details-text'>
                            <h1 className='hotel-title'>About This Hotel</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere in laboriosam, veritatis maxime dignissimos expedita repudiandae, reprehenderit eius exercitationem hic quis soluta qui aperiam sequi. Blanditiis doloribus excepturi quaerat modi.</p>
                            <div className='hotel-facilities'>
                                <h1 className='hotel-facilities-title'>Hotel Facilities</h1>
                                <div className='facilities'>
                                    {facilities.map((facilitie) => (
                                        <div key={facilitie.id} className='facilitie'>
                                            <span className='facilitie-icon'>{facilitie.icon}</span>
                                            <span>{facilitie.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className='hotel-highlights'>
                            <h1>Hotel Highlights</h1>
                            <h4>Perfect for a 4 night stay</h4>
                            <span>Located in the real hear of the Krakow, this property
                                has an excellent location with score 9.8
                            </span>
                            <h4>Breakfast Info</h4>
                            <span>Fresh, Gourmet</span>
                            <h4>Rooms With</h4>
                            <ul>
                                <li>
                                    <GiDoubleStreetLights /> Quiet street view
                                </li>
                                <li>
                                    <MdPool /> Pool with a good view
                                </li>
                                <li>
                                    <FaCity /> City view
                                </li>
                                <li>
                                    <TbParkingCircle /> Free Parking
                                </li>
                            </ul>
                            <button>Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hotel;