import TitleText from "~/components/molecules/TitleText/TitleText"
import Button from "~/components/atoms/button/Button"

export default function Section4({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
}) {
    return (
        <div className="flex mt-[70px] md:mt-[100px]"
            style={{
                width: "70%",
                flexDirection: "column",
                margin: "0 auto",
                textAlign: "center"
            }}>
            <div>
                <TitleText
                    TitleSize="h1"
                    TitleLabel="Let’s help the world and save many lives by recording your cough"
                />
                <div className="flex"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1",
                        marginTop: "30px"
                    }}>
                    <div
                        style={{
                            width: "30%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1",
                            marginTop: "30px"
                        }}>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-20 mb-28">
                            <Button size="large" type="primary" path="#" label="share your cough" />
                            <Button size="large" type="secondary" path="#" label="learn more" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}