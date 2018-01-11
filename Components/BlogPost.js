import React from 'react';

const BlogPost = (props) => {
  const {title, date, url, summary} = props;
  return (
    <div className="post">
      <h3><a href={ url }>{ title }</a></h3>
      <h4>{ date }</h4>
      <p>{ summary.slice(0,300) } ...</p>
      <p><a href={ url } target="_blank">Read More</a></p>
      <style jsx>{`
        .post {
          border: .25vh solid #DDD;
          box-shadow: 0.75vh 0.75vh rgba(221, 221, 221, 0.5);
          padding: 1.25vh;
          margin: 3vh auto;
        }

        h4, p {
          margin: 1vh auto;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default BlogPost;