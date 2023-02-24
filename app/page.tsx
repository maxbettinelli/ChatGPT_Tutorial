import React from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'


function HomePage() {
  return (
    <div className='text-white flex flex-col items-center justify-center h-screen px-4'>
        <h1 className='text-5xl font-bold mb-20'>Chat GPT</h1>

        <div className='flex space-x-2 text-center'>
            
                {/* first */}
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* sun icon */}
                    <SunIcon className="h-6 w-6"/>

                    <h2>Examples</h2>
                </div>

                <div className=' space-y-2'>
                    <p className='infoText'>"Explain something to me"</p>
                    <p className='infoText'>"What is the difference between a dog and a cat?"</p>
                    <p className='infoText'>"What is the color of the sun?"</p>
                </div>
            </div>

                {/* second */}
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* bolt icon */}
                    <BoltIcon className="h-6 w-6"/>

                    <h2>Capabilities</h2>
                </div>

                <div className=' space-y-2'>
                    <p className='infoText'>"Change the Chat GPT model to use"</p>
                    <p className='infoText'>"Info stored in Firebase Firestore"</p>
                    <p className='infoText'>"Notifications by Hot Toast when Chat GPT is thinking🤔 "</p>
                </div>
            </div>
            
                {/* third */}
            <div>

                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* exclamation icon */}
                    <ExclamationTriangleIcon className="h-6 w-6"/>

                    <h2>Limitations</h2>
                </div>

                <div className=' space-y-2'>
                    <p className='infoText'>"Still in beta"</p>
                    <p className='infoText'>"There is a little bit of woke bias"</p>
                    <p className='infoText'>"This is a pre 2021 model. It's young."</p>
                </div>
            </div>           
        </div>
    </div>
  )
}

export default HomePage