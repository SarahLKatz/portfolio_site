import {Layout} from '../Components';
import React, {Fragment} from 'react';

export default () => {
  return (
    <Layout>
      <div className="topic">
        <Tech />
      </div>
      <div className="tables">
        <div className="topic">
          <Education />
        </div>
        <div className="topic">
          <Experience />
        </div>
      </div>
      <AboutStyles />
    </Layout>
  )
}

const Tech = () => (
  <Fragment>
    <h3 className="highlight">My Tech Stack</h3>
    <div className="tech-type">
      <h5>Proficient:</h5>
      <div className="logos">
        <img src="/static/logos/js.png" alt="JavaScript" />
        <img src="/static/logos/nodejs.png" alt="NodeJS" />
        <img src="/static/logos/express.png" alt="Express" />
        <img src="/static/logos/react.png" alt="React" />
        <img src="/static/logos/github.png" alt="GitHub" />
        <img src="/static/logos/HTML.png" alt="HTML" />
        <img src="/static/logos/css.svg" alt="CSS" />
        <img src="/static/logos/bootstrap.png" alt="Bootstrap" />
        <img src="/static/logos/jquery.gif" alt="jQuery" />
        <img src="/static/logos/redux.png" alt="Redux" />
      </div>
    </div>
    <div className="tech-type">
      <h5>Knowledgeable:</h5>
      <div className="logos">
        <img src="/static/logos/sql.png" alt="SQL" />
        <img src="/static/logos/sequelize.png" alt="Sequelize" />
        <img src="/static/logos/postgresql.png" alt="PostgreSQL" />
        <img src="/static/logos/jasmine.png" alt="Jasmine" />
        <img src="/static/logos/mocha.svg" alt="Mocha" />
        <img src="/static/logos/chai.png" alt="Chai" />
        <img src="/static/logos/react-native.png" alt="React Native" />
        <img src="/static/logos/nextjs.png" alt="next.js" />
      </div>
    </div>
    <div className="tech-type">
      <h5>Some Familiarity:</h5>
      <div className="logos">
        <img src="/static/logos/oauth.png" alt="OAuth" />
        <img src="/static/logos/firebase.png" alt="Firebase" />
        <img src="/static/logos/jest.png" alt="Jest" />
      </div>
    </div>
  </Fragment>
)

const Education = () => (
  <Fragment>
    <h3 className="highlight">My Education</h3>
    <table>
      <tbody>
        <tr>
          <td>
            <img src="/static/logos/fullstack.png" alt="Fullstack Academy" />
          </td>
          <td>
            <h4>Fullstack Academy of Code</h4> 
            <p>NYC Web Development Fellowship ~ August 2017 - December 2017</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/static/logos/ga.png" alt="General Assembly" />
          </td>
          <td>
            <h4>General Assembly</h4> 
            <p>Front End Web Development (Part-Time Course) ~ January 2017 - March 2017</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/static/logos/fit.png" alt="Fashion Institute of Technology" />
          </td>
          <td>
            <h4>Fashion Institute of Technology, School of Continuing and Professional Studies</h4> 
            <p>Certificate in Computer Essentials for Graphic Design ~ September 2013 - December 2014</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/static/logos/downstate.png" alt="SUNY Downstate" />
          </td>
          <td>
            <h4>SUNY Downstate Medical Center, College of Health Related Professions</h4> 
            <p>BS, Health Sciences ~ June 2009 - May 2010</p>
            <p>DPT, Incomplete ~ June 2009 - December 2011</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/static/logos/yu.png" alt="Stern College for Women" />
          </td>
          <td>
            <h4>Yeshiva University, Stern College for Women</h4> 
            <p>BA, Biology ~ August 2004 - May 2009</p>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
)

const Experience = () => (
  <Fragment>
    <h3 className="highlight">My Experience</h3>
    <table>
      <tbody>
        <tr>
          <td>
            <img src="/static/logos/design.png" alt="Sarah L.K. Design" />
          </td>
          <td>
            <h4>Self-Employed</h4> 
            <p>Freelance Graphic Designer ~ August 2013 - May 2017</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/static/logos/carlebach.png" alt="The Carlebach Shul" />
          </td>
          <td>
            <h4>The Carlebach Shul</h4> 
            <p>Assistant Office Manager ~ November 2011 - July 2013</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <h4>Heartbeat Software</h4> 
            <p>Data Intern ~ June 2018 - May 2009</p>
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
)

const AboutStyles = () => (
  <style jsx>{`
    img {
      width: 3.5vw;
      margin: auto 1vw;
      padding-top: 0.5vh;
      padding-bottom: 0.5vh;
    }

    tr {
      margin-top: 0.25vh;
    }

    .logos {
      display: flex;
      align-items: center;
    }

    .tables {
      display: flex;
    }

    .topic {
      margin-top: 2vh;
      margin-right: 1vh;
      padding: 1vh;
    }

    .tech-type {
      margin: 1vh 0;
      padding: 0 0.5vh; 
    }

    @media only screen and (max-width: 768px) {
      body {
        font-size: 85%;
      }

      img {
        width: 6vw;
        margin: 0.5vh;
      }

      .tables {
        display: block;
      }

      .large {
        font-size: 1.25em;
      }
    }
  `}</style>
)