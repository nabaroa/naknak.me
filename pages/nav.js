import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/bio">
            <a>Bio</a>
          </Link>
        </li>
        <li>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>   
         <li>
          <Link href="/agenda">
            <a>Agenda</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>   
        <li>
          <Link href="/credits">
            <a>Credits</a>
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Nav;