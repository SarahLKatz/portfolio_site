import Layout from '../Components/Layout'

export default () => {
  return (
    <Layout>
      <a href="https://medium.com/@sarahscode" target="_blank"><h3 className="highlight">Check Out My Blog</h3></a>
      <style jsx>{`
        a {
          text-decoration: none;
          color: none;
        }
      `}</style>
    </Layout>
  )
}