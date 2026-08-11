# GenExcel

## Product and Feature Guide

**A complete, non-technical description of everything the GenExcel platform does**

---

| | |
| --- | --- |
| **Document type** | Functional and feature documentation |
| **Audience** | Clients, stakeholders, investors, partners, product and business teams, new joiners |
| **Version** | 1.0 |
| **Date** | 5 August 2026 |
| **Companion document** | GenExcel Platform Complete Technical and Functional Documentation |

---

### About this document

This guide describes the GenExcel platform entirely in terms of **what it does for the people who use it**. It contains no technical implementation detail: no technology names, no system architecture, no data structures, no interfaces, no infrastructure. Everything here is expressed as features, screens, roles, journeys and outcomes.

A separate companion document, the *GenExcel Platform Complete Technical and Functional Documentation*, covers the engineering side for developers and technical reviewers.

### How this document was produced

Every feature described here was confirmed against the working product rather than taken from earlier plans or marketing material. Where a feature is designed and visible in the product but not yet switched on for general use, this document says so plainly and says where it sits instead. Section 22 gives a single consolidated availability status for every capability, so a reader who needs only "what can we show a customer today" can read Section 2 and Section 22 and stop there.

This honesty is deliberate. A feature guide that overstates readiness is worse than no guide at all, because it sets expectations that a demonstration then fails to meet.

### How to read this document

| If you are | Read |
| --- | --- |
| An investor or executive wanting the whole picture in ten minutes | Sections 2 and 3, then the availability summary in Section 22 |
| Preparing a client demonstration | Section 3 (the journey), Section 23 (suggested demonstration flow), and the screen reference in Section 17 |
| A product manager scoping new work | Sections 5 through 15 in full, then Sections 22, 24 and 25 |
| A partner school, hospital or laboratory | Sections 3, 9, 15 and 16 |
| A new joiner in any non-engineering role | Read straight through; Section 26 is a glossary |
| Responsible for privacy, consent or compliance | Section 19 in full, plus the consent journeys in Section 18 |

---

# 1. Table of Contents

**Part One — The product**

1. Table of Contents
2. Executive Summary
3. The GenExcel Journey, End to End
4. Product Modes and Delivery Channels
5. User Roles and Plans

**Part Two — Feature domains**

6. Accounts, Onboarding and Household Setup
7. Genetic Reports and Insights
8. Helix, the AI Learning Companion
9. School Genomics
10. Learning and Academic Features
11. Health and Wellness
12. Nutrition and Diet
13. Fitness, Gym and Habits
14. Games, Rewards and Motivation
15. Clinical, Telehealth and Partner Features

**Part Three — Role and screen reference**

16. Feature Reference by Role
17. Screen-by-Screen Reference
18. Key User Journeys

**Part Four — Trust, status and direction**

19. Privacy, Consent and Child Safety
20. Notifications and Communication
21. Languages, Accessibility and Personalisation
22. Feature Availability Summary
23. Suggested Demonstration Flow
24. Current Limitations
25. Planned Enhancements
26. Glossary

---

# 2. Executive Summary

## 2.1 What GenExcel is

GenExcel is a genomics-led learning and wellness platform for Indian families.

It begins with a simple saliva sample. A partner laboratory analyses that sample and returns a detailed genetic report covering more than a hundred individual traits — how a child's body handles specific nutrients, how they are likely to learn and concentrate, what kinds of physical activity suit them, which personality tendencies are dominant, and where they carry elevated health risk.

Most genetic testing products stop there. They hand over a beautiful PDF, and the family reads it once.

GenExcel is built on a different premise: **a genetic report should change how software teaches, feeds and coaches a person — not merely be displayed to them.** So the report is not the product. The report is the input.

Once a report is linked to a child's account, four things change:

- **The AI tutor teaches differently.** It knows this child learns better in short bursts with visual scaffolding, so it structures explanations that way — without ever telling the child that their genetics were consulted.
- **The nutrition plan is adjusted.** Calorie and macronutrient targets carry genetic adjustments; the diet plan reflects sensitivities and deficiency tendencies the report identified.
- **The fitness programme is shaped.** Power-versus-endurance disposition and injury-risk tendencies inform what training is suggested.
- **The adults around the child see something useful.** A teacher sees a curated learning profile. A genetic counsellor sees the full clinical picture. A parent sees what to act on.

## 2.2 Who it is for

| Audience | What GenExcel gives them |
| --- | --- |
| **School-age children** | A tutor that already knows how they learn, schoolwork help grounded in their own textbooks, and a report about themselves that is written to be encouraging rather than alarming |
| **Parents and guardians** | Visibility into a child's learning, health and habits; control over what is collected and shared; a nutrition and wellness plan for the whole household |
| **Teachers** | A per-student learning profile, performance analytics, and lesson plans generated to match how a particular class learns |
| **Genetic counsellors** | A caseload workspace with full genetic profiles, report review, consultations and messaging |
| **Schools** | Health camps, enrolment management, and cohort-level academic and wellness insight |
| **Adults using the wellness product** | Activity rings, step and sleep tracking, wearable integration, diet plans and gym programming |
| **Clinical partners** | Telehealth consultations, prescriptions, referrals, lab results and kiosk-based screening |

## 2.3 The two products in one platform

GenExcel ships as a single application that presents itself as one of two products, chosen by the user at signup.

**School Genomics** is the primary product. It is student-centred: genetic traits and a learning-style assessment together shape an AI tutor, study plans, lesson content and what the adults around the child can see.

**Health and Wellness** is the adult product. It is body-centred: activity rings, step and sleep tracking, wearable and smartwatch integration, diet planning, gym programming and body metrics.

The two share the same account system, the same AI companion and the same genetic foundation. They differ in what the home screen shows, what the navigation bar offers, and which features are emphasised.

## 2.4 What makes the product distinctive

Six things are genuinely unusual, and they are the ones worth leading with in any client or investor conversation.

**1. Genetics that changes behaviour, not just a report.** The genetic profile feeds the tutor, the nutrition engine and the fitness engine. It is wired into the product, not bolted onto it.

**2. A tutor grounded in the child's own textbooks.** The AI companion does not answer schoolwork questions from general knowledge. It answers from the actual prescribed textbook for that child's board, class and subject — more than two hundred thousand passages of real textbook content, in English and in Indian languages. When it does not know, it says so and offers the chapters it does have, rather than inventing an answer.

**3. Child-safety rules built into the AI itself.** A child is never told they carry a disease risk. A child is never shown a psychometric score or label. A child is never shamed about a missed streak or a weak subject. The tutor refuses to fabricate a quiz score even if asked. These are not guidelines in a document — they are enforced rules the AI cannot talk its way around.

**4. Genetic data that is not linked to a name.** Genetic information is stored against an anonymous sample code, never against a person's identity. Connecting a sample to a person is a separate, permission-controlled action, and every single time it happens it is recorded. This is a deliberate design choice made because the platform handles children's genetic data.

**5. All AI processing stays in India.** Every AI feature — conversation, voice, report reading, food recognition — is processed within Indian data-centre regions. One high-profile voice capability was deliberately left switched off because the only way to run it would have moved children's audio outside the country.

**6. Reports read without a laboratory in the loop.** GenExcel reads the laboratory's PDF report automatically — traits, gene readings, risk bands, recommendations, even ticked boxes and coloured bars in charts — and turns it into structured, searchable, personalised content. For the report format used by the current laboratory partner, this happens in about ten seconds with verified accuracy, at no per-report processing cost.

## 2.5 The platform in numbers

| | |
| --- | --- |
| Genetic traits in the master catalogue | Approximately 1,020, organised into 26 profiles across 5 categories |
| Traits reported per individual | Approximately 113 to 117 |
| Mobile application screens | More than 200 |
| Web portal areas for staff and partners | 27 |
| Textbook content available to the tutor | More than 225,000 searchable passages |
| Nurture and environment measures defined | Approximately 416, across 6 collection categories |
| Distinct user roles | 16 |
| Teaching methods the lesson generator supports | 15 |
| Cognitive assessment games | 10 designed, 8 playable |
| Languages supported in the interface | English and Arabic, with tutor responses in Malayalam, Hindi, Tamil and Kannada as well |

## 2.6 What a customer can be shown today

Everything in this list is working and in daily use:

- Sign-up as a parent with children, or as a student directly
- A learning-style assessment that produces a four-domain learning profile
- Upload of a laboratory genetic report, automatic reading of it, human review, and assignment to a child's account under recorded consent
- The child's genetic report in the app: categories, trait detail, gene readings, bands, recommendations, search, and the original PDF
- The AI tutor by text and by voice, answering from the child's own textbooks, generating quizzes, running teach-back sessions and managing the child's task list by conversation
- Chapter summaries, key concepts, flashcards, quizzes and question-answering per textbook chapter
- Report-card photography, automatic reading of marks, subject mastery mapping, AI study plans with progress tracking, and goal-driven roadmaps
- Diet plans with genetic adjustments, meal-by-meal tracking, food photograph analysis, grocery lists and water tracking
- Gym plans, live workout logging, personal records, habits and achievements
- Step tracking from the phone, Apple Health and Android Health Connect integration, activity rings, an iPhone home-screen widget, and smartwatch and Bluetooth device connection
- The genetic counsellor workspace: caseload, full genetic profiles, report review and assignment, consultations and messaging
- The administrator suite: genetic report operations, user and school management, master data, analytics and audit trails

Section 22 sets out, feature by feature, what is fully available, what is in limited or pilot use, and what is still in development.

---

# 3. The GenExcel Journey, End to End

This section is the single most useful thing to walk a client through, because it connects every module into one story.

## 3.1 The story in one page

```
   A school signs up
        |
        v
   A health camp is held at the school
        |          saliva samples collected in numbered kits
        v
   The laboratory analyses the samples
        |          returns a multi-page genetic report per child
        v
   GenExcel reads the report automatically
        |          traits, gene readings, bands, charts, recommendations
        v
   A human reviews anything the reader was unsure about
        |
        v
   The report is assigned to the child's account
        |          consent is confirmed and recorded
        v
   +----------------+----------------+----------------+
   |                |                |                |
   v                v                v                v
The child       The parent      The teacher     The counsellor
sees a          sees what       sees a          sees the full
friendly        to act on       learning        clinical
profile                         profile         picture
   |
   v
   The AI tutor now teaches this child differently
        |
        +--> explains at the right level and in the right style
        +--> answers from this child's own textbooks
        +--> paces study plans to how this child works
        +--> never mentions genetics to the child
   |
   v
   Nutrition and fitness plans carry genetic adjustments
   |
   v
   Progress, habits and results feed back in
        |          quizzes, teach-backs, report cards, steps, meals
        v
   The picture of the child gets richer over time
```

## 3.2 The same journey, stage by stage

### Stage 1 — Onboarding

A parent downloads the application, chooses School Genomics, and registers the household. They add each child as a profile, set a simple PIN for each, and accept the required consents on the child's behalf. Children can also use their own devices by entering a one-time family access code.

Alternatively an older student registers themselves directly, enters their class, school and syllabus board, and completes the learning-style questionnaire.

Adults choosing Health and Wellness instead go through a short nine-step wizard covering their body metrics, goal, activity level, experience and health-app connection.

### Stage 2 — The learning-style assessment

Before or shortly after entering the app, the student completes a psychometric assessment. Question sets differ by age band, so a class 2 child and a class 11 student answer different questionnaires. It can be completed silently by tapping through questions, or conversationally by speaking to the AI companion, which asks one question at a time in age-appropriate language.

The result is a four-domain learning profile: preferred ways of taking in information, dominant kinds of intelligence, where support is needed, and the tone that works best for this student.

The child never sees a score or a label from this assessment. The profile changes how the tutor behaves, not how the child is described.

### Stage 3 — Sample collection

For school customers, samples are collected at a health camp. The camp is scheduled in the platform, students are listed against it, and each collection kit carries a code such as CA101. That code — and nothing about the child's identity — is what travels with the sample.

### Stage 4 — Report reading

The laboratory returns a PDF. An administrator or genetic counsellor uploads it against the kit code.

The platform then reads the report automatically. This is a substantial capability and worth describing precisely, because it is what makes the product operable at scale:

- Every trait row is read, along with its gene readings and its result
- Coloured bars, sliders and gauges are measured to recover LOW, MEDIUM and HIGH bands
- Ticked boxes and coloured badges in recommendation tables are detected
- Greyed-out text is distinguished from active text, so "this is your result" is separated from "this is the alternative"
- Personality panels whose wording is baked into artwork are matched against a reference set
- Everything read is checked four ways: nothing in the report was dropped, nothing was invented, gene readings agree with the report's own glossary, and row counts match what is actually drawn on the page

For the current laboratory format this takes about ten seconds and needs no human correction. For an unfamiliar report layout, a second, more flexible reader handles it, takes several minutes, and flags anything it was unsure about for a person to check.

### Stage 5 — Review and assignment

Reports needing attention appear in a review queue with the specific sections flagged. A reviewer opens the report, sees the extracted content beside the original pages, corrects anything wrong, and approves.

Assignment to a child is then a deliberate, gated action. The person assigning must confirm that valid consent exists; that confirmation is recorded with their name and the time. Only accounts on the PRO plan can receive a report. One person can hold one genetic report, and one report can belong to one person.

Assignment can be reversed. Unassigning immediately cuts off the child's and parent's access to the report and its PDF, and removes the genetic personalisation from their learning profile — while keeping the history of what happened.

### Stage 6 — What each person now sees

**The child** opens My Traits and finds their genetic profile organised into categories: diet and nutrition, academic and cognitive, fitness and sport, personality and talents, and health-related traits. Each trait shows a plain-language result, the genes behind it, and what to do about it. The original PDF is available in the app. Risk-related traits are deliberately withheld from the child's own view.

**The parent** sees the household picture: children's health snapshots, progress, consents, and their own genetic report if they have one.

**The teacher** sees a curated learning profile — cognitive ability, memory, attention, motivation, reading, mathematics, verbal ability, creativity and stress resilience on a simple one-to-ten scale — never raw genetic readings.

**The genetic counsellor** sees the complete picture for the students in their caseload, with proper risk framing, filters and search, and can hold consultations and message the family.

### Stage 7 — Personalised teaching begins

From this point the product is quietly different for this child. The tutor knows their learning style, their class, their board, their subjects, their weak chapters, their study habits and their genetic learning disposition. It uses all of it to decide *how* to teach — and it is explicitly forbidden from naming any of it to the child.

### Stage 8 — The loop closes

Quiz results, teach-back sessions, study sessions, report cards, completed tasks, steps, meals and workouts all feed back in. Mastery estimates update. Study plans re-pace. The tutor's picture of the child sharpens. Parents and teachers see the change.

---

# 4. Product Modes and Delivery Channels

## 4.1 The two product modes

The product mode is chosen once, at signup, and determines what the application looks like from then on.

| | School Genomics | Health and Wellness |
| --- | --- | --- |
| **Who it is for** | School-age children and their parents | Adults |
| **Centre of gravity** | Learning | The body |
| **Home screen** | The tutor: today's plan, an exam countdown, continue-studying, quick actions, trait highlights | Activity rings, step progress, today's plan, wellness summary |
| **Navigation** | Home, Diet, the tutor button, Traits or Lifestyle, Me | Home, Diet, Workouts, Profile |
| **Signature features** | AI tutor, textbook grounding, study plans, lesson learner, roadmaps, psychometric profile, games | Activity rings, wearables, gym programming, habits, body metrics |
| **Genetic report** | Central to the experience | Available, feeding nutrition and fitness |
| **Discovery journey** | A gamified level ladder from Curious Beginner to Genomic Scholar | Not shown |

Both modes share the account, the household, the genetic foundation, the AI companion, nutrition, and health tracking. A user does not lose features by choosing one; they see a different emphasis.

## 4.2 The three ways people reach GenExcel

**The mobile application** is the consumer product, on iPhone and Android. It carries the overwhelming majority of features. Parents and students each have their own complete section of the app with their own navigation, and switching between them is a deliberate, PIN-protected action.

**The web portals** are the staff and partner product, opened in a browser. There are separate workspaces for administrators, teachers and genetic counsellors, plus around twenty management consoles for schools, organisations, hospitals, kiosks, telehealth, nutrition, medicines, notifications, analytics, audit and the genetic trait catalogue itself.

