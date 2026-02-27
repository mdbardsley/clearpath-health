/**
 * Vault document list with original (medical jargon) and ClearPath plain-English summary.
 * Used in Vault list and DocumentView comparison screen.
 */
export interface VaultDocument {
  id: number;
  title: string;
  date: string;
  provider: string;
  type: string;
  /** Original text as received from provider/lab (medical jargon) */
  originalContent: string;
  /** ClearPath Health plain-English summary */
  summaryContent: string;
}

export const vaultDocuments: VaultDocument[] = [
  {
    id: 1,
    title: "Annual Physical Results",
    date: "Feb 24, 2026",
    provider: "Kaiser Permanente",
    type: "Lab Report",
    originalContent: `COMPREHENSIVE METABOLIC PANEL (CMP)
Specimen: Serum | Collected: 02/24/2026 07:42

RESULTS:
Glucose, fasting: 98 mg/dL (Ref: 70-99)
BUN: 14 mg/dL (Ref: 7-20)
Creatinine: 1.1 mg/dL (Ref: 0.7-1.3)
eGFR: 72 mL/min/1.73m²
Sodium: 140 mEq/L (Ref: 136-145)
Potassium: 4.2 mEq/L (Ref: 3.5-5.0)
Chloride: 102 mEq/L (Ref: 98-106)
CO2: 24 mEq/L (Ref: 23-29)
Calcium: 9.4 mg/dL (Ref: 8.6-10.2)
Albumin: 4.2 g/dL (Ref: 3.5-5.0)
ALT: 22 U/L (Ref: 7-56)
AST: 20 U/L (Ref: 10-40)
Alkaline Phosphatase: 68 U/L (Ref: 44-147)
Total Bilirubin: 0.8 mg/dL (Ref: 0.1-1.2)

LIPID PANEL:
Total Cholesterol: 218 mg/dL (Ref: <200) H
LDL Cholesterol: 145 mg/dL (Ref: <100) H
HDL Cholesterol: 52 mg/dL (Ref: >40)
Triglycerides: 105 mg/dL (Ref: <150)
Non-HDL Cholesterol: 166 mg/dL

VITAMIN D, 25-HYDROXY: 42 ng/mL (Ref: 30-100)
IRON, SERUM: 120 mcg/dL (Ref: 60-170)
HEMOGLOBIN: 14.2 g/dL (Ref: 12.0-16.0)

IMPRESSION: Fasting glucose WNL. CMP unremarkable. Lipid panel notable for elevated LDL; consider lifestyle modification. Vitamin D and iron within reference range.`,
    summaryContent: `Your blood work shows your cholesterol is slightly high, but your kidney and liver functions are perfectly normal.

In plain terms:
1. Your Vitamin D levels have improved significantly since your last visit and are now in a healthy range.
2. The "elevated LDL" means your "bad" cholesterol is a bit high. It's not at a critical level yet—your doctor may suggest watching saturated fat and adding more movement, but no need to panic.
3. Your blood sugar (glucose), kidney function (creatinine, eGFR), and liver numbers (ALT, AST) are all normal.
4. No immediate medication changes are recommended; lifestyle adjustments are the main focus.

What to do next: Schedule a follow-up with your doctor in about 6 months, keep taking Vitamin D as prescribed, and consider small diet and activity changes to help lower LDL.`,
  },
  {
    id: 2,
    title: "Cardiology Consultation",
    date: "Jan 10, 2026",
    provider: "Stanford Health",
    type: "Specialist Note",
    originalContent: `STANFORD HEALTH CARE - CONSULTATION NOTE
Cardiology | Date of Service: 01/10/2026

CHIEF COMPLAINT: Palpitations, dyspnea on exertion.

HISTORY OF PRESENT ILLNESS:
Patient is a 52 y/o female with PMH of HTN, hyperlipidemia. Presents with 3-week history of intermittent palpitations described as "heart fluttering," occurring 2-3x/week, lasting seconds to minutes. Associated with mild DOE when climbing 2 flights of stairs. Denies chest pain, orthopnea, PND, syncope. No recent illness or caffeine excess.

MEDICATIONS: Lisinopril 10mg daily, Atorvastatin 20mg qHS.

PHYSICAL EXAM:
Vitals: BP 128/82, HR 72 reg, RR 14, O2 sat 98% RA.
Cardiovascular: RRR, S1 S2, no M/R/G. No JVD, no LE edema.

ASSESSMENT/PLAN:
1. Palpitations — likely benign; consider Holter if persistent. Avoid stimulants.
2. DOE — given CV risk factors, obtain stress test to r/o ischemia. Echo scheduled.
3. HTN — at goal; continue lisinopril.
4. Hyperlipidemia — at goal on statin; continue atorvastatin.

Follow-up in 4 weeks with echo and stress results.`,
    summaryContent: `Your cardiology visit focused on two things: occasional "heart fluttering" (palpitations) and getting a bit winded when you go up stairs.

What the doctor found:
• Your heart rhythm and blood pressure look fine in the office. The palpitations are likely harmless, but if they keep happening, the doctor may suggest a 24-hour heart monitor (Holter) to double-check.
• The shortness of breath when you climb stairs could be nothing, but given your history (blood pressure and cholesterol), the doctor wants to rule out any blood flow issue to the heart. So they've ordered:
  - A stress test (walking on a treadmill while your heart is monitored)
  - An echocardiogram (ultrasound of your heart)
• Your blood pressure and cholesterol are well controlled on your current medicines—no changes needed.

Next step: Come back in about 4 weeks with the results of your echo and stress test so you can review them together.`,
  },
  {
    id: 3,
    title: "Urgent Care Discharge",
    date: "Nov 05, 2025",
    provider: "CityMD",
    type: "Discharge Summary",
    originalContent: `CITYMD URGENT CARE - DISCHARGE INSTRUCTIONS
DOB: ***-**-**** | DOS: 11/05/2025

DIAGNOSIS: Acute upper respiratory infection, likely viral. R/o early bronchitis.

ASSESSMENT:
Patient presented with 3 days of rhinorrhea, nonproductive cough, low-grade fever (max 100.2°F), malaise. Oropharynx mildly erythematous, no exudate. Lungs clear to auscultation bilaterally. No focal findings. Rapid flu/COVID neg.

RECOMMENDATIONS:
- Supportive care: rest, fluids, acetaminophen or ibuprofen PRN for fever/myalgia
- OTC cough suppressant (dextromethorphan) if cough bothersome; avoid in first trimester
- Return if high fever (>101.5°F), dyspnea, chest pain, or symptoms >10 days
- No antibiotics indicated at this time; re-evaluate if worsening or no improvement in 5-7 days

Follow up with PCP as needed.`,
    summaryContent: `You were seen for what’s likely a common cold or mild viral respiratory infection—not flu or COVID based on the tests done.

What to do at home:
• Rest and drink plenty of fluids.
• Use acetaminophen or ibuprofen as needed for fever or body aches.
• If the cough is bothersome, you can try an over-the-counter cough medicine (e.g. with dextromethorphan). If you might be pregnant, skip that and ask your doctor first.
• Antibiotics were not prescribed because this type of infection is usually viral; they don’t help for viruses and can cause side effects.

When to come back or seek care:
• Fever above 101.5°F, trouble breathing, or chest pain.
• Symptoms that last more than 10 days or get worse after 5–7 days.

Otherwise, follow up with your regular doctor if you have more concerns.`,
  },
  {
    id: 4,
    title: "Vaccination Record",
    date: "Sep 15, 2025",
    provider: "CVS Health",
    type: "Immunization",
    originalContent: `CVS HEALTH - IMMUNIZATION RECORD
Patient: [Name] | DOB: ***-**-****
Location: CVS Pharmacy #4521 | Date: 09/15/2025

VACCINE ADMINISTERED:
 influenza vaccine, inactivated, quadrivalent (IIV4), split virion, 0.5 mL IM (standard dose, age-appropriate). Lot: FLU2025-XX. Exp: 06/2026. Site: Left deltoid.

Prevaccination screening per ACIP; no contraindications. Consent obtained. VIS provided.

No adverse events observed during 15-min observation. Patient instructed on local reactions (soreness, erythema), systemic symptoms (low-grade fever, myalgia), and to seek care for signs of severe allergic reaction.`,
    summaryContent: `You received your annual flu shot (quadrivalent flu vaccine) at CVS. The dose and type were appropriate for your age.

What was done:
• The vaccine was given in your left upper arm (deltoid). You were screened for any reasons not to get the shot, and the vaccine information sheet was provided.
• You were observed for about 15 minutes afterward with no problems.

What to expect:
• Your arm may be sore, red, or slightly swollen at the injection site.
• You might feel a bit tired or have a low-grade fever or muscle aches for a short time. These are common and usually mild.
• If you notice signs of a serious allergic reaction (e.g., trouble breathing, swelling of the face or throat, fast heartbeat, dizziness), get medical help right away.

No other issues were noted. Keeping your flu shot up to date helps protect you each flu season.`,
  },
];

export function getVaultDocumentById(id: number): VaultDocument | undefined {
  return vaultDocuments.find((doc) => doc.id === id);
}
