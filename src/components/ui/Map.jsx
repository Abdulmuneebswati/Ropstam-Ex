import React from 'react';
import { geoCentroid } from 'd3-geo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';

import allStates from '@data/allstates.json';
import { offsets } from '@data';
import { geoUrl } from '@data';

const MapChart = () => {
  return (
    <>
      <ComposableMap
        projection='geoAlbersUsa'
        viewBox='0 70 800 600'
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke='rgba(107, 139, 158, 1)'
                  geography={geo}
                  fill='rgba(73, 199, 171, 1)'
                />
              ))}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find((s) => s.val === geo.id);
                if (Object.keys(offsets).indexOf(cur.id) !== -1) {
                  console.log(cur.id);
                }

                return (
                  <g key={geo.rsmKey + '-name'}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      Object.keys(offsets).indexOf(cur.id) === -1 && (
                        <Marker coordinates={centroid}>
                          <text
                            y='2'
                            fontSize={14}
                            textAnchor='middle'
                            fill='rgba(102, 102, 102, 1)'
                          >
                            {cur.id}
                          </text>
                        </Marker>
                      )}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      {/* <div className='bg-red-300 absolute right-5 top-[150px]'>


      </div> */}
    </>
  );
};

export default MapChart;
