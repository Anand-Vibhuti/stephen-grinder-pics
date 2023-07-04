import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 399QsocxfgsDY5CpyZjNy8xIoGWkUIciIoxV6VPYfGw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
