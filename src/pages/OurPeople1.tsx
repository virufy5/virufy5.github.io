
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"

//Prueba
import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import Card from "~/components/molecules/Card/Card"

export default function OuePeople1() {

  const buttons = ["Read more"]
  const label = ["Read more"]

	return (
		<>
			<h1 className="text-sky-600 text-3xl m-4">Our People 1</h1>

			<TextinsImg
				sizeImg="auto"
				borderImg="none"
				routeImg="https://s3-alpha-sig.figma.com/img/598a/ee88/e2a7c1d88a487a3d3d9dd1d55f06d0d1?Expires=1681084800&Signature=JD81GZFwcnTmJNz4iCsLGf85GFLC~cN0VAN1miPhQ-ryh~0tlLTaHSpJBa4rrkoInqkE29J7a~qs5xKJxaKtAgeMvbNTDmjwcTERhimo0mNGss4XNFR9dysy5O-D69JdsITgYSi9-RPNLEkeloP~wKJoT1yvP8ir3lXABjmLL2oSb0zy~v~n5p2tZEXu2vzuHoN8bCwvUrzBK1IYDFhPpBgwEQBevwV7W8b9R~DcivedwmOpj01nQJk8vNh39LkVZbVbBhdSCIZ9j8A9tkVHkNjTIRPzgGjkdHhHVjpuFs1KfKsrPAZIvK3vCj5DiOxAZqIvXrnQa2Ypt6-qirrqjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				altImg="Imagen cabezera"
				Text="We unite from across the world to defeat COVID-19 one cough at a time."
			/>

			<Section1 
        //TitleText
        TitleSize="h1"
        TitleLabel="An online Covid-19 test is possible"
        TextSize="normal"
        TextLabel="Virufy is a nonprofit research organization developing artificial intelligence (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost."
        ContainerTextProps="items-start h-[100%] mr-2"
        //Image
        sizeImg="pr80" 
        border="radious" 
        route="https://s3-alpha-sig.figma.com/img/f3d5/9250/e711a20452cb02cc8c355fcdfa662a16?Expires=1681084800&Signature=MWrmGju~QK9Rn8i0kySD2a~yFK4ooLvYhgLLJxxogiBiQkH4Aa6zuVraxRnUOw93EG7kvWykXl802gGf-5oe8NAR3QnvmS9bOJ22I~CEIvtMuTwuevWHtuKj2RD0VD-AgvV681hel4gdY0JEPLrej2Tz3N9zLkNc5zKHopbXF8IHyxvm0A19Bf2J8N9GC0F1WmcANSqEn8mv-AnpIAxIDOcDPr-oRxdalIH-CGfgTpIXSOTvzAhKNPexeZCp-apSIQvgn2U6RgXZYDsAVJSvODW4pCgDlnC52cHeUC9pJkSscgdI0zfMt1v1-SEIp8XMzX5W-4tiwYXBYwcTUlCUgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
        alt="imagen de algo"
        //Buttons
        buttons={buttons}
        label={label}
        type="primary"
        sizeBtn="medium"
        path="/"
			/>

			<Card />

		</>
	);
}