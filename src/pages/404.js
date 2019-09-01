import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from '../components/PageHeading';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageHeading heading="Page Not Found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
