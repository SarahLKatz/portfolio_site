import Layout from '../Components/Layout';

export default () => {
  return (
    <Layout>
      <div className="about">
        <p>
          <span className="large highlight">Hi, I'm Sarah.</span> After graduating from college with a degree in Biology, I spent two years studying physical therapy before realizing that it was not the right field for me. After working in an office for a few years, I decided to pursue a career as a graphic designer. While working as a graphic designer, I realized that I wanted to add web design to my portfolio, so I took a class in Front End Web Development, which is where I fell in love with JavaScript. After finishing that course, I was encouraged to apply to a coding bootcamp. I was accepted to the Web Development Fellowship at Fullstack Academy of Code, a partnership between Fullstack and the NYC Tech Talent Pipeline, where I learned Node, Express, PostgreSQL, Sequelize, React, Redux, and many other technologies and libraries. I graduated from Fullstack in December 2017 and I am excited to begin my career as a software engineer.
        </p>
      </div>
      <div className="tech">
        <h2 className="highlight">My Tech Stack</h2>
        <div className="tech-type">
          <h4>Proficient:</h4>
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
          <h4>Knowledgeable:</h4>
          <div className="logos">
            <img src="/static/logos/sql.png" alt="SQL" />
            <img src="/static/logos/sequelize.png" alt="Sequelize" />
            <img src="/static/logos/postgresql.png" alt="PostgreSQL" />
            <img src="/static/logos/jasmine.png" alt="Jasmine" />
            <img src="/static/logos/mocha.svg" alt="Mocha" />
            <img src="/static/logos/chai.png" alt="Chai" />
            <img src="/static/logos/react-native.png" alt="React Native" />
          </div>
        </div>
        <div className="tech-type">
          <h4>Some Familiarity:</h4>
          <div className="logos">
            <img src="/static/logos/oauth.png" alt="OAuth" />
            <img src="/static/logos/firebase.png" alt="Firebase" />
            <img src="/static/logos/jest.png" alt="Jest" />
            <img src="/static/logos/nextjs.png" alt="next.js" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          line-height: 1.25em;
        }

        .large {
          font-size: 2em;
        }
        
        img {
          width: 3.5vw;
          margin: auto 1vw;
          padding-bottom: 0.5vh;
        }

        .logos {
          display: flex;
          align-items: center;
        }

        .tech {
          margin-top: 2vh;
        }

        .tech-type {
          margin: 1vh 0;
          padding: 0 0.5vh; 
        }
      `}</style>
    </Layout>
  )
}