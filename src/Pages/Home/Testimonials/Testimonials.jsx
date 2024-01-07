import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();


   const {data: reviews = [], isLoading:loading} = useQuery({
    queryKey: ['reviews'],
    queryFn: async() =>{
      const res = await axiosPublic.get('/reviews');
      return res.data;
    }
   })

  if(loading){
    <Loading></Loading>
  }

  return (
    <section className="mt-20 hidden lg:flex flex-col mx-auto ">
      <h2 className="lg:text-4xl text-xl font-semibold text-[#0064A5] mb-6 text-center pt-4">Testimonials</h2>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  lg:w-[80%]">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="">
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className=" text-4xl mt-6" />
              <p className="py-8">{review.details}</p>
              <img className="rounded-full w-32 h-32" src={review.image} alt="" />
              <h3 className="text-2xl text-[#0064A5]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
