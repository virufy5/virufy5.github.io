
//Organismo
import ImageAtomURL from "../components/atoms/imageAtom/ImageAtomURL";


//Prueba
import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";

export default function OurPeople2() {

  const buttons = ["Read more"]
  const label = ["Read more"]


  return (
    <>
      <h1 className="text-sky-600 text-3xl m-4">Our People 1</h1>

      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src="https://s3-alpha-sig.figma.com/img/598a/ee88/e2a7c1d88a487a3d3d9dd1d55f06d0d1?Expires=1681084800&Signature=JD81GZFwcnTmJNz4iCsLGf85GFLC~cN0VAN1miPhQ-ryh~0tlLTaHSpJBa4rrkoInqkE29J7a~qs5xKJxaKtAgeMvbNTDmjwcTERhimo0mNGss4XNFR9dysy5O-D69JdsITgYSi9-RPNLEkeloP~wKJoT1yvP8ir3lXABjmLL2oSb0zy~v~n5p2tZEXu2vzuHoN8bCwvUrzBK1IYDFhPpBgwEQBevwV7W8b9R~DcivedwmOpj01nQJk8vNh39LkVZbVbBhdSCIZ9j8A9tkVHkNjTIRPzgGjkdHhHVjpuFs1KfKsrPAZIvK3vCj5DiOxAZqIvXrnQa2Ypt6-qirrqjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        altImg="Imagen cabezera"
        Text="We unite from across the world to defeat COVID-19 one cough at a time."
      />

      <div
        className="text-center m-7"
      >
        <Title
          H="h1"
          Text="Amil’s Story"
        />
      </div>

      <div className="ml-[5vw] mt-5 flex flex-wrap">

        <div className="w-[438px] h-[] ">
          <ImageAtomURL
            imagesize="pr100"
            border="radious"
            src="https://s3-alpha-sig.figma.com/img/4d95/5161/5e7674fee262ff5c1394ca0a8933c961?Expires=1681084800&Signature=Zrn~FNUUQMD-B9l4BJwLUa8D3ixrvvHgC5k0Rd4jdLsUrXWIDfGpedfohCQ-uv3sc4ALTVy42qjrMUzSgB5falAJ5f2e2~KTfs8JQt7BbE1~kU1lF257TozfNZtzdjWnPmCOKbYw0FjveSSMpb5vLgq27sTZ2M6pKlrsLncNoxRSf-Si1-Q~eLZlkeyW4AGhk1k32In7hj0uE3a3llqRyPRsIhP7DKOfLGIDSBp-t20Zpuq6VPOmrzqSvleZorbVfl3FnWdKig2bi9kUqmivljVB27Rmqt7yLr7fpMbEIyvmaNilWrawFXJtNQHAqQ~3CFPcHVGgGfsnlM2p72T2OQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="imagen de algo"
          />
        </div>
        <div className="flex-1 ml-2 mr-[5vw]">
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
          TextClassProps="mt-3"
        />                          
      </div>
    </>
  );
}