**The internal data console** is a restricted last-resort surface for platform operators. Notably, genetic and identity information is deliberately excluded from it, so that even an operator with access cannot browse genetic data there.

## 4.3 Where the two audiences meet

| Handoff | How it works |
| --- | --- |
| Report reaches a child | Staff upload and assign in the web portal; the child sees it in the app |
| Consent | Parents grant in the app; counsellors and administrators see and act on it in the portal |
| Counsellor to family | Counsellors message and schedule consultations in the portal |
| Teacher to student | Teachers set focus areas and view analytics in the portal; the effect appears in the child's plan |
| Plan upgrade | Requested in the app, approved in the portal, unlocked in the app immediately without restarting |

---

# 5. User Roles and Plans

## 5.1 The role catalogue

Sixteen roles exist. Each one determines which parts of the product a person reaches.

| Role | Who they are | Where they work |
| --- | --- | --- |
| **Super administrator** | Platform owner | Every portal, plus permanent-deletion powers |
| **Administrator** | Operations staff | Every portal, including genetic report upload and assignment |
| **Genetic counsellor** | Clinical genetics professional | The counsellor workspace, scoped to their caseload |
| **Teacher** | School teacher | The teacher portal |
| **School administrator** | School-level staff | School-scoped administration |
| **Parent** | Parent or guardian | The parent section of the mobile app |
| **Student / care seeker** | The subject of the platform | The student section of the mobile app |
| **Family member** | Extended family with a view-only interest | The parent section, limited |
| **Doctor** | Consulting physician | Telehealth consultations, notes, prescriptions, referrals |
| **Nurse** | Clinical support | School camps and measurements |
| **Laboratory technician** | Laboratory staff | Lab result entry and verification |
| **Pharmacist** | Dispensing pharmacist | Prescription dispensing |
| **Care coordinator** | Case coordination | Coordination workflows |
| **Data analyst** | Analytics user | Reporting and analytics |
| **Guest** | Minimal access | Public content only |

Roles can be granted for a limited period and expire automatically. A person can hold more than one role.

## 5.2 The two plan tiers

Independently of role, every account is on one of two plans. The plan controls access to genetics.

| | BASIC | PRO |
| --- | --- | --- |
| Account, household, profiles | Yes | Yes |
| AI tutor, chat and voice | Yes | Yes |
| Textbook-grounded schoolwork help | Yes | Yes |
| Learning hub, lesson learner, study plans, roadmaps | Yes | Yes |
| Academic results, report-card scanning, mastery mapping | Yes | Yes |
| Psychometric learning profile | Yes | Yes |
| Diet plans, food scanning, water and weight tracking | Yes | Yes |
| Fitness plans, gym logging, habits, achievements | Yes | Yes |
| Step tracking, wearables, health metrics | Yes | Yes |
| Games, rewards, journey | Yes | Yes |
| **Genetic report assignment** | No | Yes |
| **My Traits section** | Replaced by a Lifestyle section | Yes |
| **Genetic personalisation of the tutor** | No | Yes |
| **Genetic adjustments in nutrition and fitness** | No | Yes |

On a BASIC account the navigation bar shows a Lifestyle tab in place of Traits, and the AI tutor operates under a strict instruction never to mention genes, DNA, genotypes or "your traits" at all — it offers an upgrade instead of a partial answer.

Upgrading is a request-and-approval flow: the user requests PRO in the app, an administrator approves it in the portal, and the unlock takes effect on the user's device immediately, announced by a notification.

## 5.3 What each role can do, at a glance

| Capability | Student | Parent | Teacher | Counsellor | Admin |
| --- | --- | --- | --- | --- | --- |
| Use the AI tutor | Yes, child-safe | Yes, professional register | — | — | — |
| See own genetic report | PRO only | PRO only, own report | — | — | — |
| See a child's genetic report | — | Deferred, see Section 24 | Curated learning profile only | Full, caseload only | Full |
| Upload a laboratory report | — | — | — | Yes, caseload and new kits | Yes, any |
| Review and correct a read report | — | — | — | Yes | Yes |
| Assign a report to a person | — | — | — | Yes, caseload PRO users | Yes |
| Grant consent for a child | — | Yes | — | — | — |
| Revoke consent | — | Yes | — | — | — |
| Learning and study features | Yes | Monitor | Set focus, analytics | — | — |
| Nutrition and diet | Yes | Own and children's | — | — | Master data |
| Fitness and gym | Yes | Yes | — | — | Master data |
| Health tracking and wearables | Yes | Yes and children's | — | — | — |
| Telehealth consultations | — | Book and attend | — | — | Manage |
| Messaging | With the tutor | With the tutor | Doubts inbox | To students | — |
| School and camp management | — | — | — | — | Yes |
| Analytics and audit | — | — | Class-level | Caseload | Platform-wide |
| Re-identify a sample | — | — | — | — | Permission-holders only, always recorded |

---

# 6. Accounts, Onboarding and Household Setup

## 6.1 The first screen

A new user opens the application to an animated welcome screen with eight feature tiles — Wellness, Nutrition, Sleep, Focus, Sport, Mood, Immunity and Growth — and a single button through to sign-in.

Sign-in and account creation live on one screen with two tabs, so a returning parent and a new one land in the same place.

## 6.2 Parent-led household signup

This is the primary path for School Genomics.

```
Choose the product                  School Genomics or Health and Wellness
      |
      v
Register as the parent              name, email, password, contact details
      |
      v
Land on an empty profile picker     "Who's learning?"
      |
      v
Add each child                      name, date of birth, class, and a PIN
      |                             consents accepted on the child's behalf
      v
Tap a child, enter the PIN          the app becomes that child's app
```

Adding a child creates a real, separate account for that child — not a sub-profile. The child gets their own learning history, their own tutor conversations, their own plans and their own genetic report. The guardianship relationship is recorded, along with the parent's right to grant consent on the child's behalf.

Up to five children can be added to one household by default.

An important detail with a real functional consequence: the parent accepts the required legal documents on the child's behalf during this step. Without it, a child entering the app would meet a consent wall that a minor cannot lawfully answer, and the account would be unusable.

## 6.3 The profile picker and the parent lock

The household picker is modelled on the familiar "who's watching?" pattern.

- Tapping a **child** tile opens a full-screen PIN keypad. A wrong PIN shakes and clears.
- Tapping the **parent** tile asks for the parent's password.
- The parent section **re-locks every time** the picker is visited, so leaving the phone unlocked on a table does not leave the parent's area open.
- Only the picker and the add-child screen sit outside the lock.

While a child profile is active, the app is genuinely the child's app: their data, their tutor history, their plans. Switching back to the parent restores the parent session.

## 6.4 Giving a child their own device

A parent can generate a one-time access code from their phone. The child installs the application on their own device, chooses "join family", and enters the code. The child's account is then on their own device, still inside the household, with the parent retaining consent control.

## 6.5 Student self-registration

Older students can register directly without a parent account.

```
Create the account            name, email, password
      |
      v
Verify the email              a one-time code, when email verification is required
      |
      v
Academic details              class or grade, school name, syllabus board
      |
      v
Personal details              date of birth and gender required; height and weight optional
      |
      v
Consent                       the student's own consent before the questionnaire
      |
      v
Learning-style questionnaire  age-appropriate question set
      |
      v
Learning profile shown        the four-domain result, then into the app
```

The academic details matter more than they appear to. The class and syllabus board are what allow the tutor to find the right textbooks. A student whose school details are incomplete will be told that textbook help is unavailable rather than being shown content from the wrong class.

## 6.6 The Health and Wellness wizard

Adults choosing the wellness product complete a nine-step setup: welcome, about you (date of birth and sex), body metrics, primary goal, target health area, current activity level, training experience, health-app connection, and a summary.

The health-app connection step is where an iPhone user grants Apple Health access, or an Android user connects Health Connect. It is optional and can be done later.

## 6.7 Consent at signup

Consent is not a single checkbox. It is layered, and each layer is recorded separately.

| Layer | What it covers | Who gives it |
| --- | --- | --- |
| Privacy notices | Presented at registration, describing what is collected and why | Acknowledged |
| Privacy Policy, Terms of Service, Disclaimer | The platform's legal documents, each individually acceptable | The account holder, or the guardian for a child |
| Psychometric assessment consent | The learning-style assessment specifically | Guardian, or the student themselves |
| Genetic testing consent | Genetic analysis and its use | Guardian for a minor |
| Per-category consents | Health data, academic data, communications and others, granted and revoked individually | Guardian, or the adult account holder |

If the platform's legal documents are updated, users meet a consent screen at next sign-in showing what changed, with each document expandable and individually acceptable, plus an accept-all option.

## 6.8 Account security and settings

| Feature | Description |
| --- | --- |
| Email and password sign-in | The standard path |
| Multi-factor authentication | Available and configurable in settings |
| Passwordless email code sign-in | Built; not yet surfaced in the app |
| Google and Apple sign-in | Built; not yet surfaced in the app |
| Phone number sign-in | Designed; not yet available |
| Child PIN management | Set, change and reset a child's PIN |
| Session handling | Sign-in persists; sensitive areas re-lock |
| Password reset | Requestable in the app; delivery not yet enabled, so resets are currently handled by support |
| Account deletion | Requestable in-app, with a thirty-day grace period and cancellation |

## 6.9 Editing a profile

The profile editor is one of the most detailed screens in the application, covering personal details, contact information, address, academic details, body metrics, health preferences, dietary preferences and allergies, language, theme and notification settings. Parents have the same editor for each child.

---

# 7. Genetic Reports and Insights

## 7.1 What a GenExcel genetic report contains

A single individual's report covers approximately 113 to 117 traits, drawn from a master catalogue of around 1,020 traits organised into 26 profiles across five categories.

| Category | What it covers | Example traits |
| --- | --- | --- |
| **Diet and nutrition** | Vitamin and mineral tendencies, how the body handles macronutrients, eating behaviour, taste sensitivity | Vitamin A, B2, B12 and D tendencies, carbohydrate and fat sensitivity, sweet and bitter taste perception, snacking tendency |
| **Academic and cognitive** | Learning and thinking dispositions | Cognitive ability, memory performance, attention and focus, motivation and persistence, reading literacy, mathematical ability, verbal and language ability, creativity, stress resilience |
| **Fitness and sport** | Physical disposition and training response | Power versus endurance orientation, muscle and recovery traits, injury-risk tendencies, sport suitability |
| **Personality and talents** | Behavioural and aptitude tendencies | Fifteen personality dimensions, intelligence aspects, emotional-intelligence aspects, seven talent areas |
| **Health-related** | Elevated tendencies to specific conditions, plus allergies, sleep and neurology | Health risk tendencies, addiction susceptibility, allergy tendencies, sleep traits, neurological traits |

Every trait carries:

- The **result** — a plain-language level or risk band
- The **genes** behind it, with the specific readings found
- **What to do about it** — a recommendation, or the ticked advice from the report's own tables
- Where relevant, **strengths and weaknesses** and a marker position on a scale

## 7.2 How results are presented, and the one rule that matters most

There is a distinction in the product that is easy to get wrong and important to get right: **a "high" result is not always a bad thing.**

For three groups of traits only — health risks, addiction susceptibility and injury risk — a high band genuinely means high risk. These are shown in red, amber and green, labelled High Risk, Medium Risk, Low Risk or No Risk, and counted in the risk summary.

Everywhere else, a band is simply a level. A high creativity result, a high verbal ability, a high personality dimension — these are shown in neutral styling and labelled as levels, never as risks, and they never appear in a risk count. A high IQ aspect being coloured red would be actively misleading.

The platform enforces this distinction consistently across the child's view, the parent's view, the counsellor's view and the administrator's view.

## 7.3 What a child sees, and what is deliberately withheld

The child's own view of their report is curated. Specifically:

- **Risk-related traits are withheld.** A child never sees a disease-risk band, an addiction-susceptibility result or a mental-health-related trait in their own report view.
- **The AI tutor will not discuss them either**, even if asked directly. It redirects to a parent or doctor.
- **No psychometric score or label** from the learning assessment is shown to the child.
- **Genetics are never named as the reason** for anything the tutor does.

Everything else — diet, nutrition, learning strengths, talents, fitness, sport suitability, personality — is shown, framed positively and with practical advice.

Parents and genetic counsellors see the complete picture, including the risk axes, with correct clinical framing.

## 7.4 The report in the mobile application

**The hub** opens with a summary hero and a two-column grid of profiles, filterable by category chip. Counts show how many traits fall into each bucket.

**A category view** lists the profiles inside a category.

**A profile view** lists the traits inside a profile, each row showing the trait name, its result and a quick indication of whether it is a strength.

**A trait detail view** is the deep view: the result band, a marker position on a visual scale where the report provides one, the genes involved with their specific readings, applicable advice flags, strengths and weaknesses, health impact, and the recommendation.

**Search** covers every trait by name.

**The original PDF** is viewable in the app, so a family can always see exactly what the laboratory issued.

**Report detail and the report list** give a per-report view with a statistics card, for accounts holding multiple reports over time.

Where the report genuinely contains no advice for a trait — which is the case for roughly fifty of the traits, mostly the personality, intelligence and talent chart pages — the app says "Not provided in report" rather than inventing something. This is deliberate: the product does not manufacture genetic advice.

## 7.5 The report for staff

**Administrators** work in a genetic reports workspace covering upload, a review list with status tabs and filters, per-report review detail, retry, assignment, unassignment, deletion and a full rendered display of everything extracted.

**Genetic counsellors** get the same workspace, restricted to their caseload, plus a student profile page that presents the full genetic picture with filters and pagination.

**Teachers** never see genetic readings. They see a curated learning profile derived from the report: cognitive ability, memory, attention and focus, motivation and persistence, reading literacy, mathematical ability, verbal and language ability, creativity and stress resilience, each on a simple one-to-ten scale. Two areas are deliberately excluded from this derived profile because no reliable mapping exists for them.

## 7.6 How reports are read

GenExcel reads laboratory PDFs automatically. Two readers exist, and which one runs depends on the report format.

### The exact reader

For report formats the platform has been taught, everything is read directly from the document itself with no AI interpretation and no per-report cost. It reads:

- Every line of text, including trait names, gene names and readings
- Coloured bars, sliders and gauges, measured visually to recover the correct LOW, MEDIUM or HIGH band
- Ticked boxes and coloured badges in recommendation tables
- The difference between active text and greyed-out text, so "this is your result" is separated from "this is not"
- Personality panels whose wording exists only inside artwork, matched against a verified reference set

It then checks itself four ways: every line of the document reached the output, every value in the output exists in the document, every gene reading agrees with the report's own glossary, and row counts match what is actually drawn on each page.

For the current laboratory format the result is exact — every line covered, nothing invented, every gene reading correct — in about ten seconds.

### The flexible reader

For an unfamiliar report layout, a second reader uses AI vision to read the pages section by section. It is slower, at roughly eight to nine minutes, and it costs money per report, but it works on layouts nobody has taught the platform yet.

It checks its own work: it counts what it found against what it expected, cross-checks that every value it reports actually appears on the page, and looks for anything it might have invented. Where it is uncertain, it retries once, then flags that section for a human reviewer rather than guessing.

Its measured accuracy on a verified reference report is approximately 93 percent for both row recall and value accuracy, with 96 percent agreement on gene readings. Its known weak point is band reading on chart pages, which is precisely why the exact reader exists and is preferred wherever it applies.

### Review and correction

Anything flagged appears in a review queue. A reviewer sees the flagged section, can view the original page image, correct the content, and approve. A correction that is malformed is rejected in full rather than partially applied, so a report is never left in a half-corrected state.

A report can also be reset and re-read from scratch. A report is never left stuck mid-processing: if a read fails, it is marked failed with the reason, visible in the queue.

## 7.7 Privacy design around genetic data

This is one of the platform's strongest differentiators and worth explaining to any client or investor who asks how children's genetic data is protected.

**Genetic data is not stored against a person's name.** Every genetic record belongs to an anonymous sample code such as CA101. There is no name, no email, no date of birth and no identifier of any kind attached to it.

**Connecting a sample to a person is a separate, controlled action.** Only staff holding a specific permission can do it. Every single time it happens, a record is written naming who did it, when, which sample, and why.

