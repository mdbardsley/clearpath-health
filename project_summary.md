# ClearPath Health - Project Export

## Project Objective
Design a 5-screen responsive (mobile friendly) site focused on "Translating Medical Complexity into Human Clarity."

## Aesthetic
"Healthcare-Calm"—approachable colors, rounded corners, and generous white space to reduce user anxiety.

## Screens Overview

### 1. Welcome & Onboarding
- **Headline**: "Your Health, Simplified."
- **Body**: Value prop about making lab results and discharge papers easy to understand.
- **Action**: Buttons for [Upload Paperwork] and [Connect Medical Records].
- **Trust Signal**: HIPAA Compliant & Secure badge.

### 2. Secure Upload & Connection Hub
- **Feature A**: Drag & Drop / Camera Upload area.
- **Feature B**: Connect My Records section with provider logos.
- **Copy**: Focus on privacy and encryption.

### 3. Processing Screen
- **Visual**: Calming progress visualization.
- **Copy**: "Decoding medical terminology...", "Summarizing your care plan..."

### 4. Diagnosis Dashboard
- **Headline**: "Here is your summary, [Name]."
- **Plain English Card**: 3-sentence summary of diagnosis/lab report.
- **Key Metrics**: Visual gauges for lab values (In Range vs Out of Range).
- **Next Steps**: Bulleted "What do I do now?" list.

### 5. Secure Vault / History
- **View**: List view of past translated documents.
- **Functionality**: Search and "Share with Doctor".

## Technical Stack (Current Mockup)
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI / Shadcn UI
- **Routing**: Wouter
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans

## Repository Structure
- `client/src/pages/`: Page components (onboarding.tsx, upload.tsx, processing.tsx, dashboard.tsx, vault.tsx)
- `client/src/components/`: Shared UI components and Layout
- `client/src/App.tsx`: Routing configuration
- `client/src/index.css`: Design system and theme variables
