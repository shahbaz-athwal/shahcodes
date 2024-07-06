'use client'
import { useSearchParams } from 'next/navigation';

const LocationComponent = () => {
 
  //@ts-ignore
  const { country, city, region } = useSearchParams()

  return (
    <div>
      <h1>Location Details</h1>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>Region: {region}</p>
    </div>
  );
};
export default LocationComponent;
