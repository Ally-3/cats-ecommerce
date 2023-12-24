import '../App.css';
import catlogo from '../images/catlogo.png';

const Landing = () => {

    return (
        <div className='App-l'>
            <div className='body-container-l'>
                <div className='text-container-l'>
                <img src={catlogo} className='logo-l' alt="Cat Logo" />  
                    <h3>Adopt a cat from Purrfect Planet today and bring a slice of fluffy cloud comfort into your home</h3>
                </div>
            </div>
        </div>
    );
};

export default Landing;