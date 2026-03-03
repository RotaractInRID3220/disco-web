import React from 'react'

const NewsletterFirst = () => {
  return (
    <div className="lg:px-20 px-8 lg:mt-[8%] mt-[25%] mb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="font-poppins text-cranberry uppercase tracking-widest text-sm mb-2">
          Rotaract District 3220
        </p>
        <h1 className="font-bebas text-cranberry lg:text-8xl text-6xl tracking-wide">
          NEWSLETTER
        </h1>
        <div className="w-24 h-1 bg-cranberry mx-auto mt-4 rounded-full" />
        <p className="font-poppins text-gray-500 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
          Stay updated with our latest stories, achievements, and happenings from across the district. Browse through our interactive newsletter below.
        </p>
      </div>

      {/* Flip-book embed */}
      <div className="border border-cranberry/30 rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-cranberry/5 px-6 py-3 border-b border-cranberry/20 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cranberry/40" />
          <div className="w-3 h-3 rounded-full bg-cranberry/25" />
          <div className="w-3 h-3 rounded-full bg-cranberry/10" />
          <span className="font-poppins text-cranberry/60 text-xs ml-2 tracking-wide">
            Interactive Flip-Book
          </span>
        </div>
        <div className="w-full lg:h-[700px] h-[420px]">
          <iframe
            allowFullScreen
            allow="clipboard-write"
            scrolling="no"
            className="w-full h-full"
            src="https://heyzine.com/flip-book/1139c8797b.html"
            style={{ border: 'none' }}
          />
        </div>
      </div>

      {/* Footer note */}
      <p className="font-poppins text-center text-gray-400 text-xs mt-6">
        Use the arrows inside the viewer to flip through the pages. Best viewed on desktop.
      </p>
    </div>
  )
}

export default NewsletterFirst
