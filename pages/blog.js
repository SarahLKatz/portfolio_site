import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
      <BlogPost
        title="I Celebrate Being A Woman"
        date="March 11, 2017"
        url="https://medium.com/@sarahscode/i-celebrate-being-a-woman-3e2c34249ee7"
        summary={`I have never really considered myself a part of a community of women. When given a choice, I’d rather talk sports with the guys than hang with the girls (even if the girls were talking sports too). I went to an all-girls high school and all-women college, and in both situations, I looked for any opportunity to spend time with the guys. Nothing against the women I know, I just never really had any interest in being a part of a community of women.`}
        />
      <BlogPost
        title="Life Can't Stop When You Get A Job"
        date="March 4, 2018"
        url="https://medium.com/@sarahscode/life-cant-stop-when-you-get-a-job-98c32e0c94ac"
        summary={`Wednesday, February 7th, 2018.  It was the day I decided to accept the job I had been considering (although I didn’t formally accept the offer until the next day). It was also the day I attended my last tech meetup.`}
      />
      <BlogPost
        title="My First Week: Thoughts On Starting My First Developer Job"
        date="February 25, 2018"
        url="https://medium.com/@sarahscode/my-first-week-thoughts-on-starting-my-first-developer-job-c79a5cc6fefe"
        summary={`It’s official: I am an employed software developer. It’s been official for a little bit now, but I started work this week, so now it feels real.`}
      />
      <BlogPost
        title="Accep the Offer (Or Don't)"
        date="February 18, 2018"
        url="https://medium.com/@sarahscode/accept-the-offer-or-dont-3e88b937892f"
        summary={`On Monday, February 19th, I will start my first job as a software developer. I received an offer from this company on a Monday a few weeks ago, and on Thursday morning I sent back the signed offer.`}
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
