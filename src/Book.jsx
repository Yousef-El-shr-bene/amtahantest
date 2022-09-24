import { useEffect, useState } from "react"
import {Select} from "./Select"
import {get} from './BooksAPI'
export const Book = ({title,authors,imageLinks,id,setupdate}) => {
const [bosition,setbosition] = useState("none")
  useEffect(() => {
    let trash = setTimeout(() => {
      console.log(id);
      get(id).then( (next)=>{
        setbosition(next.shelf)
      })

    }, 0);

    return ()=>{
      clearTimeout(trash)
    }
  }, [bosition])
    return (<>
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            id={id}
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                `url(${imageLinks})`,
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                          <Select bosition={bosition} id={id} setupdate={setupdate} />
                          </div>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors.toString()}</div>
                      </div>
                    </li>
    </>)
}