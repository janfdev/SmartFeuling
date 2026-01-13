// src/component/sidenav.jsx
import React, { useState } from 'react';

const Sidenav = ({ darkMode, setCurrentMapUrl }) => {
  const [expandedRegions, setExpandedRegions] = useState({});
  const [expandedCities, setExpandedCities] = useState({});
  

  const regions = [
    {
      name: "Region I",
    cities: [
      {
        name: "Aceh",
        spbus: [
          {
            name: "11.101.01 - SPBU Banda Aceh",
            lat: 5.5465,
            lng: 95.3247,
            zoom: 17
          }
        ]
      },
      {
        name: "Medan",
        spbus: [
          {
            name: "06.123.45 - SPBU Medan",
            lat: 3.597,
            lng: 98.675,
            zoom: 14
          }
        ]
      },
      {
        name: "Pekanbaru",
        spbus: []
      }
    ]
  },
  {
    name: "Region II",
    cities: [
      {
        name: "Palembang",
        spbus: [
          {
            name: "16.401.01 - SPBU Dem...",
            lat: -2.99,
            lng: 104.75,
            zoom: 13
          }
        ]
      },
      {
        name: "Jambi",
        spbus: []
      },
      {
        name: "Lampung",
        spbus: []
      }
    ]
  },
    { name: "Region III", cities: [] },
    { name: "Region IV", cities: [] },
    { name: "Region V", cities: [] },
    { name: "Region VI", cities: [] },
    { name: "Region VII", cities: [] },
  ];

  const toggleRegion = (regionName) => {
    setExpandedRegions(prev => ({
      ...prev,
      [regionName]: !prev[regionName]
    }));
  };

  const toggleCity = (cityName) => {
    setExpandedCities(prev => ({
      ...prev,
      [cityName]: !prev[cityName]
    }));
  };

  return (
    <div className="p-4 space-y-2">
      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400">SPBU LOCATIONS</h3>

      {regions.map((region, idx) => (
        <div key={idx} className="mb-2">
          {/* Region Header */}
          <div
            className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => toggleRegion(region.name)}
          >
            <span className="mr-2">📍</span>
            <span>{region.name}</span>
            <span className="ml-auto">
              {expandedRegions[region.name] ? '▼' : '▶'}
            </span>
          </div>

          {/* Cities (Expandable) */}
          {expandedRegions[region.name] && region.cities.length > 0 && (
            <div className="ml-6 mt-1 space-y-1">
              {region.cities.map((city, i) => (
                <div key={i}>
                  {/* City Header */}
                  <div
                    className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => toggleCity(city.name)}
                  >
                    <span className="mr-2">⭐</span>
                    <span>{city.name}</span>
                    <span className="ml-auto">
                      {expandedCities[city.name] ? '▼' : '▶'}
                    </span>
                  </div>

                  {/* SPBUs (Expandable) */}
                  {expandedCities[city.name] && city.spbus.length > 0 && (
                    <div className="ml-6 mt-1 space-y-1">
                      {city.spbus.map((spbu, j) => (
                        <div
                            key={j}
                            className="text-xs pl-2 py-1 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => {
                            const lat = spbu.lat;
                            const lng = spbu.lng;
                            const zoom = spbu.zoom || 14;
                            const url = `https://www.google.com/maps/embed?q=${lat},${lng}&zoom=${zoom}&output=embed`;
                            setCurrentMapUrl(url);
                            }}
                        >
                            <span className="mr-1">✅</span>
                            <span>{spbu.name}</span>
                        </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidenav;