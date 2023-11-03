import '../Components/cat.css';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import cat4 from '../images/cat4.jpg';
import catClock from '../images/catClock.png';

const CatsCard = () => {
    return (
        <div className="cat-parent">

            <div className="cat-child">
                <div className="cat-image">
                    <img src={cat1} alt="cat1"></img>
                </div>
                <div className="cat-h3">
                    <h3>Don't think the pandemic is over, Whitty warns</h3>
                </div>
                <div className="cat-p">
                    <p>Unlocking too quickly would lead to a substrantial surge in infection, UK chief medical advisor says.</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 2h | <b>Health</b></p>
                </div>
            </div>

            <div className="cat-child">
                <div className="cat-image">
                    <img src={cat2} alt="cat2"></img>
                </div>
                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Breed</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat2"></img> 1h | <b>UK Politics</b></p>
                </div>
            </div>

            <div className="cat-child">
                <div className="cat-image">
                    <img src={cat3} alt="cat3"></img>
                </div>

                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Breed</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 2h | <b>Entertainment & Arts</b></p>
                </div>
            </div>

            <div className="cat-child">
                <div className="cat-image">
                    <img src={cat4} alt="cat4"></img>
                </div>
                <div className="cat-h3">
                    <h3>Name</h3>
                </div>
                <div className="cat-p">
                    <p>Breed</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 10m | <b>Business</b></p>
                </div>
            </div>
        </div>
    )
}

export default CatsCard;