import {Book} from './Book'
export function Bookshelf({manetxt,data,setupdate}) {
    return (<>
                  <div className="bookshelf">
                <h2 className="bookshelf-title">{manetxt}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {data.map((x)=>{
                      if (x.shelf === manetxt) {
                        let title = x.title || ""
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
                      }
                     })}
                  </ol>
                </div>
              </div>
    </>)
}