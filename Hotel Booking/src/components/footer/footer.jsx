import { FaLocationDot } from 'react-icons/fa6'
import './footer.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { destinations, info, services } from '../../data'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-lists'>
                <ul className='footer-list'>
                    <h2>Destination</h2>
                    {destinations.map((destination) => (
                        <li key={destination.id} className='footer-list-item'>{destination.title}</li>
                    ))}
                </ul>

                <ul className='footer-list'>
                    <h2>Information</h2>
                    {info.map((item)=> (
                        <li key={item.id} className='footer-list-item'>{item.title}</li>
                    ))}
                </ul>

                <ul className='footer-list'>
                    <h2>Services</h2>
                    {services.map((service) => (
                        <li key={service.id} className='footer-list-item'>{service.title}</li>
                    ))}
                </ul>

                <ul className='footer-list'>
                    <h2>Contact</h2>
                    <li className='footer-list-item'>
                        <FaLocationDot /> Street Name, City Name
                    </li>
                    <li className='footer-list-item'>
                        <FaPhoneAlt /> 012-345678
                    </li>
                    <li className='footer-list-item'>
                        <IoMdMail /> Email@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;