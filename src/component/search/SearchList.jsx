import React from 'react'



function SearchList( {results} ) {
return( 
  <div className=' text-[#111111] text-[14px] w-[80%] left-[5rem] lowercase border absolute bg-white'>
    {
      results.map((result) => {
        return <div key={result.id} className="hover:bg-[#e5e5e5] rounded p-1 cursor-pointer transition-[5s]">
          {result.id}
        </div>
      })
    }

  </div>
    )
}

export default SearchList 