**Even the internal operator console cannot browse it.** Genetic and identity records are deliberately excluded, and the one action available to an operator routes through the same permission and recording path as everything else.

**File storage carries no identity either.** A stored report is filed under its sample code and a timestamp, so even the storage layer reveals nothing about whose report it is.

**Genetic content is separately encrypted**, over and above the protection of the storage system itself, including every gene reading.

**Access to a report PDF is checked at the moment of viewing**, not just at the moment a link is created. If a report is unassigned from a person, their access stops immediately, even mid-session.

The practical consequence, stated plainly: **if the whole store of genetic information were somehow exposed, it would not identify anybody.**

## 7.8 Assignment, consent and reversal

Assigning a report to a person is the most consequential operation in the platform, and it is gated accordingly.

| Precondition | Reason |
| --- | --- |
| The report must be fully read and approved | An incomplete report must not reach a family |
| The recipient must be on the PRO plan | Genetics is a PRO capability |
| The sample must not already be assigned to somebody else | One report belongs to one person |
| The recipient must not already hold a different report | One person holds one report |
| Consent must be explicitly confirmed | The assigning staff member attests that valid consent exists, and that attestation is recorded with their name |

Assignment does not copy genetic data into the person's account. It creates a controlled link. This is what makes reversal clean: unassigning ends access to the report and its PDF immediately, removes the genetic personalisation from the learning profile, and keeps a full record of the fact that it happened and why.

Deleting a report is blocked while it is assigned, which prevents a family's report from vanishing beneath them.

## 7.9 Genetic insight features beyond the report

| Feature | Status |
| --- | --- |
| Trait detail with genes, bands and recommendations | Available |
| Nutrition blueprint showing genetic adjustments to calorie and macro targets | Available |
| Athletic blueprint showing physical disposition | Available |
| Genetic learning profile feeding the tutor and lesson generator | Available |
| Counselling sessions with a genetic counsellor | Available |
| Polygenic risk scores | Records and display surfaces exist; scores are not yet generated |
| Pharmacogenomics, that is medication-response insight | Records and display surfaces exist; content is not yet generated |
| Nature-versus-nurture correlation | Both sides are collected; the correlation engine is not yet built. See Section 24 |

---

# 8. Helix, the AI Learning Companion

## 8.1 What Helix is

Helix is the platform's AI companion. To a child it is a tutor. To a parent it is a professional assistant. It is present throughout the application, not confined to a chat page.

Helix is reached four ways:

| Way in | What it is for |
| --- | --- |
| **The raised centre button** in the navigation bar | The full assistant, with history, on any screen |
| **Voice** | Speak a question, hear the answer spoken back |
| **The screen-aware button** | Ask about what is currently on screen, without leaving it |
| **Feature entry points** | A homework chat, a chapter Ask tab, a mastery-map "ask Helix" action |

## 8.2 What Helix can do

**Answer schoolwork questions from the child's own textbooks.** This is the headline capability. Helix does not answer from general knowledge; it searches the actual prescribed textbook for that child's board, class and subject and teaches from it.

**Teach rather than tell.** For a homework question, Helix gives the method and the first step. A full worked solution requires a second, explicit request. It never shames a child for asking.

**Run a practice quiz.** Three to five questions, one per message, with an honest running score. It refuses to fabricate a score, even if pressed.

**Run a teach-back session.** The child explains a concept back in their own words; Helix assesses understanding and records it. The understanding percentage is never read out to the child.

**Manage the child's day by conversation.** Helix can show today's plan, add a task, mark one done, reschedule, edit or delete a task, list what is coming up, set a weekly or monthly goal, and update progress on a goal — all through ordinary conversation.

**Explain their own results.** For a PRO user, Helix can discuss their genetic traits and lifestyle results, within the child-safety rules.

**Reach the rest of the product.** Helix can fetch or create a workout plan, swap an exercise, log a workout session, log a meal, show today's diet plan, and report recent health metrics and study habits.

Around thirty distinct actions are available to Helix in total.

## 8.3 How Helix personalises

Helix builds a picture of the person it is talking to before it answers. That picture includes:

| Input | How it changes the answer |
| --- | --- |
| **Age and class** | Language level. Class 3 and below is pitched at a six-to-eight-year-old; class 7 and below uses simple, gentle terms; above that uses real terminology. An unknown class defaults to the safer, simpler level |
| **Learning profile** | Preferred ways of learning, dominant intelligences, where support is needed, and the tone that works. The instruction is explicit: adapt how you teach to this, do not read it back to them |
| **Genetic learning disposition** | Shapes *how* material is presented, never named to the child |
| **Board, class and subjects** | Which textbooks are searched |
| **Quiz history and weak chapters** | Helix checks performance before teaching, so it addresses the actual gap |
| **Study habits** | Encouragement, never criticism. Miss rates are never recited to a child |
| **Language of the question** | A question asked in Malayalam gets a Malayalam answer |
| **The current screen** | Screen-aware chat knows what the user is looking at |
| **Health and activity data** | For wellness users, recovery, sleep, heart rate, activity and body metrics inform intensity suggestions, with an explicit instruction never to diagnose |
| **Today's proactive message** | So the card on the home screen and the conversation never contradict each other |

Helix greets by name on the first message of a conversation, not on every turn.

## 8.4 The safety rules

These are enforced rules, not tone guidelines. They apply to every Helix surface.

**For children:**

- Never discuss disease risk, mental-health diagnoses or sensitive predispositions
- Never state or imply that genetics informed a teaching decision
- Never read a psychometric score, label or result
- Never shame about missed study, streaks or weak subjects
- Never fabricate a quiz score
- Never read out a teach-back understanding percentage
- Answer from the textbook first
- Plain text only, with no decorative symbols

**For everyone:**

- Requests to override the assistant's instructions are blocked
- Harmful content requests are blocked, covering self-harm, violence, abuse and medical misinformation such as advice to stop taking medication
- Off-topic requests are declined, covering violence, explicit content, illegal activity, finance, legal, political and religious topics
- The assistant's own instructions are never revealed
- For parents, Helix states that it is an AI assistant and not a replacement for a medical professional

**Language softening for children** replaces clinical phrasing with gentler wording, and redirects clinical suggestions to a trusted adult: "consult a doctor" becomes "your parents or doctor can tell you more".

There is one subtlety worth mentioning because it shows the care taken: a biology lesson legitimately contains words like "mutation" and "died". The safety check therefore looks at whether a severe medical term appears in the same sentence as "you" or "your". Educational mentions pass; personal ones are redirected.

## 8.5 Textbook grounding

The tutor's textbook capability covers more than 225,000 passages of real textbook content, ingested from actual prescribed books including scanned editions read page by page.

**What it does well:**

- Asked for "chapter 2", it returns the whole chapter in order
- Asked by chapter title, including romanised titles for Indian-language books, it finds the chapter
- Asked a topic question, it finds the relevant passages through a combination of meaning-based and keyword search, then re-ranks the candidates for genuine relevance
- Asked in Malayalam, Hindi, Tamil, Kannada or Arabic, it searches and answers in that language
- Asked something the book does not cover, it says so and lists the chapters it does have, so a refusal becomes a redirect rather than a dead end
- Asked a follow-up like "explain the third one" or just "snakes!", it continues the same lesson instead of starting a fresh search

**What it will not do:**

- Serve content from a different class. A class 5 student cannot retrieve class 10 material. This restriction is enforced by the platform, not by asking the AI to behave
- Show page or chapter citations to the child, which would break the tutoring tone
- Answer beyond the book without saying so. It is allowed to extend, but must separate the two clearly: "Your book says... and beyond your book..."

## 8.6 Voice

**Push-to-talk voice** is the shipping voice experience and is fully available. The user holds to speak; the transcript appears almost immediately; Helix begins speaking its answer as soon as the first sentence is ready rather than waiting for the whole reply. Silence and background noise are handled properly: if nothing was said, the user gets a friendly "no speech" message rather than an error.

Voice output uses a natural Indian-English voice, and switches to a Malayalam voice automatically when the reply is in Malayalam.

**Continuous conversational voice**, where the user and Helix can interrupt each other naturally, is fully built and deliberately switched off. The reason is a compliance one worth stating: the only way to run the specific high-quality conversational voice model would route children's audio outside India, which the platform will not do. A compliant version of the same experience, assembled from India-hosted components, exists and runs in the internal test environment. A formal request has been made to the vendor to make the model available in the Indian region.

When it is enabled, it will carry a thirty-minute-per-day-per-user limit.

## 8.7 The proactive companion

Rather than waiting to be asked, Helix can notice things and start the conversation.

Each morning the platform reviews each student's recent activity and looks for six situations worth a gentle nudge: a poor quiz result, a study streak about to break, missed tasks, a weak chapter left untouched, a concept ready for a teach-back, and an unfinished learning assessment.

At most **one message per student per day** is produced. Each type of nudge has a cooldown of two to seven days, and the same nudge is not repeated within a fortnight.

Before anything is written, the wording is checked against a banned-terms list covering shame language — lazy, behind, failed, stupid, falling behind, ashamed — and body and weight language — fat, skinny, overweight, weight loss, burn calories. Anything failing the check is discarded rather than reworded.

The message appears on the home screen as a "Helix noticed" card. Tapping it opens a conversation already in motion, phrased in the child's own voice, so it feels like continuing a thought rather than being lectured.

This feature is built and currently switched off pending a product decision on rollout.

## 8.8 Other AI features

| Feature | What it does |
| --- | --- |
| **NutriScan** | Photograph any food and get macronutrients, micronutrients, a glow/grow/go/fun classification, a health score, allergen warnings checked against the user's declared allergies, and an ingredient-by-ingredient breakdown for composite dishes. Five scans per day |
| **Meal scan** | Photograph what was actually eaten and replace the planned meal's nutrition with reality |
| **Report-card scanning** | Photograph a school report card and have subjects and marks read automatically, then reviewed and corrected before saving. If reading fails, the user is offered manual entry rather than an error |
| **Handwritten note review** | Photograph handwritten notes and receive a summary, feedback and suggestions |
| **Lesson generation** | Generate a complete lesson for a chosen chapter in a chosen teaching method, informed by the class's learning profile |
| **Chapter learning content** | Chapter summaries, key concepts, explanations, flashcards and quizzes, generated per chapter |
| **Study plan generation** | A realistic weekly plan across weak and focus chapters, explicitly paced so a normal child is not overloaded |
| **Pacing plans** | A full-year syllabus plan, then a personalised variant that may reorder and re-emphasise but never removes a topic or skips a subject |
| **Conversational assessment** | The learning-style questionnaire delivered as a spoken conversation |

## 8.9 Fair-use and cost controls

The product carries sensible limits so that no single user can consume the shared AI capacity.

| Limit | Value |
| --- | --- |
| Food photograph analyses | 5 per day |
| Chapter questions in the lesson learner | 30 per day |
| Conversational voice minutes, when enabled | 30 per day |
| Proactive companion messages | 1 per student per day |
| Push notifications | 10 per day |

Generated chapter content is cached and shared across all students studying the same chapter, so the hundredth student to open a chapter summary gets it instantly and at no additional cost.

---

# 9. School Genomics

## 9.1 What the module is

School Genomics is the platform's primary product and its central proposition: **a child's genetic profile and learning-style assessment together should change how that child is taught, and the change should be visible and actionable to the child, the parent, the teacher and the counsellor — without ever telling a child they carry a risk.**

It spans the whole platform rather than being a single feature area: school setup, enrolment, health camps, sample handling, report reading, learning profiles, the tutor, academics, lesson design and counselling.

## 9.2 Onboarding a school

Schools are created as organisations. The platform supports a full organisational hierarchy — a trust with multiple schools, districts, clinics and hospitals — with parent and child relationships, so a group operator can be modelled properly.

Creating a school-type organisation automatically creates the school record, and deactivating the organisation deactivates the school. Organisation membership carries a role, a title, a department and joining and leaving dates, so staff changes are tracked rather than overwritten.

**Management features:**

| Feature | Description |
| --- | --- |
| Organisation hierarchy | Create, view and traverse parents, children and full descendant trees |
| Organisation members | Add staff with roles of administrator, manager, staff or member |
| School records | Codes, contact details, active status |
| Enrolment | Enrol a student with grade and section; bulk enrolment, withdrawal and transfer are supported |
| Health camps | Schedule, start, complete, cancel or postpone; per-camp student lists; an upcoming view and a calendar view |

## 9.3 Enrolment and why it matters

Enrolment records a student against a school with a grade, a section and a status.

Enrolment is not administrative bookkeeping — it is what makes the tutor work. The syllabus board and grade recorded at enrolment determine which textbooks the tutor is allowed to search. A student with no enrolment is told textbook help is unavailable, which is the correct outcome; the alternative would be showing a class 5 child class 10 material.

Two paths create an enrolment: administrative provisioning by school or platform staff, and automatic provisioning during student self-registration from the class, school and board the student entered.

## 9.4 Health camps

A health camp is the sample-collection event at a school. The platform schedules it, tracks its state through to completion, lists the students attending, and provides a calendar view across camps.

Each collection kit carries a printed code. That code is the only thing that travels with the sample to the laboratory — no names, no class lists, no identifiers. It is also the code an administrator later uses to upload the returned report.

## 9.5 The chain from sample to teaching

```
Health camp  ->  Sample kit (CA101)  ->  Laboratory  ->  Report PDF
                                                            |
                                          upload, automatic reading, review
                                                            |
                                            assign to the student's account
                                                            |
        +---------------------------+---------------------------+
        v                           v                           v
Learning profile              The child's own            The counsellor's
for teachers                  My Traits section          full clinical view
(1-to-10 indicators,          (no risk axes)             (everything)
never raw readings)
        |                           |
        v                           v
Lesson generation            The AI tutor adapts
and teacher analytics        how it teaches
                             (never says why)
```

## 9.6 The curriculum layer

The platform holds the curriculum itself: subjects and chapters, keyed to a syllabus board and grade, so the same subject name in two different boards is correctly treated as two different subjects with different chapter lists.

On top of that sit the teaching-design catalogues: pedagogical categories and methods, which drive lesson generation.

A curated list controls which genetic traits are ever considered education-relevant. This is the editorial control point that decides which of roughly a thousand traits a teacher should be shown — and it is why a teacher sees nine clear learning indicators rather than a wall of genetic data.

## 9.7 The learning-style assessment

The assessment produces what the platform calls the learning profile, across four domains: preferred ways of taking in information, dominant kinds of intelligence, areas needing support, and the tone that works best for this student.

**Two ways to complete it:**

**By tapping**, using an age-appropriate question set. Bands are foundational for classes 1 and 2, preparatory for 3 to 5, middle for 6 to 8 and secondary for 9 to 12. The result is calculated immediately.

**By speaking**, as a conversation with Helix, paced at ten questions per sitting so a young child is not overwhelmed. The conversational version follows four strict rules: answer the literal question and never invert a negatively worded item; ask one question at a time; never read a question in clinical language, and gently re-ask rather than guess at a vague answer; and never read scores, labels or results back to the child.

The conversational mode is built and currently switched off pending rollout; the tap-through mode is fully available and in daily use.

**Consent note.** The learning assessment is the one thing a student can always consent to for themselves, deliberately, so that a self-registering student is not stopped by a consent requirement only a guardian could satisfy. Every other kind of consent for a minor requires a guardian.

Once a learning profile exists, it always personalises the product, regardless of which way it was collected.

## 9.8 What the school customer gets

| Deliverable | Where it appears |
| --- | --- |
| Per-student learning profiles | Teacher portal |
| Per-student and class performance analytics with export | Teacher portal |
| Genetic report operations and review | Administrator and counsellor portals |
| Cohort academic and wellness insight | Analytics console |
| Health camp management | Schools console |
| Lesson plans matched to how a class learns | Teacher portal and lesson generator |
| A tutor available to every student at home | Mobile application |

---

# 10. Learning and Academic Features

## 10.1 The learning hub

The learning hub is the student's daily entry point into study, designed to feel like a game rather than a timetable.

It presents one large "play" action on today's quest, colour-coded subject tiles with animated progress rings, the week rendered as a path of stars showing what has been completed, and a row of small tool tiles for the other learning features.

