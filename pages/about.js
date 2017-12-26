import Layout from '../Components/Layout';

export default () => {
  return (
    <Layout>
      <p>
        <span style={{fontSize: "2em"}}>Hi, I'm Sarah.</span> After graduating from college with a degree in Biology, I spent two years studying physical therapy before realizing that it was not the right field for me. After working in an office for a few years, I decided to pursue a career as a graphic designer. While working as a graphic designer, I realized that I wanted to add web design to my portfolio, so I took a class in Front End Web Development, which is where I fell in love with JavaScript. After finishing that course, I was encouraged to apply to a coding bootcamp. I was accepted to the Web Development Fellowship at Fullstack Academy of Code, a partnership between Fullstack and the NYC Tech Talent Pipleline, where I learned Node, Express, PostgreSQL, Sequelize, React, Redux, and many other technologies and libraries. I graduated from Fullstack in December 2017 and I am excited to begin my career as a software engineer.
      </p>
      <h2>Tech Stack</h2>
      {/*<ul>
        <li><span>Proficiency:</span> JavaScript, Node, Express, React, Github, HTML, CSS, Bootstrap, jQuery, Redux, React-Redux</li>
        <li><span>Knowledgeable:</span> SQL, Sequelize, Jasmine, Mocha, Chai, React Native</li>
        <li><span>Some Familiarity:</span> OAuth, Firebase, next.js</li>
      </ul>*/}
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
      <style jsx>{`
        img {
          width: 7vw;
          max-height: 10vh;
          margin: auto 1vw;
        }

        .logos {
          display: flex;
          align-items: center;
        }
      `}</style>
    </Layout>
  )
}