import {Book} from './Book'
export function Bookshelf({manetxt}) {
    return (<>
                  <div className="bookshelf">
                <h2 className="bookshelf-title">{manetxt}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Book/>
                  </ol>
                </div>
              </div>
    </>)
}