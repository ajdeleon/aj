import Link from 'next/link'

export default () => (
  <nav role="navigation">
    <a href="/">ajdeleon.tech</a>
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
    <style jsx>{`
      nav {
        width: 100%;
        display: flex;
      }

      a {
        display: flex;
        align-self: center;
        margin-left: 1rem;
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
    <style global jsx>{`
      body {
        font-family: arial;
      }
      @media only screen and (max-width: 500px) {
        html {
          font-size: 18px;
        }
      }
      @media only screen and (min-width: 500px) {
        html {
          font-family: arial;
          font-size: 24px;
        }
      }

      a {
        color: #0000b5;
      }

      a:visited {
        color: #802200;
      }

      a:hover {
        color: #aa5d00;
      }
    `}</style>
    {/*Putting global styles here since this will be imported to every component*/}
  </nav>
)
