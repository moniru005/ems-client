import React from "react";

const CTA = () => {
  return (
    <div className="my-16 font-workSans">
      <div className="relative mt-12 font-workSans bg-[url('https://i.ibb.co/ZcJ3h1x/textured-1-2.jpg')] w-[80%] h-[350px] mx-auto flex justify-center rounded-lg">
        
        <div className="absolute top-12 flex flex-col lg:flex-row  items-center justify-evenly mx-auto gap-12 w-full">
            
          <div className="w-2/6 space-y-3">
            <h2 className="text-[28px] text-[#0064A5] font-semibold">
              We&apos;d love to walk you <br /> through the platform
            </h2>
            <p className="w-96 text-sm">
              Fill in the form and we&apos;ll schedule a free demo
            </p>
          </div>
          {/* form */}
          <div className="w-3/6 ">
            <form className="flex flex-col space-y-3 w-full">
              <input 
              className="p-2 rounded border border-[#00C957]" 
              type="text" name="name" placeholder="Name" />

              <input 
              className="p-2 rounded border border-[#00C957]" 
              type="email" name="email" placeholder="Email" />

              <input 
              className="p-2 rounded border border-[#00C957]" 
              type="text" name="phone" placeholder="Phone" />

              <input 
              className="p-2 rounded border border-[#00C957]" 
              type="text" name="city" placeholder="City" />

              <input 
              className="p-2 bg-[#0063a5ac] hover:bg-[#0064A5] text-white rounded cursor-pointer" 
              type="submit" value="Submit" />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
