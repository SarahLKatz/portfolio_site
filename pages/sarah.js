import {Layout, MostRecent} from '../Components'

export default () => {
  return (
    <Layout>
      <div className="container">
        <MostRecent
          type="Book Read"
          name="Lock In"
          picture="/static/mostRecent/book.jpg"
          creator="By John Scalzi"
          review="4"
        />
        <MostRecent
          type="Movie Seen"
          name="Pitch Perfect 3"
          picture="/static/mostRecent/movie.jpg"
          creator="Universal Pictures"
          review="5"
        />
        <MostRecent
          type="Music Purchased"
          name="Aggroculture"
          picture="/static/mostRecent/music.jpg"
          creator="Fitness"
          review="5"
        />
        <MostRecent
          type="Race"
          name="Run As One (4M) Presented By JPMorgan Chase"
          date="4/22/2018"
          picture="/static/mostRecent/race.png"
          dataType="Official Time"
          data="40:32"
        />
        <MostRecent
          type="Race Medal"
          name="United Airlines NYC Half"
          date="3/18/2018"
          picture="/static/mostRecent/raceMedal.jpg"
          dataType="Official Time"
          data="2:27:50"
        />
        <MostRecent
          type="Vacation"
          name="Walt Disney World"
          date="January 2016"
          picture="/static/mostRecent/vacay.jpg"
        />
        <MostRecent
          type="Museum Visited"
          name="Museum of Modern Art"
          date="July 2017"
          picture="/static/mostRecent/museum.jpg"
          dataType="Special Exhibit"
          data="Frank Lloyd Wright at 150: Unpacking the Archive"
        />
        <MostRecent
          type="Sporting Event"
          name="Hartford Wolf Pack at Bridgeport Sound Tigers"
          date="2/18/2018"
          picture="/static/mostRecent/sports.jpg"
          dataType="Final Score"
          data="Bridgeport 4, Hartford 0"
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>
    </Layout>
  )
}
