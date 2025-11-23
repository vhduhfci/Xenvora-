import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <p>Last updated: October 2024</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to Xenvora. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
          </section>
          
          <section>
             <h2 className="text-2xl font-bold text-white mb-4">5. Contact Details</h2>
             <p>If you have any questions about this privacy policy, please contact us at: dev@xenvora.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;