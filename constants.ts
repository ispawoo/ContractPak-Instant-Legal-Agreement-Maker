import { ContractTemplate } from './types';

export const TEMPLATES: ContractTemplate[] = [
  {
    id: 'freelancer',
    name: 'Freelancer Service Agreement',
    description: 'A contract for freelancers to define project scope, payment, and timelines with a client.',
    clauses: [
      { id: 'fs-0', title: 'Parties', content: 'This Service Agreement ("Agreement") is made between {{FREELANCER_NAME}} of {{FREELANCER_ADDRESS}} ("Freelancer") and {{CLIENT_NAME}} of {{CLIENT_ADDRESS}} ("Client").' },
      { id: 'fs-1', title: '1. Services', content: 'Freelancer agrees to provide Client with the following services: {{SERVICE_DETAILS}}.' },
      { id: 'fs-2', title: '2. Payment', content: 'Client agrees to pay Freelancer a total fee of ${{TOTAL_FEE}} for the services. Payment shall be made according to the following schedule: {{PAYMENT_SCHEDULE}}.' },
      { id: 'fs-3', title: '3. Project Timeline', content: 'The project will commence on {{START_DATE}} and is expected to be completed by {{END_DATE}}.' },
      { id: 'fs-4', title: '4. Ownership of Work Product', content: 'Upon final payment for the services, Freelancer grants Client all rights, title, and interest in the work product delivered under this Agreement.' },
      { id: 'fs-5', title: '5. Confidentiality', content: 'Freelancer agrees to keep all non-public information received from the Client confidential and not to disclose it to any third party.' },
      { id: 'fs-6', title: '6. Independent Contractor', content: 'Freelancer is an independent contractor, not an employee of the Client. Freelancer is responsible for their own taxes.' },
      { id: 'fs-7', title: '7. Termination', content: 'Either party may terminate this Agreement with {{TERMINATION_NOTICE_DAYS}} days written notice. If Client terminates, they agree to pay for all work completed up to the termination date.'}
    ],
  },
  {
    id: 'nda',
    name: 'Non-Disclosure Agreement (NDA)',
    description: 'A standard agreement to maintain confidentiality between two parties when sharing sensitive information.',
    clauses: [
      { id: 'nda-0', title: 'Parties', content: 'This Non-Disclosure Agreement ("Agreement") is entered into between {{DISCLOSING_PARTY_NAME}} of {{DISCLOSING_PARTY_ADDRESS}} ("Disclosing Party") and {{RECEIVING_PARTY_NAME}} of {{RECEIVING_PARTY_ADDRESS}} ("Receiving Party").' },
      { id: 'nda-1', title: '1. Definition of Confidential Information', content: 'Confidential Information includes all non-public information disclosed by the Disclosing Party to the Receiving Party, including but not limited to business plans, customer lists, financial data, trade secrets, and proprietary information.' },
      { id: 'nda-2', title: '2. Obligations of Receiving Party', content: 'Receiving Party agrees not to disclose the Confidential Information to any third party and to use it solely for the purpose of {{PURPOSE_OF_DISCLOSURE}}.' },
      { id: 'nda-3', title: '3. Term', content: 'This Agreement is effective as of {{EFFECTIVE_DATE}} and the obligation of confidentiality will remain in effect for a period of {{TERM_LENGTH_YEARS}} years from this date.' },
      { id: 'nda-4', title: '4. Exclusions', content: 'Confidential Information does not include information that is (a) publicly known, (b) already in the Receiving Party\'s possession before disclosure, or (c) independently developed by the Receiving Party.'},
      { id: 'nda-5', title: '5. Governing Law', content: 'This Agreement shall be governed by the laws of the State of {{STATE}}.' },
    ],
  },
  {
    id: 'retainer',
    name: 'Retainer Agreement',
    description: 'An agreement for ongoing services where a client pays in advance for a set amount of work each month.',
    clauses: [
      { id: 'ra-0', title: 'Parties', content: 'This Retainer Agreement ("Agreement") is between {{PROVIDER_NAME}} of {{PROVIDER_ADDRESS}} ("Provider") and {{CLIENT_NAME}} of {{CLIENT_ADDRESS}} ("Client").' },
      { id: 'ra-1', title: '1. Scope of Services', content: 'Provider will provide Client with ongoing services related to {{SERVICE_AREA}}.' },
      { id: 'ra-2', title: '2. Retainer Fee', content: 'Client shall pay a monthly retainer fee of ${{RETAINER_FEE}}, due on the first day of each month. This fee covers up to {{HOURS_PER_MONTH}} hours of work per month.' },
      { id: 'ra-3', title: '3. Term and Termination', content: 'This Agreement begins on {{START_DATE}} and continues on a month-to-month basis. Either party may terminate with {{TERMINATION_NOTICE_DAYS}} days written notice.' },
      { id: 'ra-4', title: '4. Overage', content: 'Any work performed by the Provider beyond the included {{HOURS_PER_MONTH}} hours will be billed at a rate of ${{OVERAGE_RATE}} per hour.' },
      { id: 'ra-5', title: '5. Duties of the Client', content: 'The Client agrees to provide necessary information and materials in a timely manner to allow the Provider to perform the services effectively.'}
    ],
  },
  {
    id: 'influencer',
    name: 'Influencer Collaboration Agreement',
    description: 'A contract for brands collaborating with influencers for marketing campaigns.',
    clauses: [
      { id: 'ic-0', title: 'Parties', content: 'This Influencer Agreement ("Agreement") is made between {{BRAND_NAME}} of {{BRAND_ADDRESS}} ("Brand") and {{INFLUENCER_NAME}} of {{INFLUENCER_ADDRESS}} ("Influencer").' },
      { id: 'ic-1', title: '1. Scope of Work', content: 'Influencer will create and post {{POST_COUNT}} piece(s) of content on the following social media platforms: {{PLATFORMS}}, promoting {{PRODUCT_OR_SERVICE}}.' },
      { id: 'ic-2', title: '2. Content Requirements', content: 'Content must include the hashtag #ad or #sponsored and tag the Brand\'s official account. Specific talking points or visuals are outlined in a separate creative brief. The draft content must be submitted for approval by {{APPROVAL_DATE}}.'},
      { id: 'ic-3', title: '3. Compensation', content: 'In exchange for the services, the Brand will provide the Influencer with the following compensation: {{COMPENSATION_DETAILS}}. Payment will be made within 30 days of the final post.' },
      { id: 'ic-4', title: '4. Content Ownership', content: 'Influencer shall retain ownership of the created content. However, the Influencer grants the Brand a non-exclusive, royalty-free license to use, reproduce, and share the content on its own channels for a period of {{LICENSE_DURATION_MONTHS}} months.' },
      { id: 'ic-5', title: '5. Term and Termination', content: 'This Agreement will commence on {{START_DATE}} and end on {{END_DATE}}. The Brand may terminate the agreement immediately if the Influencer fails to comply with the content requirements.' }
    ]
  }
];
