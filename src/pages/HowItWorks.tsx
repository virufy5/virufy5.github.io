
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
import Section7 from "~/components/organisms/section-8/Section8"



export default function HowItWorks() {

	const buttons = ["SHARE YOUR COUGH"]
	const label = ["SHARE YOUR COUGH"]

	return (
		<>
			<h1 className="text-sky-600 text-3xl m-4">How it Works</h1>

			<p className="text-gray-300">Section - 1</p>
			<Section1
				//TitleText
				TitleSize="h1"
				TitleLabel="Share your cough"
				TextSize="normal"
				TextLabel={"Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"}
				ContainerTextProps="items-start h-[100%] mr-4"
				//Image
				size="pr90"
				border="none"
				route="https://s3-alpha-sig.figma.com/img/606e/9b3a/fe8a0e7addca41b506f4ad1262f2a37c?Expires=1680480000&Signature=GzPmO2jPWAhhujAVpY6pXPszbh1spHZ7SKf-0Tz3m1OPDDZw2IujZjlqP~y3sjQ9T3int-AgdFjxBUe3MwyvX74COgdXK2U4sh6pYTeQxDYPOFFU-vSxIzYd7~w1L9UQT9roywdieyTh3OP4TiJU-HsXjw3aJaqjHIExNSwj1pcs5X4VzeMqfZAzdAXBeBhms6mSdpZrYBTrZhwrrVjAiA~9cgRZbcS~8-0BxnNnWj-NISfCIuvjdrGQUFtpOPINas97Ya1us6O-o5SkyUEtHjjPOT0e8paAhU5BXpeOUcr16y58~jkVzmiGkMUfHn24EGx2LEHeQGa8SJYQ58YOhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				alt="imagen de algo"
				//Buttons
				buttons={buttons}
				label={label}
				type="primary"
				sizeBtn="medium"
				path="/"
			/>

			<p className="text-gray-300">Section - 8</p>
			<Section7
				//Image
				sizeImg="pr90"
				border="none"
				route1="https://s3-alpha-sig.figma.com/img/c57f/b2c8/e8803ca9d96214673aa7b5b2fc05c597?Expires=1680480000&Signature=FMRB7NYHYAa8uq1JKXb1T~a3wACj3l~TJNmDoRT0zJ57mFLM2mXgpsxRxKSWbxaLWlbpazRGCtnvMsF-VCzDkY51L7uONK5bxv8oYMmtsvTEYoOFtA379CjLIkPYOAbyYcDwkxYJIK-2Vh-8JzhP8n95DgzevWdydKAbvA~nDkQsFnCwytoClIA1a~Q9bT9g1BcD7lZfKMiviUqLBwYMZZ1z-DqQwQr-nPiP3HLjMHiJK5ES7BV1boAzW3XgG1DvfEQYQfTExAfksOe~7LW5mWMg6Iv2bMxkKWhvK1UoHHYtkD1fPYFfPLL~s3bkL030Rnz~xBygaQleeLeWcUlaWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				route2="https://s3-alpha-sig.figma.com/img/1d0c/4b63/85f8ffe349e32b6d0f23a09caed894af?Expires=1680480000&Signature=mZds7AV~6CU1CenmAaQuym9z8aBBPqi5xDxvgx3fQB9~B9wVAmkhOT0XtATFmwwY5GY47b~PuHkBDt8NHU8sD1jhn4RF~1pFjKMMx4VModQknLijtsP1SqNWinWTG-eW3PDqP~QNvTgHkfgN6N6uaR1cDjfHGn47D0AzfR2jxSmj99Xr0o7mS9HQy1DJdy8ebY8HKHUPCoXZZC3LmXMrGnACpedrqX~SOzwfs6ISsQ8IsSro0eWrleu3LKncz6V14r0du4OsAbeZ2CcGljn~FlsAUm0fZp1-mHYNyREfrIgVJCZVS9VNKoScBzP4RpdxOsR7LwXRxgYA5~31Hlrppg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				route3="https://s3-alpha-sig.figma.com/img/eeec/b0bb/421be8659c0a1cd6b33fe98526fba268?Expires=1680480000&Signature=R3hu69sSSzweWEuIKT~XERRg1CyFkm3cAUEs5vUlI9JV345FBVopyyQacR2LnH2qvhdPyt37HIal9wekT8pgRhUzegL3r8LwLRQTTmVlF2Sd9X8jOtDYnw53VMVRrCCsGAOGIHYcDYKUFy204KMNGOxR-GmUcYJXPkete--rTDElsa-LerRluFLY7ZnDGvBLR5vS2-QIeb4iMgr38ADAcnhS78Y~pRFvChE28L9WZ~CCvWnEUwjBJVZNDrFLCWMqN9q0eHx7gQrSpFStEw1rtA3iRijUl5LSaIqUQZ6Tb~v26hOLlA2gfR-IcjCMZb5ytS1Q4Jx~Go4RE3rI83OL4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				alt="Section 7"
				//TitleText
				TitleSize="h3"
				TitleLabel1="Recording your cough"
				TitleLabel2="Processing"
				TitleLabel3="Results"
				TextSize="normal"
				TextLabel1={"Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"}
				TextLabel2={"Our artificial intelligence algorithm processing the recording to detect Covid-19 based on cough sounds. "}
				TextLabel3={"Within minutes, our Artificial intelligence algorithm is able to accurately predict your test results through the app."}
				ContainerTextProps=""				
			/>


		</>
	);
}