## 10.2 The lesson learner

The lesson learner is the per-chapter study surface. A student picks a subject from a horizontal rail, then a chapter, and gets six tabs:

| Tab | What it gives |
| --- | --- |
| **Summary** | A generated chapter summary at the right reading level |
| **Ask** | Question-and-answer strictly grounded in that chapter. If the answer is not in the chapter, it says so and points to the closest topic it does cover. Thirty questions per day |
| **Flashcards** | Generated flashcards for revision |
| **Quiz** | A generated quiz with a chosen question count and difficulty of easy, medium or hard |
| **Book** | The chapter PDF itself |
| **Videos** | Where the chapter has associated video content |

The header shows the chapter and subject with a "mark complete" action.

Generated content is cached per chapter and shared across all students, so it appears instantly for everyone after the first request.

## 10.3 Academic results

The academics dashboard is available on every plan, including BASIC, and covers the school-performance side of the product.

| Feature | Description |
| --- | --- |
| **Report-card scanning** | Photograph a report card; subjects and marks are read automatically and presented in an editable review form before saving. Manual entry is always available |
| **Exam results** | Recorded exams with per-subject marks |
| **Subject bars** | Performance by subject at a glance |
| **Mastery map** | Per-chapter mastery across subjects, estimated from quizzes, teach-backs, study sessions and exam results, with the source of each estimate recorded |
| **Activity report** | Time studied over a chosen period, a day strip, hero minutes against a goal, a learning-rhythm chart, snapshot tiles, and an insight card |
| **Study rhythm** | When this student actually studies, shown as a pattern rather than a total |

## 10.4 Study plans

A study plan is generated across the student's weak and focus chapters, explicitly paced so that a normal child is not overloaded.

The plan screen shows week and subject tabs, a prominent "up next" card, tick-circle task rows, a live progress bar, a strip of coming weeks, and a celebration state when the student is caught up.

Completion, streaks and milestones are tracked and synchronised, so progress survives a plan being regenerated — a task already completed stays completed.

A student can regenerate the plan at any time.

## 10.5 Roadmaps

A roadmap is a longer, goal-driven path — several weeks or months toward a stated objective.

The roadmap detail screen renders the plan as an adventure path: day-by-day nodes with animated progress, a clear "you're here" marker, completion toggles, and the ability to open the relevant chapter directly from a node.

Parents have their own roadmap view with monthly structure, weekly milestones, subject-wise progress and automatic detection of the current week.

## 10.6 The day planner

The day planner is the student's own organiser, with four tabs: Schedule, Learn, Assessment and Notes. It offers a week strip, an add-task sheet, task rows and a progress ring.

Its distinguishing feature is that the AI companion can operate it conversationally. A student can say "move my maths revision to Thursday" or "I finished the science reading" and the plan updates.

Weekly and monthly plans, goals with progress, and recurring tasks are all supported.

## 10.7 Pacing plans

Behind study plans and roadmaps sits a syllabus-level pacing plan, generated in two tiers.

The **generic tier** produces a full-year plan per syllabus, grade and academic year, covering every chapter of every subject in textbook order, with sources cited for every topic. Complete coverage is a hard requirement, not a target.

The **personalised tier** then adapts that plan for an individual student using their genetic profile, their learning assessment and the academic calendar. Its constraints are deliberately conservative: it may reorder within a week and mark topics as high-emphasis, review or normal, and it may add a short note explaining why — but it may never remove a topic, skip a subject or move a topic to a different week. Where a signal is missing, it makes no guess.

## 10.8 The lesson planner for teachers

The lesson planner generates a complete, ready-to-teach lesson.

The teacher chooses a grade, subject, chapter, pedagogical category and teaching method through cascading selections. The generated lesson is then rendered in the format appropriate to the chosen method — fifteen are supported:

5E instructional model, project-based learning, jigsaw, Socratic questioning, claim-evidence-reasoning, structured debate, gallery walk, think-pair-share, choice board, backward design, unit plan, flashcard set, reading comprehension, short answer, and lesson seed.

The generation reads the class's genetic learning profile to inform how the lesson is structured.

## 10.9 The discovery journey

The journey is the School Genomics gamification layer: a level ladder from Curious Beginner through to Genomic Scholar, with habits, discoveries and achievements marking progress.

It is hidden in Health and Wellness mode, where the achievements and habits features serve the same purpose in a body-focused framing.

## 10.10 Rewards and motivation

| Feature | Description |
| --- | --- |
| **Experience points** | Earned for study activity, shown as a pill in the home header |
| **Badges** | Grids of locked and unlocked achievements, both learning-specific and general |
| **Streaks** | Consecutive-day study streaks, encouraged and never used to shame |
| **Milestones** | Recognised within study plans |
| **Brain coins** | Earned in the cognitive games |
| **Leaderboards** | Available in the games area |

## 10.11 The content library

The library provides a reading experience with a browsable topic structure, a featured selection, personalised suggestions, continue-reading, search with suggestions, bookmarks, reading-progress tracking and a "read to me" spoken-playback control.

**Status note.** The reading experience is real and complete. The content in it is currently placeholder material rather than a live content catalogue, because the content pipeline behind it has not yet been built. It should not be used in a customer demonstration as though it were a live library.

## 10.12 Teacher-facing academic features

| Feature | Description |
| --- | --- |
| Dashboard | Key indicators, a needs-attention widget, recent activity and waiting doubts |
| Student roster | Searchable list with per-student detail and CSV export |
| Performance analytics | Class and student analytics with export |
| Activity reports | Per-student study activity, with detail views |
| Roadmap planner | Plan a class's path through the syllabus |
| Schedule | The teacher's own timetable |
| Doubts inbox | Student questions with threaded replies. Partly placeholder-backed today |
| Lesson generation | The fifteen-method lesson planner |
| Student learning profiles | The curated nine-indicator view derived from genetics |
| Settings | Theme, font size and layout preferences that persist |

---

# 11. Health and Wellness

## 11.1 What the module covers

Health and Wellness is the body-focused half of the platform: activity, steps, sleep, wearables, clinical measurements, body metrics and the dashboards that tie them together. It is the primary experience for adult users and a supporting experience for students and parents.

## 11.2 Activity and step tracking

**Step tracking works out of the box with no extra hardware.** The phone's own motion sensor counts steps, and the platform derives distance and calories from the user's height and weight.

| Feature | Description |
| --- | --- |
| Daily steps | Counted continuously while the app is in use, with a default goal of 10,000 |
| Distance and calories | Derived from steps using the user's own body metrics |
| Active minutes | Tracked as an activity measure |
| Seven-day history | Shown as a chart |
| Step goal | Adjustable |
| Source labelling | The app tells the user whether today's count came from their phone, an Apple Watch or a Galaxy Watch |

Two behaviours are worth mentioning because they are the difference between a step counter people trust and one they do not:

**Days roll over correctly.** Counters reset at midnight in the user's own local time, so yesterday's steps never leak into today.

**A watch always wins.** If a smartwatch is connected and providing steps, the phone stops contributing to the displayed total. A user wearing a watch and carrying a phone sees their real step count, not an inflated one.

Step data is saved to the user's account periodically and whenever the app moves to the background, so closing the app does not lose the day.

## 11.3 Apple Health

On iPhone, GenExcel connects to Apple Health and reads a broad set of measures:

- Steps, distance, active energy and exercise minutes
- Stand hours and mindful sessions
- Sleep, broken down into core, deep, REM and awake stages
- Heart rate, resting heart rate and heart-rate variability
- Cardiovascular fitness estimate
- Blood oxygen and respiratory rate
- Weight and body metrics
- Blood pressure, blood glucose and body temperature
- Walking steadiness
- Cycle tracking days
- Workouts

The platform makes a deliberate data-quality distinction: activity and sleep measures are taken **from the watch only**, because counting steps from both the phone and the watch would double them, while individual clinical readings such as a blood-pressure measurement are accepted from any app that recorded them.

## 11.4 Android Health Connect and Samsung devices

On Android, GenExcel connects through Health Connect, the platform-level health hub that Samsung Health, Google Fit and other apps write into. Through it the platform reads steps, distance, active and total calories, heart rate, resting heart rate, sleep sessions and exercise sessions.

Because the integration is through Health Connect rather than a single vendor, a **Samsung Galaxy Watch** works, and so does any other device whose companion app writes to Health Connect. The platform identifies the device family so it can label the source correctly.

A user can jump straight to the Health Connect settings screen from within GenExcel to adjust permissions.

## 11.5 Writing back to the health platform

Optionally, and only if the user turns it on, GenExcel writes back into Apple Health or Health Connect: workouts, weight, water intake and nutrition. This is off by default.

## 11.6 The wearables experience

The wearables screen is a guided, five-state experience: not supported on this device, not yet connected, connected, currently syncing, and error — each with clear next steps rather than a silent failure. Connecting asks for consent once per session, explaining exactly what will be read.

A trends screen shows seven-day history per measure.

Reconnection is automatic on app launch where the user has already granted access.

**A privacy decision worth noting:** health samples read from Apple Health or Health Connect are never stored on the phone. They are re-read from the platform each time the app opens, so uninstalling GenExcel leaves nothing behind.

## 11.7 The iPhone widget and Live Activity

GenExcel provides an iPhone home-screen widget showing the Move, Exercise and Stand rings, step count and recovery score, kept up to date in the background. A Live Activity surfaces ongoing activity on the lock screen.

## 11.8 Bluetooth health devices

The platform connects directly to Bluetooth health devices — heart-rate straps and similar — through a device manager screen that scans, connects and shows live readings. During a gym session the live heart rate appears as a chip on screen.

The same connection layer powers optional automatic workout detection: if the user has it enabled and a workout is detected, a prompt appears offering to log it.

## 11.9 Apple Watch motion recording

A developer-facing motion laboratory screen records raw Apple Watch motion over a twelve-hour window. This exists for research and product development rather than for end users, and is not part of the customer-facing product today.

## 11.10 Clinical measurements

| Area | What is recorded |
| --- | --- |
| **Growth** | Height, weight and BMI with percentiles, plus growth charts over time |
| **Vital signs** | Heart rate, blood pressure with both values required, temperature and blood oxygen, each with clinical classification, a latest view and an abnormal-readings history |
| **Laboratory results** | Results with a verification workflow restricted to clinic staff, a pending-verification queue, and critical-value alerting |
| **Kiosk sessions** | What a Health-ATM kiosk measured in a single visit |

The health metrics dashboard in the app presents heart rate, temperature, blood pressure, blood oxygen, weight, height and BMI as cards, alongside the step widget and growth and vitals sections.

## 11.11 The wellness home and activity rings

The wellness home screen presents Move, Exercise and Stand rings, the step goal, weekly step history and a hero step count. It refreshes every time the user returns to the screen, not only when the app starts, so the numbers are always current.

A workouts-today view shows step progress with an explicit source label.

## 11.12 Health-ATM kiosks

The platform manages a fleet of physical Health-ATM kiosks: registration, heartbeat monitoring, calibration records, maintenance mode, error clearing, measurement counters and a map view of the fleet.

On the family side, a kiosk screen in the app scans medical reports — laboratory results and prescriptions — through a camera flow with preview, processing and saved states.

## 11.13 Nature versus nurture

This is the module's conceptual centrepiece, and honesty requires being clear about where it stands.

**What exists and works:** the platform defines approximately 416 nurture measures across six categories — anthropometric, biochemical, biometric, psychometric, sociometric and Health-ATM — maps them against genetic traits, and collects them. Parents have four dedicated collection screens: anthropometric measurements, sociometric information, a family tree and a pedigree chart. Collected values are stored against the individual, and the platform can display correlation insights.

**What does not yet exist:** the engine that computes the correlations. The tuning parameters for it are configurable and waiting; the analysis itself is not built.

The correct statement to a client is therefore: **the platform collects both the nature and the nurture side and is ready to present correlations; the correlation analysis itself is the next major piece of work.** See Section 24.

---

# 12. Nutrition and Diet

## 12.1 What the module covers

Nutrition is one of the platform's most complete feature areas and is available to students, parents and wellness users alike. It covers diet planning, meal-by-meal tracking, food recognition from photographs, grocery management, hydration, weight progress and a daily nutrition ledger.

## 12.2 Setting up a diet profile

A seven-step wizard collects everything needed to build a plan: body metrics, goal, activity level, dietary pattern, cuisine preference, allergies and intolerances, and meal timing preferences. Parents can complete it for themselves or for a child, switching between profiles.

## 12.3 The diet plan

A generated plan covers seven days, meal by meal.

| Feature | Description |
| --- | --- |
| **Seven-day plan** | A day selector, a macronutrient dashboard for the selected day, and every meal listed |
| **Meal detail** | Per-meal ingredients, portions and nutrition |
| **Swap a meal** | Replace a meal with an alternative that fits the same targets |
| **Alternatives** | See other options for a given meal |
| **Complete a meal** | Mark a meal as eaten; the day's totals update |
| **Renew** | Generate the next cycle when a plan ends |
| **Weekly analysis** | How the week actually went against the plan |
| **Progress** | Weight and adherence over time |

Later days of a plan are generated in the background, so the user can start eating from day one without waiting for the whole week.

## 12.4 The nutrition blueprint

The blueprint is the transparency feature: it shows exactly how the user's calorie and macronutrient targets were calculated, including **the adjustments made because of their genetic profile.** This is the clearest single place in the product where the genetics visibly changes a plan, and it makes an effective demonstration moment.

## 12.5 Food recognition

Two separate photograph features exist, and the distinction matters.

**NutriScan** analyses any food photograph, whether or not it relates to a plan. It returns macronutrients and micronutrients, a glow/grow/go/fun classification familiar from Indian nutrition education, a health score, allergen warnings checked against the user's own declared allergies, and — for a composite dish — an ingredient-by-ingredient breakdown. It also matches the food into the platform's food database where it can. Five scans per day.

**Meal scan** is plan-aware: the user photographs what they actually ate, and the planned meal's nutrition is replaced by the reality. This is how the daily ledger stays honest.

A **text and voice quick-log** is also available for users who would rather search or speak than photograph.

## 12.6 Hydration, weight and the daily ledger

| Feature | Description |
| --- | --- |
| **Water tracker** | An animated bottle that fills as the user logs intake, with waves, bubbles and a progress ring against a daily target |
| **Weight logging** | With daily and weekly analysis and trend display |
| **Sleep logging** | Recorded alongside nutrition |
| **Daily ledger** | The authoritative daily nutrition total, combining planned meals, completions, scans and quick logs |
| **Grocery list** | Generated from the plan, with checkboxes and the ability to copy the list out to share |
| **Diet reminders** | Configurable meal reminders |

## 12.7 The store

A store area exists with a groceries tab. Purchasing from a store is presented as coming soon and is not a live commerce capability today.

## 12.8 Nutrition master data

Administrators manage the food catalogue, dietary patterns and reference nutrition data through a dedicated console, so plans draw on curated Indian food data rather than a generic international database.

---

# 13. Fitness, Gym and Habits

## 13.1 What the module covers

Fitness covers programmed training, live workout logging, strength progression, habit building and the reward layer around them.

## 13.2 Workout plans

| Feature | Description |
| --- | --- |
| **Generated plans** | A plan built from the user's goal, experience level, available days and body metrics |
| **Plan browser** | Browse a plan day by day |
| **Customise** | Adjust sets, reps and rest per exercise, then adopt the plan |
| **Manual builder** | Build a plan day by day from scratch |
| **Edit** | Change a plan or an individual exercise later |
| **Templates** | Assign a prepared workout template |
| **Swap an exercise** | Replace an exercise with an alternative working the same muscles |
| **Progression** | Loads and volumes advance as the user gets stronger |

The AI companion can do all of this conversationally: fetch the plan, create one, assign a template, swap an exercise, report progress and log a session.

## 13.3 The live gym session

The live session screen is the in-gym experience: set-by-set logging, a rest timer between sets, and a live heart-rate chip when a Bluetooth strap is connected.

Afterwards, session history, per-session detail and gym statistics are available, including personal records per exercise and strength goals.

Automatic set-completion detection and automatic workout detection are available as opt-in conveniences.

## 13.4 The athletic blueprint

