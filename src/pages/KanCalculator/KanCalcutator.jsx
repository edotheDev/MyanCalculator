import './KanCalculator.css';
import { Heading } from "../../components/KanCalculator/Heading/Heading.jsx";
import Form from "../../components/KanCalculator/Form/Form.jsx";
import {Footer} from "../../components/Global/Footer/Footer.jsx";

export const KanCalculator = () => {
    return (
        <div className="pageWrapper">
            <section className="section hero">
                <Heading />
                <p className="heroText">သင်၀ယ်ယူထားသောမဲအရေအတွက်နှင့် စုစုပေါင်းရှိသောမဲအရေအတွက်ကို အောက်တွင်ဖြည့်၍ သင့်ရဲ့မဲပေါက်နိုင်မှု ရာခိုင်နှုန်းကိုစစ်ဆေးနိုင်ပါသည်။ မဲတခု၏ တန်ဖိုးနှင့် မဲနှိုက်သောပစ္စည်း၏ ကာလတန်ဖိုးကိုဖြည့်ပေးပါက မဲရောင်းသောသူ ယူထားသည့်အမြတ်ကိုပါ တွက်ချက်ပေးပါလိမ့်မည်။</p>
                <Form />
            </section>
            <footer className="section footer">
                <Footer />
            </footer>
        </div>
    );
}