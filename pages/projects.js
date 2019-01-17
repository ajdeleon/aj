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

  renderTagPickerDropdown = () => {
    return (
      <>
        <label htmlFor="tagPicker">Filter by technology: </label>
        <select
          id="tagPicker"
          className="tagPickerSelect"
          onChange={event => this.setState({ filter: event.target.value })}
        >
          {uniqueTags.map(tag => {
            return (
              <option className="tagPickerListItem" key={tag} role="button">
                {tag}
              </option>
            )
          })}
        </select>
      </>
    )
  }

  render() {
    return (
      <>
        <GlobalWrapper>
          <Nav />
          <main role="main" lang="en">
            <h1>Projects</h1>
            <section className="tagPickerContainer">
              <div className="tagPickerList">
                {this.renderTagPickerDropdown()}
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
            text-align: center;
          }
          .tagPickerSelect {
            height: 1.5rem;
            font-size: 1rem;
          }
          .tagPickerListItem {
          }
          .projectList {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        `}</style>
      </>
    )
  }
}

export default Projects
