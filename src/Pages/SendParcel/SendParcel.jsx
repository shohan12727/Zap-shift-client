import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const servicCenters = useLoaderData();
  const duplicateRegions = servicCenters.map(c => c.region)
  const regions = [...new Set(duplicateRegions)]
  console.log(regions);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const senderRegion = watch("senderRegion");

  const districtByRegions = region => {
    const regionDistricts = servicCenters.filter(c => c.region === region)
    const districts = regionDistricts.map(d => d.district)
    return districts;
  }

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold p-4">Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* document */}
        <div className="space-x-4">
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              // name="radio-1"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              // name="radio-1"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info: name, weight  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* parcel name  */}
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          {/* parcel weight  */}
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

        {/* two column  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* sender info  */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>

            {/* sender name  */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* sender email  */}
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />
            {/* sender regions  */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Regions</legend>
              <select {...register('senderRegion')} defaultValue="Pick a region"  className="select">
                <option disabled={true}>Pick a Regions</option>
                {
                  regions.map((region, i) =>  <option key={i} value={region}>{region}</option>
                  )
                }
               
              
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* sedner address  */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full mt-4"
              placeholder="Sender Address"
            />
            {/* sender district */}
            <label className="label mt-4">Sender District</label>
            <input
              type="text"
              {...register("senderDistrict")}
              className="input w-full "
              placeholder="Sender District"
            />
          </fieldset>

          {/* receiver info  */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold text-black">
              Receiver Details
            </h4>
            {/* receiver name  */}
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

            {/* receiver address  */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full mt-4"
              placeholder="Receiver Address"
            />
            {/* receiver district */}
            <label className="label mt-4">Receiver District</label>
            <input
              type="text"
              {...register("receiverDistrict")}
              className="input w-full "
              placeholder="Receiver District"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;

// 13 minutes 
