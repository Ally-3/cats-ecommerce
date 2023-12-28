import '../App.css';
import ContactForm from '../Components/ContactForm';

const ContactUs = () => {
    return (
        <div className='body-container-1 other-pg-bg'>
            <div className='text-container-1'>
                <h1>Contact Us</h1>
                <p>My name is Aleasa and I am working towards a junior developer role</p>
                <p>This project is a cats e-commerce website, it is a React example using Cats API</p>
            </div>
            <div className='text-container-1'>
                <h1>Contact Form</h1>
                <ContactForm />
                <br></br>
            </div>
        </div>
    );
};

export default ContactUs;