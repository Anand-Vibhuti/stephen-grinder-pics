import axios from "axios";

const searchImages = async () => {
 const response= await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 399QsocxfgsDY5CpyZjNy8xIoGWkUIciIoxV6VPYfGw",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);
  return response;
};
export default searchImages;