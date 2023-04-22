import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 py-4">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="flex">
          <Link href={"/"}>
            <div
              className={`text-xl font-bold focus:text-gray-700 text-gray-500 hover:text-gray-900 mr-4`}
            >
              Weather
            </div>
          </Link>
          <Link href={"/currency"}>
            <div
              className={`text-xl font-bold focus:text-gray-500 text-gray-700 hover:text-gray-900`}
            >
              Currency
            </div>
          </Link>
        </div>
        <div>
          <div
            className=" text-black py-2 px-4 rounded-full"
          >
           @Aritra Copyright 2023
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer