import '../BBC/BBC.css';
import bbc1 from '../../images/BBC1.jpg';
import bbc2 from '../../images/BBC2.jpg';
import bbc3 from '../../images/BBC3.jpg';
import bbc4 from '../../images/BBC4.jpg';
import bbcClock from '../../images/bbcClock.png';

const BBC = () => {
    return (
        <div className="BBC-parent">

            <div className="BBC-child">
                <div className="BBC-image">
                    <img src={bbc1} alt="BBC1"></img>
                </div>
                <div className="BBC-h3">
                    <h3>Don't think the pandemic is over, Whitty warns</h3>
                </div>
                <div className="BBC-p">
                    <p>Unlocking too quickly would lead to a substrantial surge in infection, UK chief medical advisor says.</p>
                </div>
                <div className="BBC-bottom">
                    <p><img src={bbcClock} alt="BBC Clock"></img> 2h | <b>Health</b></p>
                </div>
            </div>

            <div className="BBC-child">
                <div className="BBC-image">
                    <img src={bbc2} alt="BBC2"></img>
                </div>
                <div className="BBC-h3">
                    <h3>Pay rise was set to be 2.1% - NHS chief</h3>
                </div>
                <div className="BBC-p">
                    <p>NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers.</p>
                </div>
                <div className="BBC-bottom">
                    <p><img src={bbcClock} alt="BBC2"></img> 1h | <b>UK Politics</b></p>
                </div>
            </div>

            <div className="BBC-child">
                <div className="BBC-image">
                    <img src={bbc3} alt="BBC3"></img>
                </div>

                <div className="BBC-h3">
                    <h3>Charity criticises Morgan's comments about Meghan</h3>
                </div>
                <div className="BBC-p">
                    <p>Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.</p>
                </div>
                <div className="BBC-bottom">
                    <p><img src={bbcClock} alt="BBC Clock"></img> 2h | <b>Entertainment & Arts</b></p>
                </div>
            </div>

            <div className="BBC-child">
                <div className="BBC-image">
                    <img src={bbc4} alt="BBC4"></img>
                </div>
                <div className="BBC-h3">
                    <h3>Unilever drops word 'normal' from beauty products</h3>
                </div>
                <div className="BBC-p">
                    <p>The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity.</p>
                </div>
                <div className="BBC-bottom">
                    <p><img src={bbcClock} alt="BBC Clock"></img> 10m | <b>Business</b></p>
                </div>
            </div>
        </div>
    )
}

export default BBC;