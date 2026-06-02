export interface LocationMock {
    name: string
    address: string
    coordinates: [number, number] // [longitude, latitude]
  }
  
  // Local Automotive Hubs around the Valley
  export const supplierLocations: LocationMock[] = [
    {
      name: "AutoZone Auto Parts - Kalispell",
      address: "740 US Hwy 2 W, Kalispell, MT 59901",
      coordinates: [-114.3292, 48.1965]
    },
    {
      name: "NAPA Auto Parts - Whitefish",
      address: "6435 US-93, Whitefish, MT 59937",
      coordinates: [-114.3324, 48.4022]
    },
    {
      name: "O'Reilly Auto Parts - Columbia Falls",
      address: "1405 9th St W, Columbia Falls, MT 59912",
      coordinates: [-114.1974, 48.3644]
    }
  ]
  
  // Target Commercial Repair Garages
  export const destinationShops: LocationMock[] = [
    {
      name: "Big Mountain Repair",
      address: "Evergreen Region, Kalispell, MT",
      coordinates: [-114.2846, 48.2231] // Your current default schema coordinates!
    },
    {
      name: "Whitefish Automotive Care",
      address: "W 2nd St, Whitefish, MT 59937",
      coordinates: [-114.3411, 48.4114]
    },
    {
      name: "Glacier Field Service Garage",
      address: "Nucleus Ave, Columbia Falls, MT 59912",
      coordinates: [-114.1832, 48.3712]
    },
    {
      name: "Lakeside Custom Fleet Services",
      address: "US-93, Lakeside, MT 59922",
      coordinates: [-114.2254, 48.0162]
    }
  ]