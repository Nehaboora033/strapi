"use client"
import React, { useState } from 'react'
import Button from './Button'
import { contactProps } from '@/app/utils/type'
import Input from './Input';
import { postFormData } from '@/app/utils/api/apiList';
/* eslint-disable @typescript-eslint/no-explicit-any */


const ContactForm = ({ contactDetail }: { contactDetail: contactProps }) => {
    const topThreeDetails = contactDetail?.details?.slice(0, 3) || [];
    const bottomTwoDetails = contactDetail?.details?.slice(3, 5) || [];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    })

    const [errors, setErrors] = useState<any>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const validate = () => {
        let newErrors: any = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }

        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email"
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone is required"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (validate()) {
            console.log("Form Data:", formData)

            try {
                await postFormData({ data: formData })

                alert("goood")
                // Clear the form upon a successful submission
                setFormData({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                })
            } catch (error) {
                alert("helo ther ")
            }
        }
    }

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

                        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <Input
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                            </div>
                            <Input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                error={errors.phoneNumber}
                            />
                            <div className="flex flex-col gap-1 w-full">
                                <textarea
                                    name="message"
                                    placeholder="Message..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full bg-[#FAFAFA] border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-100 focus:border-green/50'} rounded-xl px-4 py-3 outline-none focus:bg-white transition-colors text-[14px] resize-none`}
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-[12px] px-1">{errors.message}</span>}
                            </div>

                            <div className='flex flex-col gap-3 mt-2'>
                                <Button >
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