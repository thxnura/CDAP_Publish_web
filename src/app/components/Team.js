import React from 'react'
import Subtitle from './Subtitle'
import Teammember from './team/Teammember'
function Team() {
  return (
    <div>
        <Subtitle text="MEET OUR TEAM" />
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-5 mb-20'>
          
            <Teammember name="Prof. Sanath Jayawardena" src="/s1.jpg" post="Project Leader" />
            <Teammember name="Prof. Saliya Arachchige" src="/s2.jpg" post="Project Member" />
            
        </div>

        <div className='grid grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10'>
            <Teammember name="Thathsarani W.R.V.K" src="/kavindi.jpg" post="Project Leader" />
            <Teammember name="Piusha P.G.T" src="/thamodi.jpg" post="Project Member" />
            <Teammember name="Peris D.T.M." src="/thanura.jpg" post="Project Member" />
            <Teammember name="Perera P.L.S" src="/lakindu.jpg" post="Project Member" />
        </div>
    </div>
  )
}

export default Team