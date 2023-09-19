export type I18nData = {
  locale: string;
  home: {
    title: string;
    subtitle: string;
  };
  AboutUs?: AboutUs;
  GetInvolved_?: GetInvolved;
  howItWorks?: HowItWorks;
  dashboard?: {
    tittle: string;
    tittleInfo: string;
    advertisement: string;
  };
  jobDescription?: JobDescription;
  ourPublications?: OurPublications;
  ourTechnology?: OurTechnology;
};

// ---- How It Works ----
export interface HowItWorks {
  sectionShareCougt: SectionShareCougt;
  sectiontCovidTestExplanation: SectiontCovidTestExplanation;
}

export interface SectionShareCougt {
  title: string;
  textLabel: string;
  buttons: string;
}
export interface SectiontCovidTestExplanation {
  title: string;
  titleLabelRecording: string;
  titleLabelProcessing: string;
  titleLabelResults: string;
  textLabelRecording: string;
  textLabelProcessing: string;
  textLabelResults: string;
}
// ---- | ----

// ---- Job Description ----
export interface JobDescription {
  title: string;
  textInfo: string;
  responsibilities: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
  li6: string;
  minimumQualifications: string;
  li7: string;
  li8: string;
  li9: string;
  li10: string;
  li11: string;
  desiredSkills: string;
  li12: string;
  li13: string;
  li14: string;
  li15: string;
  questions: string;
  li16: string;
}
// ---- | ----

// ---- Our Publications ---
export interface OurPublications {
  title: string;
  card1Text: string;
  card2Text: string;
  card3Text: string;
  card4Text: string;
  helpText: string;
  buttonText: string;
}
//---- | ----

// ---- Our Technology ---
export interface OurTechnology {
  section1Title: string;
  section1Text: string;
  section8Title: string;
  recordingYourCough: string;
  section8Text1: string;
  processing: string;
  section8Text2: string;
  results: string;
  section8Text3: string;
  collectedDataTitle: string;
  collectedDataText: string;
  dashboardButtonLabel: string;
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