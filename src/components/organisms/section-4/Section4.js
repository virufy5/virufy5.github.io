import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import ImageSection4 from "~/assets/static/images/section4/1.jpg"

export default function Section4({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
}) {
    return (
        <div className="flex"
            style={{
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
                marginTop: "160px"
            }}>
            <TitleText
                TitleSize="h1"
                TitleLabel="Meet Our Founder"
            />
            <div className="flex"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                    marginTop: "80px"
                }}>
                <div
                    style={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1",
                    }}>
                    <div style={{
                        width: "50%",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}>
                        <TitleText
                            TitleSize="h2"
                            TitleLabel="Amil Khanzada"
                            TextSize="subtitulo"
                            TextLabel="MBA Candidate, Haas School of Business Master of Engineering Candidate, Department of Electrical Engineering and Computer Sciences"
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                        />
                    <Button size="medium" type="primary" path="#" label="read more" />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flex: "1",
                    justifyContent: "start",
                    alignItems: "center",
                    paddingLeft: "30px"
                }} className="mr-[2.5vw]">
                    <ImageAtomLocal
                        imagesize="pr70"
                        border={border}
                        src={ImageSection4}
                        alt={alt}
                    />
                </div>
            </div>
        </div >
    )
}
