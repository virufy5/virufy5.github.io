import iconDrop from "~/assets/static/icons/dropzone/icon.svg"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import React from 'react';
import { useDropzone } from 'react-dropzone';
import TitleText from "~/components/molecules/TitleText/TitleText";
import Button from "~/components/atoms/button/Button"

export default function Forms({
}) {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <>
            <form className="mt-16 px-5 sm:px-10 max-w-[1280px] lg:items-center m-auto" >
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name*</label>
                    <input type="name" id="name" class="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 border-gray-400" required></input>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email*</label>
                    <input type="email" id="email" class="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 border-gray-400" required></input>
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Message*</label>
                    <textarea id="message" rows="5" class="p-2.5 focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 border-gray-400" required></textarea>
                </div>
                <div>
                    <label for="user_photo" class="block mb-2 text-sm font-medium text-gray-900">Upload photo</label>
                    <div class="flex items-center justify-center w-full flex-col">
                        <label for="dropzone-file" class="flex containerflex flex-col items-center justify-center w-full h-24 border border-gray-400 cursor-pointer">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6" {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <ImageAtomLocal src={iconDrop} imagesize="px50" />
                            </div>
                        </label>
                        <div className="flex flex-col items-start w-full mt-5 mb-10">
                            <TitleText
                                TitleSize="h4"
                                TitleLabel="Files"
                                TextSize="normal"
                                TextLabel={files}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-20">
                        <Button size="medium" type="primary" path="#" label="SEND" />
                    </div>
                </div>
            </form>
        </>
    )
}
