import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const servicCenters = useLoaderData();
  // console.log(servicCenters);

  const duplicateRegions = servicCenters.map((c) => c.region);
  const regions = [...new Set(duplicateRegions)];
  // use memo and use call back

  const { register, handleSubmit, control } = useForm();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const districtByRegions = (region) => {
    const regionDistricts = servicCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const sameDistrict = data.senderDistrict == data.receiverDistrict;

    let cost = 0;
    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      const minCharge = sameDistrict ? 110 : 150;
      const parcelWeight = parseFloat(data.parcelWeight) || 0;
      const extraWaight = parcelWeight - 3;
      const extraCharge = sameDistrict
        ? extraWaight * 40
        : extraWaight * 40 + 40;
      cost = minCharge + extraCharge;
    }

    console.log("cost", cost);
    data.cost = cost ;
    
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree",
    })
    .then((result) => {
      if (result.isConfirmed) {

        // save the parcel info to the database
        axiosSecure.post('/parcels', data)
        .then(res => {
          console.log('after saving parcel',res.data);  
          
        })



        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold p-4">Send A Parcel</h2>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* Parcel Type */}
        <div className="space-x-4">
          <label className="label flex items-center gap-2">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            <span>Document</span>
          </label>

          <label className="label flex items-center gap-2">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            <span>Non-Document</span>
          </label>
        </div>

        {/* Parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* Sender / Receiver Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
     {/* sender name   */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />
       {/* sender email  */}
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              defaultValue={user?.email || ""}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* Sender Region */}
            <label className="label mt-4">Sender Region</label>
            <select {...register("senderRegion")} className="select w-full">
              <option value="" disabled>
                Select Region
              </option>
              {regions.map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* Sender District */}
            <label className="label mt-4">Sender District</label>
            <select {...register("senderDistrict")} className="select w-full">
              <option value="" disabled>
                Select District
              </option>
              {districtByRegions(senderRegion)?.map((district, i) => (
                <option key={i} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>

          {/* Receiver Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* reciever name  */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            {/* receiver email  */}
            <label className="label">Receiver Email</label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* reciver Region */}
            <label className="label mt-4">Receiver Region</label>
            <select
              {...register("receiverRegion")}
              className="select w-full"
              defaultValue="pick a region"
            >
              <option value="" disabled>
                Select Region
              </option>
              {regions.map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {/* reciver district */}
            <label className="label mt-4">Receiver District</label>
            <select
              {...register("receiverDistrict")}
              className="select w-full"
              defaultValue="pick a District"
            >
              <option value="" disabled>
                Select District
              </option>
              {districtByRegions(receiverRegion).map((d, index) => (
                <option key={index} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {/* receiver address  */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
          </fieldset>
        </div>

        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary mt-8 text-black"
        />
      </form>
      
    </div>
  );
};

export default SendParcel;