Mirroring the nutrition blueprint, the athletic blueprint presents the user's physical disposition from their genetic profile — where they sit on the power-versus-endurance spectrum, recovery tendencies and injury-risk considerations — and how that shapes what the platform suggests.

## 13.5 Habits, points and achievements

| Feature | Description |
| --- | --- |
| **Habits** | A habit list with completion toggles and streaks |
| **Points** | Earned for activity, tracked as a running balance |
| **Achievements** | Unlockable achievements with a badge grid |
| **Workout achievements** | A separate set specific to training milestones |
| **Reminders** | Workout reminders by day of week, delivered as notifications |

## 13.6 Wellness profile and preferences

A wellness profile records goals and training context. Health preferences cover units, targets and what the user wants the platform to focus on.

---

# 14. Games, Rewards and Motivation

## 14.1 The cognitive games

Ten games are designed as cognitive assessments dressed as play. Eight are currently playable.

| Game | What it exercises | Playable |
| --- | --- | --- |
| Focus Fortress | Sustained attention | Yes |
| Pattern Quest | Pattern recognition | Yes |
| Memory Maze | Working memory | Yes |
| Word Wizard | Verbal ability | Yes |
| Math Master | Numerical reasoning | Yes |
| Speed Sprint | Processing speed | Yes |
| Emotion Explorer | Emotional recognition | Yes |
| Spatial Safari | Spatial reasoning | Yes |
| Decision Dash | Decision-making | Not yet |
| Creativity Cosmos | Divergent thinking | Not yet |

Game performance is mapped back onto genetic traits, closing the loop in the other direction: the games are not only entertainment, they are a second, playful source of evidence about how a child actually performs.

## 14.2 The games experience

A games hub lists what is available. Each game runs in a shared game host. Results feed brain coins, leaderboards and achievements.

A separate web-based player portal offers the same games in a browser with a dashboard, game list, play and results screens, plus leaderboard, achievements, store and profile pages. Administrators manage games, questions, players, sessions, achievements, leaderboards and the store through their own console.

## 14.3 Motivation across the product

Rewards are deliberately spread across the whole product rather than confined to the games:

- Experience points and levels for study activity
- Badges for learning and for general milestones
- Study streaks
- The discovery journey ladder in School Genomics
- Habit streaks and points in Health and Wellness
- Achievements in fitness
- Brain coins and leaderboards in the games
- Celebration states when a student is caught up on their plan

The important design constraint is that none of it is used punitively. Streak and habit features encourage; they never shame, and the AI companion is explicitly forbidden from reciting a child's miss rate back to them.

---

# 15. Clinical, Telehealth and Partner Features

## 15.1 Genetic counselling

Genetic counselling is a first-class part of the product rather than an afterthought.

| Feature | Description |
| --- | --- |
| **Caseload** | Each counsellor has a defined caseload of users, with statistics on the dashboard |
| **User roster** | The caseload list with CSV export |
| **Full genetic profile** | Every trait for a caseload user, with filters, search and pagination, correctly framed for risk |
| **Report operations** | Upload a report for a new kit or a caseload user, review it, correct it, approve it and assign it |
| **Consultations** | Schedule and manage counselling sessions |
| **Messaging** | Message users directly |
| **Notifications** | Portal notifications |

Two design points are worth highlighting to a clinical customer.

**Scope is airtight and simultaneous.** Everything a counsellor can see or do flows from one caseload definition. If a user leaves the caseload, is deactivated, or drops off the PRO plan, the counsellor loses report visibility, assignment rights, unassignment rights and upload eligibility at the same instant. There is no path where one lags another.

**Existence never leaks.** A sample outside a counsellor's caseload returns "not found" rather than "not permitted", so a counsellor cannot discover which sample codes exist by probing.

**Access is recorded.** Every time a counsellor views a user's genetic information, exactly one access record is written — once per genuine page view, not once per filter click.

## 15.2 Telehealth

| Feature | Status |
| --- | --- |
| Doctor profiles and specialisations | Available |
| Availability and scheduling | Available |
| Appointment booking | Available |
| Appointment management and history | Available |
| Consultation workflow with clinical notes | Available |
| Prescriptions issued from a consultation | Available |
| Administrative telehealth console | Available |
| **Live video and audio in the call** | **Not functional.** The call screen connects and shows call state, and no audio or video is carried. See Section 24 |

The booking and clinical-record side of telehealth is genuinely usable today. The video call itself is not, and must not be shown in a demonstration as a working feature.

## 15.3 Hospitals and referrals

A hospital console manages hospital records and referrals, so a finding that needs clinical follow-up can be routed to a partner facility and tracked.

## 15.4 Prescriptions and medicines

A medicines console manages the medicine catalogue, prescriptions and dispensing records, with pharmacist-facing dispensing.

## 15.5 Laboratory results

Laboratory results carry a verification workflow: a result is entered, then verified by clinic staff before it is treated as final. Pending verifications are queued, and critical values are flagged for notification.

## 15.6 The command centre

A command centre console exists for operational alerting: alert records, an alert lifecycle and configurable rules, with a portal to work them.

**Status note.** The alert workspace and its data are in place, and the automatic rule evaluation that would raise alerts by itself is not running. Alerts can be created directly. This should be described as a foundation rather than a live monitoring capability.

## 15.7 Analytics

An analytics console provides platform, cohort and school-level reporting. Teachers have their own class-level analytics with export. Counsellors have caseload statistics. Administrators have a system dashboard including genetic report statistics.

## 15.8 Master data consoles

Because the platform is data-heavy, a substantial share of the web surface is master-data management. The largest is the health and genetic data console, which manages:

- Genetic categories, profiles, traits and their metadata
- Nurture metric types and metrics
- The mapping between genetic traits and nurture measures
- Per-subject genetic and nurture results
- Which results are visible in the mobile application, individually or in bulk
- CSV templates and sample files for bulk work
- Metrics dashboards

Further consoles cover users and roles, profiles and relationships, students, schools and camps, organisations, hospitals, kiosks, telehealth, nutrition, medicines, notifications, AI insights, analytics, the command centre, audit trails, genomics and the games.

One safeguard in the health console is worth noting because it reflects the platform's discipline about genetic data: staff can no longer create genetic data for a person who has no assigned sample. The console refuses and tells them to assign a report first, which keeps every genetic record inside the audited upload-and-assign process instead of appearing as a side effect of a form.

---

# 16. Feature Reference by Role

This section answers the question "what exactly does this kind of user get?" for each role. It repeats material from earlier sections deliberately, so that a single role can be described to a single audience without cross-referencing.

## 16.1 The student

**Where they work:** the student section of the mobile application. Students have no web portal.

| Capability | Detail |
| --- | --- |
| **My Traits** | Their genetic profile: hub, categories, profiles, trait detail, search and the original PDF. PRO only; BASIC accounts see a Lifestyle section instead |
| **Helix chat** | Available from the raised centre button on every screen, with conversation history |
| **Helix voice** | Push to talk, with spoken replies |
| **Screen-aware Helix** | Ask about the current screen without leaving it |
| **Homework chat** | A dedicated homework conversation |
| **Learning hub** | Today's quest, subject tiles with progress, the week as a star path |
| **Lesson learner** | Per chapter: summary, ask, flashcards, quiz, the book itself, and videos where available |
| **Academic results** | Dashboard, report-card scanning, exams, subject performance |
| **Mastery map** | Per-chapter mastery across subjects |
| **Study plan** | Weekly plan with completion tracking, streaks and regeneration |
| **Activity report** | Study time, rhythm and insight |
| **Roadmaps** | Goal-driven multi-week paths rendered as an adventure |
| **Day planner** | Schedule, learn, assessment and notes, operable by conversation |
| **Note review** | Photograph handwritten notes for feedback |
| **Learning assessment** | The psychometric questionnaire and the resulting learning profile |
| **Games** | Eight playable cognitive games with coins, leaderboards and achievements |
| **Journey** | The discovery level ladder, habits and discoveries |
| **Achievements** | Badge grids, learning-specific and general |
| **Diet** | Plan, meal detail, meal scan, NutriScan, blueprint, grocery list, water tracker, quick log, progress |
| **Fitness** | Plans, live gym session, history, statistics, achievements, reminders |
| **Health** | Metrics dashboard, growth charts, vitals, step widget |
| **Wearables** | Connect, trends, preferences |
| **Bluetooth devices** | Scan, connect, live readings |
| **Library** | The reader, with placeholder content today |
| **Account** | Settings, profile editing, notifications and preferences, privacy and data, help, legal documents, plan upgrade request |

**What a student never sees, by design:** any risk-axis genetic trait, any disease-risk discussion, any mental-health prediction, any score or label from the learning assessment, and any statement that genetics informed a teaching decision.

## 16.2 The parent

**Where they work:** the parent section of the mobile application, behind the profile-picker lock. Also a parent dashboard on the web.

| Capability | Detail |
| --- | --- |
| **Household management** | The profile picker, adding children, PIN management, giving a child their own device |
| **Switching into a child's session** | PIN-protected; the app becomes the child's app and the parent session is restored on exit |
| **Own genetic report** | My Traits for the parent's own linked report. Viewing a child's genetic report as a guardian is deferred; see Section 24 |
| **Child health monitoring** | Health metrics per child with per-metric detail |
| **Child progress monitoring** | Journey, habits, progress and achievements per child |
| **Child reports** | The child's genomic report list with statistics |
| **Consent management** | Grant and revoke consent per category, with clear cards |
| **Nurture data collection** | Anthropometric measurements, sociometric information, family tree, pedigree chart, and a collection-status view |
| **Child academics** | Monthly roadmap with weekly milestones, subject progress, activity report and mastery, with the ability to assign a focus area and open Helix about it. Currently displays prepared sample data rather than live figures; see Section 24 |
| **Diet for self or child** | The full nutrition suite with a profile switcher, plus a child achievement badge when viewing a child |
| **Tasks** | A parent task list |
| **Telemedicine** | Doctor browsing, booking, appointment management, and a call screen whose video is not yet functional |
| **Kiosk scanning** | Photograph laboratory reports and prescriptions to save them |
| **Helix** | The full assistant in a professional register, permitted to discuss risk factors and medical considerations, with an explicit statement that it is not a substitute for a medical professional |
| **Bluetooth devices** | The device manager |
| **Account** | Settings, profile editing for self and children, notifications, privacy and data, help, legal, plan upgrade |

**The parent's most consequential capability is consent.** A verified guardian relationship with consent rights is what makes a minor's genetic and psychometric processing lawful. Parents can revoke consent at any time, and revocation is recorded rather than erased.

## 16.3 The teacher

**Where they work:** the teacher web portal. Teachers have no mobile application.

| Capability | Detail |
| --- | --- |
| **Dashboard** | Key indicator cards, needs-attention widget, recent activity, waiting doubts |
| **Student roster** | Searchable list with detail pages and CSV export |
| **Student learning profile** | The curated nine-indicator view derived from genetics, on a one-to-ten scale. Never raw genetic readings |
| **Performance analytics** | Class and per-student analytics with export |
| **Activity reports** | Per-student study activity with detail |
| **Roadmap planner** | Plan a class's route through the syllabus |
| **Schedule** | The teacher's own timetable |
| **Doubts inbox** | Student questions with threads. Partly placeholder-backed today |
| **Lesson generation** | The fifteen-method lesson planner, informed by learning profiles |
| **Notifications** | Portal notifications and preferences |
| **Settings** | Theme, font size and sidebar layout, remembered between visits |

**One security item to close before any external school pilot:** the teacher portal does not currently restrict access by role, so any signed-in user who navigates directly to the teacher address reaches it. Post-login routing is correct, so users do not stumble into it accidentally, but this must be fixed before the portal is exposed to a school. It is listed in Section 24.

## 16.4 The genetic counsellor

**Where they work:** the counsellor web portal.

| Capability | Detail |
| --- | --- |
| **Dashboard** | Caseload statistics, upcoming consultations, and a genetic reports summary with per-category counts and the five most recent |
| **My Users** | The caseload roster with CSV export |
| **Genetic profile** | The full trait view per user with filters and pagination, correctly framed for risk, drawing on either the current or the legacy data source with identical presentation |
| **Report upload** | For a new kit, a caseload user's sample, or a sample the counsellor already has visibility of |
| **Report review** | Review, correct and approve extracted reports, caseload-scoped |
| **Report assignment** | Assign to active caseload PRO users with consent confirmation |
| **Consultations** | Scheduling and management |
| **Messaging** | Counsellor to user |
| **Notifications** | Portal notifications |

A terminology note that reflects an explicit product decision: the counsellor portal refers to **Users**, not Students, throughout its wording.

## 16.5 The administrator

**Where they work:** every web portal.

| Area | What they manage |
| --- | --- |
| **Genetic reports** | Upload, review queue with status tabs and filters, review detail, retry, assign, unassign, delete, and full display of extracted content |
| **Health and genetic master data** | Categories, profiles, traits, nurture metrics, trait-to-metric mapping, per-subject results, mobile visibility, CSV templates, metrics dashboards |
| **Genomics** | The genomics console |
| **Users** | Accounts, roles, plan upgrade approvals |
| **Profiles and relationships** | Profiles and guardian relationships |
| **Students** | Student records |
| **Schools** | Schools and health camps |
| **Organisations** | The organisation hierarchy and membership |
| **Counsellors** | Counsellor administration and caseload assignment |
| **Hospitals** | Hospitals and referrals |
| **Kiosks** | The Health-ATM fleet |
| **Telehealth** | Doctors, availability, appointments and consultations |
| **Nutrition** | Food catalogue and reference data |
| **Medicines** | Catalogue, prescriptions and dispensing |
| **Notifications** | Templates, sending and history |
| **AI insights** | The insights console |
| **Analytics** | Platform reporting |
| **Command centre** | Alerts and rules |
| **Audit** | Access and activity records |
| **Games** | Games, questions, players, sessions, leaderboards and the store |
| **System dashboard** | Platform overview including genetic report statistics |

**Two administrator capabilities carry the highest privilege in the platform:**

**Sample re-identification.** Resolving an anonymous sample code to a person requires a specific permission that most administrators do not hold, and every resolution is recorded with who, when and why.

**Permanent account deletion.** Restricted to super administrators, and described in Section 19.

## 16.6 Clinical and partner roles

| Role | What they get |
| --- | --- |
| **Doctor** | Telehealth consultations, clinical notes, prescriptions, referrals |
| **Nurse** | School camps and measurement recording |
| **Laboratory technician** | Laboratory result entry and the verification workflow |
| **Pharmacist** | Prescription dispensing |
| **Care coordinator** | Coordination workflows |
| **School administrator** | School-scoped administration |
| **Data analyst** | Analytics and reporting |

---

# 17. Screen-by-Screen Reference

This section lists every screen a user can reach, grouped as the application groups them. It is intended as a completeness reference and as a demonstration checklist.

## 17.1 Before signing in

| Screen | What it does |
| --- | --- |
| Get started | The animated welcome screen with eight feature tiles and a single way forward |
| Sign in and create account | One screen with two tabs; parents route to the household picker, students to their app |
| Forgot password | Request a reset. Delivery is not yet enabled, so resets go through support today |
| Legal consent | A hard gate when consents are new or updated: each document expandable and individually acceptable, plus accept-all |
| Join family | Enter a parent-generated access code to put a child's account on their own device |
| Privacy policy, terms of service, disclaimer | The public documents, viewable in the app |

## 17.2 Onboarding

**Product selection and the parent path**

| Screen | What it does |
| --- | --- |
| Choose your product | School Genomics or Health and Wellness |
| Parent registration | The guardian's own details |
| Verify email | A one-time code with resend |
| Add students | Add one or more children, with per-child forms and validation |
| Psychometric consent | An explanation of the learning assessment and guardian consent for it |
| Final consent | The terminal gate: all required documents accepted before entering the app |

**The student self-registration path**

| Screen | What it does |
| --- | --- |
| Student registration | Create the account directly, without a parent |
| Verify email | A one-time code |
| Academic details | Class or grade, school name, syllabus board |
| Personal details | Date of birth and gender required; height and weight optional |
| Student consent | The student's own consent before the questionnaire |
| Learning questionnaire | The age-banded question set, scored immediately |
| Learning curve | The four-domain learning profile, then into the app |

**The Health and Wellness wizard**

