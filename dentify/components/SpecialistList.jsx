import React from 'react'
import Specialist from './Specialist';

function SpecialistList({ arr }) {
  return (
    <>
      <div className='w-full flex space-x-8 mt-32 relative'>
        {
          arr.map((specialist) => (
            <Specialist arr={specialist} />
          ))

        }
      </div>
    </>
  )
}

export default SpecialistList;