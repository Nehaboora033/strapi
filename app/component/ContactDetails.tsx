import React from 'react'
import Link from 'next/link'
import Button from './common/Button';
import Heading from './common/Heading';
import { contactFormSubmitUI, contactFormSubmitUser } from '../utils/api/apiList';
import { formSubmitProps, submitUserProps } from '../utils/type';

const ContactDetails = async () => {
    const submitDataUser = await contactFormSubmitUser();
    // console.log(submitDataUser, "submit result");
    if (!submitDataUser.data) return null
    const SubmitDetailsUser = submitDataUser.data

    const submitDataUI = await contactFormSubmitUI();
    // console.log(submitDataUI?.data, "submit ui");
    if (!submitDataUI.data.contactSubmission) return null
    const SubmitDetailUI = submitDataUI.data.contactSubmission



    return (
        <div className="px-4 py-[80px] bg-[#FAF9F6] min-h-screen">
            <div className="max-w-[1240px] mx-auto">
                {/* Header section */}
                <div className="mb-12">
                    <Heading className="text-[#62924A]! text-center">
                        {SubmitDetailUI.title}
                    </Heading>
                    <p className="text-gray-500 text-[20px] mt-4 text-center">
                        {SubmitDetailUI.description}
                    </p>
                </div>

                {/* Table container */}
                <div className="bg-white border border-[#C5D9B4] rounded-[16px] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="border-b border-[#C5D9B4] bg-green/10">
                                    {SubmitDetailUI.headersubmission.map((item:submitUserProps, index:number) => (
                                        <th className='py-4 px-6 text-[12px] font-bold text-[#8FA576] uppercase tracking-wider' key={index}>
                                            {item.title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {SubmitDetailsUser.map((sub:formSubmitProps, index:number) => (
                                    <tr key={index} className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors">
                                        <td className="py-4 px-6 text-[18px] text-green/90 font-semibold  ">{index + 1}</td>
                                        <td className="py-4 px-6 text-[14px] text-black font-semibold">{sub.id}</td>
                                        <td className="py-4 px-6 text-[14px] text-gray-800 font-medium">{sub.name}</td>
                                        <td className="py-4 px-6 text-[14px] text-gray-600">{sub.email}</td>
                                        <td className="py-4 px-6 text-[14px] text-gray-500">{sub.phoneNumber}</td>
                                        <td className="py-4 px-6 text-[14px] text-gray-600">{sub.message}</td>
                                        <td className="py-4 px-6">
                                            <Link href={`/contact-details/${sub.documentId}`}>
                                                <Button className=" px-5! 
                                                py-[6px]! rounded-[6px]! text-[11px]">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails