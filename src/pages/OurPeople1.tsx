
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"

//Prueba
import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import Card from "~/components/molecules/Card/Card"
import Title from "~/components/atoms/Title/Title"

import Card1 from "~/assets/static/images/ourPeople/card1.jpg"
import Card2 from "~/assets/static/images/ourPeople/card2.jpg"
import Card3 from "~/assets/static/images/ourPeople/card3.jpg"
import Card4 from "~/assets/static/images/ourPeople/card4.jpg"
import Card5 from "~/assets/static/images/ourPeople/card5.jpg"
import Card6 from "~/assets/static/images/ourPeople/card6.jpg"
import Card7 from "~/assets/static/images/ourPeople/card7.jpg"
import Card8 from "~/assets/static/images/ourPeople/card8.jpg"
import Card9 from "~/assets/static/images/ourPeople/card9.jpg"
import Card10 from "~/assets/static/images/ourPeople/card10.jpg"
import Card11 from "~/assets/static/images/ourPeople/card11.jpg"
import Card12 from "~/assets/static/images/ourPeople/card12.jpg"
import Card13 from "~/assets/static/images/ourPeople/card13.jpg"
import Card14 from "~/assets/static/images/ourPeople/card14.jpg"
import Card15 from "~/assets/static/images/ourPeople/card15.jpg"
import Card16 from "~/assets/static/images/ourPeople/card16.jpg"
import Card17 from "~/assets/static/images/ourPeople/card17.jpg"
import Card18 from "~/assets/static/images/ourPeople/card18.jpg"
import Card19 from "~/assets/static/images/ourPeople/card19.jpg"
import Card20 from "~/assets/static/images/ourPeople/card20.jpg"
import Card21 from "~/assets/static/images/ourPeople/card21.jpg"
import Card22 from "~/assets/static/images/ourPeople/card22.jpg"
import Card23 from "~/assets/static/images/ourPeople/card23.jpg"
import ImageAmil from "~/assets/static/images/ourPeople/Amil.png"
import ImageinsText from "~/assets/static/images/textInImage/OurPeople.jpg"

