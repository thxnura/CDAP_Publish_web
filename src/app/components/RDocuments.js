import React from 'react'
import Subdocuments from './documents/Subdocuments'
import Subtitle from './Subtitle'

function RDocuments() {
  return (
    <div className=''>
      <Subtitle className="" text="DOCUMENTS" subtext="Please find all documents related to this project below." />
      <div className='bg-neutral-800 p-5 text-white rounded-lg'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />
   
        </div>
      </div>

      <div className='p-8'></div>

      <Subtitle className="" text="PRESENTATIONS" subtext="Please find all presentations related this project below." />
      <div className='bg-neutral-800 p-5 text-white rounded-lg'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          <Subdocuments
            title="Status Document 1"
            date="Submitted on 2021/02/25"
            status="Group"
            link="test"
          />

          
   
        </div>
      </div>
      
    </div>
  )
}

export default RDocuments