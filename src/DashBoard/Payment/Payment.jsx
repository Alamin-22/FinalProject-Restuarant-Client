import { loadStripe } from "@stripe/stripe-js";
import SectionTile from "../../Components/SectionTitle/SectionTile";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";





const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Test);
const Payment = () => {
    return (
        <div>
            <SectionTile heading={"Payment"} subHeading={"Please Pay To eat"}></SectionTile>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;