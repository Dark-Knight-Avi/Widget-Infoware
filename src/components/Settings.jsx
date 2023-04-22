import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Settings = ({ setCity, setShow, setCountry, isToggled }) => {
  const cityArr = [
    "Mumbai",
    "New York",
    "London",
    "Dubai",
    "Tokyo",
    "Moscow",
    "Toronto",
  ];
  const cArr = [
    "India",
    "UnitedStates",
    "UnitedKingdom",
    "UAE",
    "Japan",
    "Russia",
    "Canada",
  ];
  const router = useRouter();
  const [value, setValue] = useState('')
  return (
    <div
      className={`bg-[#1F2937] px-10 py-5 absolute top-[3.5rem] right-[18rem] ${
        isToggled ? "hidden" : ""
      }`}
    >
      <div class="bg-[#1F2937] rounded-md shadow-md px-8 py-6">
        <h2 class="text-lg font-medium mb-4">Currency Converter</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="city" class="block font-medium mb-2">
              City
            </label>
            <select
              id="city"
              name="city"
              class="border-gray-300 border-2 bg-[#1F2937] rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 w-full"
              onChange={(e) => setCity(e.target.value)}
            >
              {" "}
              {cityArr.map((c) => {
                return (
                  <option key={c} className="bg-[#1F2937]" value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label for="country" class="block font-medium mb-2">
              Country
            </label>
            <select
              id="country"
              name="to"
              class="border-2 border-gray-300 bg-[#1F2937] rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 w-full"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="bg-[#1F2937]" value="India">
                Indian Rupee (INR)
              </option>
              <option className="bg-[#1F2937]" value="UnitedStates">
                US Dollar (USD)
              </option>
              <option className="bg-[#1F2937]" value="UnitedKingdom">
                British Pound Sterling (GBP)
              </option>
              <option className="bg-[#1F2937]" value="UAE">
                United Arab Emirates Dirham (AED)
              </option>
              <option className="bg-[#1F2937]" value="Japan">
                Japanese Yen (JPY)
              </option>
              <option className="bg-[#1F2937]" value="Russia">
                Russian Ruble (RUB)
              </option>
              <option className="bg-[#1F2937]" value="Canada">
                Canadian Dollar (CAD)
              </option>
            </select>
          </div>
          <div>
            <label for="country" class="block font-medium mb-2">
              View
            </label>
            <select
              id="country"
              name="to"
              class="border-2 border-gray-300 bg-[#1F2937] rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 w-full"
              onChange={(e) => router.push(`/${e.target.value}`)}
              value={value}
            >
              <option className="bg-[#1F2937]" value="" onSelect={()=> {router.push('/')}}>
                Weather
              </option>
              <option className="bg-[#1F2937]" value="currency">
                Currency
              </option>
              <option className="bg-[#1F2937]" value="both">
                Both
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