Nine steps: welcome, about you, body metrics, goal, target health area, activity level, training experience, connect your health app, and summary.

## 17.3 The student application

**Navigation.** In School Genomics: Home, Diet, a raised centre button for Helix, then Traits on PRO or Lifestyle on BASIC, then Me. In Health and Wellness: Home, Diet, Workouts, Profile.

**Main tabs**

| Screen | What it does |
| --- | --- |
| Home (School Genomics) | Greeting with an experience-point pill and notification bell, a Helix card, the "Helix noticed" card, a quick-access grid, today's plan with a done-count and exam countdown, continue-studying, a questionnaire prompt, recommendations, and trait highlights on PRO |
| Home (Health and Wellness) | Activity rings, step hero, today's plan and wellness summary |
| Diet | Two distinct designs by mode: a plate-centred hero for wellness, a macro-summary hero for school |
| My Traits | The genetic report hub, PRO only |
| My Lifestyle | The BASIC counterpart of Traits |
| Workouts | The wellness workouts hub with Today, Habits and Progress tabs, rings, a plan card and a log-workout action |
| Me | Profile home with a gradient header, avatar, quick statistics and navigation into settings, profile, legal, plan and help |
| Health | Metrics dashboard, step widget, growth and vitals |
| Journey | The discovery level ladder, habits, discoveries and achievements |
| Habits | Habit list with completion toggles |
| Growth | Growth charts |
| Bluetooth devices | Scan, connect and live readings |
| Reports | The genomic report list with statistics, opening report detail or the PDF |

**Genetic report screens**

| Screen | What it does |
| --- | --- |
| Report hub | Hero, summary, category filter chips and a two-column profile grid |
| Category | The profiles inside a category |
| Profile | The trait list inside a profile |
| Trait detail | Result band, marker position, genes and readings, advice flags, strengths and weaknesses, health impact and recommendation |
| Search | Search across every trait |
| Report detail | The full report view with health metric cards and access to the PDF |

**Learning and academics**

| Screen | What it does |
| --- | --- |
| Learning hub | Today's quest, subject tiles with animated rings, the week as a star path, tool tiles |
| Academic results | The dashboard with scan and manual actions, analytics, mastery row, subject bars and exam cards |
| Report-card scan | Capture, automatic reading, then an editable review form. Manual mode starts empty |
| Study plan | Week and subject tabs, an up-next card, task rows, a progress bar, coming weeks and a caught-up celebration |
| Activity report | Period control, day strip, hero minutes with a goal, learning rhythm, snapshot tiles and an insight card |
| Mastery map | Per-chapter mastery |
| Chapter picker | A subject rail with chapter cards |
| Lesson learner | Summary, Ask, Flashcards, Quiz, Book and Videos per chapter, with mark-complete |
| Lesson planner | Cascading selection of grade, subject, chapter, category and method, then generation |
| Lesson result | The generated lesson in one of fifteen formats, with tips and a create-another action |
| Roadmap list | All roadmaps |
| Roadmap detail | The day-by-day adventure path with a you-are-here marker |
| Day planner | Schedule, Learn, Assessment and Notes with a week strip, task sheet and progress ring |
| Note review | Photograph notes for AI feedback |
| Homework chat | A dedicated homework conversation |
| Achievements | Badge grids, locked and unlocked |

**Learning assessment**

Introduction, the assessment itself in either tap or voice mode, a session screen, a live conversational screen, results and a completion screen.

**Games**

A hub listing the games, and a game host that runs whichever game was selected.

**Library**

Home with greeting, filters, continue-reading, browse-by-topic, a featured item, personalised suggestions and saved items; a category view; a reader with read-to-me playback, block content and a quiz; search with suggestions; and bookmarks. Content is placeholder today.

**Nutrition and diet**

| Screen | What it does |
| --- | --- |
| NutriScan | The largest screen in the application: camera, preview, analysing and results |
| Diet setup | The seven-step diet profile wizard |
| Meal plan | Seven days with a day selector, macro dashboard and edit mode |
| Meal detail | Per-meal detail with swap and complete |
| Meal scan | Photograph what was actually eaten, replacing the planned nutrition |
| Nutrition blueprint | The calorie and macro calculation with its genetic adjustments |
| Grocery list | Checkboxes with copy-out sharing |
| Store | Groceries, plus a coming-soon purchase placeholder |
| Water tracker | An animated bottle with waves, bubbles and a progress ring |
| Quick log | Full-screen search and voice food logging |
| Progress dashboard | Weight with daily and weekly analysis |

**Fitness, gym and wearables**

Workout plan list and detail with customisation, a manual plan builder, plan and exercise editing, workout setup, reminders, history, achievements; a live gym session with set logging, rest timer and live heart rate, plus session detail, history and statistics; the wearables screen with its five states and consent modal; wearable trends; the athletic blueprint; wellness profile; health preferences; and a developer motion-recording laboratory.

**Account, settings and legal**

Settings, profile editing, notifications, notification preferences, privacy and data, help and support, legal documents, theme selection, the plan screen and the upgrade request, and the four policy documents.

## 17.4 The parent application

**Navigation.** Home, Diet, Traits on PRO or Lifestyle on BASIC, Profile — with the raised centre Helix button.

**Main tabs**

| Screen | What it does |
| --- | --- |
| Home | A child switcher, today's overview and actions, a health snapshot, a Helix card, an insight card and a quick-actions grid |
| Diet hub | The parent's own plan or a child's, with a profile switcher, diet setup and a child achievement badge |
| My Traits | The parent's own genetic report, PRO only |
| My Lifestyle | The BASIC counterpart |
| Profile | The largest parent screen: children list, and all account, settings, legal and consent navigation |
| Health | Child health metrics with per-metric detail |
| Journey | A child's habits, progress and achievements |
| Reports | A child's genomic report list with statistics |
| Tasks | The parent task list |
| Consents | Consent cards for granting and revoking per category |
| Bluetooth devices | The device manager |

**Household and children**

| Screen | What it does |
| --- | --- |
| Profiles | The "Who's learning?" picker with child PIN keypad and parent password gate |
| Add child | Creates the child's account, the guardianship record and consent |
| Child PIN entry, set child PIN, set up student PIN | PIN management |
| Set up child device | Generates the one-time family access code |
| Child view | A per-child overview |

**Nurture data collection**

Collection status, anthropometric measurements, sociometric information, family tree, pedigree chart and result analysis.

**Parent academics**

Monthly roadmap, roadmap week detail, roadmap subject detail, activity report and mastery with focus assignment. Currently showing prepared sample data.

**Parent nutrition, telehealth and kiosk**

The full nutrition set mirroring the student screens; telehealth with a doctor list, doctor detail, booking, appointment detail and a video call screen whose video is not functional; and the kiosk medical-report scanner with camera, preview, processing and saved states.

**Account and legal**

Settings, profile editing, notifications and preferences, privacy and data, help and support, achievements, health preferences, theme, plan and upgrade request, and the policy documents.

## 17.5 Always-available overlays

Four elements sit above the whole application:

| Overlay | What it does |
| --- | --- |
| **The Helix assistant** | The full conversation, opened by the raised centre button, with history that is cleared on sign-out and on profile switch |
| **Screen-aware Helix voice** | A per-screen voice conversation that starts fresh every time, scoped to what is on screen |
| **Workout detected** | A prompt offering to log an automatically detected workout |
| **Plan changed** | An announcement when the account moves between BASIC and PRO |

A study nudge also appears within the student section.

## 17.6 The web portals

| Portal | Who uses it | What it contains |
| --- | --- | --- |
| Role dashboards | All signed-in staff | Parent, doctor, school administrator, nurse and system administrator landing pages |
| Teacher portal | Teachers | Eleven pages plus a student roster and profiles |
| Counsellor portal | Genetic counsellors | Eight pages including the caseload and genetic profiles |
| Counsellor genetic reports | Genetic counsellors | The caseload-scoped report workspace |
| Counsellor administration | Administrators | Counsellor and caseload management |
| Genetic reports | Administrators | The report operations workspace |
| Health and genetic master data | Administrators | The largest console, twenty-one pages |
| Genomics | Administrators | Genomics management |
| Users | Administrators | Accounts, roles and plan approvals |
| Profiles | Administrators | Profiles and relationships |
| Students | Administrators | Student records |
| Schools | Administrators | Schools and camps |
| Organisations | Administrators | Hierarchy and membership |
| Hospitals | Administrators | Hospitals and referrals |
| Kiosks | Administrators | The Health-ATM fleet |
| Telehealth | Administrators | Doctors, appointments and consultations |
| Nutrition | Administrators | Food and reference data |
| Medicines | Administrators | Catalogue, prescriptions and dispensing |
| Notifications | Administrators | Templates, sending and history |
| AI insights | Administrators | The insights console |
| Analytics | Administrators | Platform reporting |
| Command centre | Administrators | Alerts and rules |
| Audit | Administrators | Access and activity records |
| Games player portal | Players | Dashboard, games, play, results, leaderboard, achievements, store, profile |
| Games administration | Administrators | Games, questions, players, sessions, leaderboards, store |
| Authentication pages | Public | Sign-in and related pages |

---

# 18. Key User Journeys

This section walks through the platform's principal journeys end to end. Each is written so it can be read aloud during a demonstration.

## 18.1 A parent sets up the household

```
Downloads the app  ->  Chooses School Genomics  ->  Registers as the parent
        |
        v
Lands on an empty "Who's learning?" picker
        |
        v
Adds each child: name, date of birth, class, PIN
        |          each child gets a real, separate account
        |          the guardianship relationship is recorded
        |          consents and legal documents accepted on the child's behalf
        v
Taps a child, enters the PIN
        |
        v
The app is now that child's app
```

Up to five children by default. If the parent later wants the child on their own phone, they generate an access code from the app; the child enters it on their own device.

## 18.2 A student registers on their own

```
Creates the account  ->  Verifies the email  ->  Enters class, school and syllabus board
        |
        v
Enters date of birth and gender; optionally height and weight
        |
        v
Gives their own consent
        |
        v
Completes the learning questionnaire (age-appropriate question set)
        |
        v
Sees their four-domain learning profile  ->  Enters the app
```

The class and syllabus board entered here are what make textbook help work. If they are missing or wrong, the tutor will say textbook help is unavailable rather than show content from the wrong class.

## 18.3 A genetic report reaches a family

```
Health camp at the school  ->  Kit CA101 collected  ->  Laboratory  ->  PDF returned
        |
        v
Staff upload the PDF against the kit code
        |
        v
The platform reads the report
        |          exact reader: about 10 seconds, self-verified four ways
        |          flexible reader: about 8 to 9 minutes, flags uncertainties
        v
Anything flagged goes to a review queue
        |
        v
A reviewer opens it, compares against the original page, corrects, approves
        |
        v
Staff assign the report to the child's account
        |          the report must be approved
        |          the account must be on PRO
        |          neither the sample nor the person may already be linked elsewhere
        |          consent is explicitly confirmed and that confirmation is recorded
        v
The child and parent see it in the app; the counsellor sees it in the portal;
the teacher sees a curated learning profile; the tutor changes how it teaches
```

If anything is wrong, the report can be reset and re-read from scratch, or unassigned — which cuts access immediately while preserving the record of what happened.

## 18.4 A child asks the tutor for help with homework

```
Taps the raised centre button, or holds to speak
        |
        v
The platform checks: is this account entitled to genetic personalisation?
        |          if not, all genetic context is stripped and the tutor is
        |          instructed not to mention genes or traits at all
        v
Safety checks on the question
        |
        v
The tutor assembles what it knows: age and class, learning profile,
        |   genetic learning disposition, board and subjects, quiz history,
        |   weak chapters, study habits, the language of the question,
        |   the current screen, and today's proactive message
        v
It searches this child's actual textbook for their board, class and subject
        |
        +-- found  ->  teaches from the book, at the right reading level,
        |              method and first step only for a homework question
        |
        +-- not found  ->  says so and offers the chapters it does have
        v
Output is checked again for child safety before it is shown
        |
        v
The reply appears; if voice, it is spoken sentence by sentence as it is produced
        |
        v
A follow-up like "explain the third one" continues the same lesson
```

## 18.5 A child takes a practice quiz through conversation

The child asks for a quiz. Helix asks three to five questions, one per message, keeping an honest running score. It records the result so mastery estimates update. It will not fabricate a score, and it will not tell the child a number that is not real.

A teach-back session works the same way in reverse: the child explains a concept, Helix assesses the explanation and records the outcome — and never reads the percentage out to the child.

## 18.6 A day of step tracking

```
The user opens the app       the phone's motion sensor starts counting
        |
        +-- a smartwatch is connected?  ->  the watch's count is authoritative;
        |                                   the phone stops contributing
        v
Steps, distance and calories update live, against a goal
        |
        v
Data is saved to the account periodically and whenever the app
goes to the background, so closing the app does not lose the day
        |
        v
Midnight in the user's own local time  ->  counters reset cleanly
```

Distance is derived from the user's height and calories from their weight, and the app and the server compute them identically, so the numbers never disagree between screens.

## 18.7 A week of diet planning

```
Complete the seven-step diet profile
        |
        v
A seven-day plan is generated, meal by meal
        |          calorie and macro targets carry genetic adjustments
        |          the blueprint screen shows exactly what those adjustments were
        v
Each day: open the plan, see the macro dashboard, open a meal
        |
        +-- eat it as planned     ->  mark complete
        +-- eat something else    ->  photograph it; real nutrition replaces planned
        +-- do not fancy it       ->  swap the meal for an alternative
        v
Water and weight logged alongside
        |
        v
Grocery list generated from the plan, shareable
        |
        v
Weekly analysis at the end; renew for the next cycle
```

## 18.8 Consent, granted and withdrawn

```
Registration            privacy notices presented with the account
        |
        v
Legal documents         each individually acceptable, or accept-all
        |
        v
Per-category consents   health data, academic data, genetic testing,
        |               psychometric assessment, communications
        v
For a child             the guardian grants, and the guardianship is verified
        |               (the learning assessment is the one thing a student
        |                may always consent to for themselves)
        v
Every grant and every revocation is recorded separately, with the time
        |
        v
Revocation is never a deletion of the record; the history is preserved
```

Certain kinds of processing are prohibited for children outright and cannot be consented to at all.

## 18.9 A user asks for their data, or for deletion

```
Privacy and data screen
        |
        +-- request an export of my data
        +-- request deletion of my account
        |
        v
Deletion requested       the account is deactivated immediately
        |                a confirmation is sent
        v
Thirty-day grace period  the user can cancel and be fully restored
        |
        v
After thirty days        health and genetic data removed, consents and
                         relationships removed, legal records removed,
                         the account itself anonymised rather than deleted
```

The final step is deliberate: the account row is anonymised — the email becomes a placeholder, names become "Deleted User", personal details are cleared — so that records which must remain intact for audit purposes do not break. Nothing identifying the person survives.

## 18.10 A plan upgrade

```
The user opens the plan screen and requests PRO
        |
        v
An administrator sees and approves the request in the portal
        |
        v
The account moves to PRO
        |
        v
A notification reaches the device; the app unlocks Traits immediately,
with no need to sign out or restart
```

---

# 19. Privacy, Consent and Child Safety

GenExcel processes genetic data belonging mostly to children in India. This single fact shapes more of the product than any other requirement, and this section describes the resulting protections in functional terms.

## 19.1 The governing regime

India's Digital Personal Data Protection Act of 2023 is the applicable law. It requires verifiable guardian consent for children's data, imposes heightened security obligations on sensitive personal data, restricts certain kinds of processing for children outright, and governs transfer of data outside the country.

The platform's design responds to each of these, and the responses are visible in the product rather than confined to a policy document.

## 19.2 Genetic data is not linked to a name

This is the most important protection in the platform and the one most worth explaining to a customer.

Every genetic record is stored against an anonymous sample code. There is no name, no email address, no date of birth and no other identifier attached to it. The connection between a sample and a person is held separately, and:

- Only staff holding a specific permission can make that connection
- Every single use of it is recorded, naming who, when, which sample and why
- The internal operator console cannot browse it at all, and genetic and identity records are deliberately excluded from it
- Stored report files are named after the sample code and a timestamp, so even the file storage reveals nothing

The consequence, stated plainly: **if the whole store of genetic information were exposed, it would not identify anybody.**

