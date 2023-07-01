import React, { FC } from 'react'


const Maps: FC = () => {
  return (
    <div className="w-full h-96 flex flex-col px-0 md:px-14 lg:px-20 m-10">
      <iframe className="h-full" src="https://maps.google.com/maps?width=20&amp;height=100&amp;hl=en&amp;q=compuplaza arequipa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
  )

}

export default Maps