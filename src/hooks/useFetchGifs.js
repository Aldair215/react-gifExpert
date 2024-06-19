import React, { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagen = async () => {
    const newImages = await getGifts(category);

    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagen();
  }, []);

  return {
    images,
    isLoading,
  };
};
