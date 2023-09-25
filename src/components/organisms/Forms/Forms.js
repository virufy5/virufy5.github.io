import iconDrop from '~/assets/static/icons/dropzone/icon.svg'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import TitleText from '~/components/molecules/TitleText/TitleText'
import Button from '~/components/atoms/button/Button'
import { formIDs } from '~/forms/TellYourStory'
import { useI18n } from '~/i18n'

export default function Forms({}) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const {
    tellYourStory: { form },
  } = useI18n()

  const files = acceptedFiles.map((file) => (
    <li key={__filename}>
      {__filename} - {file.size} bytes
    </li>
  ))

  return (
    <>
      <form
        action={formIDs.url}
        className="m-auto mt-16 max-w-[1280px] px-5 sm:px-10 lg:items-center"
        target="_blank"
        autoComplete="off"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.name}
          </label>
          <input
						name={formIDs.name}
            type="name"
            id="name"
            className="text-smlock w-full border border-gray-400 bg-white p-2.5 text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.email}
          </label>
          <input
						name={formIDs.email}
            type="email"
            id="email"
            className="block w-full border border-gray-400 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.message}
          </label>
          <textarea
						name={formIDs.message}
            id="message"
            rows={5}
            className="text-smblock w-full border border-gray-400 bg-white p-2.5 text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="user_photo"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.uploadPhoto}
          </label>
          <div className="flex w-full flex-col items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="containerflex flex h-24 w-full cursor-pointer flex-col items-center justify-center border border-gray-400"
            >
              <div
                className="flex flex-col items-center justify-center pt-5 pb-6"
                {...getRootProps({ className: 'dropzone' })}
              >
                <input {...getInputProps()} />
                <ImageAtomLocal
                  src={iconDrop}
                  imagesize="px50"
                  ImageStyleProps=""
                  alt="drop"
                  border=""
                />
              </div>
            </label>
            <div className="mt-5 mb-10 flex w-full flex-col items-start">
              <TitleText
                TitleSize="h4"
                TitleLabel={form.titleFiles}
                TextSize="normal"
                TextLabel={files}
                ContainerTextProps=""
                ContainerTitleProps=""
                TitleClassProps=""
                TextClassProps=""
              />
            </div>
          </div>
          <div className="mb-20 flex flex-col items-center justify-center">
            <Button size="medium" type="primary" path="#" label={form.button} />
          </div>
        </div>
      </form>
    </>
  )
}
