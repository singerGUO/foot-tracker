import * as Location from 'expo-location';

const tenMetersWithDegrees=0.0001;
// only for testing
//fake location
const getLocation=increment=>{
  return{
      timestamp:10000000,
      coords:{
          speed:0,
          heading:0,
          accuracy:5,
          altitudeAccuracy:5,
          altitude:5,
          longitude:-122.0312186+increment*tenMetersWithDegrees,
          latitude:37.33233141+increment*tenMetersWithDegrees
      }
  };
};

//run this once every sec, so 1000 million sec
let counter=0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    });
    counter++;
},1000);

