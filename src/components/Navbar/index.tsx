import Link from "next/link";

export function Navbar() {
    return (
      <div className="navbar bg-base-100 dark:bg-gray-900 sticky top-0 z-50 lg:px-32 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href={'/'}>Home</Link></li>
              {/* <li>
                <Link href={'#'}>Parent</Link>
                <ul className="p-2">
                  <li><Link href={'#'}>Submenu 1</Link></li>
                  <li><Link href={'#'}>Submenu 2</Link></li>
                </ul>
              </li> */}
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/portofolio'}>Portofolio</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">fairuzikbar</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link href={'/'}>Home</Link></li>
              {/* <li>
                <Link href={'#'}>Parent</Link>
                <ul className="p-2">
                  <li><Link href={'#'}>Submenu 1</Link></li>
                  <li><Link href={'#'}>Submenu 2</Link></li>
                </ul>
              </li> */}
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/portofolio'}>Portofolio</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <Link href={'#'} className="btn">Button</Link>
        </div> */}
      </div>
    );
}