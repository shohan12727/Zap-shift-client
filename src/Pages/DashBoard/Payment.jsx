import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const response = await axiosSecure.get(`/parcels/${parcelId}`);
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const response = await axiosSecure.post(
      `/create-checkout-session`,
      paymentInfo
    );
    // console.log(response.data);
    window.location.href = response.data.url;
  };

  return (
    <div>
      <h2>
        Please ${parcel.cost} pay for : {parcel.parcelName}
      </h2>
      <button
        onClick={() => handlePayment(parcel)}
        className="btn btn-primary text-black"
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