## 19.3 All AI processing stays in India

Every AI feature — conversation, voice recognition, speech, report reading, food recognition, lesson generation — is processed within Indian data-centre regions.

This is enforced rather than intended. The platform has an automated check that scans its own code before release and fails the build if any non-compliant processing route has been introduced.

The most telling illustration is a capability the team chose not to ship: the highest-quality conversational voice model is not available in an Indian region, and using it would have moved children's audio abroad. It is fully built and deliberately switched off. A compliant equivalent, assembled from India-hosted components, runs instead in the internal test environment, and a formal request has been made to the vendor to make the model available in India.

For the same reason, AI conversation monitoring is self-hosted rather than sent to an external monitoring service, because those conversations are children's conversations.

## 19.4 Layered consent

| Layer | What it covers |
| --- | --- |
| Privacy notices | Presented with the account at registration |
| Legal documents | Privacy Policy, Terms of Service and Disclaimer, each individually acceptable and re-presented when they change |
| Genetic testing consent | Required before a genetic report can be linked to a person |
| Psychometric consent | For the learning assessment |
| Category consents | Health data, academic data, communications and others, granted and revoked individually |
| Assignment confirmation | The staff member assigning a report confirms that valid consent exists; that confirmation is recorded with their name and the time |

**For a child, a verified guardian grants consent.** The guardianship relationship is recorded and verified, and the guardian's right to grant consent is explicit.

**One deliberate exception:** the learning-style assessment is always self-grantable by a student, because a self-registering student would otherwise be blocked by a requirement only a guardian could satisfy. Everything else for a minor requires the guardian.

**Certain processing is prohibited for children outright** and cannot be consented to by anybody.

**Revocation is never a deletion of the record.** A withdrawn consent is marked as withdrawn, with the time and reason, and the history is preserved.

## 19.5 What a child never sees

| Withheld | Why |
| --- | --- |
| Disease-risk genetic traits | Not appropriate to present to a child |
| Addiction-susceptibility results | The same |
| Mental-health-related traits | The same |
| Any psychometric score or label | The assessment is for the platform to act on, not for the child to be judged by |
| Any statement that genetics informed a teaching decision | A child should not be told they are being taught differently because of their DNA |
| Shame language about study habits | Streaks and habits encourage; they never criticise |
| A fabricated quiz score | The tutor refuses, even if asked |
| A teach-back understanding percentage | Recorded, never read out |

Parents and genetic counsellors see the complete picture, correctly framed.

## 19.6 Data-subject rights

| Right | How it is served |
| --- | --- |
| Access and export | Requestable from the privacy screen in the app |
| Correction | Profile and record editing, plus report review correction for staff |
| Erasure | Requestable in the app, with a thirty-day grace period and cancellation |
| Withdrawal of consent | Per-category revocation at any time |
| Grievance | A grievance mechanism with acknowledgement |
| Nomination | A nominee may be registered to act on the data principal's behalf |
| Breach notification | A process exists to notify both affected users and the regulator |

## 19.7 Audit and accountability

The platform keeps records of who accessed what and when, specifically:

- Every re-identification of a sample, with the reason given
- Every counsellor view of a person's genetic information, exactly once per genuine page view
- Consent grants, changes and withdrawals, in a separate record from the consent itself
- Security-relevant account events
- Cross-border data-transfer records

Audit records are kept in a form intended to resist tampering, and account deletion anonymises rather than removes the records that audit integrity depends on.

## 19.8 Protection of stored data

| Protection | Applies to |
| --- | --- |
| Additional encryption beyond the storage system's own protection | Every gene reading, every extracted genetic record, names and contact details, laboratory sample identifiers, clinical interpretations and counselling notes |
| Private storage with no public access | Genetic report PDFs, in their own separate storage area |
| Short-lived, single-purpose access links | Report PDF viewing |
| Access re-checked at the moment of viewing | Report PDFs, so revoking a report cuts access immediately, even mid-session |
| Encrypted connections | All traffic |

## 19.9 One item to close

The platform's consent enforcement is fully built: a request from a user who has not granted a required consent is designed to be refused with a clear prompt to complete consent.

**That enforcement switch is currently off.** It is a deliberate rollout decision — turning it on before every existing account has completed the consent flow would lock people out of their own data — and it is the single most significant compliance item to close. It is listed in Section 24.

The consent records themselves are being collected today; it is only the blocking behaviour that is not yet active.

---

# 20. Notifications and Communication

## 20.1 Notification channels

| Channel | Status |
| --- | --- |
| **Push notifications** to the mobile app | Available |
| **In-app notifications** with an unread badge on every screen | Available |
| **Email** | Available |
| **SMS** | Available where the messaging service is configured |
| **WhatsApp** | Available where the messaging service is configured |

## 20.2 What users are notified about

- Plan upgrades, which unlock features on the device immediately
- Proactive tutor messages, when that feature is enabled
- Diet and meal reminders
- Workout reminders, by day of the week
- Study nudges
- Report and consultation updates
- Account and security events
- Administrative announcements

## 20.3 User control

Users control notifications properly rather than being offered a single on-off switch:

| Control | Detail |
| --- | --- |
| Per-category preferences | Choose which kinds of notification to receive |
| Per-channel preferences | Choose how each kind reaches you |
| Quiet hours | A window during which nothing is delivered |
| Daily limit | A cap of ten push notifications per day, applied by the platform as a backstop against any runaway process reaching a child's device |

## 20.4 Tapping a notification

Notifications open the right place in the app rather than dumping the user on the home screen: a plan upgrade opens the plan screen with the new tier already applied, a proactive tutor message opens a conversation already in motion, and other notifications deep-link to the relevant screen.

## 20.5 Messaging between people

Three messaging surfaces exist:

| Surface | Status |
| --- | --- |
| **Counsellor to user** | Available in the counsellor portal. Note that there is no corresponding inbox in the mobile application yet, so a counsellor's message has no delivery surface on the family's phone. This gap is listed in Section 24 |
| **Teacher doubts inbox** | Available in the teacher portal, with threaded replies. Partly placeholder-backed today |
| **Conversations with Helix** | Fully available in the mobile application. This is a conversation with the AI companion rather than with a person, and it is the only conversation surface the app currently presents |

## 20.6 Email communications

Email covers verification codes, welcome messages, account deletion confirmations, data export delivery, role changes, grievance acknowledgements and breach notices.

Two email paths are not yet live and are handled by support in the meantime: password reset delivery, and phone-based one-time codes.

---

# 21. Languages, Accessibility and Personalisation

## 21.1 Languages

| Aspect | Support |
| --- | --- |
| **Application interface** | English and Arabic, with full right-to-left layout |
| **Tutor conversation** | English, Malayalam, Hindi, Tamil, Kannada and Arabic. A question asked in Malayalam is answered in Malayalam, automatically, with no setting to change |
| **Textbook content** | English, Malayalam, Hindi, Tamil and Kannada, drawn from the actual prescribed books |
| **Spoken replies** | Indian English, and Malayalam with a Malayalam voice, selected automatically from the language of the reply |
| **Chapter search** | Works with chapter numbers and titles in each supported script, including romanised titles for Indian-language books |

## 21.2 Age-appropriate presentation

The tutor pitches its language by class band: class 3 and below is written for a six-to-eight-year-old, class 7 and below uses simple and gentle terms, and above that uses real subject terminology. Where the class is unknown, it defaults to the simpler level.

The learning assessment uses four different question sets by age band, so a class 2 child and a class 11 student are never asked the same questions.

## 21.3 Appearance and readability

| Feature | Where |
| --- | --- |
| Light and dark themes | Mobile application and teacher portal |
| Theme selection | User settings |
| Font size adjustment | Teacher portal |
| Layout preferences | Teacher portal sidebar, remembered between visits |
| Scaled layouts | The mobile application sizes itself to the device rather than assuming one screen size |

## 21.4 Personalisation summary

Every one of these changes what a specific user sees:

- Product mode: School Genomics or Health and Wellness
- Plan tier: BASIC or PRO
- Role: which application or portal opens
- Age and class: language level, question sets, content scope
- Syllabus board and grade: which textbooks are reachable
- Learning profile: how the tutor teaches
- Genetic profile: how the tutor teaches, and the adjustments in nutrition and fitness plans
- Quiz history, weak chapters and study habits: what the tutor addresses and how plans are paced
- Health and activity data: intensity suggestions in the wellness product
- Language: interface direction, tutor language, voice
- Theme and notification preferences: appearance and interruption

---

# 22. Feature Availability Summary

This is the single consolidated status table for the platform. It exists so that nobody has to guess what can be shown to a customer.

**Status meanings**

| Status | Meaning |
| --- | --- |
| **Available** | Working and in regular use. Safe to demonstrate |
| **Limited** | Works, with a specific gap named in the notes. Demonstrate with care |
| **Ready, not enabled** | Fully built and deliberately switched off pending a rollout decision. Can be enabled |
| **In development** | Present in the product but not yet functional. Do not demonstrate |
| **Designed** | Specified and approved, not yet built |

## 22.1 Accounts and access

| Feature | Status | Notes |
| --- | --- | --- |
| Email and password sign-in | Available | |
| Multi-factor authentication | Available | |
| Parent-led household signup | Available | |
| Student self-registration | Available | |
| Health and Wellness signup wizard | Available | |
| Household profile switching with PINs | Ready, not enabled | Enabled in the internal test environment; the switch is off for general release |
| Child device enrolment by access code | Available | |
| Plan tiers and upgrade requests | Available | |
| Email verification codes | Available | |
| Password reset by email | In development | Delivery not enabled; resets go through support |
| Phone number sign-in and verification | In development | Message delivery for codes not yet built |
| Passwordless email code sign-in | Limited | Works, but no screen offers it yet |
| Google and Apple sign-in | Limited | Works, but no screen offers it yet |
| Biometric unlock | In development | |
| Account deletion with grace period | Available | |
| Data export request | Available | |

## 22.2 Genetics

| Feature | Status | Notes |
| --- | --- | --- |
| Automatic reading of laboratory reports, exact reader | Available | Verified exact on the current laboratory format |
| Automatic reading, flexible reader for unknown layouts | Available | Approximately 93 percent accuracy; flags uncertainties for review |
| Human review and correction queue | Available | |
| Report assignment with consent confirmation | Available | |
| Unassignment with immediate access removal | Available | |
| Anonymous sample handling and controlled re-identification | Available | |
| The child's My Traits section | Available | PRO only |
| Trait detail, search and category browsing | Available | |
| Original PDF viewing in the app | Available | |
| Counsellor genetic profile view | Available | |
| Administrator report workspace | Available | |
| Teacher curated learning profile | Available | |
| Nutrition and athletic blueprints with genetic adjustments | Available | |
| Guardian viewing a child's genetic report | In development | Deliberately deferred |
| Polygenic risk scores | In development | Display exists; scores are not generated |
| Pharmacogenomics insight | In development | Display exists; content is not generated |
| Automatic report reading in the live production environment | Limited | Report processing capacity is currently enabled in the pre-production environment; production needs the same enablement before reports uploaded there will be read |

## 22.3 The AI companion

| Feature | Status | Notes |
| --- | --- | --- |
| Helix text chat with actions | Available | |
| Textbook-grounded schoolwork help | Available | |
| Improved textbook search with re-ranking | Ready, not enabled | Awaiting completion of a content re-processing step for classes 11 and 12. The current search works today |
| Push-to-talk voice | Available | |
| Continuous conversational voice | Ready, not enabled | Held back for data-residency reasons; see Section 19 |
| Screen-aware Helix | Available | |
| Child-safety guardrails | Available | |
| Practice quiz and teach-back through conversation | Available | |
| Day-plan management by conversation | Available | |
| Proactive companion messages | Ready, not enabled | |
| Conversational learning assessment | Ready, not enabled | |
| Food photograph analysis | Available | |
| Report-card scanning | Available | |
| Handwritten note review | Available | |
| Lesson generation in fifteen methods | Available | |
| Chapter summaries, concepts, flashcards and quizzes | Available | |
| Study plan generation | Available | |
| Syllabus pacing plans, generic and personalised | Available | |
| Genetic personalisation of every tutor surface | Designed | The design is approved; implementation not started |
| AI-generated health insights | In development | Placeholder only |

## 22.4 Learning and academics

| Feature | Status | Notes |
| --- | --- | --- |
| Learning hub | Available | |
| Lesson learner with six tabs per chapter | Available | |
| Academic results dashboard | Available | |
| Report-card scanning and exam records | Available | |
| Chapter mastery mapping | Available | |
| Study plans with completion and streaks | Available | |
| Activity reports and study rhythm | Available | |
| Roadmaps, student view | Available | |
| Roadmaps and academics, parent view | Limited | Shows prepared sample data rather than live figures |
| Day planner | Available | |
| Lesson planner for teachers | Available | |
| Learning assessment, tap-through | Available | |
| Experience points, badges and streaks | Available | |
| Discovery journey | Available | |
| Cognitive games | Limited | Eight of ten playable |
| Content library | In development | The reader is complete; the content is placeholder |

## 22.5 Health and wellness

| Feature | Status | Notes |
| --- | --- | --- |
| Phone step tracking | Available | |
| Apple Health integration | Available | |
| Android Health Connect integration, including Samsung watches | Available | |
| Optional write-back to Apple Health or Health Connect | Available | Off by default |
| Activity rings and wellness home | Available | |
| iPhone widget and Live Activity | Available | |
| Wearable connection experience and trends | Available | |
| Automatic workout detection | Available | Opt-in |
| Bluetooth health devices with live heart rate | Available | |
| Growth, vitals and laboratory records | Available | |
| Health metrics dashboard | Available | |
| Health-ATM kiosk fleet management | Limited | Fleet management works; the wider kiosk workflow is partial |
| Kiosk medical-report scanning in the app | Available | |
| Parent's own step data saved to the account | In development | A parent's steps display correctly but are not yet persisted |
| Apple Watch raw motion recording | Limited | A development tool, not a user feature |
| Nature-versus-nurture correlation | In development | Both sides collected; the analysis engine is not built |

## 22.6 Nutrition and fitness

| Feature | Status | Notes |
| --- | --- | --- |
| Diet profile wizard and plan generation | Available | |
| Meal completion, swapping and alternatives | Available | |
| Plan-aware meal scanning | Available | |
| Standalone food photograph analysis | Available | |
| Nutrition blueprint with genetic adjustments | Available | |
| Grocery lists | Available | |
| Water, weight and sleep logging | Available | |
| Daily nutrition ledger | Available | |
| Weekly analysis and progress | Available | |
| Workout plan generation and customisation | Available | |
| Manual plan builder | Available | |
| Live gym session logging | Available | |
| Personal records and progression | Available | |
| Habits, points and achievements | Available | |
| Workout reminders | Available | |
| Athletic blueprint | Available | |
| In-app store purchases | In development | Presented as coming soon |

## 22.7 Staff and partner features

| Feature | Status | Notes |
| --- | --- | --- |
| Counsellor portal, caseload and genetic profiles | Available | |
| Counsellor report workspace | Available | |
| Counsellor consultations | Available | |
| Counsellor messaging | Limited | No inbox in the mobile app yet |
| Teacher portal | Limited | Fully functional; access control by role must be closed before an external school pilot |
| Teacher doubts inbox | Limited | Partly placeholder-backed |
| Administrator genetic report workspace | Available | |
| Health and genetic master data console | Available | |
| Users, roles and plan approvals | Available | |
| Schools, camps and enrolment | Available | |
| Organisation hierarchy | Available | |
| Hospitals and referrals | Available | |
| Prescriptions and medicines | Available | |
| Laboratory result verification | Available | |
| Telehealth booking and clinical records | Available | |
| Telehealth live video and audio | In development | The call connects; no audio or video is carried |
| Analytics consoles | Available | |
| Audit records | Available | |
| Command centre alerts | Limited | The workspace exists; automatic rule evaluation is not running |
| Games administration | Available | |

## 22.8 Platform services

