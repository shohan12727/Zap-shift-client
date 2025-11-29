import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const servicCenters = useLoaderData();
  const duplicateRegions = servicCenters.map(c => c.region);
  const regions = [...new Set(duplicateRegions)];

  const {
    register,
    handleSubmit,
    watch
  } = useForm();

  const senderRegion = watch("senderRegion");

  const districtByRegions = region => {
    const regionDistricts = servicCenters.filter(c => c.region === region);
    return regionDistricts.map(d => d.district);
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold p-4">Send A Parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4 text-black">

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

            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />

            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* Sender Region */}
            <label className="label mt-4">Sender Region</label>
            <select {...register("senderRegion")} className="select w-full">
              <option value="" disabled>Select Region</option>
              {regions.map((region, i) => (
                <option key={i} value={region}>{region}</option>
              ))}
            </select>

            {/* Sender District */}
            <label className="label mt-4">Sender District</label>
            <select {...register("senderDistrict")} className="select w-full">
              <option value="" disabled>Select District</option>
              {districtByRegions(senderRegion)?.map((district, i) => (
                <option key={i} value={district}>{district}</option>
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

            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            <label className="label">Receiver Email</label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />

            <label className="label mt-4">Receiver District</label>
            <input
              type="text"
              {...register("receiverDistrict")}
              className="input w-full"
              placeholder="Receiver District"
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
