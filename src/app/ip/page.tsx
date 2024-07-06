'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const LocationComponent = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get('country') || 'Unknown Country';
  const city = searchParams.get('city') || 'Unknown City';
  const region = searchParams.get('region') || 'Unknown Region';

  return (
    <div>
      <h1>Location Details</h1>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>Region: {region}</p>
    </div>
  );
};

const IpPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationComponent />
      </Suspense>
    </div>
  );
};

export default IpPage;
