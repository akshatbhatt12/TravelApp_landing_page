import React from 'react'
import Image from 'next/image'

const Gallery = ()=> {
  return (
    <div className="container mx-auto px-4 py-8 mb-1">
      <h1 className="text-5xl font-bold mt-6 mb-6">Gallery</h1>
      <h3 className="uppercase regular-18 -mt-0.5 mb-3 text-green-50">
          Pictorial Insights of our app
        </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flexCenter w-full">
        <Image 
        src="/gallery.png"
        alt="map"
        width={1500}
        height={1500}
        className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
      </div>
  )
}
 
export default Gallery;
