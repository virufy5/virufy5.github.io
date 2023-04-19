import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import Title from "~/components/atoms/Title/Title";

export default function TextinsImg({
  sizeImg,
  borderImg,
  src,
  altImg,
  Text
}) {
  return (
    <div className="over overflow-hidden relative w-[100%] flex justify-center">
      <div className=" contrast-50 brightness-50">
        <ImageAtomLocal
          imagesize={sizeImg}
          border={borderImg}
          src={src}
          alt={altImg}
        />
      </div>
      <Title
        Text={Text}
        H="h4"
        TitleClassProps="
					absolute top-[50%] 
					left-[50%] 
					translate-y-[-50%] 
					translate-x-[-50%]
					text-white
					text-center
				"
      />

    </div>
  )
}
