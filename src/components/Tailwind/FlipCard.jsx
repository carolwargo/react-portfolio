import React from 'react';
import GirlCamera from '../../assets/images/GirlCamera.png'


const FlipCard = () => {

    return (
        <div className='tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-slate-100'>
            <div className='tw-group tw-h-96 tw-w-96 [perspective:1000px]'>
            <div className='tw-relative tw-w-full tw-h-full tw-rounded-xl tw-shadow-xl tw-transition-all tw-duration-500 [transform-style:preserve-3d] tw-group-hover:[transform:rotateY(180deg)]'>
            <div className='tw-inset-0 tw-absolute'>
    <img  className='tw-shadow-xl tw-h-full tw-w-full tw-object-cover tw-rounded-xl tw-shadow-black/80' src={GirlCamera} alt='girl with camera'></img>
    </div>
    
    <div className='tw-absolute tw-inset-0 tw-w-full tw-h-full tw-px-12 tw-text-center tw-rounded-xl tw-bg-black/80 tw-text-slate-200 [transform:rotateY(180)] [back visibility:hidden'>
   <div className='tw-min-h-full tw-justify-center tw-items-center tw-flex-col tw-flex'>
<h1 className='tw-font-bold tw-text-3xl'>
  Joanna Doe
</h1>
<p className='tw-text-lg'>Photographer</p>
<p className='tw-text-base'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
<button className='tw-rounded-md tw-text-sm tw-mt-2 tw-py-1 tw-px-1 tw-bg-neutral-800 tw-hover:bg-neutral-900'>
  Read More
</button>
</div>    
</div>
</div>
</div>
</div>
    )

}
export default FlipCard;