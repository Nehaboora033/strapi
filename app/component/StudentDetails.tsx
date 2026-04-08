"use client"
import React, { useState } from 'react'
import Input from './common/Input'
import Button from './common/Button'
import { toast } from 'react-toastify'
import { postStudentData } from '../utils/api/apiList'
/* eslint-disable @typescript-eslint/no-explicit-any */

const StudentDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        standard: '',
        fatherName: '',
        motherName: '',
        address: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) newErrors.name = "Student name is required"
        if (!formData.standard.trim()) newErrors.standard = "Standard is required"
        if (!formData.fatherName.trim()) newErrors.fatherName = "Father name is required"
        if (!formData.motherName.trim()) newErrors.motherName = "Mother name is required"
        if (!formData.address.trim()) newErrors.address = "Address is required"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        // Success scenario
        console.log("Form submitted: ", formData)
        setFormData({
            name: '',
            standard: '',
            fatherName: '',
            motherName: '',
            address: ''
        })

        try {
            await postStudentData({ data: formData })

            toast.success("submitted form")

            setFormData({
                name: "",
                standard: "",
                motherName: "",
                fatherName: "",
                address: "",
            })

        } catch (error: any) {
            console.log(error?.response?.data || error)
            toast.error("got the error on submit ")
        }
    }



    return (
        <div className='px-4 py-12 bg-[#FAFAFA] min-h-screen'>
            <div className='max-w-[1140px] mx-auto'>
                <h2 className='text-green text-[35px]! text-center font-semibold mb-8'>
                    Student Details
                </h2>

                <div className='max-w-[700px] mx-auto bg-green/10 p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100'>
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[15px] font-medium text-gray-700 ml-1">Student Name</label>
                                <Input
                                    placeholder="Enter student name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[15px] font-medium text-gray-700 ml-1">Standard</label>
                                <Input
                                    placeholder="Enter your standard"
                                    name="standard"
                                    value={formData.standard}
                                    onChange={handleChange}
                                    error={errors.standard}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[15px] font-medium text-gray-700 ml-1">Father Name</label>
                                <Input
                                    placeholder="Enter father's name"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    error={errors.fatherName}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[15px] font-medium text-gray-700 ml-1">Mother Name</label>
                                <Input
                                    placeholder="Enter mother's name"
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    error={errors.motherName}
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[15px] font-medium text-gray-700 ml-1">Address</label>
                            <Input
                                placeholder="Enter full address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                error={errors.address}
                                type="text"
                            />
                        </div>

                        <div className="mt-4 flex justify-center">
                            <Button className="w-full sm:w-auto px-10!">Submit Details</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails