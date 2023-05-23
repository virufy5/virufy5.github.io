import React from 'react'
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'

export default function JobList() {

  const List = [
    {
      name: 'Engineering',
      jobVacancys: [
        {
          title: "Engineering Manager",
          link: "1"
        },
      ]
    },
    {
      name: 'Data',
      jobVacancys: [
        {
          title: "Data Privacy Intern",
          link: "2"
        },
        {
          title: "Data Privacy Manager",
          link: "3"
        },
        {
          title: "Director of Data Science",
          link: "4"
        },
        {
          title: "Data Visualization Engineer",
          link: "5"
        },
      ]
    },
    {
      name: 'Management',
      jobVacancys: [
        {
          title: "Business Manager",
          link: "6"
        },
        {
          title: "Project Manager",
          link: "7"
        },
      ]
    },
    {
      name: 'Human Resrouces',
      jobVacancys: [
        {
          title: "Human Resources Partner",
          link: "8"
        },
        {
          title: "Technical Recruiter",
          link: "9"
        },
      ]
    },
  ]


  const positions = [
    {
      id: 1,
      title: "Engineering Manager",
      category: "Engineering",
    },
    {
      id: 2,
      title: "Data Privacy Intern",
      category: "Data",
    },
    {
      id: 3,
      title: "Data Privacy Manager",
      category: "Data",
    },
    {
      id: 4,
      title: "Director of Data Science",
      category: "Data",
    },
    {
      id: 5,
      title: "Data Visualization Engineer",
      category: "Data",
    },
    {
      id: 6,
      title: "Business Manager",
      category: "Management",
    },
    {
      id: 7,
      title: "Project Manager",
      category: "Management",
    }  
  ];

  function formatPositions(positions){
    const categories = [...new Set(positions.map(position=> position.category))]
     return categories.reduce((acc, category)=> {
       const _positions = positions.filter(position=> position.category === category)
      return [...acc, {category: category, positions: _positions}]
    }, [])
  }
  
  console.log(formatPositions(positions))

  return (
    <div className='my-12 w-11/12 mx-8'>

      {List.map(({ name, jobVacancys, id }) => (

        <div key={id} className='w-[100%] '>
          <Title
            TitleClassProps={"text-[#3074DC] my-[40px]"}
            Text={name}
            H={"h4"}
          />

          {jobVacancys.map(({ title, link, id }) => (
            <>
              <div className='flex w-[100%] mb-[37px]'>
                <div className='flex flex-1 justify-start items-center'>
                  <Text
                    key={id}
                    TextClassProps={""}
                    Text={title}
                    Style={"normal"}
                  />
                </div>

                <div className='flex flex-1 justify-end'>
                  <Button
                    size="medium"
                    type="primary"
                    path={`/JobListing/${link}`}
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