| Feature | Status | Notes |
| --- | --- | --- |
| Push and in-app notifications | Available | |
| Email notifications | Available | |
| SMS and WhatsApp notifications | Available | Where the messaging service is configured |
| Notification preferences and quiet hours | Available | |
| Deep-linking from notifications | Available | |
| Legal document versioning and consent capture | Available | |
| Consent records and audit trail | Available | |
| Consent enforcement blocking | Ready, not enabled | The most significant compliance item to close |
| Data-subject rights: access, export, erasure, withdrawal | Available | |
| Grievance, nominee and breach processes | Available | |
| Data retention enforcement | Ready, not enabled | Retention rules defined; automatic enforcement is off |
| Diet and workout reminder scheduling | Available | |
| Six other scheduled background processes | In development | Device health sync, automated report generation, scheduled risk assessment, medication reminders, alert processing and audit cleanup are scheduled but not yet built |
| English and Arabic interface | Available | |
| Multilingual tutor and textbook content | Available | |

---

# 23. Suggested Demonstration Flow

A forty-minute demonstration that shows the platform's real strengths in a defensible order. Everything in this flow is in the Available column of Section 22.

## 23.1 Set-up before the meeting

Have ready:

- A parent account with two children, one on PRO with a genetic report assigned
- A staff account with access to the genetic reports workspace
- A counsellor account with the same child in its caseload
- A laboratory report PDF to upload live
- A phone with the app installed and Apple Health or Health Connect already connected

## 23.2 The flow

**Minutes 0 to 5 — the premise.** Open on the parent's home screen. Explain that the platform starts with a saliva sample and ends with software that teaches a specific child differently. State the four things a genetic report changes: how the tutor teaches, what the nutrition plan targets, how the fitness plan is shaped, and what the adults around the child see.

**Minutes 5 to 12 — read a real report live.** In the staff portal, upload the laboratory PDF against a kit code. Show the read completing in about ten seconds. Open the rendered display and show the depth: every trait, gene readings, bands, ticked recommendation columns, personality panels. Then show the four self-checks: nothing dropped, nothing invented, gene readings agreeing with the report's own glossary, row counts matching what is drawn on the page.

This is the single most persuasive segment in the demonstration, because most competitors in the space still transcribe reports by hand.

**Minutes 12 to 16 — assign it, with consent.** Show the assignment step. Point out the four preconditions and the recorded consent confirmation. Then show unassignment cutting access immediately. This is the segment that satisfies a compliance-minded audience.

**Minutes 16 to 22 — the child's view.** Switch to the phone, enter the child's PIN, open My Traits. Browse a category, open a trait, show the genes and the recommendation. Then make the safety point explicitly: show that the risk traits are not here, and explain that they are visible to the parent and the counsellor instead.

**Minutes 22 to 30 — the tutor.** Ask Helix a schoolwork question from the child's actual textbook. Show that the answer comes from the book. Ask a follow-up in fragmentary language and show the lesson continue. Ask for a practice quiz and answer one question wrong. Then ask something the book does not cover and show the honest refusal with chapter suggestions. Finally, ask it something inappropriate for a child and show the redirect.

Then use voice for one question, so the audience hears the reply begin before the whole answer is written.

**Minutes 30 to 35 — the rest of the product.** Open the nutrition blueprint and show the genetic adjustments to the calorie and macro targets — this is the clearest visible link between genetics and daily life. Photograph a plate of food with NutriScan. Show the activity rings and the iPhone widget.

**Minutes 35 to 40 — the professional side.** Open the counsellor portal. Show the caseload, then the full genetic profile with correct risk framing. Point out that everything the counsellor sees flows from one caseload definition, that out-of-scope samples simply do not exist as far as the counsellor is concerned, and that every genuine view is recorded.

## 23.3 What not to show

| Do not demonstrate | Why |
| --- | --- |
| Telehealth video calls | The call connects but carries no audio or video |
| The content library | The content is placeholder |
| Parent academics roadmaps | Shows prepared sample data, not live figures |
| Continuous conversational voice | Deliberately switched off |
| Nature-versus-nurture correlations | Collected but not yet computed |
| Command centre automatic alerting | Rules do not fire yet |
| Password reset or phone sign-in | Delivery not enabled |
| The two unfinished games | No engine yet |

If an audience asks about any of these, the honest framing is strong: the records, the screens and the workflow are all built, and the missing piece is named and scheduled. Section 24 supports that answer with specifics.

---

# 24. Current Limitations

Stated plainly and in functional terms, most important first. Every item here is real and verified against the working product.

## 24.1 Items to close before a wider external launch

| # | Limitation | Impact | What it needs |
| --- | --- | --- | --- |
| 1 | **Consent enforcement is not switched on.** Consent is captured and recorded, but a request from a user who has not completed consent is not currently refused | The strongest compliance control in the platform is not yet active | Complete the consent flow for existing accounts, then enable enforcement |
| 2 | **The teacher portal does not restrict by role.** Any signed-in user who navigates directly to it reaches it | A school pilot would expose teacher pages to any account | Restore the role restriction. A small change |
| 3 | **Automatic report reading is not enabled in the live production environment.** It runs in the pre-production environment | A report uploaded in production today would wait indefinitely rather than being read | Enable the same processing capacity in production |
| 4 | **A security hygiene item exists in the engineering repositories** requiring credential rotation | Standard hygiene rather than a known incident | Rotate the affected credentials. Detailed in the technical documentation |
| 5 | **Password reset and phone-based codes are not delivered** | Users cannot reset a password themselves; phone sign-in cannot be used | Enable the two delivery paths. Both are small pieces of work |

## 24.2 Features present but not yet functional

| Limitation | Current state |
| --- | --- |
| **Telehealth video and audio** | The call screen connects and manages call state; no media is carried. Booking, consultations and clinical records all work |
| **Nature-versus-nurture correlation** | Approximately 416 nurture measures are defined, mapped to genetic traits, and collected through four parent-facing screens. The tuning parameters are configurable. The analysis that would compute a correlation is not built. This is the product's stated central thesis and its largest single gap |
| **AI-generated health insights and risk assessments** | The screens and records exist; the generation behind them is placeholder |
| **The content library** | The reading experience, spoken playback, search, categories and bookmarks are all complete. The content is sample material, not a live catalogue |
| **Automatic alerting in the command centre** | Alerts, their lifecycle and configurable rules exist; nothing evaluates the rules automatically |
| **Polygenic risk scores and pharmacogenomics** | Records and display surfaces exist; no content is generated for them |
| **Six scheduled background processes** | Device health sync, automated report generation, scheduled risk assessment, medication reminders, alert processing and audit-record cleanup are all scheduled but not yet built. Diet and workout reminders, notification delivery and the daily deletion process do run |
| **In-app store purchasing** | Presented as coming soon |
| **Two of the ten games** | Decision Dash and Creativity Cosmos have no playable engine |
| **Biometric unlock** | Configured but never invoked |

## 24.3 Features working with a named gap

| Limitation | Detail |
| --- | --- |
| **A guardian cannot view a child's genetic report** | Explicitly deferred. A parent sees their own report; a child sees their own. Guardian access to a child's report is a product and consent decision that has not yet been made |
| **Parent academics screens show prepared sample data** | The monthly roadmap, weekly milestones, subject progress, activity report and mastery views in the parent app are not yet connected to live figures |
| **A parent's own step data is not saved** | A parent's steps are counted and displayed correctly but not persisted to their account, so history is lost between sessions. A student's steps save correctly |
| **Counsellor messages have no delivery surface in the app** | A counsellor can send a message from the portal; the family has no inbox in the mobile application to receive it |
| **The teacher doubts inbox is partly placeholder-backed** | Some teacher pages still read prepared sample data rather than live records |
| **Google and Apple sign-in are not offered** | Both work; no screen presents them |
| **Passwordless email sign-in is not offered** | Same |
| **Health-ATM kiosk workflow is partial** | Fleet management works; the end-to-end kiosk measurement journey is incomplete |

## 24.4 Limits of the report reading capability

| Limitation | Detail |
| --- | --- |
| **The exact reader knows two report layouts** | Both variants of the current laboratory's format. A third arrangement falls back to assumed page positions, which may be wrong. A diagnostic exists to check an unfamiliar report before trusting it |
| **The exact reader is verified against one report** | One report is the fully verified reference. On the other known variant it leaves some lines uncovered and over-counts one section |
| **The flexible reader's weak point is band reading** | Roughly a quarter of chart-page bands were misread in the measured run. This did not improve with prompt changes, which is why the exact reader is preferred and why the recommended fix is to reuse the exact reader's measurement approach |
| **The flexible reader occasionally corrects the report's own typos** | The source reports contain spelling errors in trait names. Correcting them breaks the verification that checks output against the page, so they are deliberately preserved |
| **A new laboratory format needs work before it is exact** | The flexible reader handles it immediately at lower accuracy; making it exact requires teaching the platform that layout |
| **Roughly fifty of the traits carry no advice in the source report** | The product says "not provided in report" rather than inventing advice. This is correct behaviour, and it is worth setting the expectation with a customer |
| **The full catalogue of genes tested is not stored** | Three reference pages of the report are not converted into records |

## 24.5 Capabilities deliberately held back

| Held back | Reason |
| --- | --- |
| **Continuous conversational voice** | The only viable model would move children's audio outside India. Fully built, deliberately off. A compliant equivalent exists in the test environment and a formal request has been made to the vendor |
| **Proactive companion messages** | Built with extensive safety guardrails; awaiting a rollout decision |
| **Household profile switching** | Enabled in the internal test environment; awaiting a general-release decision |
| **The improved textbook search** | Awaiting completion of content re-processing for classes 11 and 12. The current search works today |
| **Automatic data-retention enforcement** | Rules defined; automatic deletion not switched on |
| **The conversational learning assessment** | Built; awaiting a rollout decision |

## 24.6 One documentation caveat worth knowing

The engineering repositories contain more than eighty documents written across several phases of the project, and a number of them contradict each other and the working product. This feature guide and its technical companion were both written from the working product itself rather than from those documents, and both should be treated as the current authority.

---

# 25. Planned Enhancements

## 25.1 Committed work with approved designs

| Enhancement | What it delivers |
| --- | --- |
| **Genetic personalisation across every tutor surface** | The design is approved. It would give the tutor a consistent, explicit set of learning directives derived from the genetic report — session length and structure, best study time, scaffolding approach, named strengths to lean on and areas to support, and tone — applied identically on every surface. The safety model is locked: the full profile is used internally to decide how to teach, and the words shown to a child never name a gene, a trait, a risk or a medical term |
| **Redesigned sign-in with phone codes** | A detailed implementation plan exists for one-time-code sign-in and a simplified signup |

## 25.2 The largest opportunity

**Build the nature-versus-nurture correlation engine.** Everything around it is in place: 416 nurture measures, the mapping to genetic traits, four parent-facing collection screens, the tuning configuration and the display surfaces. This is the product's stated central thesis, it is the thing no competitor is positioned to do, and it is currently the biggest gap between the promise and the product.

## 25.3 Feature completion

| Enhancement | Value |
| --- | --- |
| Real telehealth video and audio | Completes a module that is otherwise fully built |
| Guardian access to a child's genetic report | The most-requested missing capability in the parent experience |
| Connect the parent academics screens to live data | Removes the single largest inconsistency in the parent app |
| Persist a parent's step data | Small change, completes the parent wellness experience |
| A family inbox in the app for counsellor messages | Makes counsellor messaging genuinely usable |
| Live content in the library | The reading experience is already built and good |
| The two remaining games | Completes the cognitive assessment set |
| Automatic alert rule evaluation | Turns the command centre from a workspace into a monitoring capability |
| Generated polygenic risk scores and medication-response insight | Two clinically valuable additions with display surfaces already built |
| Teach the exact reader additional report layouts | Removes per-report AI cost and review effort as new laboratory partners are added |
| Improve band accuracy in the flexible reader | Reuse the exact reader's measurement approach; the known weak point |

## 25.4 Product opportunities

| Opportunity | Rationale |
| --- | --- |
| **Cohort and school-level genetic insight** | Schools would value aggregate, anonymous patterns across a year group; everything needed to produce them is already collected |
| **Sibling and family comparison** | Households already hold multiple related profiles |
| **Longitudinal tracking** | Growth, academic performance and habits are already captured over time; the trend story is not yet told |
| **Teacher-facing lesson library** | Generated lessons are currently produced on demand and discarded; a shareable library would compound their value |
| **Parent digest** | A weekly summary of a child's learning, health and habits, delivered by notification or email |
| **Counsellor consultation notes reaching the family** | Closes the loop between a counselling session and the family's own view |
| **Wearable coverage beyond Apple and Samsung** | The integration is platform-level, so most devices that write to Apple Health or Health Connect already work; explicit support and labelling for more device families would broaden the claim |

## 25.5 Operational maturity

| Improvement | Why |
| --- | --- |
| Switch on consent enforcement | The single most significant compliance item |
| Switch on automatic data-retention enforcement | Completes the data-lifecycle story |
| Enable report processing in production | Required before genetic reports can be operated at production scale |
| Complete the multilingual textbook content for classes 11 and 12 | Unblocks the improved textbook search for senior students |
| Formalise monitoring and alerting | Currently light relative to the platform's clinical sensitivity |

---

# 26. Glossary

| Term | Meaning |
| --- | --- |
| **AURE profile** | The four-domain learning profile produced by the psychometric assessment: preferred ways of learning, dominant intelligences, areas needing support, and the tone that works best |
| **Band** | The level or risk category of a trait result: low, medium or high. In three trait groups it means risk; everywhere else it means level |
| **BASIC** | The plan tier without genetic features |
| **Blueprint** | A screen that shows how a plan's targets were calculated, including the genetic adjustments. There is a nutrition blueprint and an athletic blueprint |
| **Brain coins** | The reward currency in the cognitive games |
| **Care seeker** | The platform's term for the subject of the data: a student, or an adult wellness user |
| **Caseload** | The defined set of users a genetic counsellor is responsible for. Everything a counsellor can see or do derives from it |
| **Daily ledger** | The authoritative daily nutrition total, combining planned meals, completions, scans and quick logs |
| **DPDP Act** | India's Digital Personal Data Protection Act of 2023, the governing privacy law |
| **Health-ATM** | A physical kiosk that takes basic health measurements |
| **Health camp** | A sample-collection event held at a school |
| **Health Connect** | Android's platform-level health data hub, which Samsung Health and other apps write into |
| **Helix** | The platform's AI companion: a tutor for students, a professional assistant for parents |
| **Household** | A parent account plus the child accounts under it |
| **Learning profile** | See AURE profile. Also used for the curated nine-indicator view a teacher sees |
| **Lesson learner** | The per-chapter study surface with summary, ask, flashcards, quiz, book and videos |
| **Marker position** | Where a trait result sits on a visual scale in the laboratory report |
| **Mastery** | An estimate of how well a student knows a particular chapter, derived from quizzes, teach-backs, study sessions and exam results |
| **My Traits** | The child's or adult's own genetic report section in the app |
| **Nature versus nurture** | The platform's framing for comparing inherited disposition against measured environment and lifestyle |
| **NutriScan** | Food photograph analysis |
| **Nurture measure** | One of approximately 416 defined environmental or lifestyle measurements |
| **Pacing plan** | A syllabus-level plan covering every chapter of every subject across an academic year |
| **Pedigree** | A family health chart collected from the parent |
| **PRO** | The plan tier that includes genetic features |
| **Profile (genetic)** | A group of related genetic traits, such as the vitamins profile. Twenty-six exist |
| **Proactive companion** | The feature where the tutor starts the conversation, at most once a day |
| **Psychometric assessment** | The learning-style questionnaire |
| **Roadmap** | A goal-driven multi-week learning path |
| **Sample code** | The anonymous identifier, such as CA101, under which all genetic data is stored |
| **School Genomics** | The student-focused product mode |
| **Study plan** | A weekly plan across the student's weak and focus chapters |
| **Teach-back** | A session where a child explains a concept in their own words and the tutor assesses understanding |
| **Textbook grounding** | Answering from the child's actual prescribed textbook rather than from general knowledge |
| **Trait** | A single genetic characteristic with a result, the genes behind it and advice. Approximately 113 to 117 per report |
| **Health and Wellness** | The adult-focused product mode |

---

**End of document**

*GenExcel Product and Feature Guide, version 1.0, 5 August 2026. Prepared from the working product. For technical detail, see the GenExcel Platform Complete Technical and Functional Documentation.*
