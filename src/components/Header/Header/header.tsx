import LogoIcon from '../../../svgs/LocationIcon';

function Header() {
  return (
    <nav>
      <LogoIcon width={60} height={50} />
      <div className="  text-center">
        <ul>
          <li>
            <a href="http://localhost:3001/"> Q&A</a>
          </li>
          <li>
            <a href="http://localhost:3002/view"> Overblik </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header; 
