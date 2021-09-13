import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      console.log("Data fetched", res);
      return res.data;
    })
    .catch((err) => console.log("no data fetched", { err }));
};

export default fetchColorService;
