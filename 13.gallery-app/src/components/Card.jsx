import React from 'react'

const Card = (props) => {
  return (
    <div className="w-full md:w-[48%] text-black lg:w-[24%] bg-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
  <a href={props.elem.url} target="_blank"> <img
    className="h-60 w-full object-cover bg-gray-50"
    src={props.elem.download_url}
    alt="Artwork"
  /> </a>

  <div className="px-3 py-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img 
          className="w-8 h-8 rounded-full bg-amber-700" 
          src={props.elem.download_url}
          alt="Profile pic"/>
        <h4 className="font-semibold">{props.elem.author}</h4>
      </div>

      <button className="text-2xl text-gray-500 hover:text-red-500 transition-colors">
        <i className="ri-heart-fill"></i>
      </button>
    </div>
  </div>
</div>
  )
}

export default Card