export default function OurPeople1() {

  const buttons = ["Read more"]
  const label = ["Read more"]

  const CardsData = [
    {
      route: Card1,
      name: "Kara Meister, M.D.",
      subtitle: "Clinical Advisor",
      text: "Clinical Assistant Professor of ENT Stanford School of Medicine",
    },
    {
      route: Card2,
      name: "Dr. Jure Leskovec",
      subtitle: "Artificial Intelligence Advisor",
      text: "Chief Scientist - Pinterest Associate Professor of AI - Stanford",
    },
    {
      route: Card3,
      name: "Melissa Dyrdahl",
      subtitle: "Executive Marketing Advisor",
      text: "Former CMO - Adobe Board Member - CommonSpirit Health",
    },
    {
      route: Card4,
      name: "Anaïs Rameau, M.D.",
      subtitle: "Clinical Advisor",
      text: "Assistant Professor of ENT - Cornell University Doctor of Medicine - McGill University",
    },
    {
      route: Card5,
      name: "Madhav Datt",
      subtitle: "Executive Nonprofit Advisor",
      text: "Founder - Green the Gene Former Global Representative for Youth - UN EP",
    },
    {
      route: Card6,
      name: "Rafi Azim-Khan",
      subtitle: "Executive Legal Advisor",
      text: "Partner, IP/IT & Head Data Privacy Europe Pillsbury Winthrop Shaw Pittman LLP",
    },
    {
      route: Card7,
      name: "Richard Swartzbaugh",
      subtitle: "Executive Advisor",
      text: "Risk Management - Curaesoft J.D. - University of Iowa",
    },
    {
      route: Card8,
      name: "Ronan Dunlop",
      subtitle: "Executive Nonprofit Advisor",
      text: "Founder - Green the Gene Former Global Representative for Youth - UN EP",
    },
    {
      route: Card9,
      name: "Mark Haseltine",
      subtitle: "Executive Advisor",
      text: "Former CTO/CPO - edX Computer Science alumnus - MIT",
    },
    {
      route: Card10,
      name: "Mansoor Ahmed",
      subtitle: "Clinical Research Advisor",
      text: "Founder & CEO - Cleveland Sleep Research Center                                 MBBS - King Edward Medical University",
    },
    {
      route: Card11,
      name: "Mert Pilanci",
      subtitle: "Artificial Intelligence Advisor",
      text: "Assistant Professor of AI Stanford University Electrical Engineering",
    },
    {
      route: Card12,
      name: "Victor Wang",
      subtitle: "Executive Advisor",
      text: "Founder and Chairman- China Silicon Valley                                                     MBA - Stanford Graduate School of Business",
    },
    {
      route: Card13,
      name: "Rok Sosic",
      subtitle: "Artificial Intelligence Advisor",
      text: "Senior Research Engineer             Stanford School of Engineering",
    },
    {
      route: Card14,
      name: "Richard Nall",
      subtitle: "Marketing Advisor",
      text: "CEO - The Brand Garden               Master's Organisational Leadership - Henley",
    },
    {
      route: Card15,
      name: "Mathijs De Vaan",
      subtitle: "Assistant Professor - UC Berkeley Haas Business School",
      text: "Management of Organizations              PhD Sociology - Columbia University",
    },
    {
      route: Card16,
      name: "Pedro Siena",
      subtitle: "Brazil Executive Advisor",
      text: "Founder and CEO - Siena Company                                Mentor - Stanford Lean Launchpad",
    },
    {
      route: Card17,
      name: "Khwaja Shaik",
      subtitle: "Chief Technology Officer - IBM",
      text: "MOSH, Vice Chair, Board Member     Board Member - University of North Florida Computing",
    },
    {
      route: Card18,
      name: "George Pegelow",
      subtitle: "Executive Visionary Advisor",
      text: "Martial Arts & Philosophy Professor - Stanford University",
    },
    {
      route: Card19,
      name: "Rich Walcoff",
      subtitle: "Communications Advisor",
      text: "Sports Director - KGO Radio",
    },
    {
      route: Card20,
      name: "Taisuke Fukuno",
      subtitle: "Executive IT Advisor",
      text: "Founder - Open Data Japan        Chairman - jig.jp",
    },
    {
      route: Card21,
      name: "Tsutomu Ito",
      subtitle: "Executive Visionary Advisor",
      text: "Founder - Tannan FM Radio                 Lead Architect, Bullet Train",
    },
    {
      route: Card22,
      name: "Manuj Aggarwal",
      subtitle: "Executive AI, Strategy And Marketing Advisor",
      text: "Chief Innovation Officer - TetraNoodle Technologies",
    },
    {
      route: Card23,
      name: "Dr. Les Atlas",
      subtitle: "Audio and Machine Learning Advisor",
      text: "Professor of Electrical and Computer Engineering - University of Washington                           Ph.D. Electrical Engineering, Stanford",
    }
  ]

  return (
    <>
    <div className="w-[100vw]">
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text="We unite from across the world to defeat COVID-19 one cough at a time."
      />
      </div>
      <div
        className="text-center m-7"
      >
        <Title
          H="h1"
          Text="Meet Our Founder"
          TitleClassProps={""}
        />
      </div>
      <Section1
        //TitleText
        TitleSize="h2"
        TitleLabel="Amil Khanzada"
        TextSize="normal"
        TextLabel="MBA Candidate, Haas School of Business Master of Engineering Candidate, Department of Electrical Engineering and Computer Sciences"
        ContainerTitleProps={""}
        ContainerTextProps="items-start h-[100%] mr-2"
        //Image
        sizeImg="pr70"
        border="radious"
        route={ImageAmil}
        alt="imagen de algo"
        //Buttons
        buttons={buttons}
      />

      <Title 
        H="h1"
        Text="Advisors"
        TitleClassProps="text-center m-[5vw]"
      />

      <Card
        CardsData={CardsData}
        CardClassProps="flex flex-col text-center items-center w-[348px] sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 mt-4"
      />

    </>
  );
}