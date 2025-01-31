import React, { useContext } from 'react';
// import img1 from '../assets/img1.png';
import { apiData } from './ContextApi';
import Slider from "react-slick";

const Featured = () => {

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    slidesToShow: 4,
  
  };

  // Get data from context
  let data = useContext(apiData);
  console.log(data);

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="font-serif text-center text-[42px] font-bold text-[#1A0B5B]">
          Featured Products
        </h2>
        <div className="">
           <Slider {...settings}>
             {data.map((item, index) => (
            <div key={index} className="!w-[94%] mb-4 shadow-lg">
              <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                {/* Dynamic image for each product */}
                <img src={item.thumbnail} alt={item.name} />
              </div>
              <div className="text-center py-5 bg-[#FFFFFF]">
                {/* Dynamically rendering product details */}
                <h2 className="font-lato font-bold text-[18px] text-primary">
                  {item.title}
                </h2>
                <h5 className="font-serif font-normal text-[#151875] py-2">
                  {`Code - ${item.price}`}
                </h5>
                <p className="font-serif font-normal text-[#151875] py-2">
                  {`$${item.discountPercentage || '42.00'}`}
                </p>
              </div>
            </div>
               ))}
          </Slider>       
        </div>
      </div>
    </section>
  );
};

export default Featured;
