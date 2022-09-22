import { useState,useEffect } from "react"
import {get,getAll,update,search} from './BooksAPI'
import {Book} from './Book'
export function SearchBooks({showSearchPage,setShowSearchpage}) {
    const [query,setquery] = useState("");
    const [data,setdata] = useState([])
    useEffect(() => {
      let trash = "123"
        if (query === "") {
            setdata([])
            
        }else{
            trash = setTimeout(() => {
                search(query).then((result) => {
                    if (Array.isArray(result)) {
                        setdata(result)
                        console.log(data);
                    }else{
                        setdata([])
                    }
                }).catch((err) => {
                    console.error(`eror${err}`);
                })
            },500)
        }
      return () => {
        if (!trash === "123") {
          clearTimeout(trash)
        }

      }
    }, [query])



    function booksHandeler() {
        let check = Array.isArray(data)
        if (data === [] ) {

            return (<><li><h1>no books</h1></li></>)
        }else{
            console.log(data);
            if (Array.isArray(data)) {
              
            
            return data.map((x)=>{
              let title = x.title || ""
              let authors = x.authors[0] || ""
              let imageLinks = x.imageLinks.smallThumbnail || ""
              let id = x.id || ""
              let key = x.id || 0
                // if (typeof x.imageLinks.smallThumbnail === 'undefined') {
                //     x.imageLinks.smallThumbnail = ''
                // }
                // if (typeof x.id === 'undefined') {
                //     x.id = ""
                // }
                // if (typeof x.authors[0] === 'undefined') {
                //     x.authors[0] = ""
                // }
                // if (typeof x.title === 'undefined') {
                //     x.title = ""
                // }
                return <Book title={title} authors={authors} imageLinks={imageLinks} id={id} key={key} />
            })}else{
              return (<><li><h1>no books</h1></li></>)
            }
        }
    

    }
    return(<>
    <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(e)=>{setquery(e.target.value)}}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">{booksHandeler()}</ol>
          </div>
        </div>
    </>)
}