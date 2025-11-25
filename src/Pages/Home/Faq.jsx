import React from "react";
import { FiSearch, FiClock, FiMapPin, FiShield } from "react-icons/fi";

const Faq = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>

      {/* Question 1 */}
      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <FiSearch className="text-primary text-xl" />
          How do I track my parcel on Zap-Shift?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Enter your provided tracking ID into the search bar on the “Track
          Parcel” page. You will instantly see real-time updates including
          current location, status, and estimated delivery time.
        </div>
      </div>

      {/* Question 2 */}
      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <FiClock className="text-primary text-xl" />
          What should I do if my parcel is delayed?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Delays may occur due to traffic, weather, or verification checks.
          If your parcel is delayed for more than 24 hours, contact our support
          team with your tracking ID for an immediate status review.
        </div>
      </div>

      {/* Question 3 */}
      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <FiMapPin className="text-primary text-xl" />
          Can I change my delivery address after dispatch?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          Address changes are only possible before the parcel reaches the “Out
          for Delivery” stage. Go to your dashboard → Manage Parcel →
          Update Address. If the option is disabled, contact support.
        </div>
      </div>

      {/* Question 4 */}
      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl shadow-sm">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-lg font-semibold flex items-center gap-3">
          <FiShield className="text-primary text-xl" />
          How does Zap-Shift ensure parcel safety?
        </div>
        <div className="collapse-content text-sm leading-relaxed">
          All parcels are sealed, scanned at every checkpoint, and delivered by
          verified riders. You can track each scan update in real time.
          High-value items also include an additional verification step.
        </div>
      </div>
    </div>
  );
};

export default Faq;
