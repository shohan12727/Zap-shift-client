import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto my-6">
      <h2 className="mb-3 font-bold text-2xl">How it Works</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="first div">
          <TbTruckDelivery size={70} />
          <p className="mb-4 font-bold">Booking Pick & Drop</p>
          <p className="text-justify">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="first div">
          <TbTruckDelivery size={70} />
          <p className="mb-4 font-bold">Cash On Delivery</p>
          <p className="text-justify">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="first div">
          <TbTruckDelivery size={70} />
          <p className="mb-4 font-bold">Delivery Hub</p>
          <p className="text-justify">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="first div">
          <TbTruckDelivery size={70} />
          <p className="mb-4 font-bold">Booking SME & Corporate</p>
          <p className="text-justify">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
