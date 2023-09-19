import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Text from '~/components/atoms/Text/Text'
import Button from '~/components/atoms/button/Button'
import { useI18n } from '~/i18n'

export default function DetailBlog() {
  const {
    jobDescription: {
      jobTitle,
      jobDescription,
      responsibilitiesSection,
      qualificationsSection,
      skillsSection,
      questions,
      contactEmail,
    },
  } = useI18n()

  return (
    <div className="mx-auto flex max-w-[1440px]">
      <div className="flex max-w-[1100px] flex-col items-center">
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={jobTitle}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <p>{jobDescription}</p>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={responsibilitiesSection?.responsibilities}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{responsibilitiesSection?.responsibilityDefine}</li>
          <li>{responsibilitiesSection?.responsibilityAnalize}</li>
          <li>{responsibilitiesSection?.responsibilityRequest}</li>
          <li>{responsibilitiesSection?.responsibilityTask}</li>
          <li>{responsibilitiesSection?.responsibilityDevelop}</li>
          <li>{responsibilitiesSection?.responsibilityJob}</li>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={qualificationsSection?.minimumQualifications}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{qualificationsSection?.qualificationOld}</li>
          <li>{qualificationsSection?.qualificationWork}</li>
          <li>{qualificationsSection?.qualificationTittle}</li>
          <li>{qualificationsSection?.qualificationPhoto}</li>
          <li>{qualificationsSection?.qualificationLanguage}</li>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={skillsSection?.desiredSkills}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{skillsSection?.skillExperience}</li>
          <li>{skillsSection?.skillDetail}</li>
          <li>{skillsSection?.skillComunication}</li>
          <li>{skillsSection?.skillResponsability}</li>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={questions}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{contactEmail}</li>
        </div>
        <div className="mb-16 flex w-full px-12">
          <Button
            size="medium"
            type="primary"
            path="#"
            label="APPLY TO THIS ROLE"
          />
        </div>
      </div>
      <div className="flex w-[340px] justify-center pt-20">
        <Button
          size="medium"
          type="primary"
          path="#"
          label="APPLY TO THIS ROLE"
        />
      </div>
    </div>
  )
}
