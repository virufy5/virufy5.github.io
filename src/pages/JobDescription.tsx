import React from "react";
import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import Button from "~/components/atoms/button/Button";
import { useI18n } from "~/i18n";

export default function DetailBlog() {
  const {
    jobDescription: {
      title,
      textInfo,
      responsibilities,
      li1,
      li2,
      li3,
      li4,
      li5,
      li6,
      minimumQualifications,
      li7,
      li8,
      li9,
      li10,
      li11,
      desiredSkills,
      li12,
      li13,
      li14,
      li15,
      questions,
      li16,
    },
  } = useI18n();

  return (
    <div className="mx-auto flex max-w-[1440px]">
      <div className="flex max-w-[1100px] flex-col items-center">
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={title}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <p>{textInfo}</p>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={responsibilities}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
          <li>{li5}</li>
          <li>{li6}</li>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={minimumQualifications}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{li7}</li>
          <li>{li8}</li>
          <li>{li9}</li>
          <li>{li10}</li>
          <li>{li11}</li>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={desiredSkills}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
          <li>{li12}</li>
          <li>{li13}</li>
          <li>{li14}</li>
          <li>{li15}</li>
        </div>
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
          <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
            <Title
              Text={questions}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
          </div>
        </div>
        <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
        <li>{li16}</li>
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
  );
}
