import {Layout, Project} from '../Components'

export default () => {
  return (
    <Layout>
      <div className="projects">
        <div className="single-project">
          <Project 
            title="Viewtrition" 
            img="/static/projects/viewtrition.jpg" 
            presentation="https://youtu.be/w72mSp2WKW0"
            date="November-December 2017"
            company="Fullstack Academy" 
            team="Gabriel DeFazio, Lucy Sutton, Łukasz Kapica, Sarah Katz"
            description="This iOS app, built as a capstone project while at Fullstack Academy, allows users to take a picture of food, and, after confirming the contents of the picture, returns nutritional information about the meal in easy-to-understand charts. Users can also view historical meal data. My part in this project included building the camera (using Expo's camera module), creating a user settings page (which includes interactions with Firebase Auth and the Firestore database), styling the food selection page, and working on the nutritional charts for micronutrients (using Victory Charts)."
            live="https://expo.io/@kapicaluk/viewtrition"
            tech="React Native, Redux, React-Redux, Firebase Auth, Cloud Firestore, Expo, Victory Charts, Clarifai API, Nutritionix API"/>
        </div>
        <div className="single-project">
          <Project 
            title="Snape's Potion Emporium" 
            img="/static/projects/snapespotions.jpg" 
            date="October-November 2017"
            company="Fullstack Academy" 
            team="Nicole Chu, Pat Petillo, Sarah Katz, Tim Han"
            description="An ecommerce site, our first group project at Fullstack Academy, that sells potions. The app allows users to log in, add potions to their cart, purchase the potions, and view an invoice. My part in this project included building backend API routes, building several frontend components (including invoice), creating the logo (using Adobe Illustrator), and creating styles for the app using SCSS."
            live="http://gotsnaped.herokuapp.com/"
            tech="Node.js, Express, React, React-Redux, PostgreSQL, Sequelize, Heroku"/>
        </div>
      </div>
      <style jsx>{`
        .projects {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .single-project {
          flex: 0.3;
        }
      `}</style>
    </Layout>
  )
}