import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ProductSuite from "./ProductSuite/ProductSuite";
import Exclusive from "./Exclusive/Exclusive";
import CTA from "./CTA/CTA";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet> <title>Home | EMS</title> </Helmet>
            <Banner></Banner>
            <ProductSuite></ProductSuite>
            <Exclusive></Exclusive>
            <Testimonials></Testimonials>
            <CTA></CTA>
        </div>
    );
};

export default Home;