import TitleText from '../../molecules/TitleText/TitleText'
import TitleTextImg from '../../molecules/TitleTextImg/TitleTextImg'
import Video from '../../atoms/videoAtom/Video'

import Step1 from '../../../assets/static/images/section2/step1.jpg'
import Step2 from '../../../assets/static/images/section2/step2.jpg'
import Step3 from '../../../assets/static/images/section2/step3.jpg'
import { useI18n } from '~/i18n'

export default function Section2() {
  const {
    home: { sectionTestExplain },
  } = useI18n()
  return (
    <div
      className="flex"
      style={{
        width: '100vw',
        maxWidth: '1440px',
      }}
    >
      <div
        style={{
          width: '100vw',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            margin: '100px 0 70px 0',
          }}
        >
          <TitleText
            TitleSize="h1"
            TitleLabel={sectionTestExplain.title}
            TextSize=""
            TextLabel=""
            ContainerTextProps=""
            ContainerTitleProps=""
            TitleClassProps=""
            TextClassProps=""
          />
        </div>
        <div className="flex items-start justify-evenly sm:hidden">
          <div className="flex w-[100px] flex-col gap-8 text-center sm:w-[200px] lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h6"
              TitleLabel={sectionTestExplain.firstStep}
              ImgRoute={Step1}
              ImgBorder="circular"
              ImgAlt="1. Record your cough"
              imagesize="px80"
              TextSize=""
              TextLabel=""
            />
          </div>
          <div className="flex w-[100px] flex-col gap-8 text-center sm:w-[200px] lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h6"
              TitleLabel={sectionTestExplain.secondStep}
              ImgRoute={Step2}
              ImgBorder="circular"
              ImgAlt="2. AI analyzed for COVID patterns"
              imagesize="px80"
              TextSize=""
              TextLabel=""
            />
          </div>
          <div className="flex w-[100px] flex-col gap-8 text-center sm:w-[200px] lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h6"
              TitleLabel={sectionTestExplain.stepThree}
              ImgRoute={Step3}
              ImgBorder="circular"
              ImgAlt="3. COVID risk status reported"
              imagesize="px80"
              TextSize=""
              TextLabel=""
            />
          </div>
        </div>
        <div className="hidden justify-evenly sm:flex lg:hidden">
          <div className="flex w-[100px] flex-col items-center gap-8 text-center sm:w-[150px] lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h6"
              TitleLabel={sectionTestExplain.firstStep}
              ImgRoute={Step1}
              ImgBorder="circular"
              ImgAlt="1. Record your cough"
              imagesize="px120"
              TextSize=""
              TextLabel=""
            />
          </div>
          <div className="flex w-[100px] flex-col items-center gap-8 text-center sm:w-[150px] lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h6"
              TitleLabel={sectionTestExplain.secondStep}
              ImgRoute={Step2}
              ImgBorder="circular"
              ImgAlt="2. AI analyzed for COVID patterns"
              imagesize="px120"
              TextSize=""
              TextLabel=""
            />
          </div>
          <div className="flex w-[100px] flex-col items-center gap-8 text-center sm:w-[150px] lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h6"
              TitleLabel={sectionTestExplain.stepThree}
              ImgRoute={Step3}
              ImgBorder="circular"
              ImgAlt="3. COVID risk status reported"
              imagesize="px120"
              TextSize=""
              TextLabel=""
            />
          </div>
        </div>
        <div className="hidden justify-evenly lg:flex">
          <div className="flex w-[100px] flex-col gap-8 text-center lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h5tepsHome"
              TitleLabel={sectionTestExplain.firstStep}
              ImgRoute={Step1}
              ImgBorder="circular"
              ImgAlt="1. Record your cough"
              imagesize="px300"
              TextSize=""
              TextLabel=""
            />
          </div>
          <div className="flex w-[100px] flex-col gap-8 text-center lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h5tepsHome"
              TitleLabel={sectionTestExplain.secondStep}
              ImgRoute={Step2}
              ImgBorder="circular"
              ImgAlt="2. AI analyzed for COVID patterns"
              imagesize="px300"
              TextSize=""
              TextLabel=""
            />
          </div>
          <div className="flex w-[100px] flex-col gap-8 text-center lg:w-[300px]">
            <TitleTextImg
              Order={['Image', 'Title']}
              TitleSize="h5tepsHome"
              TitleLabel={sectionTestExplain.stepThree}
              ImgRoute={Step3}
              ImgBorder="circular"
              ImgAlt="3. COVID risk status reported"
              imagesize="px300"
              TextSize=""
              TextLabel=""
            />
          </div>
        </div>
        <div className="align-center mt-[40px] flex justify-center sm:hidden">
          <Video
            width="370px"
            height="208px"
            url="https://youtu.be/hvJgwPNYnZo"
          />
        </div>
        <div className="align-center mt-[40px] hidden justify-center sm:flex md:hidden">
          <Video
            width="600px"
            height="338px"
            url="https://youtu.be/hvJgwPNYnZo"
          />
        </div>
        <div className="align-center mt-[40px] hidden justify-center md:flex 2xl:hidden">
          <Video
            width="800px"
            height="450px"
            url="https://youtu.be/hvJgwPNYnZo"
          />
        </div>
        <div className="align-center mt-[40px] hidden justify-center 2xl:flex">
          <Video
            width="1280px"
            height="720px"
            url="https://youtu.be/hvJgwPNYnZo"
          />
        </div>
      </div>
    </div>
  )
}
