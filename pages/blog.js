import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
      <BlogPost 
        title="A Shy Developer Attends An Event: Take Two"
        date="January 14, 2017"
        url="https://medium.com/@sarahscode/a-shy-developer-attends-an-event-take-two-afadd97428c7"
        summary={`A few weeks ago, I attended an event hosted by a company whose product I had used once. It was a bit of a disaster (not the event itself, my experience). On Wednesday I attended another event (technically this one was a meetup), and thankfully, it was much better`}
      />
      <BlogPost 
        title="My Silent Struggle: The Social Aspect of Coding"
        date="January 7, 2018"
        url="https://medium.com/@sarahscode/my-silent-struggle-the-social-aspect-of-coding-f91433622b3b"
        summary={`It’s a fairly well known fact that people struggle in coding bootcamps. It’s expected. Coding bootcamps are hard … you’re taking concepts that should take months to learn and squeezing them into days. It’s a lot of work and it’s far from easy`}
      />
      <BlogPost 
        title="From Looking For A Change to Software Engineer: My 2017 in Review"
        date="December 31, 2017"
        url="https://medium.com/@sarahscode/from-looking-for-a-change-to-software-engineer-my-2017-in-review-d63a9951666e"
        summary={`In July of 2012, I left my job as an assistant office manager for a non-profit, figuring I’d do freelance graphic design for a little bit until I got a job either as a graphic designer or in a hybrid design/office position. After a few years, I realized that I just wasn’t cut out for a full-time design job, so I started looking primarily for office positions (don’t get me wrong, at that point I still loved graphic design, but … I just wasn’t that good at it). That went on for a few years, but still, no job`}
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