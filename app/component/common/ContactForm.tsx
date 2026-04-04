import React from 'react'
import Button from './Button'
import { contactProps } from '@/app/utils/type'

const ContactForm = ({ contactDetail }: { contactDetail: contactProps }) => {
    const topThreeDetails = contactDetail?.details?.slice(0, 3) || [];
    const bottomTwoDetails = contactDetail?.details?.slice(3, 5) || [];
    
   
    return (
        <div className='px-4 py-[80px]'>
            <div className='max-w-[1140px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Left Column / Map & Hours */}
                    <div className='border border-green rounded-[24px] overflow-hidden bg-white'>
                        {/* Map Section */}
                        <div className='w-full h-[250px] bg-gray-200 relative'>
                            <iframe
                                src="https://maps.google.com/maps?q=37%20Defu%20Lane%2010,%20Singapore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Text Section */}
                        <div className='p-6 md:p-8'>
                            <h2 className='text-[28px] font-semibold text-green mb-6'>
                                {contactDetail?.title}
                            </h2>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                {/* First Column */}
                                <div className='flex flex-col gap-4'>
                                    {topThreeDetails?.map((items, index) => (
                                        <div className='' key={index}>
                                            <h3 className='font-semibold text-black text-[16px]'>{items.title} </h3>
                                            <p className='text-grey text-[14px] mt-1'>{items.description} </p>
                                        </div>
                                    ))}
                                </div>
                                {/* Second Column */}
                                <div className='flex flex-col gap-4'>
                                    {bottomTwoDetails.map((item, index) => (
                                        <div className='' key={index}>
                                            <h3 className='font-semibold text-black text-[16px]'>{item.title} </h3>
                                            <p className='text-grey text-[14px] mt-1'>{item.description} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column / Form */}
                    <div className='border border-green rounded-[24px] bg-green/12 p-6 md:p-8 flex flex-col justify-center'>
                        <h2 className='text-[28px] font-semibold text-green mb-2'>Contact Us</h2>
                        <p className='text-grey text-[14px] mb-8'>Fastest way to get your quote send us photos directly.</p>

                        <form className='flex flex-col gap-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className='w-full bg-[#FAFAFA] border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-green/50 focus:bg-white transition-colors text-[14px]'
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='w-full bg-[#FAFAFA] border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-green/50 focus:bg-white transition-colors text-[14px]'
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className='w-full bg-[#FAFAFA] border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-green/50 focus:bg-white transition-colors text-[14px]'
                            />
                            <textarea
                                placeholder="Message..."
                                rows={4}
                                className='w-full bg-[#FAFAFA] border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-green/50 focus:bg-white transition-colors text-[14px] resize-none'
                            ></textarea>

                            <div className='flex flex-col gap-3 mt-2'>
                                <Button className=''>
                                    Send
                                </Button>
                                <Button
                                    className=''>
                                    Start a WhatsApp Chat
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm