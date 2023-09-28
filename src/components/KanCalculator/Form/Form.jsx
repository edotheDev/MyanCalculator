import { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tbx1: '',
            tbx2: '',
            tbx3: '',
            tbx4: '',
            probability: null,
            showProbability: false,
            profit: null,
            showProfit: false,
            resultNumerator: '',
            resultDenominator: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    findGCD = (a, b) => {
        if (b === 0) {
            return a;
        }
        return this.findGCD(b, a % b);
    };


    calculateProbability = () => {
        const { tbx1, tbx2, tbx3, tbx4 } = this.state;
        const ticketAmount = parseInt(tbx1, 10);
        const totalTicket = parseInt(tbx2, 10);

        const num = parseInt(tbx1, 10);
        const den = parseInt(tbx2, 10);

        // Reset error states and classes
        this.setState({ tbx1Error: '', tbx2Error: '', tbxError: '' });

        if (!isNaN(ticketAmount) && !isNaN(totalTicket)){
            if (ticketAmount > totalTicket) {
                this.setState({ tbx1Error: '၀ယ်ယူထားသောမဲအရေအတွက်သည် စုစုပေါင်းမဲအရေအတွက်ထက်မများရ။' });
            } else if (totalTicket === 0 ) {
                this.setState({ tbx2Error: 'စုစုပေါင်းမဲအ‌ရေအတွက်သည် (0) ဖြစ်၍မရပါ။' });
            } else {
                this.setState({ tbx1Error: '' });
                const probability = (ticketAmount / totalTicket) * 100;
                this.setState({ probability, showProbability: true });

                const gcd = this.findGCD(num, den);
                const resultNumerator = num / gcd;
                const resultDenominator = den / gcd;
                this.setState({ resultNumerator, resultDenominator });

                const ticketPrice = parseInt(tbx3, 10);
                const productPrice = parseInt(tbx4, 10);

                if (!isNaN(ticketPrice) && !isNaN(productPrice)) {
                    let profit = (totalTicket * ticketPrice) - productPrice;
                    profit = profit < 0 ? 0 : profit; // Ensure profit is at least 0
                    this.setState({ profit, showProfit: true });
                } else {
                    this.setState({ profit: null, showProfit: false });
                }
            }
        } else {
            this.setState({ probability: null, showProbability: false, profit: null, showProfit: false });
            this.setState({ tbxError: 'ကျေးဇူးပြု၍ အင်္ဂလိပ်ဂဏန်းများကိုသာ ရိုက်ထည့်ပေးပါ။' });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.calculateProbability();
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="my-form">
                    <div className="tbxContainer">
                        <label>
                            ၀ယ်ယူထားသောမဲအရေအတွက်
                        </label>
                        <input
                            type="text"
                            name="tbx1"
                            placeholder="required"
                            value={this.state.tbx1}
                            onChange={this.handleChange}
                            className={`text-input ticketAmount ${this.state.tbx1Error ? 'error' : ''} ${this.state.tbxError ? 'error' : ''} required`}
                            required
                        />
                        {this.state.tbx1Error && (
                            <p className="error-message">{this.state.tbx1Error}</p>
                        )}
                        {this.state.tbxError && (
                            <p className="error-message">{this.state.tbxError}</p>
                        )}
                    </div>
                    <div className="tbxContainer">
                        <label>
                            စုစုပေါင်းမဲအရေအတွက်
                        </label>
                        <input
                            type="text"
                            name="tbx2"
                            placeholder="required"
                            value={this.state.tbx2}
                            onChange={this.handleChange}
                            className={`text-input totalTicket ${this.state.tbx2Error ? 'error' : ''} ${this.state.tbxError ? 'error' : ''} required`}
                            required
                        />
                        {this.state.tbx2Error && (
                            <p className="error-message">{this.state.tbx2Error}</p>
                        )}
                    </div>
                    <div className="tbxContainer">
                        <label>
                            မဲတခု၏တန်ဖိုး (ကျပ်)
                        </label>
                        <input
                            type="text"
                            name="tbx3"
                            placeholder="optional"
                            value={this.state.tbx3}
                            onChange={this.handleChange}
                            className={`text-input ${this.state.tbxError ? 'error' : ''}`}
                        />
                    </div>
                    <div className="tbxContainer">
                        <label>
                            မဲနှိုက်သောပစ္စည်း၏ ကာလပေါက်ဈေး (ကျပ်)
                        </label>
                        <input
                            type="text"
                            name="tbx4"
                            placeholder="optional"
                            value={this.state.tbx4}
                            onChange={this.handleChange}
                            className={`text-input ${this.state.tbxError ? 'error' : ''}`}
                        />
                    </div>
                    <div className="btnCalculate">
                        <button className="btnCalculate" type="submit">တွက်ချက်သည်</button>
                    </div>
                </form>
                <div className="probabilityResult" style={{ display: this.state.showProbability ? 'inline-flex' : 'none' }}>
                    {this.state.probability !== null && (
                        <>
                            <p>
                                မဲပေါက်နိုင်ခြေ = <span>{this.state.probability}%</span>
                            </p>
                            <p>
                                မဲ ({this.state.resultDenominator}) ကြိမ်နှိုက်လျှင် သင့်တွင် ({this.state.resultNumerator}) ကြိမ်ပေါက်နိုင်ခြေရှိသည်။
                            </p>
                        </>
                    )}
                    {this.state.profit !== null && (
                        <p>
                            မဲဖောက်ပေးသောသူသည် ({this.state.profit}) ကျပ် မြတ်ပါသည်။
                        </p>
                    )}
                </div>
            </>
        );
    }
}

export default Form;
