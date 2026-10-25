'use client'

import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PolicySection {
    id: string;
    title: string;
    content?: string[];
    subsections?: {
        title: string;
        content?: string[];
        list?: string[];
        contentAfterList?: string[];
    }[];
    list?: string[];
    listSecondary?: string[];
    orderedList?: string[];
    contentAfterList?: string[];
    contentAfterSecondaryList?: string[];
    callout?: {
        title: string;
        details: string[];
    };
    contentAfterCallout?: string[];
}

const privacyPolicyMeta = {
    company: "EDVANTAE DIGITAL HUB LIMITED",
    title: "PRIVACY AND DATA PROTECTION POLICY",
    effectiveDate: "26th October, 2026",
    lastUpdated: "26th October, 2026",
    version: "1.0",
};

const privacyPolicySections: PolicySection[] = [
    {
        id: "1",
        title: "1. INTRODUCTION",
        content: [
        "Edvantae Digital Hub Limited (\"Edvantae\", \"we\", \"us\", or \"our\") is a company incorporated in Nigeria under the Companies and Allied Matters Act and registered with the Nigeria Data Protection Commission (\"NDPC\") as a data controller and data processor.",
        "Edvantae operates a technology-enabled educational productivity and communication ecosystem designed to support students, lecturers, student associations, educational institutions, administrators and other authorised users in tertiary education.",
        "Our services include scheduling, academic productivity, communication, assignment management, collaboration, resource sharing, institutional engagement, analytics and related technology-enabled services.",
        "We recognise that privacy is a fundamental responsibility and that individuals have rights concerning their personal data.",
        "This Privacy and Data Protection Policy (\"Policy\") explains how Edvantae collects, receives, uses, stores, discloses, protects, transfers, retains and otherwise processes personal data.",
        "This Policy is intended to apply to Edvantae's processing of personal data through its website, web applications, mobile applications, institutional portals, lecturer portals, administrative dashboards, backend systems, customer-support channels, communications systems and other services operated by or on behalf of Edvantae.",
        "This Policy is principally governed by the laws of the Federal Republic of Nigeria, including the Nigeria Data Protection Act, 2023 (\"NDP Act\"), applicable regulations, directives and guidance issued by the Nigeria Data Protection Commission, including the NDP Act&ndash;General Application and Implementation Directive 2025 (\"GAID\"), and other applicable Nigerian laws.",
        "Where another applicable law imposes additional privacy or data-protection obligations, Edvantae will comply with such requirements to the extent applicable."
        ]
    },
    {
        id: "2",
        title: "2. PURPOSE OF THIS POLICY",
        content: [
        "This Policy is intended to:"
        ],
        orderedList: [
        "explain what personal data Edvantae processes;",
        "explain why such personal data is processed;",
        "identify the circumstances and lawful bases upon which processing occurs;",
        "explain the circumstances in which Edvantae acts as a data controller or data processor;",
        "explain when personal data may be disclosed to third parties;",
        "explain international and cross-border transfers;",
        "explain how Edvantae protects personal data;",
        "explain data-retention and deletion practices;",
        "explain the rights of data subjects;",
        "provide mechanisms for exercising those rights;",
        "explain Edvantae&apos;s approach to cookies and tracking technologies;",
        "address privacy considerations relating to users under 18;",
        "explain Edvantae&apos;s approach to marketing;",
        "explain how privacy complaints and data-protection concerns are handled; and",
        "establish Edvantae&apos;s accountability and commitment to applicable Nigerian data-protection requirements."
        ],
        contentAfterList: [
        "This Policy should be read together with Edvantae&apos;s Terms of Service, Cookie Notice, Data Processing Agreements, institutional agreements and any other privacy notices applicable to particular services."
        ]
    },
    {
        id: "3",
        title: "3. SCOPE",
        content: [
        "This Policy applies to personal data processed through or in connection with:"
        ],
        subsections: [
        {
            title: "3.1 Edvantae Web Application",
            content: [
            "The Edvantae web application provides browser-based access to Edvantae services and may allow users to:"
            ],
            list: [
            "create and manage accounts;",
            "manage academic schedules;",
            "manage assignments and activities;",
            "communicate with other authorised users;",
            "participate in groups or institutional communities;",
            "share files and documents;",
            "access educational resources;",
            "calculate or manage academic information;",
            "receive notifications;",
            "manage profiles and settings;",
            "access institutional features;",
            "use productivity and collaboration tools; and",
            "access other features made available by Edvantae."
            ]
        },
        {
            title: "3.2 Edvantae Mobile Application",
            content: [
            "Edvantae provides mobile applications for iOS and Android devices.",
            "Depending on the features used and permissions granted by the user, the mobile application may access:"
            ],
            list: [
            "camera;",
            "microphone;",
            "photographs and files;",
            "contacts;",
            "location information;",
            "device identifiers;",
            "advertising identifiers;",
            "notification services;",
            "application usage information;",
            "crash and diagnostic information; and",
            "other device information necessary for particular functionality."
            ],
            contentAfterList: [
            "Access to device permissions will be requested and used in accordance with applicable law and the functionality for which the permission is required."
            ]
        },
        {
            title: "3.3 Institutional and Administrative Systems",
            content: [
            "Edvantae also operates or may operate:"
            ],
            list: [
            "institutional dashboards;",
            "lecturer portals;",
            "administrative dashboards;",
            "backend systems;",
            "APIs;",
            "cloud storage;",
            "customer-support systems;",
            "analytics systems;",
            "authentication systems;",
            "notification systems; and",
            "other infrastructure necessary to provide the Edvantae ecosystem."
            ]
        }
        ]
    },
    {
        id: "4",
        title: "4. DATA CONTROLLER AND DATA PROCESSOR STATUS",
        content: [
        "Edvantae may act as either a data controller, a data processor, or, depending on the processing activity, have responsibilities that overlap with those of an institutional controller.",
        "The determination is made according to the actual processing activity and the parties&apos; respective responsibilities, rather than merely by the name given to the relationship."
        ],
        subsections: [
        {
            title: "4.1 When Edvantae acts as Data Controller",
            content: [
            "Edvantae generally acts as a data controller where it determines the purposes and means of processing personal data.",
            "Examples may include:"
            ],
            list: [
            "individual user account registration;",
            "authentication;",
            "operation of Edvantae&apos;s consumer-facing platform;",
            "platform security;",
            "customer support;",
            "service analytics;",
            "product improvement;",
            "communications initiated by Edvantae;",
            "direct marketing where applicable;",
            "management of Edvantae&apos;s business relationships;",
            "legal and regulatory compliance;",
            "fraud prevention and security; and",
            "other purposes independently determined by Edvantae."
            ]
        },
        {
            title: "4.2 When Edvantae acts as Data Processor",
            content: [
            "Where an educational institution engages Edvantae to provide technology infrastructure and Edvantae processes institutional personal data on the institution&apos;s documented instructions, Edvantae may act as a data processor.",
            "Examples may include institutional processing involving:"
            ],
            list: [
            "student records;",
            "lecturer records;",
            "class information;",
            "assignment information;",
            "attendance information;",
            "institutional schedules;",
            "institutional reporting;",
            "academic records;",
            "student association information; and",
            "other information controlled by the institution."
            ],
            contentAfterList: [
            "Where Edvantae acts as a processor, the relevant institution remains responsible for determining the purposes and lawful basis for the processing, subject to the applicable contractual and legal framework.",
            "Such processing should be governed by an appropriate written data-processing arrangement."
            ]
        },
        {
            title: "4.3 Independent processing",
            content: [
            "An institutional relationship does not automatically mean that every processing activity performed by Edvantae is undertaken solely on behalf of the institution.",
            "For example, Edvantae may independently process certain information for:"
            ],
            list: [
            "platform security;",
            "service administration;",
            "legal compliance;",
            "fraud prevention;",
            "technical maintenance;",
            "aggregated or appropriately anonymised analytics;",
            "service improvement;",
            "customer support; and",
            "other purposes for which Edvantae independently determines the purposes and means of processing."
            ],
            contentAfterList: [
            "The precise controller/processor allocation should be documented in applicable institutional agreements and data-processing agreements."
            ]
        }
        ]
    },
    {
        id: "5",
        title: "5. PERSONAL DATA WE COLLECT",
        content: [
        "Depending on the service used and the user&apos;s relationship with Edvantae, we may collect or receive the following categories of personal data."
        ],
        subsections: [
        {
            title: "5.1 Identity Information",
            content: ["This may include:"],
            list: [
            "full name;",
            "username;",
            "user ID;",
            "photograph;",
            "title;",
            "date of birth, where required;",
            "user role; and",
            "other information used to identify an account."
            ]
        },
        {
            title: "5.2 Contact Information",
            content: ["This may include:"],
            list: [
            "email address;",
            "telephone number;",
            "contact information;",
            "institutional contact information; and",
            "other information used for communications."
            ]
        },
        {
            title: "5.3 Academic and Educational Information",
            content: ["Where necessary for the provision of educational services, this may include:"],
            list: [
            "institution;",
            "faculty;",
            "college;",
            "department;",
            "programme;",
            "course;",
            "level;",
            "academic status;",
            "registered courses;",
            "academic schedules;",
            "academic activities;",
            "assignments;",
            "attendance information;",
            "grades or academic results where provided through applicable services;",
            "GPA/CGPA information;",
            "class information; and",
            "other educational information."
            ]
        },
        {
            title: "5.4 Account and Authentication Information",
            content: ["This may include:"],
            list: [
            "account credentials;",
            "authentication information;",
            "login information;",
            "account identifiers;",
            "authentication tokens;",
            "account recovery information; and",
            "information necessary to secure accounts."
            ],
            contentAfterList: [
            "Passwords should be stored using appropriate security mechanisms and should not ordinarily be stored by Edvantae in readable/plain-text form."
            ]
        },
        {
            title: "5.5 Profile Information",
            content: ["Users may provide:"],
            list: [
            "profile photographs;",
            "biographies;",
            "preferences;",
            "programme information;",
            "language preferences;",
            "profile settings; and",
            "other information voluntarily included in their profile."
            ]
        },
        {
            title: "5.6 Academic Activity and Productivity Information",
            content: [
            "Because academic productivity is a core function of the platform, Edvantae may process:"
            ],
            list: [
            "assignments;",
            "tasks;",
            "schedules;",
            "timetables;",
            "activities;",
            "reminders;",
            "academic planning information;",
            "postponements;",
            "class information;",
            "GPA/CGPA calculations;",
            "resources;",
            "documents;",
            "notes;",
            "shared materials; and",
            "related productivity information."
            ]
        },
        {
            title: "5.7 Communications",
            content: [
            "Where communication features are used, Edvantae may process:"
            ],
            list: [
            "messages;",
            "chats;",
            "group communications;",
            "voice notes;",
            "images;",
            "documents;",
            "files;",
            "attachments;",
            "communication metadata; and",
            "other information shared through the platform."
            ],
            contentAfterList: [
            "Users should therefore avoid submitting personal information belonging to another person unless they have a lawful basis or appropriate authority to do so."
            ]
        },
        {
            title: "5.8 Device and Technical Information",
            content: ["We may automatically collect technical information including:"],
            list: [
            "device type;",
            "device model;",
            "operating system;",
            "browser;",
            "IP address;",
            "device identifiers;",
            "advertising identifiers;",
            "application version;",
            "crash information;",
            "diagnostic information;",
            "network information;",
            "log information;",
            "usage information; and",
            "security-related information."
            ]
        },
        {
            title: "5.9 Usage Information",
            content: [
            "We may process information concerning interaction with the Edvantae ecosystem, including use of:"
            ],
            list: [
            "dashboards;",
            "schedules;",
            "chats;",
            "resources;",
            "libraries;",
            "profiles;",
            "settings;",
            "FAQs;",
            "privacy notices;",
            "terms of service;",
            "gamification/Arena features;",
            "classes;",
            "groups;",
            "timetable-sharing features;",
            "academic tools; and",
            "other platform features."
            ]
        },
        {
            title: "5.10 Location Information",
            content: [
            "Where the relevant functionality requires it and the applicable permission or lawful basis exists, Edvantae may process:"
            ],
            list: [
            "GPS-based location information;",
            "approximate location information;",
            "IP-derived location information; and",
            "location-related device information."
            ],
            contentAfterList: [
            "Location information will not be collected merely because the device technically permits access to it."
            ]
        },
        {
            title: "5.11 Biometric and Sensitive Personal Data",
            content: [
            "Edvantae does not presently intend to process biometric information unless a specific feature requiring such information is introduced and the necessary legal, technical and privacy safeguards have been established.",
            "Where sensitive personal data is processed, Edvantae will apply the additional safeguards required by applicable Nigerian data-protection law."
            ]
        },
        {
            title: "5.12 AI-Related Data",
            content: [
            "Edvantae is not presently operating AI functionality for users based on the information supplied for this Policy.",
            "If AI functionality is introduced, Edvantae will update its privacy documentation and implement appropriate safeguards addressing, where applicable:"
            ],
            list: [
            "information submitted to AI systems;",
            "prompts;",
            "uploaded content;",
            "AI outputs;",
            "profiling;",
            "automated decision-making;",
            "model providers;",
            "retention;",
            "human review;",
            "training or model-improvement use; and",
            "rights of affected data subjects."
            ]
        }
        ]
    },
    {
        id: "6",
        title: "6. HOW WE COLLECT PERSONAL DATA",
        content: [
        "Personal data may be obtained:"
        ],
        orderedList: [
        "directly from users;",
        "during account registration;",
        "when users complete or update profiles;",
        "through use of Edvantae services;",
        "from educational institutions;",
        "from institutional administrators;",
        "from lecturers;",
        "from authorised student associations;",
        "automatically from devices;",
        "through cookies and similar technologies;",
        "through software development kits (SDKs);",
        "through APIs and integrations;",
        "through customer-support interactions;",
        "through authentication providers;",
        "through communications and notification services; and",
        "from other lawful sources."
        ],
        contentAfterList: [
        "Where personal data is received from an institution or another third party, Edvantae will process the information in accordance with the applicable legal and contractual framework."
        ]
    },
    {
        id: "7",
        title: "7. PURPOSES OF PROCESSING",
        content: [
        "Edvantae processes personal data only for specified, explicit and legitimate purposes. Depending on the circumstances, purposes may include:"
        ],
        subsections: [
        {
            title: "7.1 Account Management",
            list: [
            "creating accounts;",
            "verifying users;",
            "authenticating users;",
            "managing profiles;",
            "recovering accounts; and",
            "maintaining account security."
            ]
        },
        {
            title: "7.2 Educational Services",
            list: [
            "providing educational productivity tools;",
            "managing assignments;",
            "managing schedules;",
            "facilitating academic planning;",
            "facilitating attendance-related functionality;",
            "supporting course management;",
            "supporting academic calculations;",
            "facilitating institutional communication; and",
            "providing educational resources."
            ]
        },
        {
            title: "7.3 Communication and Collaboration",
            list: [
            "facilitating messaging;",
            "enabling group communication;",
            "facilitating file sharing;",
            "enabling institutional communications;",
            "delivering notifications; and",
            "enabling collaboration."
            ]
        },
        {
            title: "7.4 Platform Security",
            list: [
            "detecting unauthorised activity;",
            "protecting accounts;",
            "preventing fraud;",
            "preventing abuse;",
            "investigating security incidents;",
            "maintaining system integrity; and",
            "protecting users and the platform."
            ]
        },
        {
            title: "7.5 Analytics and Product Improvement",
            content: ["We may use appropriate data to:"],
            list: [
            "understand how services are used;",
            "identify technical problems;",
            "measure performance;",
            "improve functionality;",
            "develop new features;",
            "understand usage patterns; and",
            "improve user experience."
            ],
            contentAfterList: [
            "Where analytics involves personal data, Edvantae will ensure that an appropriate lawful basis exists and that processing remains proportionate.",
            "Where reasonably possible, analytics and research should use aggregated or anonymised information."
            ]
        },
        {
            title: "7.6 Institutional Reporting",
            content: [
            "Where applicable, Edvantae may provide institutions with reports concerning users and institutional activities processed on their behalf.",
            "The scope of such reporting will depend on the institutional arrangement, the applicable lawful basis and the parties&apos; respective responsibilities."
            ]
        },
        {
            title: "7.7 Customer Support",
            content: ["We process information necessary to:"],
            list: [
            "respond to enquiries;",
            "troubleshoot problems;",
            "resolve complaints;",
            "investigate account issues; and",
            "provide technical support."
            ]
        },
        {
            title: "7.8 Legal and Regulatory Compliance",
            content: ["We may process personal data where necessary to:"],
            list: [
            "comply with applicable laws;",
            "comply with lawful orders;",
            "respond to regulatory requests;",
            "establish, exercise or defend legal claims;",
            "prevent unlawful activity; and",
            "protect legal rights."
            ]
        },
        {
            title: "7.9 Marketing",
            content: [
            "Where permitted by applicable law, Edvantae may send:"
            ],
            list: [
            "product announcements;",
            "service updates;",
            "promotional communications;",
            "personalised marketing;",
            "partner promotions; and",
            "other marketing communications."
            ],
            contentAfterList: [
            "Direct marketing will be subject to the applicable consent and opt-out requirements.",
            "Marketing consent will not be treated as automatically obtained merely because a person accepts this Policy or the Terms of Service."
            ]
        }
        ]
    },
    {
        id: "8",
        title: "8. LAWFUL BASES FOR PROCESSING",
        content: [
        "Edvantae will identify and document an appropriate lawful basis for each material processing activity. Depending on the circumstances, the lawful basis may include:"
        ],
        subsections: [
        {
            title: "8.1 Performance of a Contract",
            content: [
            "Processing may be necessary to provide services requested by the user or to perform obligations under an agreement. Examples include:"
            ],
            list: [
            "account creation;",
            "authentication;",
            "scheduling;",
            "assignment functionality;",
            "communication features;",
            "provision of requested services; and",
            "customer support connected to a service relationship."
            ]
        },
        {
            title: "8.2 Consent",
            content: [
            "Consent may be used where required or appropriate, including where applicable to:"
            ],
            list: [
            "direct marketing;",
            "non-essential cookies and tracking;",
            "processing of sensitive personal data;",
            "processing of children&apos;s data where consent is the applicable lawful basis;",
            "incompatible further processing; and",
            "other activities for which applicable law requires consent."
            ],
            contentAfterList: [
            "Consent must be freely given, specific, informed and capable of being withdrawn."
            ]
        },
        {
            title: "8.3 Legal Obligation",
            content: [
            "Processing may be necessary to comply with applicable Nigerian legal or regulatory obligations."
            ]
        },
        {
            title: "8.4 Legitimate Interests",
            content: [
            "Where legally available, Edvantae may rely on legitimate interests for appropriate purposes such as:"
            ],
            list: [
            "platform security;",
            "fraud prevention;",
            "service integrity;",
            "network and information security;",
            "certain analytics;",
            "business administration; and",
            "protection of legitimate legal or commercial interests."
            ],
            contentAfterList: [
            "Before relying on legitimate interests where required, Edvantae will consider whether the legitimate interest is appropriate and whether the processing disproportionately affects the rights and freedoms of data subjects."
            ]
        },
        {
            title: "8.5 Vital Interests",
            content: [
            "Processing may occur where necessary to protect vital interests in circumstances recognised by applicable law."
            ]
        },
        {
            title: "8.6 Public Interest",
            content: [
            "Where applicable, processing may occur where authorised or required in the public interest."
            ]
        }
        ]
    },
    {
        id: "9",
        title: "9. CONSENT",
        content: [
        "Where Edvantae relies on consent:"
        ],
        list: [
        "consent will be requested separately from unrelated terms where appropriate;",
        "consent will be presented in clear and understandable language;",
        "consent will not be bundled unnecessarily with acceptance of contractual terms;",
        "refusal to provide optional consent will not unnecessarily prevent access to services that do not require such consent;",
        "users may withdraw consent where applicable;",
        "withdrawal will not affect the lawfulness of processing performed before withdrawal; and",
        "Edvantae will maintain appropriate records of consent."
        ],
        contentAfterList: [
        "For direct marketing, consent mechanisms must be separate and appropriately recorded where consent is the lawful basis."
        ]
    },
    {
        id: "10",
        title: "10. DISCLOSURE OF PERSONAL DATA",
        content: [
        "Edvantae may disclose personal data where necessary and lawful to:"
        ],
        list: [
        "educational institutions;",
        "authorised institutional administrators;",
        "lecturers;",
        "student associations;",
        "service providers;",
        "cloud infrastructure providers;",
        "authentication providers;",
        "analytics providers;",
        "email and communication providers;",
        "customer-support providers;",
        "security providers;",
        "professional advisers;",
        "auditors;",
        "regulators;",
        "courts and law-enforcement authorities;",
        "prospective purchasers or investors in connection with a lawful corporate transaction; and",
        "other persons where disclosure is authorised or required by law."
        ],
        contentAfterList: [
        "Edvantae does not sell personal data as a commodity.",
        "Third parties receiving personal data must be subject to appropriate contractual, legal and security safeguards where required."
        ]
    },
    {
        id: "11",
        title: "11. THIRD-PARTY SERVICE PROVIDERS",
        content: [
        "Based on the current infrastructure information supplied to Edvantae, third-party or external technology services may include:"
        ],
        list: [
        "Firebase for authentication and related infrastructure;",
        "Firebase/Firestore for database services;",
        "Firebase Storage for cloud file storage;",
        "GO54 or other applicable hosting/infrastructure services;",
        "Zoho and/or Firebase for email or communications;",
        "analytics services;",
        "notification services;",
        "authentication services;",
        "crash-reporting services; and",
        "other infrastructure providers used to operate the platform."
        ],
        contentAfterList: [
        "Edvantae will maintain an internal register of processors and service providers.",
        "The public-facing list should be updated when material third-party processors are introduced.",
        "Where a provider processes personal data on Edvantae&apos;s behalf, Edvantae will seek appropriate contractual and security protections consistent with applicable law."
        ]
    },
    {
        id: "12",
        title: "12. INTERNATIONAL DATA TRANSFERS",
        content: [
        "Although Edvantae operates in Nigeria and currently does not target users outside Nigeria, some service providers and cloud infrastructure may process or store personal data outside Nigeria.",
        "Accordingly, personal data may be transferred to or accessed from another jurisdiction where lawful and where appropriate safeguards are in place.",
        "Before making a cross-border transfer, Edvantae will assess:"
        ],
        list: [
        "the destination jurisdiction;",
        "the applicable legal requirements;",
        "whether an adequacy mechanism applies;",
        "whether appropriate safeguards are required;",
        "whether consent is required;",
        "the identity and role of the recipient;",
        "the categories of data involved; and",
        "the risks to data subjects."
        ],
        contentAfterList: [
        "Where applicable law requires consent or another transfer mechanism, Edvantae will implement that mechanism before the transfer occurs.",
        "International transfers will not be used as a means of circumventing Nigerian data-protection requirements."
        ]
    },
    {
        id: "13",
        title: "13. DATA SECURITY",
        content: [
        "Edvantae recognises its responsibility to implement appropriate technical and organisational measures to protect personal data. Depending on the nature and risk of the processing, measures may include:"
        ],
        list: [
        "encryption in transit;",
        "encryption at rest where supported and appropriate;",
        "secure password handling;",
        "authentication controls;",
        "access controls;",
        "role-based access;",
        "administrative access restrictions;",
        "logging and monitoring;",
        "secure cloud configuration;",
        "backups;",
        "vulnerability management;",
        "secure software-development practices;",
        "data segregation;",
        "account-recovery safeguards;",
        "incident detection;",
        "security testing;",
        "staff awareness and training; and",
        "appropriate contractual security requirements for processors."
        ],
        contentAfterList: [
        "Security measures will be proportionate to the nature, scope, context and risk of processing.",
        "No internet-based system can be guaranteed to be completely secure. Users are also responsible for maintaining the confidentiality of their credentials and should promptly report suspected unauthorised access."
        ]
    },
    {
        id: "14",
        title: "14. PRIVACY BY DESIGN AND DEFAULT",
        content: [
        "Edvantae will seek to incorporate privacy and data-protection considerations into the design, development and deployment of new products and features. Where appropriate, this includes:"
        ],
        list: [
        "data minimisation;",
        "purpose limitation;",
        "privacy-friendly defaults;",
        "access restrictions;",
        "appropriate retention limits;",
        "security controls;",
        "anonymisation or pseudonymisation;",
        "privacy impact assessment; and",
        "consideration of data-subject rights."
        ],
        contentAfterList: [
        "Where a proposed processing activity is likely to result in a high risk to individuals, Edvantae will assess whether a Data Protection Impact Assessment or other formal privacy risk assessment is required."
        ]
    },
    {
        id: "15",
        title: "15. DATA RETENTION",
        content: [
        "Edvantae will retain personal data only for as long as necessary for the purpose for which it was collected or processed, unless a longer period is required or permitted by applicable law.",
        "Edvantae currently intends to use a general retention framework of up to five years for applicable records, particularly where necessary for legitimate research, operational continuity, dispute management, recovery or legal purposes.",
        "However, a five-year period will not automatically apply to every category of personal data.",
        "Actual retention periods should be determined through an internal Data Retention Schedule based on:"
        ],
        list: [
        "the type of data;",
        "the purpose of processing;",
        "the applicable lawful basis;",
        "contractual requirements;",
        "institutional requirements;",
        "legal obligations;",
        "security requirements;",
        "dispute periods;",
        "regulatory requirements; and",
        "whether the information has been irreversibly anonymised."
        ]
    },
    {
        id: "16",
        title: "16. ACCOUNT DELETION",
        content: [
        "Users may request deletion of their accounts subject to applicable legal and contractual limitations.",
        "Upon valid deletion:"
        ],
        orderedList: [
        "the active account may be deactivated or deleted;",
        "personal data that is no longer required will be deleted or anonymised;",
        "information required to comply with legal obligations may be retained for the applicable period;",
        "information necessary for legal claims may be retained where permitted by law;",
        "appropriately anonymised information may continue to be used where it can no longer reasonably identify the data subject; and",
        "backup copies may remain for a limited period before being securely overwritten in accordance with Edvantae&apos;s backup-retention procedures."
        ],
        contentAfterList: [
        "Deletion of an account does not necessarily mean immediate deletion from all technical backup systems."
        ]
    },
    {
        id: "17",
        title: "17. CHILDREN AND USERS UNDER 18",
        content: [
        "Edvantae is an educational platform intended primarily for tertiary-level education.",
        "The current minimum age for individual registration is 16 years, and secondary-school students are not intended to use the platform.",
        "However, because a person under 18 may be enrolled in a tertiary institution, Edvantae recognises that some users may legally be children for data-protection purposes.",
        "Edvantae will therefore implement appropriate safeguards for users under 18.",
        "Where processing of a child&apos;s personal data relies on consent, Edvantae will obtain the legally required consent of a parent or guardian and implement appropriate age and consent verification mechanisms.",
        "Where the processing is based on another lawful basis specifically recognised by applicable law, Edvantae will process the data in accordance with that basis and applicable child-protection requirements.",
        "Edvantae will not knowingly permit secondary-school users below the applicable minimum age to create accounts for the tertiary-education platform.",
        "Targeted advertising, profiling and other higher-risk processing involving minors will be subject to heightened privacy review and applicable legal restrictions.",
        "The fact that a user is a tertiary student does not, by itself, remove the protections applicable to a child under Nigerian law."
        ]
    },
    {
        id: "18",
        title: "18. COOKIES AND TRACKING TECHNOLOGIES",
        content: [
        "Edvantae may use cookies, SDKs, device identifiers, pixels and similar technologies. These technologies may be used for:"
        ],
        list: [
        "authentication;",
        "security;",
        "session management;",
        "network stability;",
        "preferences;",
        "analytics;",
        "crash reporting;",
        "performance monitoring;",
        "product improvement; and",
        "advertising or personalisation where applicable."
        ],
        contentAfterList: [
        "Necessary technologies required for core functionality may operate without a separate consent mechanism where permitted by law.",
        "Non-essential cookies and tracking technologies requiring consent will be presented through an appropriate consent mechanism.",
        "Users should be able to accept or reject non-essential tracking where required.",
        "Edvantae will not treat continued use of the platform as blanket consent where applicable law requires a more specific consent mechanism.",
        "A separate Cookie Notice may provide more detailed information about individual cookies, SDKs and tracking technologies."
        ]
    },
    {
        id: "19",
        title: "19. MARKETING AND COMMUNICATIONS",
        content: [
        "Edvantae may send users:"
        ],
        list: [
        "service emails;",
        "SMS messages;",
        "push notifications;",
        "product announcements;",
        "promotional communications;",
        "personalised marketing;",
        "partner promotions; and",
        "other communications."
        ],
        contentAfterList: [
        "Transactional and service-related communications are distinct from promotional communications.",
        "Where consent is required for marketing, Edvantae will obtain consent through an appropriate mechanism.",
        "Marketing communications will provide an appropriate means of opting out.",
        "Users may unsubscribe from promotional communications through:"
        ],
        listSecondary: [
        "the unsubscribe mechanism provided in an email;",
        "applicable account settings;",
        "notification settings; or",
        "contacting Edvantae."
        ],
        contentAfterSecondaryList: [
        "Opting out of marketing will not prevent Edvantae from sending essential service, security, transactional or legally required communications."
        ]
    },
    {
        id: "20",
        title: "20. AUTOMATED DECISION-MAKING AND ARTIFICIAL INTELLIGENCE",
        content: [
        "Edvantae does not currently use AI to make decisions affecting users based on the information supplied for this Policy.",
        "If AI or automated decision-making is introduced, Edvantae will assess:"
        ],
        list: [
        "the purpose of the system;",
        "the categories of data used;",
        "the AI provider;",
        "whether personal data is transferred;",
        "whether data is retained by the provider;",
        "whether user content is used to train models;",
        "whether profiling occurs;",
        "whether automated decisions have legal or similarly significant effects;",
        "whether human intervention is required;",
        "whether a DPIA is necessary; and",
        "what additional rights and safeguards apply."
        ],
        contentAfterList: [
        "Edvantae will not introduce high-impact automated decision-making involving students without appropriate privacy, legal and risk assessment."
        ]
    },
    {
        id: "21",
        title: "21. DATA SUBJECT RIGHTS",
        content: [
        "Subject to applicable legal limitations, data subjects may have rights including:"
        ],
        orderedList: [
        "the right to be informed;",
        "the right to access personal data;",
        "the right to rectification;",
        "the right to erasure;",
        "the right to object to processing;",
        "the right to restrict processing where applicable;",
        "the right to data portability;",
        "the right to withdraw consent where processing is based on consent;",
        "rights relating to automated decision-making;",
        "rights relating to direct marketing; and",
        "the right to lodge a complaint with the Nigeria Data Protection Commission."
        ],
        contentAfterList: [
        "These rights are not absolute and may be subject to lawful exemptions and restrictions.",
        "For example, Edvantae may retain or continue processing information where necessary to comply with a legal obligation, protect the rights of another person, establish or defend a legal claim, or satisfy another lawful ground recognised by applicable law."
        ]
    },
    {
        id: "22",
        title: "22. DATA SUBJECT ACCESS REQUESTS",
        content: [
        "A data subject may submit a privacy request by contacting:"
        ],
        callout: {
        title: "Data Protection Officer",
        details: ["Email: privacy@edvantae.com"]
        },
        contentAfterCallout: [
        "Requests may include:"
        ],
        list: [
        "access to personal data;",
        "correction;",
        "deletion;",
        "restriction;",
        "objection;",
        "portability;",
        "withdrawal of consent;",
        "objection to automated decision-making; or",
        "other privacy-related requests."
        ],
        contentAfterList: [
        "Edvantae may request reasonable information necessary to verify the identity of the requester and prevent unauthorised disclosure.",
        "Edvantae will seek to respond to valid requests within the applicable statutory period.",
        "As a general operational target, Edvantae will seek to resolve requests within 30 days, subject to applicable law and any lawful extension or circumstances permitted by law.",
        "Where a request is refused or restricted, Edvantae will provide reasons where required by law and explain available complaint or review mechanisms, subject to applicable exemptions."
        ]
    },
    {
        id: "23",
        title: "23. IDENTITY VERIFICATION",
        content: [
        "Because privacy requests may involve disclosure of personal information, Edvantae may require reasonable evidence of identity.",
        "The amount of information requested for verification will be proportionate to the sensitivity of the requested information.",
        "Identity documents provided solely for verification should not be retained longer than necessary.",
        "Where a request is made on behalf of another person, Edvantae may require evidence of the requester&apos;s authority to act on that person&apos;s behalf."
        ]
    },
    {
        id: "24",
        title: "24. DATA ACCURACY",
        content: [
        "Edvantae seeks to ensure that personal data is accurate, complete and current where necessary.",
        "Users should update their information when it changes.",
        "Where a user believes that information held by Edvantae is inaccurate or incomplete, the user may request correction.",
        "Where Edvantae receives personal data from an institution or other controller, the relevant institution may remain responsible for the accuracy of information supplied by it."
        ]
    },
    {
        id: "25",
        title: "25. DATA BREACHES AND SECURITY INCIDENTS",
        content: [
        "Edvantae maintains an incident-response process appropriate to its size, services and risk profile.",
        "Where a personal-data breach occurs or is suspected, Edvantae will seek to:"
        ],
        orderedList: [
        "detect and identify the incident;",
        "contain the incident;",
        "preserve relevant evidence;",
        "investigate the incident;",
        "assess the nature and severity of the risk;",
        "identify affected systems and data subjects;",
        "implement corrective and protective measures;",
        "notify the NDPC where notification is legally required;",
        "notify affected data subjects where required;",
        "notify relevant institutional controllers where contractually or legally required;",
        "document the incident and response; and",
        "implement corrective measures to reduce the likelihood of recurrence."
        ],
        contentAfterList: [
        "Where applicable under the NDP Act, the NDPC will be notified within the legally prescribed timeframe, including the applicable 72-hour notification requirement for qualifying breaches.",
        "Processors working for Edvantae are expected to notify Edvantae promptly of relevant personal-data breaches so that Edvantae can meet its regulatory obligations."
        ]
    },
    {
        id: "26",
        title: "26. DATA PROCESSING BY INSTITUTIONS",
        content: [
        "Where an educational institution uses Edvantae&apos;s services, the institution may independently determine:"
        ],
        list: [
        "which student information is submitted;",
        "the purposes for which the information is processed;",
        "user access rights;",
        "institutional retention requirements;",
        "academic records;",
        "institutional reporting requirements; and",
        "other institutional processing decisions."
        ],
        contentAfterList: [
        "Where Edvantae acts as a processor, Edvantae will process institutional data in accordance with applicable contractual instructions and applicable law.",
        "Data subjects may therefore need to direct certain requests concerning institutional records to their institution as the relevant controller.",
        "Edvantae will cooperate reasonably with institutional controllers in responding to lawful data-subject requests."
        ]
    },
    {
        id: "27",
        title: "27. DATA SHARING BETWEEN USERS",
        content: [
        "The Edvantae platform may allow users to share:"
        ],
        list: [
        "messages;",
        "documents;",
        "files;",
        "images;",
        "schedules;",
        "timetable information;",
        "resources;",
        "class information;",
        "group information; and",
        "other content."
        ],
        contentAfterList: [
        "Users should exercise care before sharing personal information.",
        "Edvantae is not responsible for a user&apos;s voluntary disclosure of personal information to another user where the disclosure occurs through a feature designed to permit such sharing, subject to Edvantae&apos;s own legal obligations and security responsibilities."
        ]
    },
    {
        id: "28",
        title: "28. DATA STORAGE",
        content: [
        "Edvantae currently uses local device storage and cloud infrastructure.",
        "Cloud infrastructure includes services such as:"
        ],
        list: [
        "Firestore;",
        "Firebase Storage; and",
        "other infrastructure providers required to operate Edvantae."
        ],
        contentAfterList: [
        "The exact location of stored data may depend on the service provider, configuration, region and nature of the processing.",
        "Edvantae will implement appropriate contractual, security and transfer safeguards for cloud processing."
        ]
    },
    {
        id: "29",
        title: "29. THIRD-PARTY WEBSITES AND SERVICES",
        content: [
        "Edvantae may provide links or integrations to third-party websites or services.",
        "Unless expressly stated otherwise, third-party websites and services operate under their own privacy policies and terms.",
        "Users should review the privacy practices of third parties before submitting personal information to them.",
        "Where Edvantae integrates a third-party service into its platform, Edvantae will assess the privacy implications and apply appropriate safeguards based on the nature of the integration."
        ]
    },
    {
        id: "30",
        title: "30. CONFIDENTIALITY",
        content: [
        "Edvantae treats personal data as confidential information and will not disclose it except where disclosure is:"
        ],
        list: [
        "necessary to provide the service;",
        "authorised by the data subject;",
        "authorised by an applicable agreement;",
        "required by law;",
        "required by a lawful regulatory or judicial process;",
        "necessary for security or fraud prevention; or",
        "otherwise permitted by applicable data-protection law."
        ],
        contentAfterList: [
        "Employees, contractors and other persons authorised to access personal data will be subject to appropriate confidentiality obligations."
        ]
    },
    {
        id: "31",
        title: "31. DATA PROTECTION OFFICER",
        content: [
        "Edvantae has appointed a Data Protection Officer."
        ],
        callout: {
        title: "Data Protection Officer",
        details: [
            "Name: Fajimi Obaloluwa",
            "Position: Chief Technology Officer / Data Protection Officer",
            "Email: privacy@edvantae.com",
            "Telephone: +234 802 828 9332"
        ]
        },
        contentAfterCallout: [
        "The DPO is responsible for supporting Edvantae&apos;s data-protection and privacy compliance activities, including:"
        ],
        list: [
        "privacy advice;",
        "data-subject requests;",
        "privacy complaints;",
        "breach coordination;",
        "privacy awareness;",
        "data-protection risk management;",
        "liaison with relevant stakeholders;",
        "privacy documentation; and",
        "engagement with the NDPC where required."
        ]
    },
    {
        id: "32",
        title: "32. DATA PROTECTION COMPLIANCE",
        content: [
        "Edvantae will maintain appropriate measures to demonstrate compliance with applicable data-protection requirements.",
        "Depending on its regulatory classification and obligations, this may include:"
        ],
        list: [
        "privacy policies;",
        "records of processing activities;",
        "processor agreements;",
        "data-retention schedules;",
        "consent records;",
        "privacy notices;",
        "security policies;",
        "incident-response procedures;",
        "data-protection impact assessments;",
        "staff training;",
        "compliance reviews;",
        "data-subject request records;",
        "third-party due diligence; and",
        "regulatory filings or compliance returns required by the NDPC."
        ],
        contentAfterList: [
        "Edvantae will also maintain its NDPC registration and fulfil applicable ongoing compliance obligations."
        ]
    },
    {
        id: "33",
        title: "33. PRIVACY COMPLAINTS",
        content: [
        "Users who believe that Edvantae has mishandled their personal data should first contact:"
        ],
        callout: {
        title: "Data Protection Officer",
        details: ["Email: privacy@edvantae.com"]
        },
        contentAfterCallout: [
        "Edvantae will investigate privacy complaints fairly and within a reasonable period.",
        "The internal escalation process is:",
        "Level 1 &ndash; Privacy Complaint: Complaint submitted to Edvantae through privacy@edvantae.com.",
        "Level 2 &ndash; DPO Review: Where unresolved or escalated, the complaint will be reviewed by the DPO or designated privacy personnel.",
        "Level 3 &ndash; Regulatory Complaint: Where a data subject remains dissatisfied, they may exercise their statutory right to lodge a complaint with the Nigeria Data Protection Commission.",
        "Level 4 &ndash; Judicial Remedies: Nothing in this Policy prevents a data subject from exercising any judicial or other lawful remedy available under Nigerian law."
        ]
    },
    {
        id: "34",
        title: "34. GOVERNING LAW",
        content: [
        "This Policy shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
        "The principal legal framework governing this Policy includes the Nigeria Data Protection Act, 2023, applicable regulations and directives issued by the Nigeria Data Protection Commission, and other applicable laws of the Federal Republic of Nigeria.",
        "To the extent legally permissible, disputes concerning this Policy, Edvantae&apos;s processing of personal data, or rights arising from the relationship between Edvantae and a data subject shall be subject to the jurisdiction of the competent courts of Nigeria.",
        "Nothing in this clause shall prevent a person from exercising a statutory right to complain to the Nigeria Data Protection Commission or another competent regulatory authority.",
        "Where the law assigns exclusive jurisdiction to a particular Nigerian court or tribunal, that jurisdiction shall apply."
        ]
    },
    {
        id: "35",
        title: "35. CONTRACTUAL STATUS AND INCORPORATION",
        content: [
        "This Policy is intended to constitute Edvantae&apos;s principal public privacy notice and to form part of the contractual and regulatory framework governing the use of Edvantae services where incorporated into or referenced by the applicable Terms of Service, institutional agreement or other binding agreement.",
        "Where a user is required to acknowledge this Policy as part of registration or service access, the acknowledgement shall constitute evidence that the user has been provided with the privacy information contained herein.",
        "However, acceptance of this Policy does not by itself constitute consent to every processing activity described in it.",
        "Where specific consent is legally required, Edvantae will obtain that consent through an appropriate mechanism.",
        "Where Edvantae acts as a processor for an educational institution, the relevant Data Processing Agreement and institutional contract will govern processor-specific obligations to the extent of any conflict, subject always to applicable law."
        ]
    },
    {
        id: "36",
        title: "36. INTERNATIONAL PRIVACY STANDARDS",
        content: [
        "Edvantae seeks to maintain privacy practices consistent with recognised international data-protection principles, including principles commonly reflected in internationally recognised privacy frameworks.",
        "These principles include:"
        ],
        list: [
        "lawfulness, fairness and transparency;",
        "purpose limitation;",
        "data minimisation;",
        "accuracy;",
        "storage limitation;",
        "integrity and confidentiality;",
        "accountability;",
        "privacy by design and default;",
        "data-subject rights; and",
        "appropriate security."
        ],
        contentAfterList: [
        "Where international privacy requirements become applicable to Edvantae because of its users, operations, contractual arrangements or expansion into another jurisdiction, Edvantae will assess and address those additional requirements.",
        "Compliance with an international standard does not displace the application of Nigerian law where Nigerian law applies."
        ]
    },
    {
        id: "37",
        title: "37. CHANGES TO THIS POLICY",
        content: [
        "Edvantae may update this Policy from time to time to reflect:"
        ],
        list: [
        "changes in law;",
        "regulatory guidance;",
        "changes to our services;",
        "changes in technology;",
        "changes in data-processing activities;",
        "changes in third-party providers;",
        "security developments; or",
        "improvements to our privacy practices."
        ],
        contentAfterList: [
        "Where changes materially affect users&apos; rights or the purposes for which personal data is processed, Edvantae will provide appropriate notice and, where legally required, obtain additional consent.",
        "The \"Last Updated\" date at the beginning of this Policy will identify the most recent version."
        ]
    },
    {
        id: "38",
        title: "38. SEVERABILITY",
        content: [
        "If any provision of this Policy is determined by a competent authority or court to be invalid, unlawful or unenforceable, that provision shall be interpreted or modified to the minimum extent necessary to make it lawful and enforceable, where legally permissible.",
        "The remaining provisions shall continue in full force and effect."
        ]
    },
    {
        id: "39",
        title: "39. NO WAIVER OF STATUTORY RIGHTS",
        content: [
        "Nothing in this Policy is intended to remove, restrict or waive any right or remedy that cannot lawfully be excluded under Nigerian law.",
        "Where a provision of this Policy conflicts with a mandatory requirement of applicable Nigerian data-protection law, the mandatory legal requirement shall prevail to the extent of the conflict."
        ]
    },
    {
        id: "40",
        title: "40. CONTACT INFORMATION",
        content: [
        "For privacy questions, data-subject requests, complaints, consent withdrawal or other data-protection matters, contact:"
        ],
        callout: {
        title: "Edvantae Digital Hub Limited",
        details: [
            "RC Number: 8887277",
            "Data Protection Officer: Fajimi Obaloluwa (Chief Technology Officer / DPO)",
            "Privacy Email: privacy@edvantae.com",
            "Support Email: support@edvantae.com",
            "Telephone: +234 802 828 9332",
            "Website: https://www.edvantae.com",
            "Principal/Registered Office: 41 C M D Rd, Magodo, Ikeja 105102, Lagos, Nigeria."
        ]
        }
    },
    {
        id: "41",
        title: "41. DEFINITIONS",
        content: [
        "For purposes of this Policy:",
        "\"Data Controller\" means a person or organisation that determines the purposes and means of processing personal data.",
        "\"Data Processor\" means a person or organisation that processes personal data on behalf of a data controller.",
        "\"Data Subject\" means an identified or identifiable natural person whose personal data is processed.",
        "\"DPO\" means Data Protection Officer.",
        "\"NDPC\" means the Nigeria Data Protection Commission.",
        "\"NDP Act\" means the Nigeria Data Protection Act, 2023.",
        "\"GAID\" means the applicable General Application and Implementation Directive issued by the Nigeria Data Protection Commission under the NDP Act.",
        "\"Personal Data\" means information relating to an identified or identifiable natural person.",
        "\"Processing\" includes collecting, recording, organising, storing, adapting, retrieving, using, disclosing, transmitting, restricting, erasing or otherwise handling personal data.",
        "\"Sensitive Personal Data\" means personal data subject to heightened protection under applicable law.",
        "\"Third Party\" means a person or organisation other than the data subject, controller, processor or persons authorised to process personal data under the authority of the controller or processor."
        ]
    }
];

