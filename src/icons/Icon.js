import React from 'react'
import Cloud from './Cloud'
import CloudySun from './CloudySun'
import MoonCloud from './MoonCloud'
import Rain from './Rain'
import Sun from './Sun'

const Icon = {
    cloud: () => {return <Cloud />},
    cloudSun: () => {return <CloudySun />},
    moonCloud: () => {return <MoonCloud />},
    rain: () => {return <Rain />},
    sun: () => {return <Sun />}
}
export default Icon