import React, { useState, useEffect } from "react"
import Title from "~/components/atoms/Title/Title";

export default function AcordeonQuestions({
  Category,
  TextSearch
}) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [objects, setObjects] = useState([]);

 useEffect(() => {
    setData(filterObjectCategory(objects, Category, TextSearch))
  }, [Category]);

  useEffect(() => {
    setData(filterObject(objects, TextSearch))
  }, [TextSearch]);


/*   useEffect(() => {
    console.log("Response API:", data);
  }, [data]) */


  //Función para dar formato necesario al response del API
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
        setObjects(_formatPositions(data.docs))
        setLoading(false);
      }).catch((e) => {console.log(e), setLoading(false)})
  }, []);

  function filterObjectCategory(objects, category, textSearch) {

    if (textSearch.trim() === '') {
      return objects.filter(object => object.category === category);
    } else {
      return objects.map(objeto => ({
        ...objeto,
        faqs: objeto.faqs.filter(faq => faq.title.toLowerCase().includes(textSearch.toLowerCase()) || faq.text.toLowerCase().includes(textSearch.toLowerCase()))
      }))
      .filter(objeto => objeto.category === category && objeto.faqs.length > 0);
    }
  }

  function filterObject(objects, textSearch) {
    const result = [];
  
    objects.forEach(object => {
      const faqs = object.faqs || [];
  
      const faqsFilter = faqs.filter(faq => {
        return faq.title.toLowerCase().includes(textSearch.toLowerCase()) || faq.text.toLowerCase().includes(textSearch.toLowerCase());
      });
  
      if (faqsFilter.length > 0) {
        const objectFiltered = { ...object, faqs: faqsFilter };
        result.push(objectFiltered);
      }
    });
  
    return result;
  }

  return (
    <div className="mb-32">

      {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}

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