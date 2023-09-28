import './Heading.css';
import Clover from '../../../assets/global/emojis/Four_Leaf_Clover.svg';
import Logo from '../../../assets/global/logos/KanCalculator.svg';

export const Heading = () => {
    return (
        <div className="headingWrapper">
            <h1 className="heading">မင်္ဂလာပါ။ <object className="emoji" data={Clover}></object></h1>
            <h1 className="heading h-main"> <object className="logo" data={Logo}></object> မှကြိုဆိုပါတယ်။</h1>
        </div>
    );
}