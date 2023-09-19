export type I18nData = {
  locale: string
  home: {
    title: string
    subtitle: string
  }
  AboutUs: {
    titleImage: string
    title1: string
    text1: string
    title2: string
    text2: string
    title3: string
    CardsData: any
    title4: string
    text4: string
  }
  GetInvolved_: {
    title1: string
    text1: string
    button1: string
    title2: string
    text2: string
    title3: string
    text3: string
    button2: string
    title4: string
    text4: string
    text4_1: string
    button3: string
    title5: string
    text5: string
    text5_1: string
    button4: string
  }
  howItWorks?: HowItWorks
  dashboard?: {
    tittle: string
    tittleInfo: string
    advertisement: string
  }
  jobDescription?: JobDescription
  ourPublications?: OurPublications
  ourTechnology?: OurTechnology
}

// ---- How It Works ----
export interface HowItWorks {
  sectionShareCougt: SectionShareCougt
  sectiontCovidTestExplanation: SectiontCovidTestExplanation
}

export interface SectionShareCougt {
  title: string
  textLabel: string
  buttons: string
}
export interface SectiontCovidTestExplanation {
  title: string
  titleLabelRecording: string
  titleLabelProcessing: string
  titleLabelResults: string
  textLabelRecording: string
  textLabelProcessing: string
  textLabelResults: string
}
// ---- | ----

// ---- Job Description ----
export interface ResponsibilitiesSection {
  responsibilities: string
  responsibilityDefine: string
  responsibilityAnalize: string
  responsibilityRequest: string
  responsibilityTask: string
  responsibilityDevelop: string
  responsibilityJob: string
}

export interface QualificationsSection {
  minimumQualifications: string
  qualificationOld: string
  qualificationWork: string
  qualificationTittle: string
  qualificationPhoto: string
  qualificationLanguage: string
}

export interface SkillsSection {
  desiredSkills: string
  skillExperience: string
  skillDetail: string
  skillComunication: string
  skillResponsability: string
}

export interface JobDescription {
  jobTitle: string
  jobDescription: string
  responsibilitiesSection: ResponsibilitiesSection
  qualificationsSection: QualificationsSection
  skillsSection: SkillsSection
  questions: string
  contactEmail: string
}
// ---- | ----

// ---- Our Publications ---
export interface OurPublications {
  publicationCarts: PublicationCards
  helpText: string
  buttonText: string
}
export interface PublicationCards {
  title: string
  cardStudy: string
  cardVoice: string
  cardSensibility: string
  cardInvestigation: string
}
//---- | ----

// ---- Our Technology ---
export interface OurTechnology {
  section1Title: string
  section1Text: string
  section8Title: string
  recordingYourCough: string
  section8Text1: string
  processing: string
  section8Text2: string
  results: string
  section8Text3: string
  collectedDataTitle: string
  collectedDataText: string
  dashboardButtonLabel: string
}
