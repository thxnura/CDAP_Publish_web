import React from 'react'
import Subtitle from './Subtitle'
import Subtechnologies from './technologies/Subtechnologies'

function Technologies() {
  return (
    <div>
        <Subtitle text="TECHNOLOGIES USED."/>
        <div className='grid grid-cols-6 gap-5'>
            <Subtechnologies src="/php.png" title="Php" />
            <Subtechnologies src="/tail.png" title="Tailwind CSS" />
            <Subtechnologies src="/py.png" title="Python" />
            <Subtechnologies src="/ex.png" title="Express JS" />
            <Subtechnologies src="/fl.png" title="Flask" />
            <Subtechnologies src="/nx.png" title="NextJS" />
        </div>
    </div>
  )
}

export default Technologies