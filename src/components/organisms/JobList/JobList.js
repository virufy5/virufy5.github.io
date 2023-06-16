import React, { useState, useEffect } from "react"
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'

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


  return (
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
  )
}