export default function PrivacyPolicy() {
    return (
        <>
        <Toaster />
        <Sonner />
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow" style={{ paddingTop: "50px" }}>
            <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800 leading-relaxed">
                {/* Header */}
                <header className="mb-10 border-b border-gray-200 pb-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
                    {privacyPolicyMeta.company}
                </h1>
                <h2 className="text-xl font-semibold text-edvantae-blue mb-4">
                    {privacyPolicyMeta.title}
                </h2>
                <div className="text-sm text-gray-500 space-y-1">
                    <p><strong>Effective Date:</strong> {privacyPolicyMeta.effectiveDate}</p>
                    <p><strong>Last Updated:</strong> {privacyPolicyMeta.lastUpdated}</p>
                    <p><strong>Version:</strong> {privacyPolicyMeta.version}</p>
                </div>
                </header>

                {/* Main Dynamic Content Container (Changed from <main> to <div> to prevent nesting errors) */}
                <div className="space-y-10">
                {privacyPolicySections.map((section) => (
                    <section key={section.id} className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                        {section.title}
                    </h2>

                    {/* Standard Paragraphs */}
                    {section.content?.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                        </p>
                    ))}

                    {/* Top-Level Bullet List */}
                    {section.list && (
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {section.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                        </ul>
                    )}

                    {/* Content After List */}
                    {section.contentAfterList?.map((text, idx) => (
                        <p key={`cal-${idx}`} className="text-gray-700 leading-relaxed">
                        {text}
                        </p>
                    ))}

                    {/* Ordered List (1., 2., 3., etc.) */}
                    {section.orderedList && (
                        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        {section.orderedList.map((item, idx) => (
                            <li key={`ol-${idx}`}>{item}</li>
                        ))}
                        </ol>
                    )}

                    {/* Subsections (e.g., 3.1, 3.2, etc.) */}
                    {section.subsections && (
                        <div className="space-y-6 pl-2 md:pl-4 border-l-2 border-edvantae-blue/20 mt-4">
                        {section.subsections.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-3">
                            <h3 className="font-semibold text-lg text-gray-900">
                                {sub.title}
                            </h3>
                            
                            {sub.content?.map((subP, pIdx) => (
                                <p key={pIdx} className="text-gray-700">
                                {subP}
                                </p>
                            ))}

                            {sub.list && (
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                {sub.list.map((subItem, lIdx) => (
                                    <li key={lIdx}>{subItem}</li>
                                ))}
                                </ul>
                            )}

                            {sub.contentAfterList?.map((subText, stIdx) => (
                                <p key={`sub-cal-${stIdx}`} className="text-gray-700">
                                {subText}
                                </p>
                            ))}
                            </div>
                        ))}
                        </div>
                    )}

                    {/* Special Callout Box (e.g., Contact DPO Box) */}
                    {section.callout && (
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1 my-4">
                        <p className="font-semibold text-gray-900">{section.callout.title}</p>
                        {section.callout.details.map((detail, dIdx) => (
                            <p key={dIdx} className="text-gray-700 text-sm">{detail}</p>
                        ))}
                        </div>
                    )}

                    {/* Content After Callout */}
                    {section.contentAfterCallout?.map((text, idx) => (
                        <p key={`cac-${idx}`} className="text-gray-700 leading-relaxed">
                        {text}
                        </p>
                    ))}

                    {/* Secondary Lists (e.g., Unsubscribe methods) */}
                    {section.listSecondary && (
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {section.listSecondary.map((item, idx) => (
                            <li key={`sec-list-${idx}`}>{item}</li>
                        ))}
                        </ul>
                    )}
                    </section>
                ))}
                </div>
            </div>
            </main>
            <Footer />
        </div>
        </>
    );
}