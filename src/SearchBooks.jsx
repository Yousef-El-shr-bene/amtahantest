import { useState,useEffect } from "react"
import {search} from './BooksAPI'
import {Book} from './Book'
import { Link } from "react-router-dom";
export function SearchBooks() {
    const [query,setquery] = useState("");
    const [data,setdata] = useState([])
    const [update,setupdate] = useState(true)
    useEffect(() => {
        if ( update || query !== "") {
          search(query).then((result) => {
            if (Array.isArray(result)) {
                setdata(result)
            }else{
                setdata([])
            }
        })
        setupdate(false)
        }else{
          setdata([])
        }
    }, [query,update])
    function booksHandeler() {
        let check = Array.isArray(data)
        if (data === [] ) {
          //
        }else if(check){
            if (Array.isArray(data)) {
              
            return data.map((x)=>{
              let title = x.title || ""
              // let subtitle = x?.subtitle || ""
              let authors
              if (x.authors === undefined) {
                authors = ""
              }else{
                authors = x.authors
              }
              let imageLinks = x?.imageLinks?.smallThumbnail || ""
              let id = x.id || ""
              let key = x.id || 0
                return <Book title={title} authors={authors} imageLinks={imageLinks} id={id} key={key} setupdate={setupdate}/>
            })}
        }
    

    }
    return(<>
    <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to={"/"}>
              Close
            </Link>
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