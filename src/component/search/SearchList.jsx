import React from 'react'
import './Search.css'



function SearchList( {results} ) {
return( 
  <div className='result-list'>
    {
      results.map((result) => {
        return <div key={result.id} className="list">
          {result.title}
        </div>
      })
    }

  </div>
    )
}

export default SearchList