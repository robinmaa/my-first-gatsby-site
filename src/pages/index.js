// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (  
   <Layout pageTitle="Startseite">
        <p>Das ist die Startseite von Robin Maier</p>
    </Layout>
  )
}

export const Head = () => <title>Startseite</title>

export default IndexPage