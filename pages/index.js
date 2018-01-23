import {Layout, Footer} from '../Components'

export default () => {
  return (
    <Layout>
      <div className="about">
        <p>
          <span className="large highlight">Hi, I'm Sarah.</span> After graduating from college with a degree in Biology, I spent two years studying physical therapy before realizing that it was not the right field for me. After working in an office for a few years, I decided to pursue a career as a graphic designer. While working as a graphic designer, I realized that I wanted to add web design to my portfolio, so I took a class in Front End Web Development, which is where I fell in love with JavaScript. After finishing that course, I was encouraged to apply to a coding bootcamp. I was accepted to the Web Development Fellowship at Fullstack Academy of Code, a partnership between Fullstack and the NYC Tech Talent Pipeline, where I learned Node, Express, PostgreSQL, Sequelize, React, Redux, and many other technologies and libraries. I graduated from Fullstack in December 2017 and I am excited to begin my career as a software engineer.
        </p>
        <img src="/static/sarah.png" />
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

        @media only screen and (max-width: 768px) {
          .about {
            display: inline-block;
          }

          img {
            margin: 1.5vh 0;
          }
        }
      `}</style>
    </Layout>
  )
}