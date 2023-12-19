import '../App.css';
import catlogo from '../images/catlogo.png';
import RandomCat from '../Components/RandomCat';

const AboutUs = () => {
    return (
        <div className='body-container'>
            <div className='text-container'>
                <h1>About Us</h1>
                <h2><img src={catlogo} alt="Cat Logo" /> 
                    Find Your Purr-fect Companion at Whisker World!</h2>
                <p>At Whisker World, we believe that the joy of having a cat by your side is unparalleled. Our mission is to unite loving homes with furry companions who bring endless delight and companionship. Step into a world where the journey to finding your ideal feline friend is as delightful as the companions themselves.</p>
                <h2><img src={catlogo} alt="Cat Logo" /> 
                    Adoption with Ease</h2>
                <p>Our adoption process is designed to be seamless and stress-free. Connect with our knowledgeable team, and let us guide you through the journey of welcoming a new member into your family.</p>
                <h2><img src={catlogo} alt="Cat Logo" /> 
                    Your Feline Journey Awaits!</h2>
                <p>Embark on a heartwarming adventure with Whisker World, where finding your purr-fect companion is a joyous experience. Discover the joy of a feline friend who will fill your home with warmth, laughter, and unconditional love.</p>
                <RandomCat />
                <h2>😽</h2>
            </div>
        </div>
    );
};

export default AboutUs;