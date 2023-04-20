
import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";

//Images
import ImageinsText from "~/assets/static/images/textInImage/OurPeople.jpg"

export default function OurPeople2() {


  return (
    <>
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text="We unite from across the world to defeat COVID-19 one cough at a time."
      />

      <div
        className="text-center m-7"
      >
        <Title
          H="h1"
          Text="Amil’s Story"
          TitleClassProps={""}
        />
      </div>

      <div className="ml-[5vw] mt-5 flex flex-wrap flex-row items-start
        sm:flex-col sm:items-center
        md:flex-row md:items-end
        lg:flex-row lg:items-end
        xl:flex-row xl:items-end
      ">

        <div className="w-[438px] h-[] m-2
          sm:w-[438px]
          md:w-[310px]
          lg:w-[250px]
          xl:w-[200px]
        ">
        </div>
        <div className="flex-col flex-1 
          ml-2 mr-[5vw]
        ">
          <Text
            Style="normal"
            Text="Born and raised in the Silicon Valley, Amil has worked since his father’s untimely passing when he was 18 with his first job as a software consultant developing optical mark recognition (OMR) software for automated grading of tests in K-12 schools."
            TextClassProps=""
          />

          <Text
            Style="normal"
            Text="After receiving his B.A. in Computer Science from University of California, Berkeley in 2012, Amil joined Hewlett-Packard (HP) in Silicon Valley to work full-time as a software engineer developing security log standardization software for the ArcSight, Security Information and Event Management System (SIEM)."
            TextClassProps="mt-3"
          />

          <Text
            Style="normal"
            Text="In 2014, Amil transferred to HP’s Tokyo headquarters to take on a role as cybersecurity consultant, in which he traveled across Hong Kong, Tokyo, and Australia to deploy SIEM solutions at customer sites in the banking industry. "
            TextClassProps="mt-3"
          />
        </div>
        <div className="flex sm:flex ml-2 mr-[5vw]">
        <Text
          Style="normal"
          Text="In 2016, Amil returned to Silicon Valley to join Pivotal Software as a software engineer working primarily on the Postgres-based open source Greenplum OLAP database. In Pivotal’s extreme programming (XP) environment, Amil practiced several software development practices, including daily pair programming, test-driven development (TDD), and weekly retroactive meetings, while rotating across several teams, including DevOps, database backend, and workload management tooling."
          TextClassProps="mt-3"
        />
        </div>
        <div className="flex sm:flex ml-2 mr-[5vw]">
        <Text
          Style="normal"
          Text="In 2018, Amil took leave from work to move to the countryside of Japan. Living in Eiheiji town, the birthplace of Soto Zen, Amil meditated daily and learned Zen philosophy, while giving back teaching agile programming to young adults and children. Soon, Amil was appointed Evolution Ambassador of the town and sent to the One Young World conference in the Netherlands to represent Japan, amongst other young social impact leaders, country heads, and Nobel Laureates from 195 countries."
          TextClassProps="mt-3"
        />
        </div>
        <div className="flex sm:flex ml-2 mr-[5vw]">
        <Text
          Style="normal"
          Text="In early 2020, Amil left his job to pursue graduate studies in Artificial Intelligence at Stanford University, taking his first courses with Coursera founder Dr. Andrew Ng and ImageNet creator Dr. Fei-Fei Li. When the pandemic hit, Amil committed himself to pandemic relief efforts and soon founded Virufy."
          TextClassProps="mt-3"
        />
        </div>
        <div className="flex sm:flex ml-2 mr-[5vw]">
        <Text
          Style="normal"
          Text="Virufy is a nonprofit organization developing a smartphone app to prescreen for COVID-19 instantly through AI-powered analysis of voice and cough recordings. As of February 2022, the organization operates in a dozen countries with more than 200 volunteers and 30 partner organizations, including Amazon Web Services, Stanford COVID-19 Response Innovation Lab, and Pillsbury Winthrop Shaw Pittman Law."
          TextClassProps="mt-3"
        /> 
        </div>
      </div>
      <div className="ml-[5vw] mr-[5vw] mt-5">
        <Title
          H="h3"
          Text="Amil’s Story"
          TitleClassProps="text-center"
        />
        <Text
          Style="normal"
          Text="2022. Using Deep Learning with Large Aggregated Datasets for COVID-19 Classification from Cough. arXiv: 2201.01669"
          TextClassProps="mt-3"
        />
        <Text
          Style="normal"
          Text="2021. Using a Novel COVID-19 Calculator to Measure Positive U.S. Socio-Economic Impact of a COVID-19 Pre-Screening Solution (AI/ML). arXiv: 2201.11109"
          TextClassProps="mt-3"
        />
        <Text
          Style="normal"
          Text="2020. Virufy: Global Applicability of AI Detection for COVID-19 from Cough Recordings. arXiv: 2011.13320"
          TextClassProps="mt-3"
        />   
        <Text
          Style="normal"
          Text="2020. Fusical: Multimodal Fusion for Video Sentiment. ACM ICMI; DOI: 3382507.3417966"
          TextClassProps="mt-3"
        />   
        <Text
          Style="normal"
          Text="2020. Facial Expression Recognition with Deep Learning. arXiv: 2004.11823"
          TextClassProps="mt-3 mb-3"
        />                        
      </div>
    </>
  );
}