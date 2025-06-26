import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [info, setInfo] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setInfo({ data: data, isLoading: false, hasError: null });
  };

  useEffect(() => {
    getFetch(url);
  }, [url]);

  return info;
};