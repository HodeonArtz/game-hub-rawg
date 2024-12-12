import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "77bfa9baa12645a88f9bbd163602de30",
  },
});
