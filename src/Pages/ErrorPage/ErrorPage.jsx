import { FaArrowUp, FaHome } from 'react-icons/fa';
import image from '../../assets/images/image.jpg'

const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center h-screen">
            <img className=' flex mx-auto w-1/3 p-6'
             src={image} alt="" />
        {/* <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1> */}
        <p className="mb-4 text-2xl text-gray-600">Sorry, We couldn&apos;t find what you looking for!</p>
        <div className="animate-bounce">
          <FaArrowUp className='flex mx-auto text-3xl text-red-500'></FaArrowUp>
        </div>
        <p className="mt-4 text-gray-600 text-xl items-center flex gap-3 justify-center">Let&apos;s get you back to <a href="/" className="text-blue-500 font-medium flex gap-1 justify-center items-center"><FaHome className='text-xl'></FaHome>Home</a>.</p>
      </div>
    );
};

export default ErrorPage;