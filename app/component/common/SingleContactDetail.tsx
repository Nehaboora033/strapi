"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Input from './Input'
import { formSubmitProps } from '@/app/utils/type'
import { FormUseDelete, FormUserUpdate } from '@/app/utils/api/apiList'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const SingleContactDetail = ({ singleDetail }: { singleDetail: formSubmitProps }) => {
    const [formData, setFormData] = useState({
        name: singleDetail.name || "",
        email: singleDetail.email || "",
        phoneNumber: singleDetail.phoneNumber || "",
        message: singleDetail.message || "",
    })
    // console.log(singleDetail, "kdjfhjdhfuwefhjdznmbsjhdfwIU")
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleDelete = async () => {
        if (!singleDetail?.documentId) return
        try {
            await FormUseDelete(singleDetail.documentId)
            toast.success("Deleted successfully")
            router.push("/contact-details")
        } catch (error) {
            toast.error("Delete failed")
        }
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await FormUserUpdate(
                { data: { ...formData } },
                singleDetail.documentId
            )
            toast.success("done")
        } catch (error) {
            toast.error("error")
        }

    }

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

                <div className="bg-white  border border-[#61A146] rounded-2xl shadow-sm p-8 lg:p-10">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Name</span>
                            <Input
                                className='border'
                                name='name'
                                placeholder={formData.name}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Email</span>
                            {/* <Input defaultValue="johndoe@example.com" type="email" className="!border-gray-300" /> */}
                            <Input
                                name="email"
                                placeholder={formData.email}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Phone Number</span>
                            <Input
                                name="phoneNumber"
                                placeholder={formData.phoneNumber}
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <span className="text-sm font-semibold text-[#61A146] uppercase tracking-wider">Message</span>
                            <textarea
                                name="message"
                                placeholder={formData.message}
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full bg-[#FAFAFA] border  border-green focus:border-green/50 rounded-xl px-4 py-3 outline-none focus:bg-white transition-colors text-[14px] resize-none`}
                            ></textarea>
                        </div>
                        <button type='submit' className="font-semibold text-sm leading-[160%] text-[#19AE1A] bg-transparent py-3 px-8 rounded-xl cursor-pointer hover:bg-[#19AE1A] hover:text-[#FAFAFA] border border-[#19AE1A] shadow-sm transition-all ease-linear duration-300">
                            Save
                        </button>
                        <button   // ✅ IMPORTANT (not submit)
                            onClick={handleDelete} type='button' className="font-semibold text-sm leading-[160%] text-white py-3 px-8 rounded-xl cursor-pointer bg-green hover:bg-white hover:text-green border border-[#19AE1A] shadow-sm transition-all ease-linear duration-300">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SingleContactDetail