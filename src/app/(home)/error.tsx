"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {
  //esto seria mas para tus servicios de observabilidad, dentro de useeffect se pondria la funcion  de analitica
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
