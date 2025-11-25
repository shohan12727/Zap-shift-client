import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ card }) => {
  const { userName, review, user_photoURL } = card;
  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl text-primary">
            <FaQuoteLeft />
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">{review}</p>
        </div>

        <div className="my-6 w-full flex justify-center">
          <div className="w-11/12 border-b border-dashed border-gray-300" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-900 overflow-hidden">
            <img
              src={user_photoURL}
              alt="avatar"
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          <div>
            <div className="font-semibold text-gray-800">{userName}</div>
            <div className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
