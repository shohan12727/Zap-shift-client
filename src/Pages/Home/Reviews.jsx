import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  // console.log(reviews);

  return (
    <div>
      <div className="mb-20">
        <h3 className="text-3xl text-center font-bold my-3">Review</h3>
        <p className="text-center my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          doloremque praesentium asperiores obcaecati blanditiis dolor,
          aspernatur, molestias autem perspiciatis laudantium quibusdam culpa,
          dicta iste excepturi doloribus exercitationem fugiat voluptas. Quasi.
        </p>
      </div>
      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((card) => (
            <SwiperSlide key={card.id}>
              <ReviewCard card={card}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
