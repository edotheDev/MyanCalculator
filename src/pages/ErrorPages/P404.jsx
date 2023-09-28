import './P404.css';
import { Link } from 'react-router-dom';

export const P404 = () => {
    return (
        <div className="p404-wrapper">
            <h1 className="P404-heading">404</h1>
            <h2 className="P404-subheading">စာမျက်နှာ ရှာမတွေ့ပါ။</h2>
            <Link to="/">
                <button className="btnBack">ပင်မစာမျက်နှာသို့ ပြန်သွားရန်</button>
            </Link>
        </div>
    )
}