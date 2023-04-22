"use client";
import Cloud from "@/icons/Cloud";
import Humidity from "@/icons/Humidity";
import Sun from "@/icons/Sun";
import React, { useEffect, useState } from "react";
import Today from "./Today";
import axios from "axios";
import Loading from "./Loading";
import Image from "next/image";

const formatDate = (dateStr) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateStr);
  const day = date.toLocaleString("default", { weekday: "short" });
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${day}, ${dayOfMonth} ${month}`;
};

const Weather = ({ city, isBoth }) => {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    try {
      axios
        .get(`/api/weather?city=${city}`)
        .then((response) => setData(response.data));

      axios
        .get(`/api/forecast?city=${city}`)
        .then((response) => setForecast(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [city]);
  if (!data) {
    return <Loading />;
  }
  if (!forecast) {
    return <Loading />;
  }
  if (!data && !forecast) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <div
        className={`flex flex-col items-center justify-center ${
          isBoth ? "w-1/2 flex-wrap" : "w-full"
        } min-h-screen text-gray-700 p-4 sm:p-10`}
      >
        {/* Component Start */}
        <Today data={data} />
        <div className="flex flex-col space-y-6 w-full lg:w-1/2 max-w-screen-md bg-white p-4 sm:p-10 mt-4 sm:mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
          {forecast.map((day) => {
            if (!day.humidityAvg && !day.tempMinAvg && !day.tempMaxAvg) {
              return null;
            }
            return (
              <div
                key={day.date}
                className="flex flex-col sm:flex-row justify-between items-center"
              >
                <span className="font-semibold text-lg mb-2 sm:mb-0 sm:w-1/4">
                  {formatDate(day.date)}
                </span>
                <div className="flex items-center justify-end sm:w-1/4">
                  <span className="font-semibold mr-1">{day.humidityAvg}%</span>
                  <Humidity className="w-6 h-6 fill-current" />
                </div>
                <div className="w-1/4 sm:w-auto">
                  <Image
                    width={60}
                    height={60}
                    referrerPolicy="no-referrer"
                    src={`https://openweathermap.org/img/w/${day.iconAvg}.png`}
                    alt="forecast"
                  />
                </div>
                <span className="font-semibold text-lg text-right sm:w-1/4">
                  {day.tempMinAvg}° / {day.tempMaxAvg}°
                </span>
              </div>
            );
          })}
        </div>
        {/* Component End  */}
      </div>
    </React.Fragment>
  );
};

export default Weather;
