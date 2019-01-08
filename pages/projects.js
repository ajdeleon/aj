import React from 'react'
import Nav from '../components/Nav'
import Project from '../components/Project'
import { projectData } from '../data.js'

class Projects extends React.Component {
  state = {
    filter: '',
  }
  renderProjectList = () => {
    return projectData
      .filter(item => {
        if (this.state.filter == '') {
          return item
        } else {
          return item.tags.includes(this.state.filter)
        }
      })
      .map(({ imageSource, caption, description, tags }) => {
        return (
          <Project
            imageSource={imageSource}
            caption={caption}
            description={description}
            key={caption}
            tags={tags}
          />
          //I miss punning from Reason ^^
        )
      })
  }

  render() {
    return (
      <>
        <Nav />
        <main role="main">
          <section className="tagPickerContainer">
            <article>My favorite technologies:</article>
            <div className="tagPickerList">
              <button
                onClick={() => this.setState({ filter: 'react' })}
                className="tagPickerListItem"
              >
                React
              </button>
              <button
                onClick={() => this.setState({ filter: 'next' })}
                className="tagPickerListItem"
              >
                NextJS
              </button>
              <button
                onClick={() => this.setState({ filter: 'graphql' })}
                className="tagPickerListItem"
              >
                Graphql
              </button>
            </div>
          </section>
          <section className="projectList">{this.renderProjectList()}</section>
        </main>
        <style jsx="true">{`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .tagPickerContainer {
            width: 80%;
            text-align: center;
            padding: 1rem;
          }
          .tagPickerList {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }
          .tagPickerListItem {
            margin: 0 1rem;
            padding: 0.5rem 1rem;
          }
          .projectList {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </>
    )
  }
}

export default Projects
