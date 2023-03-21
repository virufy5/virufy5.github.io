import Link from "next/link";
import { LinkAtomProps } from "../../themes";

export default function LinkAtom({
	Routes,
	Style
}) {
	return (
		<>
			{Routes.map(({ label, route }) => (

				<Link href={route} className={`${LinkAtomProps?.[Style]}`}>
					{label}
				</Link>

			))}
		</>
	);
}