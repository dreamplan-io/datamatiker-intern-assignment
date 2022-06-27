import PhoneIcon from "../../../svgs/Arrow";
import CvrIcon from "../../../svgs/CvrIcon";
import EmailIcon from "../../../svgs/EmailIcon";
import FacebookIcon from "../../../svgs/FacebookIcon";
import LinkedinIcon from "../../../svgs/LinkedinIcon";
import LocationIcon from "../../../svgs/LocationIcon";
import LogoIcon from "../../../svgs/LogoIcon";

const Footer = () => {
  return (
    <footer className="py-28 px-10 md:px-28 xl:px-40">
      <div className="pb-5">
        <LogoIcon width={85} height={78} />
      </div>
      <div className="md:flex w-full justify-between">
        <div className="py-4 mb-10">
          <ul className="grid">
            <li className="inline-flex py-2">
              <LocationIcon width={17} height={24} />
              <p className="pl-4 text-dp-bodytext-l-m">
                Applebys Pl. 7, 1411 København, DK
              </p>
            </li>
            <li className="inline-flex py-2">
              <EmailIcon width={17} height={24} />
              <p className="pl-4 text-dp-bodytext-l-m">
                kundeservice@dreamplan.io
              </p>
            </li>
            <li className="inline-flex py-2">
              <PhoneIcon width={17} height={24} fill="none" />
              <p className="pl-4 text-dp-bodytext-l-m">+45 40965874</p>
            </li>
            <li className="inline-flex py-2">
              <CvrIcon width={17} height={24} />
              <p className="pl-4 text-dp-bodytext-l-m">CVR 40965874</p>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <p>følg os på sociale medier:</p>
          <div className="inline-flex py-2">
            <LinkedinIcon className="mr-4" width={53} height={53} />
            <FacebookIcon width={53} height={53} />
          </div>
        </div>
      </div>
      <p className="grid place-items-center mt-20">© Copyright Dreamplan.io</p>
    </footer>
  );
};
export default Footer;
