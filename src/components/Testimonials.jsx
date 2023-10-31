import React from 'react';
import RatingDisplay from './RatingDisplay';


const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://smilequestdental.com/wp-content/uploads/2016/11/test24-4.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu convallis nibh. Sed eget sapien a mi ornare pellentesque.',
      stars: 4
    },
    {
      id: 2,
      name: 'Mike Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      review: 'Sed quis tellus feugiat, fringilla lectus in, tempor purus. Integer nec mauris est. Aenean vestibulum metus.',
      stars: 5
    },
    {
      id: 3,
      name: 'Jane Smith',
      image: 'https://smilequestdental.com/wp-content/uploads/2016/11/GettyImages-455586763-1.jpg',
      review: 'Praesent facilisis justo id diam blandit, id dignissim libero blandit. Vestibulum ante ipsum primis ultrices posuere cubilia Curae.',
      stars: 4
    }
  ];

  return (
    <section id='testimonials'>
      <div className='py-16 sm:py-24'>
        <div className="flex items-center flex-col ">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl">
            Our Testimonial
          </h1>
          <p className="text-light-grey text-lg mb-4">
            What would you like to sip today?
          </p>
        </div>
        <div className="container mx-auto py-8">

          <div className="flex flex-wrap justify-center">
            {testimonialsData.map(testimonial => (
              <div key={testimonial.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  </div>
                  <div className='text-1xl'>
                    <RatingDisplay rating={testimonial.stars} />
                  </div>
                  <p className="text-gray-700">{testimonial.review}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;