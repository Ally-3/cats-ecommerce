import '../App.css';
import catlogo from '../images/catlogo.png';
import RandomCat from '../Components/RandomCat';

const AboutUs = () => {
    return (
        <div>
            <h1 className='about-h1'>About Us</h1>
            <div className='about-parent'>
                <div>
                <div className='about-child'>
                    <h2><img src={catlogo} alt="Cat Logo" /> 
                        Find Your Purr-fect Companion!</h2>
                    <p>Our mission is to connect loving homes with joyous furry companions, making the journey to find your ideal feline friend as delightful as the companions themselves.</p>
                </div>
                <div className='about-child'>
                    <h2><img src={catlogo} alt="Cat Logo" /> 
                        Adoption with Ease</h2>
                    <p>Experience a seamless, stress-free adoption process with our knowledgeable team guiding you through the joyous journey of welcoming a new family member.</p>
                </div>
                <div className='about-child'>
                    <h2><img src={catlogo} alt="Cat Logo" /> 
                        Your Feline Journey Awaits!</h2>
                    <p>Embark on a joyous adventure with Whisker World, finding your purr-fect companion. Discover the warmth, laughter, and unconditional love a feline friend brings to your home.</p>
                </div >
                <div>
                    <RandomCat />
                    <br />
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;