import axios from "axios";

export const getAllMovies = async () => {
  try {
    // Example URL correction in getAllMovies
const res = await axios.get("http://localhost:3000/uview");

    
    if (res.status !== 200) {
      console.error("No Data");
      return null; // or throw an error if appropriate
    }

    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Throw the error to handle it elsewhere if needed
  }
};
