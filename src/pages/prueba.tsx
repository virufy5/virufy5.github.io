import Title from "../components/atoms/Title/Title"
import Text from "../components/atoms/Text/Text"
import Select from "../components/atoms/Select/Select"
import LinkAtom from "../components/atoms/LinkAtom/LinkAtom"

//Moleculas
import TitleText from "~/components/molecules/TitleText/TitleText"
import TitleTextImg from "~/components/molecules/TitleTextImg/TitleTextImg"

//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
import Section3 from "~/components/organisms/section-3/Section3"
import Section5 from "~/components/organisms/section-5/Section5"


export default function Prueba() {

  const options = [
    { label: 'List 1', value: '1' },
    { label: 'List 2', value: '2' },
    { label: 'List 3', value: '3' },
  ];

  const links = [
    { label: 'Home', route: '/es/prueba' }, 
    { label: 'MyApp', route: '/es/prueba'}, 
    { label: 'Posts', route: '/es/prueba'}, 
    { label: 'Graph QL', route: '/es/prueba'}
  ]

  return (
    <>
      <h1 className="text-sky-600 text-3xl m-4">Organismo</h1>
      <p>Section - 1</p>
      <Section1 />

      <p className="mt-7">Section - 3</p>
      <Section3 />

      <p className="mt-7">Section - 5</p>
      <Section5 />

      <h1 className="text-sky-600 text-3xl m-4 mt-20">Átomos</h1>
      <Title Text="Prueba título átomo" H="h2" />
      <Text Text="Prueba texto átomo" Style="subtitulo" />
      <Select Text="Prueba select átomo" Options={options} />
      <LinkAtom Routes={links} Style="link" />



      <h1 className="text-sky-600 text-3xl m-4 ">Moleculas</h1>
      <TitleText
        TitleSize="h2"
        TitleLabel="Título en molecula"
        TextSize="normal"
        TextLabel="Texto en molecula"
      />
      <TitleTextImg
        Order={["Title", "Text", "Image"]}
        TitleSize="h2"
        TitleLabel="Título en molecula"
        TextSize="normal"
        TextLabel="Texto en molecula"
      />

    </>
  );
}