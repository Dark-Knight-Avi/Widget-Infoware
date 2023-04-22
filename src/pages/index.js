import Weather from '@/components/Weather'
import Header from '@/components/Header'
import React, { useState } from "react";
import Settings from '@/components/Settings';

export default function Home() {
  const [city, setCity] = useState("Mumbai");
  const [country, setCountry] = useState("India")
  const [isToggled, setIsToggled] = useState(false)

  return (
    <main className='bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex justify-center items-center flex-col'>
      <Header isToggled={isToggled} setIsToggled={setIsToggled} />
      <Weather city={city} />
      {isToggled && <Settings setCity={setCity} setCountry={setCountry} />}
    </main>
  )
}
