import Nav from '../components/Nav.js'
import GlobalWrapper from '../components/GlobalHeader'
import Link from 'next/link'

const Index = () => (
  <>
    <Nav />
    <main role="main" lang="en">
      <h1> I'm a web developer with a focus on all things javascript. </h1>
      <figure>
        <img src="/static/aj.png" alt="A photo of me, AJ" />
        <figcaption>This is me, AJ.</figcaption>
      </figure>
      <section>
        <article role="article" style={{ fontSize: '1rem' }}>
          <p>
            Web accessibility is something I care deeply about, and this website
            is an example of some of what I have learned through the{' '}
            <a href="https://a11yproject.com/">a11y project</a> and the
            <a href="https://www.w3.org/WAI/">
              {' '}
              W3C Web Accessibility Initiative.
            </a>
          </p>
          <p>
            I love learning new front and backend web technologies and my
            favorite part about web development is that there is always another
            stone to overturn.
          </p>
          <p>
            Check out my {` `}
            <Link as="/projects" href="/projects">
              <a>projects page</a>
            </Link>
            {` `} for some examples of what I do.
          </p>
        </article>
      </section>
    </main>
    <style jsx="true">{`
      main {
        text-align: center;
        margin: 0 1rem;
      }

      h1 {
        font-size: 1.5rem;
      }

      img {
        width: 90%;
      }

      figcaption {
        font-size: 1rem;
      }
    `}</style>
  </>
)

export default Index
