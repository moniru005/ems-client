import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import Title from "../../../Components/Title/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  // useEffect(() => {
  //   fetch("/public/reviews.json")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  axiosPublic.get('/reviews')
  .then(res =>{
    setReviews(res.data);
  })
  

  return (
    <section className="my-20 bg-[url(' ')]">
      
        <Title heading="Client Testimonials"></Title>
      

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180}}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className=" text-4xl mt-6" />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-[#0064A5]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
