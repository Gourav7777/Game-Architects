import React from 'react'

const ChoiceShow = ({ imgUser, imgCom }: { imgUser: string; imgCom: string }) => {
    return <>
    <div>
          <div
            
            className=" p-2 rounded-lg sm:flex sm:visible justify-between gap-5 items-center hidden "
          >
            <div className="font-bold  border-4 border-orange-600 bg-gray-200 flex flex-col items-center rounded-lg leading-tight px-4 py-2">
              <span className="text-skin-score text-md tracking-widest">
                Your:Choice
              </span>
             <img src={imgUser} />
            </div>
            <div className="font-bold  border-4 border-orange-600 bg-gray-200 flex flex-col items-center rounded-lg leading-tight px-4 py-2">
              <span className="text-skin-score text-md tracking-widest">
                Comp:Choice
              </span>
              <img src={imgCom} />
            </div>
          </div>
        </div>
    </>
        
}

export default ChoiceShow