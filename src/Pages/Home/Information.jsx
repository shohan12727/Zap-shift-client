import React from "react";
import livetracking from "../../assets/live-tracking.png";
import selfDelivery from "../../assets/safe-delivery.png";
const Information = () => {
  return (
    <div className="my-8">
      <div className="w-full  bg-gray-50  rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center  gap-6 ">
        {/* Left Illustration */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={livetracking}
            alt="Live Parcel Tracking"
            className="w-56 md:w-64 h-45"
          />
        </div>
        {/* Vertical Dotted Line */}
        <div className="hidden md:flex justify-center">
          <div className="h-45 border-l-2 border-dotted border-gray-300"></div>
        </div>
        {/* Right Text Section */}
        <div className="w-full md:w-3/4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
            Live Parcel Tracking
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment’s journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-50  rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center  gap-6 ">
        {/* Left Illustration */}
        <div className="w-full md:w-1/4 flex justify-center">
          <img src={selfDelivery} className="w-56 md:w-64 h-45" />
        </div>
        {/* Vertical Dotted Line */}
        <div className="hidden md:flex justify-center">
          <div className="h-45 border-l-2 border-dotted border-gray-300"></div>
        </div>
        {/* Right Text Section */}
        <div className="w-full md:w-3/4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
            100% Safe Delivery
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
