import React from 'react';

const Project = (props) => {
  return (
    <div>
      <div className="single-project">
        <h3 className="highlight">{props.title}</h3>
        { props. img && <img src={props.img} /> }
        <h4><span className="bold">Created While At</span> { props.company }</h4>
        <p className="description">
          { props.description }
        </p>
      </div>
      <style jsx>{`
        .single-project {
          border: .25vh solid #DDD;
          padding: 1.25vh
        }
        h3 {
          text-align: center;
        }
        img {
          display: block;
          margin: 2vh auto;
        }
        h4 {
          margin-bottom: 1vh;
        }
        .description {
          text-align: justify;
          text-justify: auto;
        }
      `}</style>
    </div>
  )
}

export default Project;