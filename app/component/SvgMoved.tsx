import React from 'react'
import Icons from './common/Icons'

const SvgMoved = () => {
    return (
        <div className='bg-black h-screen'>
            <div className='max-w-[1140px] mx-auto text-white'>
                svg moved
                <Icons icon="allPodcastStar" className="w-full h-auto" />
                <div className="animate-fade-in-scale" />
                <div className="animate-fade-in-scale-reverse" />
                <div className="animate-translate-position" />
                <div className="animate-opacity-pulse" />
            </div>
        </div>
    )
}

export default SvgMoved