import {BlogPost, Layout} from '../Components/';

export default () => {
  return (
    <Layout>
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
      <BlogPost 
          title="Suck It Up and Network (But Make It Easier On Yourself)"
          date="February 11, 2017"
          url="https://medium.com/@sarahscode/suck-it-up-and-network-but-make-it-easier-on-yourself-957dc88e196c"
          summary={`I’ve blogged many times before about my struggles with networking and attending events. I know that networking can be very important, so when I spoke to my career success counselor from Fullstack last week, I asked for some tips on networking for people who struggle with networking. Here’s what she said — and how it worked for me`}
        />
      <BlogPost 
        title="Building My DotCom"
        date="February 4, 2018"
        url="https://medium.com/@sarahscode/building-my-dotcom-74b77a211878"
        summary={`… Or how I went from “AWS Hates Me” to sarahlkatz.com (SPOILER: I didn’t use AWS)`}
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