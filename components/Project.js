export default ({ imageSource, caption, description }) => (
  <article>
    <figure>
      <img src={imageSource} />
      <figcaption>{caption}</figcaption>
    </figure>
    <p>{description}</p>
    <div className="tags">
      <div className="tagItem">React</div>
      <div className="tagItem">NextJS</div>
      <div className="tagItem">Another one</div>
    </div>
    <style jsx>{`
      article {
        display: flex-column;
        align-content: center;
        width: 16rem;
        outline: 1px solid black;
        margin: 1rem;
        padding: 1rem;
      }

      figure {
        text-align: center;
      }

      .tags {
        display: flex;
        justify-content: center;
      }

      .tagItem {
        margin: 0.5rem;
      }
    `}</style>
  </article>
)
