
import Header from './Components/Header'
import './App.css'
import Movies_collections from './Components/Movie_collections'
import Body from './Components/Body'
import Video from './Components/Video'
import './Components/links'
import Cards from './Components/Cards'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/Background_dp.jpg'


function App() {
  return (
    <>
    
    <Header/>

    <nav class="btn-group"> 
    <button type="button" className="btn btn-link"> <i class="bi bi-box-arrow-in-right"></i> SignIn </button>
    <button type="button" className="btn btn-link"> SignUp </button>
    
    <input className="Searchbar" type="search" placeholder="Search for more Movies" aria-label="Search"  />
    
    <button type='button' className="btn btn-light"><i class="bi bi-person-plus"></i> Create Account</button>
    </nav>
           
    <Body/> <br />
    <Cards/> <br />
    <Video/>
    <Movies_collections/>

  <footer className="bottom-page">
    <p>Contact Us for Rating & Review the Movie Page</p><i class="bi bi-1-circle-fill"></i>
    <p><a href="mailto:hege@example.com">CapstoneProject@example.com </a><i class="bi bi-airplane-engines-fill"></i></p>
    
  </footer> 
  <links/>
        
    </>
  )
}

export default App
