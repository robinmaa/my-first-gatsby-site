
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="Über mich">
      <p>Hey! Ich bin der Ersteller der Homepage</p>
    </Layout>
  )
}

export const Head = () => <title>Über mich</title>

export default AboutPage