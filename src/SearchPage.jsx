import { Header } from "./Header";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <div className='container'>
      <h4 style={{position: "relative", top: "20px", left: "70px", color: "gray"}}>No results for '{(window.location.pathname).split( '/' ).pop()}'</h4>
    </div>
    </div>
  )
}

export default SearchPage
