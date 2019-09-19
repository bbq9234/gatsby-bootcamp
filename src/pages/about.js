import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Hi, I'm bbq923</h1>
      <p>based on Pangyo, Korea</p>
      <p><Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default AboutPage