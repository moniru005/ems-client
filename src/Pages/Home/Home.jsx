import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import ProductSuite from "./ProductSuite/ProductSuite";
import Exclusive from "./Exclusive/Exclusive";
import Testimonials from "./Testimonials/Testimonials";
import CallToAction from "./CTA/CTA";
import WhoWeAre from "../../Components/About/WhoWeAre";
import WhoCanUse from "../../Components/About/WhoCanUse";

const Home = () => {
    return (
        <div>
            <Helmet> <title>Home | EMS</title> </Helmet>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <WhoCanUse></WhoCanUse>
            <Exclusive></Exclusive>
            <ProductSuite></ProductSuite>
            <Testimonials></Testimonials>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;