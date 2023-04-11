import { useState } from "react";





export const useContent = (initialForm, validateForm) => 
{
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loadin, setLoadin] = useState(false);
  const [response, setResponse] = useState(null);



  const handleChange = (e) => {};
  const handleBlur = (e) => {};
  const handleSubmit = (e) => {};



  return {
      form, error, loadin, response,
       handleChange,handleBlur,handleSubmit,


  };

};

