import React, { useState, useEffect } from "react"
import Title from "~/components/atoms/Title/Title";

export default function AcordeonQuestions({
  Category,
  TextSearch
}) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //Función para dar formato optimo al response del API
  function _formatPositions(API) {
    const categories = [...new Set(API.map(faqs => faqs.category.title))]
    return categories.reduce((acc, category) => {
      const _faqs = API.filter(faqs => faqs.category.title === category)
      return [...acc, { category: category, faqs: _faqs }]
    }, [])
  }

  useEffect(() => {
    setLoading(true);
    fetch('/api/faqs')
      .then((res) => res.json())
      .then((data) => {
        setData(_formatPositions(data.docs));
        setLoading(false);
      }).catch((e) => console.log(e))
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/faqs?where[category.title][contains]=${Category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(_formatPositions(data.docs));
        setLoading(false);
      }).catch((e) => console.log(e))
  }, [Category]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/faqs?where[title][contains]=${TextSearch}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(_formatPositions(data.docs));
        setLoading(false);
      }).catch((e) => console.log(e))
  }, [TextSearch]);


  useEffect(() => {
    console.log("Response API:", data);
  }, [data])

  /* const filteredData = data.filter (faqs => faqs.category === Category);
  setData(filteredData) */

  //    <p className="text-2xl"> Prop desde cards:  {Category} </p>
  //    <p className="text-2xl"> Prop desde buscador: {TextSearch} </p>

  return (
    <div className="mb-32">

      {data.map(({ category, faqs, id }) => (
        <div key={id}>

          <Title
            H="h5"
            Text={category}
            TitleClassProps={"mt-[70px] mb-[40px]"}
          />


          <div className='w-full max-w-7xl flex items-center justify-center'>

            <div className='w-full max-w-[1440px] px-0 py-8'>
              {faqs.map(({ title, text, id }) => (
                <div key={id}>
                  <details className="w-full max-w-[1440px] bg-white cursor-pointer mb-3">
                    <summary className="bg-white text-dark flex justify-between px-4 py-3 w-[300px] md:w-[700px] xl:w-[1200px] after:content-['+'] mt-3 font-bold">{title}</summary>
                    <hr className="border-1 border-gray-400 mt-3" />
                    <p className="px-4 py-3 max-w-[1440px] mt-3">
                      {text}
                    </p>
                  </details>

                  <hr className="border-1 border-gray-400" />
                </div>
              ))}
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}