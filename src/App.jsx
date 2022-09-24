import "./App.css";
import { useState,useEffect } from "react";
import {Bookshelf} from './Bookshelf'
import {getAll} from './BooksAPI'
import { Link } from "react-router-dom";

function App() {
const [books,setbooks] = useState([])
const [update,setupdate] = useState(true)
  useEffect( () => {
      if (update === true) {
          getAll().then( (data) => {
          setbooks(data);
        });
        setupdate(false);
      }

  }, [update])
  return (
    <>
    <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <Bookshelf manetxt={"currentlyReading"} data={books} setupdate={setupdate} />
            <Bookshelf manetxt={"wantToRead"} data={books} setupdate={setupdate}  />
            <Bookshelf manetxt={"read"} data={books} setupdate={setupdate}  />
            </div>
          </div>
          <div className="open-search">
            <Link to={"/Search"} >Add a book</Link>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
