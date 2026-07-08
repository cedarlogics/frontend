import { motion } from 'framer-motion';

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using CedarLogics services, including our website at cedarlogics.com and the CedarLogics Console platform, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you may not use our services.

These Terms apply to all visitors, users, and customers of CedarLogics. We reserve the right to update these Terms at any time, and your continued use of our services constitutes acceptance of any changes.`,
    },
    {
      title: '2. Services Description',
      content: `CedarLogics provides software engineering services, AI platform products, and the CedarLogics Console SaaS platform. Our services are intended for business and professional use.

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will provide reasonable notice of material changes to paid service subscribers.`,
    },
    {
      title: '3. Account Registration',
      content: `To access certain features, you must register for an account. You agree to:
• Provide accurate, current, and complete information during registration
• Maintain and update your account information
• Keep your credentials confidential and not share them
• Notify us immediately of any unauthorized access to your account
• Accept responsibility for all activity conducted through your account

You must be at least 18 years old and have the authority to enter into these Terms on behalf of any organization you represent.`,
    },
    {
      title: '4. Acceptable Use',
      content: `You agree not to use our services to:
• Violate any applicable law or regulation
• Infringe intellectual property rights of any third party
• Transmit malware, spam, or any destructive code
• Attempt to gain unauthorized access to our systems
• Interfere with the operation of our services or other users
• Reverse engineer, decompile, or disassemble our software
• Use our services for cryptocurrency mining or similar resource-intensive unauthorized tasks
• Engage in any activity that could harm CedarLogics or its users

We reserve the right to suspend or terminate accounts that violate these terms without prior notice.`,
    },
    {
      title: '5. Intellectual Property',
      content: `CedarLogics and its licensors own all intellectual property rights in our services, including software, design, text, graphics, and branding. You may not copy, modify, distribute, or create derivative works of our proprietary materials without explicit written permission.

For custom software development engagements, intellectual property ownership is governed by the specific project agreement. By default, upon full payment, clients receive full ownership of custom code developed for them, with CedarLogics retaining no license to the delivered work.`,
    },
    {
      title: '6. Payment and Billing',
      content: `For paid services, you agree to pay all fees in accordance with the pricing presented at the time of purchase. All fees are non-refundable except where required by applicable law or as specified in individual service agreements.

For subscription services, fees are billed in advance on a monthly or annual basis. Failure to pay may result in suspension of service. You are responsible for all taxes applicable to your use of our services.`,
    },
    {
      title: '7. Confidentiality',
      content: `Both parties agree to keep confidential any non-public information disclosed in connection with a service engagement. This includes technical architecture, business processes, personnel information, and financial data.

Confidentiality obligations survive the termination of any agreement for a period of three (3) years, except for information that becomes publicly known through no fault of the receiving party.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `To the maximum extent permitted by law, CedarLogics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if advised of the possibility of such damages.

Our total cumulative liability for any claims arising under these Terms shall not exceed the greater of (a) the amount you paid in the 12 months preceding the claim or (b) $1,000 USD.`,
    },
    {
      title: '9. Indemnification',
      content: `You agree to indemnify and hold harmless CedarLogics and its officers, directors, employees, and agents from any claims, damages, costs, and expenses (including reasonable legal fees) arising from:
• Your use of our services
• Your violation of these Terms
• Your violation of any third-party rights
• Content you submit or transmit through our services`,
    },
    {
      title: '10. Governing Law',
      content: `These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in San Francisco County, California.

You waive any objection to venue in such courts. For international users, we comply with applicable local regulations and your statutory consumer rights are not affected by these Terms.`,
    },
    {
      title: '11. Contact',
      content: `For questions about these Terms, contact us at:

CedarLogics Legal
legal@cedarlogics.com

San Francisco, CA, United States

We aim to respond to all legal inquiries within 5 business days.`,
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="section-label mb-4">
            <div className="w-4 h-px bg-cedar-red" />Legal
          </div>
          <h1 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">Terms & Conditions</h1>
          <p className="text-cedar-frost/50">
            Effective date: January 1, 2025 &nbsp;·&nbsp; Last updated: June 1, 2025
          </p>
          <div className="h-px bg-cedar-red/5 mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 glass-card rounded-2xl p-6"
        >
          <p className="text-cedar-frost/70 leading-relaxed">
            Please read these Terms and Conditions carefully before using any CedarLogics service. 
            These Terms constitute a legally binding agreement between you and CedarLogics. If you 
            are using our services on behalf of an organization, you represent that you have the 
            authority to bind that organization to these Terms.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}
            >
              <h2 className="font-display font-semibold text-xl text-cedar-frost mb-3">{section.title}</h2>
              <div className="text-cedar-frost/60 leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </div>
              {i < sections.length - 1 && <div className="h-px bg-cedar-red/5 mt-8" />}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
