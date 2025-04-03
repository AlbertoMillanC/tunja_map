import Link from "next/link";
import texts from "../content/texts";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-1">
          {texts.footerText}
        </p>
        <div>
          <Link href="/privacy" legacyBehavior>
            <a className="text-light me-3">{texts.footerLinkPrivacy}</a>
          </Link>
          <Link href="/terms" legacyBehavior>
            <a className="text-light">{texts.footerLinkTerms}</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
