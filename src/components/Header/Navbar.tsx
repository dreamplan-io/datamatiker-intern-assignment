import LogoIcon from '../../svgs/LogoIcon';

function NavBar() {
  return (
    <nav>
      <LogoIcon width={60} height={50} />
      <div className="  text-center">
        <ul>
          <li>
            <a href="http://localhost:3002/"> QA</a>
          </li>
          <li>
            <a href="http://localhost:3002/overblik"> Overblik </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
