type LegalProps = {
  title: string;
  body: { h: string; p: string }[];
};

export default function Legal({ title, body }: LegalProps) {
  return (
    <section className="relative bg-ink-900 pt-28 pb-20 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
        <p className="mt-2 text-sm text-white/50">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="mt-10 space-y-8">
          {body.map((b) => (
            <div key={b.h}>
              <h2 className="font-display text-xl font-bold text-white">{b.h}</h2>
              <p className="mt-2 leading-relaxed text-white/70">{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const PRIVACY_BODY = [
  { h: 'Introduction', p: 'This Privacy Policy describes how Cliff Services collects, uses, and shares information about you when you use our websites, services, and applications.' },
  { h: 'Information We Collect', p: 'We collect information you provide directly (such as contact details), information collected automatically (cookies, device data) and information from third parties where permitted.' },
  { h: 'How We Use Information', p: 'To provide and improve our services, communicate with you, comply with legal obligations and protect our legitimate interests.' },
  { h: 'Sharing', p: 'We do not sell your personal information. We share it with service providers under contract and as required by law.' },
  { h: 'Your Rights', p: 'Depending on your jurisdiction, you may have rights to access, correct, delete, or port your information. Contact us to exercise these rights.' },
  { h: 'Contact', p: 'Questions? Email info@cliffservice.com.' },
];

export const COOKIES_BODY = [
  { h: 'What are cookies', p: 'Cookies are small text files stored on your device that help websites function and provide analytics.' },
  { h: 'How we use cookies', p: 'We use strictly necessary cookies for site operation, and optional cookies for analytics and improving user experience.' },
  { h: 'Managing preferences', p: 'You can manage cookies via the banner shown on first visit, or through your browser settings at any time.' },
];

export const TERMS_BODY = [
  { h: 'Acceptance', p: 'By accessing or using our services, you agree to be bound by these Terms.' },
  { h: 'Use of Services', p: 'You agree to use our services in compliance with applicable laws and our acceptable use policy.' },
  { h: 'Intellectual Property', p: 'All content on this site is owned by Cliff Services or its licensors and is protected by intellectual property laws.' },
  { h: 'Disclaimer', p: 'Services are provided "as is" without warranties of any kind, either express or implied.' },
  { h: 'Limitation of Liability', p: 'To the fullest extent permitted by law, Cliff Services shall not be liable for indirect, incidental, or consequential damages.' },
];
