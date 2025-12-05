import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const servicCenters = useLoaderData();
  const duplicateRegions = servicCenters.map((c) => c.region);
  const regions = [...new Set(duplicateRegions)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegions = (region) => {
    const regionDistricts = servicCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const handleRiderApplication = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-4xl">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 p-4 text-black"
      >
        {/* Sender / Receiver Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>
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
            <label className="label mt-4">Region</label>
            <select {...register("region")} className="select w-full">
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
            <label className="label mt-4"> District</label>
            <select {...register("district")} className="select w-full">
              <option value="" disabled>
                Select District
              </option>
              {districtByRegions(senderRegion)?.map((district, i) => (
                <option key={i} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              {...register("address")}
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

export default Rider;
