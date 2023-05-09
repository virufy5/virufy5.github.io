
import CardHome from "../../molecules/CardHome/CardHomeTall";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Advisor1 from "../../../assets/static/images/ourSupporters/card1-VH.png"
import Advisor2 from "../../../assets/static/images/ourSupporters/card2-VH.png"
import { useState } from "react";

export default function CardSliderTall({
  cardSliderData
}) {

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
      "(min-width: 1600px)": {
        slides: { perView: 3, spacing: 5 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <>
      <div className="navigation-wrapper mt-0 max-w-[1300px] w-[100vw]">
        <div ref={sliderRef} className="keen-slider  ">
          <div className="keen-slider__slide number-slideTall1">
            <CardHome
              src={Advisor1}
              alt="Annelisse Torrez Daza"
              textLabel="“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”"
              name="Annelisse Torrez Daza"
              country={"Bolivia"}
            />
          </div>
          <div className="keen-slider__slide number-slideTall2">
            <CardHome
              src={Advisor2}
              alt="Annelisse Torrez Daza"
              textLabel="“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”"
              name="Annelisse Torrez Daza"
              country={"Bolivia"}
            />
          </div>
          <div className="keen-slider__slide number-slideTall3">
            <CardHome
              src={Advisor1}
              alt="Annelisse Torrez Daza"
              textLabel="“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”"
              name="Annelisse Torrez Daza"
              country={"Bolivia"}
            />
          </div>
          <div className="keen-slider__slide number-slideTall4">
            <CardHome
              src={Advisor1}
              alt="Annelisse Torrez Daza"
              textLabel="“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”"
              name="Annelisse Torrez Daza"
              country={"Bolivia"}
            />
          </div>
          <div className="keen-slider__slide number-slideTall2">
            <CardHome
              src={Advisor1}
              alt="Annelisse Torrez Daza"
              textLabel="“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”"
              name="Annelisse Torrez Daza"
              country={"Bolivia"}
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

