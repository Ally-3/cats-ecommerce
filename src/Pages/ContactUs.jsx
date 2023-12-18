import '../App.css';
import ContactForm from '../Components/ContactForm';

const ContactUs = () => {
    return (
        <div className='body-container'>
            <div className='text-container'>
                <h1>Contact Us</h1>
                <p>My name is Aleasa and I am working towards a junior developer role</p>
                <p>This project is a cats e-commerce website, it is a React example using Cats API</p>
            </div>
            <div className='text-container'>
                <h1>Contact Form</h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;