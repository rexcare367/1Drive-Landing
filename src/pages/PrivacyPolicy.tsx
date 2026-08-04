import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Database,
  Globe,
  Mail,
  Clock,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-striped">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information when you use our driver
              management platform.
            </p>
            <div className="mt-8 text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Last updated: December 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  1. Information We Collect
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Personal Information
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Name, email address, and phone number</li>
                    <li>
                      • Driver's license number and employment information
                    </li>
                    <li>• Profile photos and identification documents</li>
                    <li>• Emergency contact information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Location Data
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>
                      • GPS coordinates during work hours for trip tracking
                    </li>
                    <li>• Check-in and check-out locations</li>
                    <li>• Route optimization and navigation data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Usage Information
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>• App usage patterns and feature interactions</li>
                    <li>
                      • Device information (model, OS version, unique
                      identifiers)
                    </li>
                    <li>• Log files and crash reports</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 2: How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  2. How We Use Your Information
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>
                    • <strong>Service Operations:</strong> Manage driver
                    schedules, track trips, and process payroll
                  </li>
                  <li>
                    • <strong>Safety & Compliance:</strong> Ensure driver safety
                    and regulatory compliance
                  </li>
                  <li>
                    • <strong>Communication:</strong> Send notifications about
                    schedules, payroll, and important updates
                  </li>
                  <li>
                    • <strong>Improvement:</strong> Analyze usage patterns to
                    enhance our services
                  </li>
                  <li>
                    • <strong>Support:</strong> Provide customer support and
                    troubleshoot issues
                  </li>
                  <li>
                    • <strong>Legal Requirements:</strong> Comply with
                    applicable laws and regulations
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 3: Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  3. Data Sharing and Disclosure
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>
                    • <strong>With Your Employer:</strong> Trip data, time
                    tracking, and performance metrics
                  </li>
                  <li>
                    • <strong>Service Providers:</strong> Third-party services
                    that help us operate our platform
                  </li>
                  <li>
                    • <strong>Legal Compliance:</strong> When required by law or
                    to protect rights and safety
                  </li>
                  <li>
                    • <strong>Business Transfers:</strong> In case of merger,
                    acquisition, or sale of assets
                  </li>
                </ul>
                <p className="font-semibold">
                  We do not sell your personal information to third parties.
                </p>
              </div>
            </motion.div>

            {/* Section 4: Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  4. Data Security
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement industry-standard security measures to protect
                  your information:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>
                    • <strong>Encryption:</strong> Data is encrypted in transit
                    and at rest
                  </li>
                  <li>
                    • <strong>Access Controls:</strong> Limited access to
                    authorized personnel only
                  </li>
                  <li>
                    • <strong>Regular Audits:</strong> Security assessments and
                    vulnerability testing
                  </li>
                  <li>
                    • <strong>Secure Infrastructure:</strong> Cloud hosting with
                    enterprise-grade security
                  </li>
                  <li>
                    • <strong>Data Backup:</strong> Regular backups with secure
                    storage
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 5: Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  5. Your Privacy Rights
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>
                    • <strong>Access:</strong> Request a copy of your personal
                    data
                  </li>
                  <li>
                    • <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    • <strong>Deletion:</strong> Request deletion of your
                    personal data
                  </li>
                  <li>
                    • <strong>Portability:</strong> Receive your data in a
                    structured format
                  </li>
                  <li>
                    • <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    • <strong>Location Data:</strong> Disable location tracking
                    when off-duty
                  </li>
                </ul>
                <p>
                  To exercise these rights, contact us at artem92029@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Section 6: Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  6. Data Retention
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>We retain your information for the following periods:</p>
                <ul className="space-y-2 ml-6">
                  <li>
                    • <strong>Active Employment:</strong> Throughout your
                    employment period
                  </li>
                  <li>
                    • <strong>Trip Data:</strong> 7 years for tax and compliance
                    purposes
                  </li>
                  <li>
                    • <strong>Payroll Records:</strong> As required by labor
                    laws
                  </li>
                  <li>
                    • <strong>Account Data:</strong> 1 year after account
                    closure
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 7: Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                7. Children's Privacy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our services are not intended for individuals under 18 years
                  of age. We do not knowingly collect personal information from
                  children under 18. If you become aware that a child has
                  provided us with personal information, please contact us
                  immediately.
                </p>
              </div>
            </motion.div>

            {/* Section 8: International Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                8. International Data Transfers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your information in
                  accordance with applicable data protection laws.
                </p>
              </div>
            </motion.div>

            {/* Section 9: Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                9. Policy Updates
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by email or through the
                  app. Your continued use of our services after the changes take
                  effect constitutes acceptance of the updated policy.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  10. Contact Us
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <p>artem92029@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Address
                    </h3>
                    <p>
                      123 Business Ave
                      <br />
                      Suite 100
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Data Protection Officer
                    </h3>
                    <p>artem92029@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
