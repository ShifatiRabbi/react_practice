import React, {useState, useEffect} from "react"
import useFetch from "./components/HOOKs/useFetch";
import useFetchAsync from "./components/HOOKs/useFetchAsync";
import Countries from "./components/Countries/Countries";
import "./app.css"

export function App() {
  
  const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,area";
  
  // ********* process for external connection using useFetch() *********
  // const {data, isLoading, error} = useFetch(url);
  // console.log(data)
  
  // ********* process for external connection using useFetch() async function *********
  const {countries, isLoading, error} = useFetchAsync(url);

  return (
    <>
      <h1>Country App</h1>
      { isLoading && <h4>Loading!!! Please Wait...</h4> }
      { error && <h4>{error.message}</h4> }
      { countries && <Countries countries={countries} />}
    </>
  )
}
