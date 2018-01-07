import React from 'react';

const Project = (props) => {
  const {live, title, img, date, company, team, description, tech, presentation} = props;
  return (
    <div>
      <div className="single-project">
        { 
          live ?
          <h3 className="highlight"><a href={live} target="_blank">{title}</a></h3>
          :
          <h3 className="highlight">{title}</h3>
        }
        { img && <img src={img} /> }
        <h4>{ date }</h4>
        <h4><span className="bold">Created while at</span> { company }</h4>
        { team && <h4>Team Members: { team }</h4> }
        <p className="description">
          { description }
        </p>
        <p className="description">
          <span className="bold">Technologies Used:</span> { tech }
        </p>
        { presentation && <a href={props.presentation} target="_blank">Video Presentation</a> }
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
          max-width: 300px;
          max-height: 300px;
          border: .25vh solid #DDD;
          box-shadow: 0.75vh 0.75vh rgba(221, 221, 221, 0.5);
        }
        .description {
          text-align: justify;
          text-justify: auto;
        }

        p {
          margin: 1vh 0;
        }
      `}</style>
    </div>
  )
}

export default Project;