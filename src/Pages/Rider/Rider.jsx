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

  const riderRegion = useWatch({ control, name: "region" });
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
        {/* rider / Receiver Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* rider Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>
            {/*  name   */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("riderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="rider Name"
            />
            {/*  email  */}
            <label className="label"> Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email || ""}
              className="input w-full"
              placeholder="rider Email"
            />

            {/* rider Region */}
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

            {/* rider District */}
            <label className="label mt-4"> District</label>
            <select {...register("district")} className="select w-full">
              <option value="" disabled>
                Select District
              </option>
              {districtByRegions(riderRegion)?.map((district, i) => (
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
              placeholder="rider Address"
            />
          </fieldset>

          {/* Receiver Details */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold"></h4>
            {/* reciever name  */}
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />
            {/* nid  */}
            <label className="label">NID</label>
            <input
              type="number"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            {/*  Bike info */}
            <label className="label mt-4">Bike Info </label>
            <input
              {...register("bike")}
              className="select w-full"
             
            ></input>
          </fieldset>
        </div>

        <input
          type="submit"
          value="Apply as a Rider"
          className="btn btn-primary mt-8 text-black"
        />
      </form>
    </div>
  );
};

export default Rider;
