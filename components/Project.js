export default ({ url, codeUrl, imageSource, caption, description, tags }) => (
  <article role="article">
    <div className="projectInfo">
      <h2>{caption}</h2>
      <figure>
        <img src={imageSource} />
        <figcaption>{url}</figcaption>
      </figure>
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
      <a className="projectLink" href={url}>
        Live project link
      </a>
      <a className="codeLink" href={codeUrl}>
        Check out the code here
      </a>
    </div>
    <style jsx>{`
      article {
        outline: 1px solid;
        width: 15rem;
        margin: 1rem;
        padding: 1rem;
      }

      h2 {
        text-align: center;
      }

      figure {
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
