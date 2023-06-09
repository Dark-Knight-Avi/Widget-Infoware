import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Settings = ({ isToggled }) => {
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
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-[#1F2937] px-10 py-5 absolute top-[3.5rem] lg:right-[18rem] md:right-[3rem] ${
        isToggled ? "hidden" : ""
      }`}
    >
      <div class="bg-[#1F2937] rounded-md shadow-md md:px-8 py-6">
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
              onChange={(e) =>
                dispatch({
                  type: "updateCity",
                  payload: e.target.value,
                })
              }
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
              onChange={(e) =>
                dispatch({
                  type: "updateCountry",
                  payload: e.target.value,
                })
              }
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
            <div className="w-full flex justify-between items-center">
              <Link className="px-3 py-2 border-2 border-white rounded-md" href={'/'}>Weather</Link>
              <Link className="px-3 py-2 border-2 border-white rounded-md" href={'/currency'}>Currency</Link>
              <Link className="px-3 py-2 border-2 border-white rounded-md" href={'/both'}>Both</Link>
            </div>
            {/* <select
              id="country"
              name="to"
              class="border-2 border-gray-300 bg-[#1F2937] rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 w-full"
              onChange={(e) => router.push(`/${e.target.value}`)}
              onSelect={(value) => router.push(`/${value}`)}
            >
              <option
                className="bg-[#1F2937]"
                value=""
                onSelect={() => {
                  router.push("/");
                }}
              >
                Weather
              </option>
              <option className="bg-[#1F2937]" value="currency">
                Currency
              </option>
              <option className="bg-[#1F2937]" value="both">
                Both
              </option>
            </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
