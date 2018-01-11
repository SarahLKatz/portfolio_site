import Layout from '../Components/Layout';
import BlogPost from '../Components/BlogPost';

export default () => {
  return (
    <Layout>
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
      <BlogPost 
        title="Know Your Strengths. Learn Your Weaknesses."
        date="December 24, 2017"
        url="https://medium.com/@sarahscode/know-your-strengths-learn-your-weaknesses-2d2ed9d07d33"
        summary={`Every job searcher (and developer in general) has strengths and weaknesses. This past week I had the opportunity to learn a lot about mine. What I learned was that within the interview process, my strength is coding challenges. My weakness is … everything else`}
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