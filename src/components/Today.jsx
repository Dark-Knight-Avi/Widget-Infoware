import Icon from "@/icons/Icon";
import React from "react";

const Today = ({ data }) => {
  const date = Date().split(" ").slice(0, 4).join(" ");
  const month = (
    "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(date.split(" ")[1]) / 3 +
    1
  ).toString();
  const fDate =
    "2023-" +
    (month.length === 1 ? "0" + month : month) +
    "-" +
    date.split(" ")[2];
  return (
    <React.Fragment>
      <div className="w-full lg:w-1/2 max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
        <h1 className="text-center text-xl font-bold">{date}</h1>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mt-6 md:mt-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-5xl md:text-6xl font-bold">29°C</span>
            <span className="font-semibold mt-2 text-gray-500">
              {data.city.name}, {data.city.country}
            </span>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-6 md:mt-0">
            {/* <BigSun /> */}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16">
          {data.list
            .filter((item) => item.dt_txt.split(" ")[0] === fDate)
            .map((item) => {
              const time = item.dt_txt.split(" ")[1].split(":").slice(0, 2);
              const weather = item.weather[0].main;
              return (
                <div key={item.dt_txt} className="flex flex-col items-center">
                  <span className="font-semibold text-base md:text-lg">
                    {item.main.temp.toFixed(1)}°C
                  </span>
                  {weather === "Clouds" ? (
                    <Icon.cloud className="w-10 h-10 md:w-12 md:h-12" />
                  ) : weather === "Rain" ? (
                    <Icon.rain className="w-10 h-10 md:w-12 md:h-12" />
                  ) : weather === "scattered clouds" ? (
                    <Icon.cloudSun className="w-10 h-10 md:w-12 md:h-12" />
                  ) : (
                    <Icon.sun className="w-10 h-10 md:w-12 md:h-12" />
                  )}
                  <span className="font-semibold mt-1 text-sm md:text-base">
                    {Number(time[0]) > 12
                      ? `${(Number(time[0]) - 12)
                          .toString()
                          .padStart(2, "0")}:${time[1]}`
                      : time.join(":")}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {Number(time[0]) >= 12 ? "PM" : "AM"}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Today;
