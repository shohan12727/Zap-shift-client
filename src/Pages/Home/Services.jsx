import React from "react";
import service from "../../assets/service.png";

const Services = () => {
  return (
    <div className="bg-secondary rounded-2xl my-8 text-white md:p-20 ">
      <h1 className="text-center text-3xl">Our Services</h1>
      <p className="text-center my-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br />
        business shipments — we deliver on time, every time.
      </p>
      {/* main div  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* fist div  */}
        <div className="fitst_div bg-white rounded-2xl p-8 hover:bg-primary">
          <div className="flex justify-center items-center">
            <img src={service} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center my-3 text-black">
            Express & Standard Delivery
          </h2>
          <p className="text-justify text-black">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="fitst_div bg-white rounded-2xl p-8 hover:bg-primary">
          <div className="flex justify-center items-center">
            <img src={service} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center my-3 text-black">
            Nationwide Delivery
          </h2>
          <p className="text-justify text-black">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="fitst_div bg-white rounded-2xl p-8 hover:bg-primary">
          <div className="flex justify-center items-center">
            <img src={service} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center my-3 text-black">
            Fulfillment Solution
          </h2>
          <p className="text-justify text-black">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="fitst_div bg-white rounded-2xl p-8 hover:bg-primary">
          <div className="flex justify-center items-center">
            <img src={service} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center my-3 text-black">
            Cash on Home Delivery
          </h2>
          <p className="text-justify text-black">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="fitst_div bg-white rounded-2xl p-8 hover:bg-primary">
          <div className="flex justify-center items-center">
            <img src={service} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center my-3 text-black">
            Corporate Service / Contract In Logistics
          </h2>
          <p className="text-justify text-black">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="fitst_div bg-white rounded-2xl p-8 hover:bg-primary">
          <div className="flex justify-center items-center">
            <img src={service} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-center my-3 text-black">
            Parcel Return
          </h2>
          <p className="text-justify text-black">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
