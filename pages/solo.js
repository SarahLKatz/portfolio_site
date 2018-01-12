import {Layout, Project} from '../Components/Layout'

export default () => {
  return (
    <Layout>
      <div className="projects">
        <div className="single-project">
          <Project 
            title="Pics or You Didn't Medal" 
            img="/static/projects/racemedalpics.jpg" 
            presentation="https://youtu.be/9ECIo97spzI"
            date="November 2017"
            company="Fullstack Academy" 
            description="This app, built for a five-day hackathon, allows users to input a race, date and location, and when they log in after the race, they will be shown some pictures taken nearby that can serve as inspiration for their post-race medal pictures. Users can also connect a Strava account and pull their latest workout data to receive photo inspiration. It features a front end and store state built with React-Redux, a backend built with Node.js and Express, and a PostgreSQL database to store user and race information."
            live="http://racemedalpics.herokuapp.com"
            tech="React, Redux, React-Redux, Flickr API, Nominatim API, Strava API, Passport, OAuth"/>
        </div>
        <div className="single-project">
          <Project 
            title="Walt Disney World Timeline" 
            img="/static/projects/wdwtimeline.jpg" 
            date="February - March 2017"
            company="General Assembly" 
            description="An interactive timeline of events at Walt Disney World. Built using Bootstrap and jQuery, users can filter events based on categories (such as theme park) by clicking buttons at the top of the page and toggle descriptions of events by clicking on the event name."
            live="http://sarahlkatz.github.io"
            tech="HTML, CSS, Bootstrap, jQuery"/>
        </div>
      </div>
      <style jsx>{`
        .projects {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .single-project {
          flex: 0.3;
        }
      `}</style>
    </Layout>
  )
}