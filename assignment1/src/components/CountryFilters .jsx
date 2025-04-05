
import React from 'react';

const countries = [
  { name: 'India', color: 'bg-violet-600' },
  { name: 'USA', color: 'bg-orange-700' },
  { name: 'CANADA', color: 'bg-yellow-300' },
  { name: 'UAE', color: 'bg-emerald-700' },
];

const CountryFilters = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4 px-4 py-2 border rounded-full border-gray-600 bg-black w-fit">
      {countries.map((country) => (
        <div key={country.name} className="flex items-center gap-2 text-white text-sm font-medium">
          <span className={`w-3 h-3 rounded-full ${country.color}`}></span>
          <span>{country.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CountryFilters;
