import "./App.css";
import { useState } from "react";
import {SearchBooks} from './SearchBooks'
import {Bookshelf} from './Bookshelf'
import {get,getAll,update,search} from './BooksAPI'

console.log(get);
console.log(getAll);
console.log(update);
console.log(search);


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <>
    <div className="app">
      {showSearchPage ? (
        <SearchBooks showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            <Bookshelf manetxt={"Currently Reading"}/>
            <Bookshelf manetxt={"Want to Read"} />
            <Bookshelf manetxt={"Read"}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
