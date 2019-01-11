export default ({ url, codeUrl, imageSource, caption, description, tags }) => (
  <article role="article">
    <figure>
      <img src={imageSource} />
      <figcaption>{url}</figcaption>
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
      <div className="externalLinks">
        <a className="projectLink" href={url}>
          Live project link
        </a>
        <a className="codeLink" href={codeUrl}>
          Check out the code here
        </a>
      </div>
    </div>
    <style jsx>{`
      article {
        outline: 1px solid;
        max-width: 18rem;
        margin: 1rem;
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
      }

      .tags {
      }

      .tagItem {
      }

      .projectInfo {
        padding: 0 1rem;
      }

      h2 {
        margin-top: 0.5rem;
      }

      .externalLinks {
        display: flex;
        flex-direction: column;
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
