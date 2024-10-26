import './Newsletter.css'
import discover from '../../assets/discover.jpg'

function Newsletter() {
    return (
        <div className='newsletter-container'>
            <div className='newsletter-wrapper'>
                <div className='newsletter-image'>
                    <img src={discover} alt='' />
                </div>
                <div className='newsletter-content'>
                    <h1>Explore the World with us</h1>
                    <p>Subscribe to see the deals price frop the moment you sign up!</p>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your email' />
                        <button>Subcribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;

