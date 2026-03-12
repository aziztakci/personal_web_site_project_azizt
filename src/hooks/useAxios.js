import { useState } from "react";
import axios from "axios";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = (method, url, data = null) => {
    setLoading(true);
    return axios({
      method,
      url,
      data,
    })
      .then((res) => {
        setLoading(false);
        return res.data;
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        throw err;
      });
  };

  return { sendRequest, loading, error };
};