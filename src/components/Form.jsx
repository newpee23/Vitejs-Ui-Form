import React, { useState } from "react";
import Select from "react-select";

const cityOptions = [
  { value: "new_york", label: "New York" },
  { value: "los_angeles", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  // Add more options here
];

function Form() {
  // State to store the selected city
  const [selectedCity, setSelectedCity] = useState(null);

  // ฟังก์ชันที่ใช้ในการจับการเลือกเมือง
  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
            <p className="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                <form>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
             
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Address"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <div className="flex">
                        <Select
                          options={cityOptions}
                          isSearchable
                          className="w-full mt-1"
                          placeholder="Select a City"
                          value={selectedCity}
                          onChange={handleCityChange}
                        />
                        <div className="relative ">
                          {selectedCity && (
                            <button
                              className="absolute mt-4 mr-12 top-0 right-0 cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              onClick={() => setSelectedCity(null)}
                            >
                              <svg
                                className="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 19.075 1 13 5.925 2 12 2zm0 2c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm2.293 5.293l-1.293 1.293-2.293-2.293-2.293 2.293-1.293-1.293 2.293-2.293-2.293-2.293 1.293-1.293 2.293 2.293 2.293-2.293 1.293 1.293-2.293 2.293 2.293 2.293z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="Country">Country / region</label>
                      <div className="flex">
                        <Select
                          options={cityOptions}
                          isSearchable
                          className="w-full mt-1"
                          placeholder="Select a Country"
                          value={selectedCity}
                          onChange={handleCityChange}
                        />
                        <div className="relative ">
                          {selectedCity && (
                            <button
                              className="absolute mt-4 mr-12 top-0 right-0 cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              onClick={() => setSelectedCity(null)}
                            >
                              <svg
                                className="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 19.075 1 13 5.925 2 12 2zm0 2c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm2.293 5.293l-1.293 1.293-2.293-2.293-2.293 2.293-1.293-1.293 2.293-2.293-2.293-2.293 1.293-1.293 2.293 2.293 2.293-2.293 1.293 1.293-2.293 2.293 2.293 2.293z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="Country">Country / region</label>
                      <div className="flex">
                        <Select
                          options={cityOptions}
                          isSearchable
                          className="w-full mt-1"
                          placeholder="Select a Country"
                          value={selectedCity}
                          onChange={handleCityChange}
                        />
                        <div className="relative ">
                          {selectedCity && (
                            <button
                              className="absolute mt-4 mr-12 top-0 right-0 cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              onClick={() => setSelectedCity(null)}
                            >
                              <svg
                                className="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 19.075 1 13 5.925 2 12 2zm0 2c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm2.293 5.293l-1.293 1.293-2.293-2.293-2.293 2.293-1.293-1.293 2.293-2.293-2.293-2.293 1.293-1.293 2.293 2.293 2.293-2.293 1.293 1.293-2.293 2.293 2.293 2.293z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Zipcode"
                      />
                    </div>

                  </div>
                  <div className="col-span-5 mt-3 text-right">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Save
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
