import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheekOutForm from './CheekOutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className='md:w-3/5 mx-auto w-4/5'>
           <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
           <div>
            <Elements stripe={stripePromise}>
                <CheekOutForm></CheekOutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;