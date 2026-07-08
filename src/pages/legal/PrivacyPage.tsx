import { motion } from 'framer-motion';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, contact us through our website, or request a demonstration of our services.

This may include:
• Name, email address, phone number, and company information
• Usage data and interaction logs when you use CedarLogics Console
• Technical information including IP address, browser type, and device identifiers
• Payment information processed securely through our payment providers (we do not store full card details)
• Communications you send to us

We also collect information automatically when you visit our website, including cookies, log data, and analytics through privacy-respecting tools.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, security alerts, and support messages
• Respond to your comments and questions
• Analyze usage patterns to improve our platform
• Comply with legal obligations

We do not sell, trade, or rent your personal information to third parties. We do not use your data for advertising purposes.`,
    },
    {
      title: '3. Data Retention',
      content: `We retain your personal information for as long as your account is active or as needed to provide our services. If you wish to cancel your account or request that we no longer use your information to provide services, contact us at privacy@cedarlogics.com.

We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Anonymized, aggregated data may be retained indefinitely for analytical purposes.`,
    },
    {
      title: '4. Information Sharing',
      content: `We may share your information with:
• Service providers who assist in our operations (hosting, payment processing, analytics)
• Professional advisors including lawyers, auditors, and insurers
• Law enforcement or government authorities when required by law
• A successor entity in the event of a merger, acquisition, or sale

All third-party service providers are contractually required to maintain the confidentiality and security of your information and to use it only for the purposes for which it was disclosed.`,
    },
    {
      title: '5. Security',
      content: `We implement industry-standard security measures to protect your personal information, including:
• TLS encryption for data in transit
• AES-256 encryption for data at rest
• SOC 2 compliant infrastructure
• Regular third-party security audits
• Access controls and authentication requirements for all personnel

No method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.`,
    },
    {
      title: '6. Your Rights',
      content: `Depending on your jurisdiction, you may have the right to:
• Access the personal information we hold about you
• Correct inaccurate or incomplete information
• Request deletion of your personal information
• Object to or restrict the processing of your data
• Receive your data in a portable format
• Withdraw consent where processing is based on consent

To exercise any of these rights, contact us at privacy@cedarlogics.com. We will respond within 30 days.`,
    },
    {
      title: '7. Cookies',
      content: `We use essential cookies to provide our services and functional cookies to remember your preferences. We do not use tracking cookies or third-party advertising cookies.

You can control cookie settings through your browser. Disabling cookies may affect the functionality of certain parts of our website. We use privacy-first analytics that do not track individuals across sessions or sites.`,
    },
    {
      title: '8. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date. For significant changes, we will send an email notification to registered users.

Your continued use of our services after any changes constitutes your acceptance of the revised policy.`,
    },
    {
      title: '9. Contact Us',
      content: `If you have questions or concerns about this Privacy Policy or our data practices, contact us at:

CedarLogics
Attn: Privacy Team
privacy@cedarlogics.com

San Francisco, CA, United States

We are committed to resolving any concerns regarding your privacy promptly and transparently.`,
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
          <h1 className="section-heading text-4xl sm:text-5xl text-cedar-frost mb-4">Privacy Policy</h1>
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
            CedarLogics ("we", "us", "our") is committed to protecting your privacy. This policy explains 
            how we collect, use, and safeguard your information when you use our website (cedarlogics.com) 
            and our software platform (CedarLogics Console). Please read it carefully.
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
