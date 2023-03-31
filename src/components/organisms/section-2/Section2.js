import TitleText from "../../molecules/TitleText/TitleText"
import TitleTextImg from "../../molecules/TitleTextImg/TitleTextImg"
import Video from "../../atoms/videoAtom/Video"

import Step1 from "../../../assets/static/images/section2/step1.jpg"
import Step2 from "../../../assets/static/images/section2/step2.jpg"
import Step3 from "../../../assets/static/images/section2/step3.jpg"

export default function Section2() {
    return (
        <div className="flex"
            style={{
                width: "100vw",
            }}>
            <div style={{
                width: "100vw",
            }}>
                <div style={{
                    textAlign: "center",
                    margin: "100px 0 80px 0"
                }}>
                    <TitleText
                        TitleSize="h1"
                        TitleLabel="How our online Covid-19 test works"
                    />
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <div style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        textAlign: "center"
                    }}>
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h3"
                            TitleLabel="1. Record your cough"
                            ImgRoute={Step1}
                            ImgBorder="circular"
                            ImgAlt="1. Record your cough"
                            imagesize="px300"
                        />
                    </div>
                    <div style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        textAlign: "center"
                    }}>
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h3"
                            TitleLabel="2. AI analyzed for COVID patterns"
                            ImgRoute={Step2}
                            ImgBorder="circular"
                            ImgAlt="2. AI analyzed for COVID patterns"
                            imagesize="px300"
                        />
                    </div>
                    <div style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        textAlign: "center"
                    }}>
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h3"
                            TitleLabel="3. COVID risk status reported"
                            ImgRoute={Step3}
                            ImgBorder="circular"
                            ImgAlt="3. COVID risk status reported"
                            imagesize="px300"
                        />
                    </div>
                </div>
                <div style={{
                    marginTop: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Video width="800px" height="450px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
            </div>

        </div >
    )
}
