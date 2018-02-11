import {Layout, Footer} from '../Components'
import {Link} from 'next/link'

export default () => {
  return (
    <Layout>
      <div className="about">
        <p>
          <span className="large highlight">Hi, I'm Sarah.</span> After graduating from college with a degree in Biology, I spent two years studying physical therapy before realizing that it was not the right field for me. After working in an office for a few years, I decided to pursue a career as a graphic designer. While working as a graphic designer, I realized that I wanted to add web design to my portfolio, so I took a class in Front End Web Development, which is where I fell in love with JavaScript. After finishing that course, I was encouraged to apply to a coding bootcamp. I was accepted to the Web Development Fellowship at Fullstack Academy of Code, a partnership between Fullstack and the NYC Tech Talent Pipeline, where I learned Node, Express, PostgreSQL, Sequelize, React, Redux, and many other technologies and libraries. I graduated from Fullstack in December 2017 and I am excited to be immersed full-time in the world of coding through my new job as a developer.
        </p>
        <img src="/static/sarah.png" />
      </div>
      <div className="spoilers">
        <a href="/about"><img src="/static/logos/js.png" alt="resume"/></a>
        <a href="/solo"><img src="/static/projects/wdwtimeline.jpg" alt="solo projects"/></a>
        <a href="/group"><img src="/static/projects/viewtrition.jpg" alt="group projects"/></a>
        <a href="/blog"><img src="/static/medium.jpg" alt="my blog!"/></a>
        <a href="/sarah"><img src="/static/mostRecent/raceMedal.jpg" alt="life outside coding"/></a>
      </div>
      <div className="contact-me">
        <h3 className="large">Get In Touch!</h3>
        <Footer />
      </div>
      <style jsx>{`
        .about {
          line-height: 1.25em;
          display: flex;
          text-align: justify;
        }

        .large {
          font-size: 2em;
        }

        img {
          margin-left: 2vw;
          height: 30vh;
        }

        .spoilers {
          margin-top: 2vh;
          margin-bottom: 2vh;
          display: flex;
          justify-content: space-between;
        }

        .spoilers img {
          margin: 2vw;
          border: .25vh solid #DDD;
          box-shadow: 0.75vh 0.75vh rgba(221, 221, 221, 0.5);
        }

        @media only screen and (max-width: 768px) {
          .about {
            display: inline-block;
          }

          .spoilers, .contact-me {
            display: none;
          }

          img {
            margin: 1.5vh 0;
          }
        }
      `}</style>
    </Layout>
  )
}