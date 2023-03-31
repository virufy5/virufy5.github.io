import ImageAtomLocal from "../../atoms/imageAtom/ImageAtomLocal";
import TitleText from "~/components/molecules/TitleText/TitleText";

export default function CardHome({  
    src,
    imagesize,
    alt,
    TitleSize,
    TitleLabel,
    TextSize,
    TextLabel,
    ContainerTitleProps,
    ContainerTextProps,}) {
    
    return (
        <>
            <div className="flex rounded-md "
                style={{
                    width: "495px",
                    height: "211px",
                    padding: "32px",
                    background: "#D9D9D9"
                }}>
            <div style={{
                    width: "30%",
                    margin: "0 10px",
                    display: "flex",
                    alignItems: "center"
                }}>
                <ImageAtomLocal border="circular" imagesize={imagesize} src={src} alt={alt}/>
            </div>
            
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>
                    <TitleText 
                        style={{
                            textAlign: "center"
                        }}
                    TitleSize={TitleSize}
                    TitleLabel={TitleLabel}
                    TextSize={TextSize}
                    TextLabel={TextLabel}
                    ContainerTitleProps={ContainerTitleProps}
                    ContainerTextProps={ContainerTextProps}
                    TitleClassProps="ml-[2vw]"
                    TextClassProps="ml-[2vw]"
                    />
                </div>
            </div>
        </>
    );
}
