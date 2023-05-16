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
          link: "www.google.com"
        },
      ]
    },
    {
      name: 'Data',
      jobVacancys: [
        {
          title: "Data Privacy Intern",
          link: "www.google.com"
        },
        {
          title: "Data Privacy Manager",
          link: "www.google.com"
        },
        {
          title: "Director of Data Science",
          link: "www.google.com"
        },
        {
          title: "Data Visualization Engineer",
          link: "www.google.com"
        },
      ]
    },
    {
      name: 'Management',
      jobVacancys: [
        {
          title: "Business Manager",
          link: "www.google.com"
        },
        {
          title: "Project Manager",
          link: "www.google.com"
        },
      ]
    },
    {
      name: 'Human Resrouces',
      jobVacancys: [
        {
          title: "Human Resources Partner",
          link: "www.google.com"
        },
        {
          title: "Technical Recruiter",
          link: "www.google.com"
        },
      ]
    },
  ]



  return (
    <div className='my-12 w-11/12 mx-8'>

      {List.map(({ name, jobVacancys, id }) => (

        <div className='w-[100%] '>
          <Title
            key={id}
            TitleClassProps={"text-[#3074DC] my-[40px]"}
            Text={name}
            H={"h4"}
          />

          {jobVacancys.map(({ title, id }) => (
            <>
              <div className='flex w-[100%] mb-[37px]'>
                <div className='flex flex-1 justify-start'>
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
                    path="#"
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
