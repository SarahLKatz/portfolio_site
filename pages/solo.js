import Layout from '../Components/Layout'
import Project from '../Components/Project'

export default () => {
  return (
    <Layout>
      <div className="projects">
        <div className="single-project">
          <Project 
            title="This Title" 
            img="http://lorempixel.com/300/300/" 
            company="Fullstate" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </div>
        <div className="single-project">
          <Project 
            title="This Title" 
            img="http://lorempixel.com/300/300/" 
            company="Fullstate" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </div>
        <div className="single-project">
          <Project 
            title="This Title" 
            img="http://lorempixel.com/300/300/" 
            company="Fullstate" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
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