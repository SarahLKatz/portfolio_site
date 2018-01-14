import {Layout, MostRecent} from '../Components'

export default () => {
  return (
    <Layout>
      <div className="container">
        <MostRecent 
          type="Book Read"
          name="Life in Code: A Personal History of Technology"
          picture="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2017%2F05%2Flife-in-code.jpg%3Fw%3D450&w=800&q=85"
          creator="By Ellen Ullman"
          review="1"
        />
        <MostRecent 
          type="Movie Seen"
          name="Pitch Perfect 3"
          picture="https://images-na.ssl-images-amazon.com/images/M/MV5BNjEyMjk4NTE1NV5BMl5BanBnXkFtZTgwOTgzNzA3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
          creator="Universal Pictures"
          review="5"
        />
        <MostRecent 
          type="Race"
          name="Prospect Park Track Club Turkey Trot 5 Miler"
          date="11/23/2017"
          picture="/static/mostRecent/race.png"
          dataType="Official Time"
          data="57:18"
        />
        <MostRecent 
          type="Race Medal"
          name="Prospect Park Track Club Turkey Trot 5 Miler"
          date="11/23/2017"
          picture="/static/mostRecent/raceMedal.jpg"
          dataType="Official Time"
          data="57:18"
        />
        <MostRecent 
          type="Vacation"
          name="Walt Disney World"
          date="January 2016"
          picture="/static/mostRecent/vacay.jpg"
        />
        <MostRecent 
          type="Sporting Event"
          name="Kannapolis Intimidators at Lakewood BlueClaws"
          date="9/4/2017"
          picture="/static/mostRecent/sports.jpg"
          dataType="Final Score"
          data="Lakewood 3, Kannapolis 2"
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