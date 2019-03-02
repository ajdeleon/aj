import GithubLogo from './GithubLogo'
import LinkLogo from './LinkLogo'
export default ({ url, codeUrl, imageSource, caption, description, tags }) => (
  <article role="article">
    <figure>
      <img src={imageSource} />
      <figcaption>
        <a href={url}>{url}</a>
      </figcaption>
    </figure>
    <div className="projectInfo">
      <h2 id="caption">{caption}</h2>
      <p aria-labelledby="caption">{description}</p>
      <h3 id="technologyList">Technologies</h3>
      <ul className="tags" role="list" aria-labelledby="technologyList">
        {tags.map(tag => {
          return (
            <li className="tagItem" key={tag} role="listitem">
              {tag}
            </li>
          )
        })}
      </ul>
      <div className="externalLinks">
        <div>
          <LinkLogo />{' '}
          <a className="projectLink" href={url}>
            Live project link
          </a>
        </div>
        <div>
          <GithubLogo />{' '}
          <a className="codeLink" href={codeUrl}>
            Check out the code here
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      article {
        outline: 1px solid #595959;
        margin: 1rem 2rem 1rem 2rem;
        display: flex;
      }

      figure {
        margin: 0;
        width: 80%;
        min-width: 400px;
        text-align: center;
        outline: 1px solid #595959;
      }

      @media only screen and (max-width: 800px) {
        article {
          flex-direction: column;
          margin: 1rem 0 1rem 0;
        }

        figure {
          align-self: center;
          width: 100%;
        }

        .externalLinks {
          flex-direction: column;
        }
      }

      figcaption {
        font-size: 0.8rem;
        padding-bottom: 0.5rem;
      }

      img {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 1px;
        // border-bottom: 1px solid #595959;
      }

      #caption {
        margin-top: 0.5rem;
        margin-bottom: 0;
      }

      #technologyList {
        margin-bottom: 0.5rem;
      }

      .tags {
        margin-top: 0;
        color: #595959;
      }

      .tagItem {
      }

      .projectInfo {
        padding: 0.5rem 2rem 0.5rem 2rem;
        display: flex;
        flex-direction: column;
      }

      p {
        color: #595959;
      }

      .externalLinks {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
      }

      .externalLinks div {
        padding: 0.5rem;
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

      .projectLink {
      }

      .codeLink {
      }
    `}</style>
  </article>
)
