import Header from '@/components/Header'
import React, { useState } from "react";
import Currency from '@/components/Currency';
import Settings from '@/components/Settings';

const Page = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <main className='bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex justify-center items-center flex-col'>
            <Header isToggled={isToggled} setIsToggled={setIsToggled} />
            <Currency />
            {isToggled && <Settings />}
        </main>
    )
}

export default Page