export type ResumeData = {
  id: number;
  date: string;
  title: string;
  location: string;
  additionalInfo?: string;
  keyPoints: string[];
};

export const experienceData: ResumeData[] = [
  {
    id: 1,
    date: "2022 - 2024",
    title: "Frontend Software Engineer",
    location: "AVAMAE",
    keyPoints: [
      "Demonstrated proficiency in React, TypeScript and Redux through building features for a client's job board/ATS platform, which spans multiple websites with distinct user interfaces yet deeply integrated services.",
      "Worked across the full software development lifecycle, from scoping requirements and translating UX wireframes into responsive interfaces, to deploying code and fixes on production systems.",
      "Experience integrating with RESTful APIs and third-party services, ensuring seamless user interactions and display of real-time data.",
      "Progressed to primary frontend developer on project within 6 months, taking on responsibility for implementing large-scale expansions to the client's product in a fast-paced agile sprint environment.",
      "Led deliverables include a new marketplace board and networking functionality, migration of the candidate assessment process from legacy platform to React, and multiple site-wide UI revamps.",
      "Contributed to library of reusable components and adapted in-house calendar/booking system modules to meet client's developing needs.",
    ],
  },
  {
    id: 0,
    date: "2021 - 2022",
    title: "Post-doctoral Researcher",
    location: "UCL",
    keyPoints: [
      "Developed research undertaken in PhD project, and layed out groundwork for submitting findings to a research journal for publication.",
    ],
  },
];

export const educationData: ResumeData[] = [
  {
    id: 2,
    date: "2016 - 2021",
    title: "PhD in Structural and Molecular Biology",
    location: "University College London",
    additionalInfo: "Pass",
    keyPoints: [
      "Successfully submitted and defended thesis entitled 'Molecular basis of selectivity in Syncrip’s recognition of target RNAs'",
      "Employed an integrative structural and biophysical approach to characterise how the multi-functional Syncrip protein can differentially recognise specific RNA targets.",
      "Broadened scientific skills through 4-month rotation projects in three laboratories specialising in NMR spectroscopy, mass spectrometry and fluorescence microscopy.",
      "Primary author on literature review 'The devil is in the domain: understanding protein recognition of multiple RNA targets' - published in Biochem Soc Trans (2017) 45 (6): 1305–1311.",
    ],
  },
  {
    id: 1,
    date: "2012 - 2016",
    title: "MSci in Biochemistry",
    location: "University College London",
    additionalInfo: "1st Class Honours",
    keyPoints: [
      "Topics included: Biochemistry, Structural and Molecular Biology, Microbiology, Immunology, Virology, Chemistry, Metabolism, and Genetics.",
      "Awarded the Undergraduate Research Symposium Oral Prize for presentation of final year project.",
    ],
  },
  {
    id: 0,
    date: "2010 - 2012",
    title: "A-levels (Maths/Biology/Chemistry)",
    location: "Haringey Sixth Form",
    additionalInfo: "A*AA",
    keyPoints: [
      "A-levels in Mathematics (A*), Biology (A) and Chemistry (A). AS-level in Psychology (B).",
      "Recipient of the Jack Petchey Achievement Award (April 2011) and local Ryan Rodgers “Outstanding Scientist” award (May 2012).",
    ],
  },
];
