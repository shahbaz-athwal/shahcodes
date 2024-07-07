'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

const LocationClient = () => {
    const [region ,setRegion] = useState("")
    const [city ,setCity] = useState("")
    const [country ,setCountry] = useState("")

    useEffect(() => {
        let datas: any;
        const handler = async () => {
            const {data} = await axios.get("/api/ip")
            datas = data
            // if (!data.data.status === false) {
            //     setRegion(data.data.regionName)
            //     setCountry(data.data.country)
            //     setCity(data.data.city)
            // }
          }
        handler()

        return () => {
            console.log(datas)
        }
    },[])

    return(
        <>
         <div> {city}, {region}, {country}</div>
        </>
    )
}

export default LocationClient
