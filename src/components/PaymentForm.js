import React, { useState } from "react";
import axios from "axios";
import { handlePayment } from "../api/paystack";

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(email, amount)
        console.log(email, amount)
    };


    return (
        <div>
            <h2>Make a Payment</h2>
            <form onSubmit={handleSubmit}>
                {/* Amount Field */}
                <div>
                    <label>Amount:</label>
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="littyofficials@gmail.com"
                    />
                </div>


                {/* Pay Button */}
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>

            </form>
            
        </div>
    )
};

export default PaymentForm;
