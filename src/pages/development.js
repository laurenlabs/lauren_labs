import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageHeading from '../components/PageHeading';
import PortfolioPiece from '../components/PortfolioPiece';

import consulting from '../images/dev/56k.jpg';
import cav from '../images/dev/cav.jpg';
import cgl from '../images/dev/cgl.jpg';
import dipgcol from '../images/dev/dipgcol.jpg';
import techtap from '../images/dev/techtap.jpg';
import huntington from '../images/dev/huntington.jpg';
import web130 from '../images/dev/web130.jpg';

const DevelopmentPage = () => (
  <Layout>
    <SEO title="Lauren Labs - Development" />
    <PageHeading heading="Development" />
    <PortfolioPiece 
          title="Cavalino Tequila" 
          description="For this website, I was in charge of all HTML and CSS elements. This was my first experience with CSS3 transitions."
        >
        <img src={cav} alt="Cavalino Tequila"/>
      </PortfolioPiece>
      <PortfolioPiece 
          title="DIPG Collaborative" 
          description="This was my first major experience creating a custom Wordpress theme for a client. I wrote HTML, CSS, jQuery, and some PHP while building this site."
        >
        <img src={dipgcol} alt="DIPG Collaborative"/>
      </PortfolioPiece>
      <PortfolioPiece 
          title="TechTap" 
          description="I utilized HTML and CSS on top of the Twitter Bootstrap framework for this one page static website for a local computer and phone repair shop located in Milford, Ohio."
        >
        <img src={techtap} alt="TechTap"/>
      </PortfolioPiece>
      <PortfolioPiece 
          title="Community Green Landscape Group" 
          description="This was a more animated front page that I worked on over the winter season in 2015. As this was the first non-static page that I was a part of, I was responsible for the HTML and CSS."
        >
        <img src={cgl} alt="Community Green Landscape Group"/>
      </PortfolioPiece>
      <PortfolioPiece 
          title="Huntington Learning Center at Harper's Point" 
          description="This static page was created to advertise a special Huntington Learning Center was running in the fall of 2014. It is the very first web page I have ever built for a client. I did the HTML and CSS for this site."
        >
        <img src={huntington} alt="Huntington Learning Center at Harper's Point"/>
      </PortfolioPiece>
      <PortfolioPiece 
          title="56K Consulting" 
          description="I designed this website for Aaron Brongersma. I built this site using the Skeleton framework so that it would be modern and responsive. It includes HTML5, CSS3 animations, and jQuery."
        >
        <img src={consulting} alt="56k Consulting Logo"/>
      </PortfolioPiece>
  </Layout>
)

export default DevelopmentPage
