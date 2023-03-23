// import { useMutationLocation } from "../mutation/useMutationLocation";
// import { useGeolocationMode } from "./useGeolocationMode";

// export const useRequestLocationMode = () => {
//   const [location] = useMutationLocation();
//   const { position } = useGeolocationMode();

//   const useRequestLocation = async () => {
//     const result = await location({
//       variables: {
//         location: {
//           lat: position?.coords?.latitude,
//           lng: position?.coords?.longitude,
//         },
//       },
//     });
//     console.log("새로운 로케이션 뮤테이션 작동", result);
//     console.log("포지션", position);
//   };

//   return { useRequestLocation };
// };
