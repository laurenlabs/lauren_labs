import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from '../components/PageHeading';

import lauren from '../images/lauren.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Lauren Labs - Home" />
    <div style={{ maxWidth: `250px` }} className="py-4 mx-auto">
      <img src={lauren} alt="Headshot of Lauren Lawson" className="my-4 rounded-full" />
    </div>
    <PageHeading heading="Hi, I'm Lauren." />
    <h2 className="mt-2">Part Front End Developer.</h2>
    <p>After working in the medical field for over five years, I decided I needed to be in a 
      field that stimulated me intellectually and creatively. I started out by taking classes 
      through Girl, Develop It and RailsBridge. I graduated with my Associate's Degree in Web and 
      Multimedia Design from Cincinnati State in the spring of 2016. I hope that through this site, 
      you will see some of my creativity and what I am capable of.
    </p>
  </Layout>
)

export default IndexPage
