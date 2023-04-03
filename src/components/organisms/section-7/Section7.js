import TitleText from "~/components/molecules/TitleText/TitleText"
import Button from "~/components/atoms/button/Button"

export default function Section4({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
}) {
    return (
        <div className="flex"
            style={{
                width: "70%",
                flexDirection: "column",
                margin: "0 auto",
                marginTop: "116px",
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
                        marginTop: "80px"
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
                        <div style={{
                            display: "flex",
                            gap: "15%"
                        }}>
                            <Button size="large" type="primary" path="#" label="share your cough" />
                            <Button size="large" type="secondary" path="#" label="learn more" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}