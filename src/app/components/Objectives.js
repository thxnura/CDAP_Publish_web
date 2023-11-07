import React from 'react'
import Subtitle from './Subtitle'
import Subobjectives from './objectives/Subobjectives'

function Objectives() {
  return (
    <div>
        <Subtitle text="RESEARCH OBJECTIVES" />
        <div>
            <div className='grid lg:grid-cols-2 gap-10 px-5 w-full'>
                <div>
                    <Subobjectives 
                        title="IDENTIFY AND PREVENT INTRUDERS djvfnkdfjvn"
                        description="The poultry Hub system can identify whether the unauthorized animals are there or not there is any kind of harmful animal related to the poultry farm will be detected and prevented according to suitable manner.. in order to do this we are taking sample animal data."  
                    />
                </div>

                <div>
                    <Subobjectives 
                        title="DEVELOP A MODEL TO DETECT EARLY SIGNS OF DISEASES IN EGG-LAYING HENS."
                        description="The objective of this research is to develop a machine learning model that can accurately detect early signs of diseases in egg-laying hens. The model should be able to identify the patterns and changes in the hens' behavior, egg-laying, and physiological characteristics that may indicate the onset of a disease."  
                    />
                </div>

                <div>
                    <Subobjectives 
                        title="PREDICTION AND CONDITION CONTROL REQUIRED TO MAINTAIN HIGH EGG PRODUCTION"
                        description="Developing a System to predict the product outcome and control conditions in the poultry farm to increase productivity by designing a new algorithm, and it’s going to be used to get the most accurate Date​."  
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Objectives