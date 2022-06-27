import LogoIcon from "../svgs/LogoIcon";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-4 py-2 inline-flex">
      <LogoIcon width={57} height={53} />
      <div className="absolute m-1 top-0 left-1/2 transform -translate-x-1/2">
        <ul className="inline-flex">
          <li className="text-dp-bodytext-m-dt m-5">
            <Link href="/">QA</Link>
          </li>
          <li className="text-dp-bodytext-m-dt m-5">
            <Link href="/overblik">Overblik</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
