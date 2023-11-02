import '../Components/cat.css';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import cat4 from '../images/cat4.jpg';
import catClock from '../images/catClock.png';

const cat = () => {
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
                    <h3>Pay rise was set to be 2.1% - NHS chief</h3>
                </div>
                <div className="cat-p">
                    <p>NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers.</p>
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
                    <h3>Charity criticises Morgan's comments about Meghan</h3>
                </div>
                <div className="cat-p">
                    <p>Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.</p>
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
                    <h3>Unilever drops word 'normal' from beauty products</h3>
                </div>
                <div className="cat-p">
                    <p>The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity.</p>
                </div>
                <div className="cat-bottom">
                    <p><img src={catClock} alt="cat Clock"></img> 10m | <b>Business</b></p>
                </div>
            </div>
        </div>
    )
}

export default cat;