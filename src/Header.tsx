import './Header.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {



  const [searchInput, setSearchInput] = useState<string>("");




  const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput((e.target as HTMLInputElement).value);
  }


  return (
    <>
    <header>
    <Link to="/">
    <div className='header'>
    <h1>The Recipe App</h1>
    <h3>What recipe do you want today?</h3>
    </div>
    </Link>
    <div className="search">
    <input placeholder="Search" onChange={inputChangeHandler}></input>
    <a href={ `/search/${searchInput}` }>Search</a>
    </div>
  </header>
  </>
  )
}
