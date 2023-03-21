import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section5() {
  return (
    <div
    style={{
      width: "100%",
      textAlign: "center",
    }}>
      <TitleText
        TitleSize="h1"
        TitleLabel="The Virufy Community"
        TextSize="subtitle"
        TextLabel={"Virufy was founded in March 2020. Today, Virufighters across five continents are committed to making disease screening instant and free of charge through innovative technology."}
      />
      <TitleText
        TitleSize="h2"
        TitleLabel="We believe that together we can help improve the world"
        TextSize="normal"
        TextLabel={"People all over the world support and work with us to combat this type of disease but many people like you can help us too"}
      />
    </div>
  )
}