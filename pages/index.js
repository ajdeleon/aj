import Nav from '../components/Nav.js'
import Link from 'next/link'
const Index = () => (
  <>
    <Nav />
    <main role="main">
      <figure>
        <img
          src="https://via.placeholder.com/350x150.png?text=This+is+me+AJ+de+Leon"
          alt="AJ"
        />
        <figcaption>This is me, AJ.</figcaption>
      </figure>
      <section>
        <article role="article">
          I'm a web developer with a focus on all things javascript.{' '}
        </article>
        <article role="article">
          {`Check out my `}
          <Link as="/projects" href="/projects">
            <a>projects page</a>
          </Link>
          {` for some examples of what I do.`}
        </article>
      </section>
    </main>
    <style jsx="true">{`
      main {
        text-align: center;
      }

      img {
        width: 16rem;
      }

      figcaption {
        font-size: 0.75rem;
      }
    `}</style>
  </>
)

export default Index
