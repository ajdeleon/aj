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
      <h2>{caption}</h2>
      <p>{description}</p>
      <h3>Technologies</h3>
      <ul className="tags" role="list">
        {tags.map(tag => {
          return (
            <li className="tagItem" key={tag} role="listitem">
              {tag}
            </li>
          )
        })}
      </ul>
    </div>
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
    <style jsx>{`
      article {
        outline: 1px solid #595959;
        max-width: 20rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
      }

      figure {
        margin: 0;
        width: 100%;
        text-align: center;
      }

      figcaption {
        font-size: 0.8rem;
      }

      img {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 1px;
        border-bottom: 1px solid #595959;
      }

      .tags {
        color: #595959;
      }

      .tagItem {
      }

      .projectInfo {
        padding: 0 1rem 0rem 1rem;
        margin-bottom: auto;
      }

      h2 {
        margin-top: 0.5rem;
      }
      p {
        color: #595959;
      }

      .externalLinks {
        display: flex;
        flex-direction: column;
      }

      .externalLinks div {
        padding: 0.5rem;
        border-top: 1px solid #595959;
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
