import React from 'react'
import Specialist from './Specialist';

function SpecialistList({ arr }) {
  return (
    <>
      <div className='w-full flex space-x-8 mt-32 relative overflow-hidden'>
        {
          arr.map((specialist) => (
            <Specialist key={specialist} arr={specialist} />
          ))

        }
      </div>
    </>
  )
}

export default SpecialistList;