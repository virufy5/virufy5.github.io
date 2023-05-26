
import CardHome from "../../molecules/CardHome/CardHome";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Advisor1 from "../../../assets/static/images/cards/advisor1.jpg"
import Advisor2 from "../../../assets/static/images/cards/advisor2.jpg"
import Advisor3 from "../../../assets/static/images/cards/advisor3.jpg"
import { useState } from "react";

export default function CardSlider() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        breakpoints: {
            "(min-width: 1024px)": {
                slides: { perView: 2, spacing: 5 },
            },
        },
        slides: { perView: 1 },
    })

    return (
        <>
            <div className="navigation-wrapper mt-0 h-80 max-w-[1300px] w-[100vw]">
                <div ref={sliderRef} className="keen-slider h-72 ">
                    <div className="keen-slider__slide number-slide1">


                        <CardHome
                            src={Advisor1}
                            alt="imagen de algo"
                            TitleSize="h6"
                            TitleLabel="Nombre Cliente"
                            TextSize="normalCardHome"
                            TextLabel="Director. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."
                            imagesize=""
                            ContainerTitleProps=""
                            ContainerTextProps=""
                        />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <CardHome
                            src={Advisor2}
                            alt="imagen de algo"
                            TitleSize="h6"
                            TitleLabel="Nombre Cliente"
                            TextSize="normalCardHome"
                            TextLabel="Director. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."
                            imagesize=""
                            ContainerTitleProps=""
                            ContainerTextProps=""
                        />

                    </div>
                    <div className="keen-slider__slide number-slide3">

                        <CardHome
                            src={Advisor3}
                            alt="imagen de algo"
                            TitleSize="h6"
                            TitleLabel="Nombre Cliente"
                            TextSize="normalCardHome"
                            TextLabel="Director. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."
                            imagesize=""
                            ContainerTitleProps=""
                            ContainerTextProps=""
                        />
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <CardHome
                            src={Advisor1}
                            alt="imagen de algo"
                            TitleSize="h6"
                            TitleLabel="Nombre Cliente"
                            TextSize="normalCardHome"
                            TextLabel="Director. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."
                            imagesize=""
                            ContainerTitleProps=""
                            ContainerTextProps=""
                        />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <CardHome
                            src={Advisor2}
                            alt="imagen de algo"
                            TitleSize="h6"
                            TitleLabel="Nombre Cliente"
                            TextSize="normalCardHome"
                            TextLabel="Director. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."
                            imagesize=""
                            ContainerTitleProps=""
                            ContainerTextProps=""
                        />

                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                        {loaded && instanceRef.current && (
                            <div className="dots">
                                {[
                                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(idx)
                                            }}
                                            className={"dot" + (currentSlide === idx ? " active" : "")}
                                        ></button>
                                    )
                                })}
                            </div>
                        )}
                    </>
                )}
            </div>

        </>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg

            onClick={props.onClick}
            className={`w-5 h-5 arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

