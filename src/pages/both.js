import Header from '@/components/Header'
import React, { useState } from "react";
import Currency from '@/components/Currency';
import Settings from '@/components/Settings';
import Weather from '@/components/Weather';

const Page = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <main className='bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex justify-center items-center flex-col w-screen'>
            <Header isToggled={isToggled} setIsToggled={setIsToggled} />
            <div className="flex justify-around items-center w-full">
                <Weather isBoth/>
                <Currency isBoth/>
            </div>
            {isToggled && <Settings />}
        </main>
    )
}

export default Page