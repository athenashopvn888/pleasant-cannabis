/**
 * PCB01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "PCB01",
  "fullName": "Pleasant Cannabis Dispensary Weed Delivery",
  "street": "758 Mt Pleasant Rd",
  "city": "Toronto",
  "region": "ON",
  "postal": "M4S 2N6",
  "phoneDisplay": "(289) 806-9425",
  "phoneTel": "tel:+12898069425",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJDSqStd4zK4gRg8tUSyHMUHU",
  "placeId": "ChIJDSqStd4zK4gRg8tUSyHMUHU",
  "neighbourhood": "Mount Pleasant / Midtown Toronto",
  "intersection": "",
  "transit": "Served by the 74 Mount Pleasant bus along Mount Pleasant Road and by TTC routes on Eglinton Avenue. Eglinton station on Line 1 is the closest subway.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
