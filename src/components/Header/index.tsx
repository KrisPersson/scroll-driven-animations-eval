type PageProps = {
  children: React.ReactNode;
};

import { Link } from "react-router-dom";
import "./index.css";

export default function Header({ children }: PageProps) {
  return (
    <header className="header-class">
      <nav>
        <ul className="ul-class">
          <li>
            <Link className="link-class" to="/">
              Scroll-Timeline
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/view-timeline">
              View-Timeline
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/animation-range">
              Animation-range
            </Link>
          </li>
          <li>
            <Link className="link-class" to="/scroll-shadows">
              Scroll-shadows
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
