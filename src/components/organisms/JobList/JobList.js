import React, { useState, useEffect } from "react"
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import Link from "next/link"

export default function JobList() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //Función para dar formato optimo al response del API
  function _formatPositions(API) {
    const categories = [...new Set(API.map(Pos => Pos.category.title))]
    return categories.reduce((acc, category) => {
      const _positions = API.filter(Pos => Pos.category.title === category)
      return [...acc, { category: category, positions: _positions }]
    }, [])
  }

  useEffect(() => {
    setLoading(true);
    fetch('/api/positions')
      .then((res) => res.json())
      .then((data) => {
        setData(_formatPositions(data.docs));
        setLoading(false);
      }).catch((e) => {console.log(e), setLoading(false)})
  }, []);

  useEffect(() => {
    console.log("Response API:", data);
  }, [data])

  const [showModalConfirmation, setShowModalConfirmation] = React.useState(true);

  return (
  <>
    <div>
                {showModalConfirmation ? (
                    <>
                        <div
                            className="top-60 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px] lg:w-[1200px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">
                                        <Title
                                            H="h5Modals2"
                                            Text="Do you understand these are all unpaid, volunteer positions?"
                                            TitleClassProps={"mt-[30px] mx-auto mb-[30px]"}
                                        />
                                    </div>
                                    {/*body*/}

                                    <div className='w-full flex items-center justify-center h-[70px] gap-10'>                                       
                                            <Link
                                            className="bg-blue-500 border border-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 outline-none ease-linear transition-all duration-150 w-[50px] flex justify-center"
                                            type="button"
                                            href="#"
                                            onClick={() => setShowModalConfirmation(false)}
                                        >Yes</Link>
                                        <Link
                                            className="bg-gray-200  border border-blue-500 px-6 py-2 rounded hover:bg-gray-300 outline-none ease-linear transition-all duration-150 w-[50px] flex justify-center"
                                            type="button"
                                            href="/home"
                                        >No</Link>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>

            {/* _____________________ */}

    <div className='my-12 w-11/12 mx-8'>
      {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}
      {!data ? <p>No data</p> : null}

      {data.map(({ category, positions, id }) => (

        <div key={id} className='w-[100%] '>
          <Title
            TitleClassProps={"text-[#3074DC] my-[40px]"}
            Text={category}
            H={"h4"}
          />

          {positions.map(({ title, id }) => (
            <>
              <div key={id} className='flex w-[100%] mb-[37px]'>
                <div className='flex flex-1 justify-start items-center'>
                  <Text
                    TextClassProps={""}
                    Text={title}
                    Style={"normal"}
                  />
                </div>

                <div className='flex flex-1 justify-end'>
                  <Button
                    size="medium"
                    type="primary"
                    path={`/JobListing/${id}`}
                    label="APPLY"
                  />
                </div>

              </div>
              <hr className="flex w-[100%] h-px mx-auto my-4 border-0 rounded bg-[#BBBBBB]" />
            </>
          ))}
        </div>
      ))}

    </div>
</>
  )
}
