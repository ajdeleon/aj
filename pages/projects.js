import React from 'react'
import Nav from '../components/Nav'
import Project from '../components/Project'
import GlobalWrapper from '../components/GlobalHeader.js'
import { projectData, uniqueTags } from '../data.js'

class Projects extends React.Component {
  state = {
    filter: 'all',
  }

  renderProjectList = () => {
    return projectData
      .filter(item => {
        if (this.state.filter == 'all') {
          return item
        } else {
          return item.tags.includes(this.state.filter)
        }
      })
      .map(item => {
        return (
          <Project {...item} key={item.caption} />
          //I miss punning from Reason ^^
        )
      })
  }

  renderTagPickerButtonList = () => {
    return uniqueTags.map(button => {
      return (
        <button
          onClick={() => this.setState({ filter: button })}
          className="tagPickerListItem"
          key={button}
          style={
            this.state.filter === button
              ? { backgroundColor: '#0000B5', color: 'white' }
              : {}
          }
          role="button"
        >
          {button}
        </button>
      )
    })
  }

  render() {
    return (
      <>
        <GlobalWrapper>
          <Nav />
          <main role="main" lang="en">
            <section className="tagPickerContainer">
              <h1>Click to sort by technology:</h1>
              <div className="tagPickerList">
                {this.renderTagPickerButtonList()}
              </div>
            </section>
            <section className="projectList">
              {this.renderProjectList()}
            </section>
          </main>
        </GlobalWrapper>

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
            flex-wrap: wrap;
          }
          .tagPickerListItem {
            width: 6rem;
            margin: 0.5rem 0.5rem;
            padding: 0.5rem 0.5rem;
            cursor: pointer;
          }
          .tagPickerListItem:visited {
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
