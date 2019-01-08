import Link from 'next/link'

export default () => (
  <nav role="navigation">
    <div>Placeholder</div>
    <div className="links">
      <ul>
        <li>
          <Link as="/" href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link as="/projects" href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx="true">{`
      nav {
        width: 100%;
        display: flex;
      }

      ul {
        padding: 0;
        display: flex;
      }

      li {
        list-style: none;
        padding: 0 1rem 0 1rem;
      }

      .links {
        margin-left: auto;
      }
    `}</style>
  </nav>
)
