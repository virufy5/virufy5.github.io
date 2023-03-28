import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import Image from "~/components/atoms/imageAtom/Image";

export default function Card() {
	return (
		<div className="flex flex-wrap -mb-4">
			<div className="text-center w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-400">
				<Image
					size="small"
					border="circular"
					route="https://s3-alpha-sig.figma.com/img/d7a0/94d3/b581e5e4934faf791d4b4ce106904c18?Expires=1681084800&Signature=Ujf0g1qeuBQlwLDRPU57YcEHKFDD9ME4nGhunAntGfYP-nQ-dy0tQefViixa85-mg29K19H6u3sBUzKMFOtw6fRFwepJtQn4eeC7qFmOM7puYBhRh5bTT8~egVNAAfpyzI0dvCITyv5wi2w1Iwzj9GAXA6dYV9Gl0VJbN5jYK-NY8HHiszapoNzZTcmmGAkjdN1FB25TzYS3YBZzXjlNg2JByE6P2oIg5sLW4DMwtlVeMJ33qMVmKR4S5LzOq91BaJ9BRFHE7xgSZ3VF3GjToBBsqaHDjJq4UL9HkbgnVlSpkprAf8Vgsb-Tpq9bmwGJxMpfocXqgaTFd~80G4OJgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="{altImg}"
				/>

				<Title
					H="h3"
					Text="Kara Meister, M.D.  "
				/>
				<Text
					Style="subtitle"
					Text="Clinical Advisor"
				/>
				<Text
					Style="normal"
					Text="Clinical Assistant Professor of ENT Stanford School of Medicine"
				/>
			</div>
			<div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-500">

			</div>
			<div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-400">

			</div>
			<div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-500">

			</div>
			<div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-400">

			</div>

			<div className="text-center ">



			</div>

		</div>
	)
}
