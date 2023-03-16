import Title from "../components/atoms/Title/Title"
import Text from "../components/atoms/Text/Text"
import Select from "../components/atoms/Select/Select"

//Moleculas
import TitleText from "~/components/molecules/TitleText/TitleText"



export default function Prueba() {

    const options = [
        { label: 'List 1', value: '1' },
        { label: 'List 2', value: '2' },
        { label: 'List 3', value: '3' },
      ];

  return (
    <>
      <h1 className="text-sky-600 text-3xl ml-4 mt-4">Átomos</h1>
      <Title Text="Prueba título" H="h1" />
      <Text Text="Prueba texto" Style="subtitulo" textprimary="text-red-700" />
      <Select Text="Prueba select" Options={options} />

      <h1 className="text-sky-600 text-3xl ml-4 mt-4">Moleculas</h1>
{/*       <TitleText   
        Title="h2"
        TitleLabel="Título en molecula"
        Text="normal"
        TextLabel="Texto en molecula" /> */}
    </>
  );
}