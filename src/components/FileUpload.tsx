'use client'

import React from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

const FileUpload = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  
    return (
        <div className="p-2 rounded-xl bg-slate-100 ring-1 ring-inset ring-gray-900/10 lg:mx-auto lg:w-3/4 lg:rounded-2xl lg:p-3">
            <div 
                {...getRootProps({
                    className: 
                      'border-2 border-dashed border-gray-300 cursor-pointer rounded-xl p-6 md:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 lg:p-12',
                })}
            >
                <input {...getInputProps()} />
                <img src="/upload.png" alt="file-upload" className='w-12 sm:w-16 md:w-18 lg:w-20'/>
                <p className="mt-2 text-sm text-gray-500">
                    Click to upload, or drag PDF here
                </p>
            </div>
        </div>
    )
}

export default FileUpload
