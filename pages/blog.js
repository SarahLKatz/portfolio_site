import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
    <BlogPost 
        title="Building My DotCom"
        date="February 4, 2018"
        url="https://medium.com/@sarahscode/building-my-dotcom-74b77a211878"
        summary={`… Or how I went from “AWS Hates Me” to sarahlkatz.com (SPOILER: I didn’t use AWS)`}
      />
      <BlogPost 
        title="I Give Up. This Site is Not Deploying."
        date="January 28, 2018"
        url="https://medium.com/@sarahscode/i-give-up-this-site-is-not-deploying-393d39b2c00b"
        summary={`Since graduating from Fullstack, I’ve been working on my personal portfolio website. I’m using a framework called Next.js, which I learned for a portfolio enhancement piece during my time at Fullstack`}
      />
      <BlogPost 
        title="Can I Leave My Box? (Do I Want To?)"
        date="January 21, 2018"
        url="https://medium.com/@sarahscode/can-i-leave-my-box-do-i-want-to-fcb7811c0a62"
        summary={`A few years ago, I applied for a position as an office coordinator position at a digital media company. At the time, I was very interested in that industry, and thought this would be a good way to get my foot in the door and learn more. The recruiter liked me enough to bring me in for an interview, but after the interview, she told me that I wasn’t right for the job (she liked my qualifications, but I just didn’t demonstrate a forceful enough personality … which I understand based on how that interview went)`}
      />
      <BlogPost 
        title="A Shy Developer Attends An Event: Take Two"
        date="January 14, 2017"
        url="https://medium.com/@sarahscode/a-shy-developer-attends-an-event-take-two-afadd97428c7"
        summary={`A few weeks ago, I attended an event hosted by a company whose product I had used once. It was a bit of a disaster (not the event itself, my experience). On Wednesday I attended another event (technically this one was a meetup), and thankfully, it was much better`}
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