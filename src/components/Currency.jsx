"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import React from "react";

const Currency = ({ country = "India", isBoth }) => {
  const [rates, setRates] = useState(null);
  const cArr = [
    "India",
    "UnitedStates",
    "UnitedKingdom",
    "UAE",
    "Japan",
    "Russia",
    "Canada",
  ];
  const currencyCode = {
    India: "INR",
    UnitedStates: "USD",
    UnitedKingdom: "GBP",
    UAE: "AED",
    Japan: "JPY",
    Russia: "RUB",
    Canada: "CAD",
  };
  useEffect(() => {
    try {
      axios
        .get(`/api/currency?currency=${currencyCode[country]}`)
        .then((response) => setRates(response.data.conversion_rates));
    } catch (error) {
      console.log(error);
    }
  }, [country]);
  if (!rates) {
    return <Loading />;
  }
  // console.log(rates);
  return (
    <React.Fragment>
      <div className="min-h-screen flex justify-center items-center text-black">
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 min-h-screen flex flex-col justify-center items-center">
          <div className="bg-white rounded-md shadow-md px-8 py-6 flex flex-col md:flex-row justify-around items-center">
            <div className="text-5xl font-bold mb-5 md:mb-0 md:mr-5">
              1 {currencyCode[country]} =
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="h-auto ml-2 px-2 py-3 border-l-2 border-t-2 border-b-2 border-black"></div>
              <div className="md:ml-5">
                {cArr
                  .filter((c) => c !== country)
                  .map((c) => {
                    return (
                      <div
                        key={c}
                        className="flex justify-between items-center mb-2 md:mb-0"
                      >
                        <div className="text-3xl my-1 mr-2 md:mr-5 font-medium">
                          {rates[currencyCode[c]]}
                        </div>
                        <div className="text-3xl my-1 font-medium">
                          {currencyCode[c]}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Currency;
  