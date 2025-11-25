import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const serviesCenters = useLoaderData();
  //   console.log(serviesCenters);
  const position = [23.685, 90.356];
  const mapRef = useRef(null);


  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviesCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
        const coord = [district.latitude, district.longitude];
        // go to location
        mapRef.current.flyTo(coord, 14)
    }
  };

  return (
    <div className="maw-w-7xl mx-auto">
      <h2 className="text-2xl my-4 ml-4">We are available in 64 district</h2>
      {/* input  */}
      <div className="my-4 ml-4">
        <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
          <label className="relative block">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </span>

            <input
              name="location"
              type="search"
              placeholder="Search location..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2  transition-all text-gray-700"
            />
          </label>

          <input
            type="submit"
            value="Search"
            className="mt-3 w-full bg-secondary text-white font-medium py-3 rounded-xl cursor-pointer hover:bg-primary transition-all"
          />
        </form>
      </div>
      <div className="border w-11/12 mx-auto h-[450px]">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[450px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviesCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service area:{" "}
                {center.covered_area.join(", ")} .
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
