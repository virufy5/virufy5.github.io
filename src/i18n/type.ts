export type I18nData = {
  locale: string
  home: {
    title: string;
    subtitle: string;
  };
  AboutUs?: AboutUs;
  GetInvolved_?: GetInvolved;
  howItWorks?: HowItWorks;
  dashboard?: {
    tittle: string
    tittleInfo: string
    advertisement: string
  }
  jobDescription?: JobDescription
  ourPublications?: OurPublications
  ourTechnology?: OurTechnology,
  ourResearch?: OurResearch
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
export interface AboutVirufySection {
  title: string
  recordingYourCough: string
  recordingDescription: string
  processingYourCough: string
  processingDescription: string
  resultsYourCough: string
  resultDescription: string
}

export interface OurTechnology {
  title: string
  titileDescription: string
  aboutVirufySection: AboutVirufySection
  collectedDataTitle: string
  collectedDataText: string
  dashboardButtonLabel: string
}

// ---- Get Involved ----
export interface GetInvolved {
  sectionDonate: sectionDonate;
  sectionJoinOurTeam: sectionJoinOurTeam;
  sectionTellYouStory: sectionTellYouStory;
}

export interface sectionDonate {
  title: string;
  textLabel: string;
  button: string;
}
export interface sectionJoinOurTeam {
  titleJoinOurTeam: string;
  textJoinOurTeam: string;
  titleCareers: string;
  textCareers: string;
  buttonCareers: string;
  titleBecomeAPartner: string;
  textBecomeAPartner: string;
  text2BecomeAPartner: string;
  buttonBecomeAPartner: string;
}

export interface sectionTellYouStory {
  titleTellYourStory: string;
  textTellYourStory: string;
  text2TellYourStory: string;
  buttonTellYourStory: string;
}
// ---- | ----

// ---- About Us ---
export interface AboutUs {
  titleImage: string;
  sectionOurMissionStory: sectionOurMissionStory;
  sectionOurValues: sectionOurValues;
  sectionOurCommitmentPrivacy: sectionOurCommitmentPrivacy;
}

export interface sectionOurMissionStory {
  titleMission: string;
  textMission: string;
  titleStory: string;
  textStory: string;
}

export interface sectionOurValues {
  title: string;
  Transformation: string;
  textTransformation: string;
  Collaboration: string;
  textCollaboration: string;
  Health: string;
  textHealth: string;
  Affordability: string;
  textAffordability: string;
  Efficiency: string;
  textEfficiency: string;
  Innovation: string;
  textInnovation: string;
}

export interface sectionOurCommitmentPrivacy {
  title: string;
  text: string;
}
//---- | ----

// ---- OurResearch ----
export interface OurResearch {
  firstCard:       Card;
  secondCard:      Card;
  thirdCard:       Card;
  fourthCard:      Card;
  sectionScience:  SectionScience;
  sectionResearch: SectionResearch;
}

export interface Card {
  universityTitle: string;
  description:     string;
}

export interface SectionResearch {
  titleResearch:    string;
  titleWantToLearn: string;
  button:           string;
}

export interface SectionScience {
  title:     string;
  textLabel: string;
}
//---- | ----