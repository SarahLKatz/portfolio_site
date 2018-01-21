import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
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
      <BlogPost 
        title="My Silent Struggle: The Social Aspect of Coding"
        date="January 7, 2018"
        url="https://medium.com/@sarahscode/my-silent-struggle-the-social-aspect-of-coding-f91433622b3b"
        summary={`It’s a fairly well known fact that people struggle in coding bootcamps. It’s expected. Coding bootcamps are hard … you’re taking concepts that should take months to learn and squeezing them into days. It’s a lot of work and it’s far from easy`}
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