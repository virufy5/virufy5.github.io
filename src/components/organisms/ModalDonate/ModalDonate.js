import React from 'react'
import DonateModalImg from '~/assets/static/images/Modals/DonateHero.png'
import Paypal from '~/assets/static/images/Modals/Paypal.png'
import GoFundMe from '~/assets/static/images/Modals/GoFundMe.png'
import Title from '~/components/atoms/Title/Title'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'

export default function ModalDonate() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <div>
      {showModal ? (
        <>
          <div
            data-controls-modal="your_div_id"
            data-backdrop="static"
            data-keyboard="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
          >
            <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px]">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                  <ImageAtomLocal
                    imagesize="pr100"
                    border="none"
                    src={DonateModalImg}
                    alt="Logo Virufy"
                    ImageStyleProps=""
                  />
                </div>
                {/*body*/}
                <div className="relative flex flex-col items-center p-6">
                  <p className=" mt-2 mb-6 text-lg leading-relaxed">
                    <Title
                      Text={'Donate Options'}
                      H={'h5tepsHome'}
                      TitleClassProps={'text-center color-black'}
                    />
                  </p>
                  <a
                    href="https://www.paypal.com/us/fundraiser/charity/4348461"
                    target="_blank"
                  >
                    <button
                      className="mr-1 mb-3 flex w-[270px] justify-center rounded bg-gray-200 px-6 py-2 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <ImageAtomLocal
                        imagesize="px110x27"
                        border="none"
                        src={Paypal}
                        alt="Logo Virufy"
                        ImageStyleProps=""
                      />
                    </button>
                  </a>
                  <a
                    href="https://www.gofundme.com/f/virufy-covid19"
                    target="_blank"
                  >
                    <button
                      className="mr-1 mb-1 flex w-[270px] justify-center rounded bg-gray-200 px-6 py-2 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <ImageAtomLocal
                        imagesize="px103x30"
                        border="none"
                        src={GoFundMe}
                        alt="Logo Virufy"
                        ImageStyleProps=""
                      />
                    </button>
                  </a>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  )
}
