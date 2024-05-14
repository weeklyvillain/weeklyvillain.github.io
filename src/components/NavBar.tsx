export const NavBar = (): JSX.Element => {
  return (
    <div className="navbar bg-base-100 fixed z-50">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl" href="/">Weeklyvillain</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  );
}