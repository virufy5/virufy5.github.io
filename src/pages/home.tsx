
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
import Section3 from "~/components/organisms/section-3/Section3"
import Section5 from "~/components/organisms/section-5/Section5"
import Section6 from "~/components/organisms/section-6/Section6"


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
      <h1 className="text-sky-600 text-3xl m-4">HOME</h1>
      
      <p className="text-gray-300">Section - 1</p>
      <Section1 />

      <p className="text-gray-300">Section - 3</p>
      <Section3 />

      <p className="text-gray-300">Section - 5</p>
      <Section5 />

      <p className="text-gray-300">Section - 6</p>
      <Section6 /> 

    </>
  );
}