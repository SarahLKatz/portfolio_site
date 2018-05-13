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
        title="Credit Where Credit Is Due"
        date="May 6, 2018"
        url="https://medium.com/@sarahscode/credit-where-credit-is-due-c0e5de21483d"
        summary={`Lately I’ve found myself in a bit of a funk. My job just isn’t as exciting as I had hoped it would be (which I’m actually coming to terms with … I don’t need excitement 24/7) and while I have had some medium-exciting non-work things going in, it’s just not enough to drag me out of my funk. But the other day, while contemplating my second cup of coffee, I came up with a question that I thought it would be fun to answer:`}
      />
      <BlogPost
        title="For Your Listening Pleasure"
        date="April 29, 2018"
        url="https://medium.com/@sarahscode/for-your-listening-pleasure-d45da363e141"
        summary={`Early in my time at Fullstack Academy, we had a lecture about unconscious bias, particularly gender bias. At one point we were asked to think about examples from previous experience where a man was given credit for a woman’s work. I raised my hand and talked about how I was biased against myself — I never took credit for anything I did, and it got to the point where everyone assumed that my (male) boss was the one who did everything in the office and I didn’t do anything.`}
      />
      <BlogPost
        title="Life's Second Chances"
        date="April 22, 2018"
        url="https://medium.com/@sarahscode/lifes-second-chances-4515e2bf87fa"
        summary={`A friend of mine has a difficult decision he has to make. He’s in college, trying to decide between a major that will take him closer to his dream job but will force him to give up some of the extracurricular activities that he loves (and that help him pay for school) and a major that is less relevant to his dream job, but will allow him to keep up his extracurricular activites. Many of his friends that have been through this dilemma (including me) have been sharing our own life stories to try to help him make the decision.`}
        />
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