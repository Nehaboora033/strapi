import React from 'react'
import Button from './Button'
import Link from 'next/link'

const SingleContactDetail = () => {
    return (
        <section className="bg-[#F4F5F0] py-16 min-h-[calc(100vh-100px)]">
            <div className="max-w-[800px] px-5 mx-auto">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-[#61A146]">
                        Contact Details
                    </h2>
                    <Link href="/contact-details" className="font-semibold text-sm text-[#61A146] border border-[#61A146] py-2 px-6 rounded-full hover:bg-[#61A146] hover:text-white transition-all duration-300">
                        &larr; Back
                    </Link>
                </div>

                <div className="bg-white border border-[#61A146] rounded-2xl shadow-sm p-8 lg:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Contact ID</span>
                            <span className="text-lg text-gray-800 ">#1</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Name</span>
                            <span className="text-lg text-gray-800  capitalize">John Doe</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Email</span>
                            <span className="text-lg text-gray-600">johndoe@example.com</span>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Phone Number</span>
                            <span className="text-lg text-gray-800 ">+1 234 567 898</span>
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Message</span>
                            <div className="bg-[#F4F5F0] p-4 md:p-6 rounded-xl mt-2 text-gray-700 whitespace-pre-wrap leading-relaxed shadow-inner border border-gray-100">
                                Hello, I am interested in your services and would like to request a quote. Could you please provide more information?
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
                        <button className="font-semibold text-sm leading-[160%] text-[#19AE1A] bg-transparent py-3 px-8 rounded-xl cursor-pointer hover:bg-[#19AE1A] hover:text-[#FAFAFA] border border-[#19AE1A] shadow-sm transition-all ease-linear duration-300">
                            Edit Details
                        </button>
                        <Button className="font-semibold text-sm leading-[160%] text-[#FAFAFA] bg-[#19AE1A] py-3 px-8 rounded-xl cursor-pointer hover:bg-transparent hover:text-[#19AE1A] border border-transparent hover:border-[#19AE1A] shadow-sm transition-all ease-linear duration-300">
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleContactDetail