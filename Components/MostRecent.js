import React, {Component} from 'react';

const MostRecent = props => {
  const {type, name, date, picture, creator, review, dataType, data} = props;
  return (
    <div className="recent">
      <h3 className="highlight">Most Recent {type}</h3>
      <h4>{name}</h4>
      { date && <h5>{date}</h5> }
      <img src={picture} alt={name} />
      { creator && <h5>{creator}</h5> }
      { review && <span>{('★').repeat(review)}</span> }
      { data && <h5>{dataType}: {data}</h5>}
    <style jsx>{`
      .recent {
        margin: 1vh;
        width: 23vw;
        text-align: center;
        padding: 1vh;
        border: 0.25vh solid #DDD;
      }
      h3 {
        margin-bottom: 1vh;
      }

      img {
        max-height: 25vh;
        max-width: 20vw;
        margin: 1vh;
      }
    `}</style>
    </div>
  )
}

export default MostRecent;