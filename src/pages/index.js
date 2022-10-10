// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (  
   <Layout pageTitle="Startseite">
        <p>Das ist die Startseite von Lampart Holz</p>
        <StaticImage
        alt="Crestone Colorado"
        src="../images/Crestone.jpg"
        />
    </Layout>
  )
}

export const Head = () => <Seo title="Startseite"/>

export default IndexPage