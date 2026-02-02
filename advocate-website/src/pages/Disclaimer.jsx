export default function Disclaimer() {
  return (
    <div className="p-10 text-sm text-gray-600 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">No Attorney-Client Relationship</h3>
          <p>
            The use of this website or contact with our firm through this website does not create an attorney-client relationship. 
            An attorney-client relationship is only formed when you have signed an engagement agreement with our firm and we have 
            completed a conflict check. Until then, any information you provide is not confidential or privileged.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">No Legal Advice</h3>
          <p>
            The information provided on this website is for general informational purposes only and does not constitute legal advice. 
            Every case is unique, and you should consult with a licensed attorney in your jurisdiction regarding your specific situation. 
            This website may not reflect current legal developments, verdicts, or settlements.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">No Guarantee of Results</h3>
          <p>
            Past case results or client testimonials do not guarantee or predict a similar outcome with respect to any future matter. 
            The outcome of any legal matter depends on numerous factors, many of which are unique to each case.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Practice Areas</h3>
          <p>
            References to practice areas on this website do not imply any certification of expertise or specialization unless 
            specifically stated in an attorney's biography. We are not certified as specialists by any regulatory body unless 
            explicitly indicated.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Third-Party Links</h3>
          <p>
            This website may contain links to third-party websites. We are not responsible for the accuracy of information on 
            those sites and do not endorse their content.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Copyright</h3>
          <p>
            All content on this website is protected by copyright. You may not reproduce, distribute, or transmit any portion 
            of this website without our prior written consent, except for personal, non-commercial use.
          </p>
        </div>

        <div className="border-t pt-4 text-xs text-gray-500">
          <p>
            <strong>Responsible Lawyer:</strong> [Attorney Name] | 
            <strong> Address:</strong> [Firm Address] | 
            <strong> Contact:</strong> [Phone/Email]
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} [Firm Name]. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
