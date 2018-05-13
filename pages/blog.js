import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
      <BlogPost
        title="A Shy Developer At Work"
        date="May 13, 2018"
        url="https://medium.com/@sarahscode/a-shy-developer-at-work-a40899437e80"
        summary={`I’ve written before about some of my social issues. From my attempts at attending events (some successful, some not-so-successful) to my struggles with networking and initiating conversations with my fellow developers, I’ve tried to be completely honest about how my shyness and social anxiety affect my life as a developer. Partially because I don’t like to hide who I am, but also because I know I’m not the only one struggling with these issues, and I want other future (and current) devs who struggle socially to know that they’re not alone.`}
      />  
      <BlogPost
        title="For Your Listening Pleasure"
        date="April 29, 2018"
        url="https://medium.com/@sarahscode/for-your-listening-pleasure-d45da363e141"
        summary={`Early in my time at the Fullstack Academy coding bootcamp, our career success counselor recommended that we listen to podcasts as a way of keeping up with the tech world. As someone who had recently started listening to podcasts for entertainment on my commute (essential for any New Yorker, especially one with a commute as long as mine), I was excited to see what podcasts the tech world had to offer.`}
      />
      <BlogPost
        title="Life's Second Chances"
        date="April 22, 2018"
        url="https://medium.com/@sarahscode/lifes-second-chances-4515e2bf87fa"
        summary={`A friend of mine has a difficult decision he has to make. He’s in college, trying to decide between a major that will take him closer to his dream job but will force him to give up some of the extracurricular activities that he loves (and that help him pay for school) and a major that is less relevant to his dream job, but will allow him to keep up his extracurricular activites. Many of his friends that have been through this dilemma (including me) have been sharing our own life stories to try to help him make the decision.`}
        />
      <BlogPost
        title="My Perfect Workplace"
        date="April 15, 2018"
        url="https://medium.com/@sarahscode/my-perfect-workplace-279870863ace"
        summary={`Lately I’ve found myself in a bit of a funk. My job just isn’t as exciting as I had hoped it would be (which I’m actually coming to terms with … I don’t need excitement 24/7) and while I have had some medium-exciting non-work things going in, it’s just not enough to drag me out of my funk. But the other day, while contemplating my second cup of coffee, I came up with a question that I thought it would be fun to answer:`}
      <a href="https://medium.com/@sarahscode" target="_blank"><h3 className="highlight">Read More Blog Posts on Medium</h3></a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: none;
        }
      `}</style>
    </Layout>
  )
}