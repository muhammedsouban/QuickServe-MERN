import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './categorylist.css'

const CategorySlider = () => {
  useEffect(() => {
    // Ensure the Slick slider styles are loaded after mounting the component
    import('slick-carousel/slick/slick.css');
    import('slick-carousel/slick/slick-theme.css');
  }, []);

  const categories = [
    { id: 1, name: 'Category 1', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 2, name: 'Category 2', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 3, name: 'Category 3', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 4, name: 'Category 4', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 5, name: 'Category 1', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 6, name: 'Category 2', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 7, name: 'Category 3', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
    { id: 8, name: 'Category 4', imageUrl: 'http://localhost:8080/public/images/1681886137730-Me.JPG' },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: true, // Show arrows on mobile devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: true, // Show arrows on mobile devices
        },
      },
    ],
  };

  return (
    <div className="flex justify-center mt-7">
      <div className="w-[70%]">
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="flex justify-center">
              <div className="flex flex-col items-center mx-2">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-40 h-40 object-cover rounded-full"
                />
                <p className="mt-2 text-center">{category.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
