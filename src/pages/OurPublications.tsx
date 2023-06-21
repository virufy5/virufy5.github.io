
/* import Section9 from "~/components/organisms/section-9/Section9" */
import CardLargue from "~/components/organisms/section-9/CardLarge"

//image
import notebook from "~/assets/static/images/OurPublications/notebook1.png"
import Title from "~/components/atoms/Title/Title"
import Button from "~/components/atoms/button/Button"

export default function OurPublications() {

    const CardsData = [
        {
            route: notebook,
            text: "Our The study 'A Cough-Based Algorithm for Automatic Diagnosis of Pertussis' uses pertussis cough, croup, and cough containing wheezing sounds corresponding to other diseases read more...",
        },
        {
            route: notebook,
            text: "A study by Carnegie Mellon University aimed to collect a large number of voice samples to train AI for diagnosis of COVID. The rationale behind the study is that, the sound of our voice read more...",
        },
        {
            route: notebook,
            text: "MIT's IEEE reviewed research reported sensitivities of 98% for asymptomatic COVID-19 detection from cough alone read more...",
        },
        {
            route: notebook,
            text: "A crowdsource research done by University of Cambridge that used cough samples and breathing to understand how discernible COVID-19 sounds are from those in asthma or healthy controls read more..."
        },
    ]

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center max-w-[1440px] ">
                    <div className="
    w-[100%] text-center items-center mb-5
    ">
                        <Title
                            Text="Our Publications"
                            H="h1"
                            TitleClassProps="mt-12 mb-12"
                        />
                        <CardLargue
                            CardsData={CardsData}
                            CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/2 mb-4 mt-4 px-5"
                        />
                        <Title
                            Text="Let’s help the world and save many lives by recording your cough"
                            H="h3"
                            TitleClassProps="mt-14 mb-14"
                        />
                        <Button
                            size="medium"
                            type="primary"
                            label="share your cough"
                            path="https://virufy.org/study/welcome"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}