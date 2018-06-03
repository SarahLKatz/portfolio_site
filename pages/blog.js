import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
      <BlogPost
        title="Kindness in the Workplace"
        date="June 3, 2018"
        url="https://medium.com/@sarahscode/kindness-in-the-workplace-2941811dc444"
        summary={`Sometimes it’s the little things that matter. A smile, a thank you. Waving to your neighbor or holding the door open for someone at the office. Sometimes a little act can make a difference in someone else’s day.`}
      />
      <BlogPost
        title="My First Hackathon"
        date="May 27, 2018"
        url="https://medium.com/@sarahscode/my-first-hackathon-5189e582b962"
        summary={`A few weeks ago, I participated in my first hackathon, sponsored by my company and including people from a few companies, including ours.`}
        />
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