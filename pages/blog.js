import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
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
      />
      <BlogPost
        title="I Wish I Had Known"
        date="March 25, 2018"
        url="https://medium.com/@sarahscode/i-wish-i-had-known-8b33b6bfe07f"
        summary={`A little over a month ago, I started my first developer job. It hasn’t been exactly what I was expecting. For the first few weeks, I blamed the job. How could they not have a desk with a monitor set up for me? How could I not be assigned a project on as soon as I got there? Why didn’t they get my background check results from the consulting company I work for and issue me an ID on the first day?`}
      />
      <BlogPost
        title="You’re Employed … What’s Your Advice For Job Seekers?"
        date="March 18, 2018"
        url="https://medium.com/@sarahscode/youre-employed-what-s-your-advice-for-job-seekers-a7c8eaaf57e6"
        summary={`I’ve been at my new job for about a month now, and when I run into friends (either from Fullstack or from elsewhere) who are currently job searching, the #1 question I get asked is what advice I have for job searchers.`}
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
