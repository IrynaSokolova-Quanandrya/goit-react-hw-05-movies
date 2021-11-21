/** @format */
import { useState } from "react";
import { toast } from "react-toastify";

export default function Input({ onSubmit }) {
  const [query, setQuery] = useState("");
  //   console.log(query);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast.error("Enter search query!");
    }
    onSubmit(query);

    setQuery("");
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        <input
          className='input'
          value={query}
          name={query}
          type='search'
          onChange={handleChange}></input>
        <button type='submit' className='button'>
          Search
        </button>
      </label>
    </form>
  );
}
