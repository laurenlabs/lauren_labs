import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from '../components/PageHeading';
import SecondaryHeading from '../components/SecondaryHeading';
import PortfolioPiece from '../components/PortfolioPiece';

import consulting from '../images/design/56k_logo.jpg';
import bageldogs from '../images/design/bageldogs.jpg';
import cincyscrum from '../images/design/cincyscrum.jpg';
import rrga8 from '../images/design/rrga8.jpg';
import doctorwho from '../images/design/doctorwho.jpg';
import typeasshape from '../images/design/typeasshape.jpg';

const designLinks = [
  { href: '#illustrator', title: 'Illustrator' },
  { href: '#photoshop', title: 'Photoshop' },
  { href: '#flash', title: 'Flash' },
  { href: '#misc', title: 'Misc.' },
];

const DesignPage = () => (
  <Layout>
    <SEO title="Lauren Labs - Design" />
    <PageHeading heading="Design" />
    <div className="flex flex-col md:flex-row justify-around items-center py-2 page-links">
      {designLinks.map(link => (
        <a key={link.title} href={link.href}>
          {link.title}
        </a>
      ))}
    </div>
      <div id="illustrator" className="border-b">
        <SecondaryHeading heading="Adobe Illustrator" />
        <PortfolioPiece 
            title="56k Consulting" 
            description="I designed this logo and the 56K website to be modern and trendy. 
            56K Consulting specializes in cloud storage, virtual machines, and other operations-related 
            things. I wanted the logo to have the same kind of style as start-ups who are coming up with 
            ways to improve our future. Aaron and 56K are leading the way by utilizing the newest technologies 
            to keep sites online."
          >
          <img src={consulting} alt="56k Consulting Logo"/>
        </PortfolioPiece>
        <PortfolioPiece 
          title="Bagel Dogs" 
          description="One of my assignments in an early graphic design class was to create a brand identity for 
          a new food truck. I chose to create a fun, retro food truck that served high-quality specialty hot dogs. 
          I wanted the colors to be as fun and playful as the food. The shaggy dog is the mascot for Bagel Dogs."
        >
          <img src={bageldogs} alt="Flyer for the fictional food truck called Bagel Dogs"/>
        </PortfolioPiece>
      </div>
      <div id="photoshop" className="border-b">
        <SecondaryHeading heading="Adobe Photoshop" />
        <PortfolioPiece 
          title="Cincy Scrum" 
          description="In the spring of 2015, I came up with an idea for a newsletter focusing on tech in the 
          Cincinnati Area. Not many people realize that Cincinnati is a popular place for a tech start-up to be 
          born. The goal of this newsletter would be to keep professionals and students up to date on upcoming 
          tech meet-ups, talks, and conferences, as well as have interviews with the biggest names in the Cincinnati 
          start-up world. I envision this being the go-to resource for designers and developers in Cincinnati looking 
          to get more involved and stay up to date with local trends and news."
        >
          <img src={cincyscrum} alt="Prototype of magazine cover"/>
        </PortfolioPiece>
        <PortfolioPiece 
          title="Ale 8" 
          description="This is an example of a Photoshop morph I completed in the fall of 2015. The background is of 
          scenery in Red River Gorge, Kentucky. I cut the hiker out of another picture to add him to this cliff and 
          then added a bottle of Ale 8 to his right hand. I changed the levels of the photograph and added the Ale 8 
          logo to the top left portion of the ad."
        >
          <img src={rrga8} alt="Advertisement for Ale 8 featuring handsome man on a mountain top"/>
        </PortfolioPiece>
      </div>
      <div id="flash" className="border-b">
        <SecondaryHeading heading="Adobe Flash" />
        <div className="flex flex-col md:flex-row my-2 portfolio-piece">
          <div className="w-full">
            <h3 className="mb-2"><a href="https://www.youtube.com/watch?v=97hdpa1BBHI&feature=youtu.be">Vampire Smile</a></h3>
            <p>
            I created this video in Adobe Flash for the song 'Vampire Smile' by Kyla La Grange. I wanted
            to focus on the heartbreak of the song, so I did just focus on the lyrics for some of the sections. Also 
            includes a clip from 'What We Do in the Shadows' that I edited in iMovie and, yes, that is Harry Potter.
            </p>
          </div>
        </div>
      </div>
      <div id="misc">
        <SecondaryHeading heading="Misc." />
        <PortfolioPiece 
          title="Type As Shape" 
          description="In my first semester as a web design major, I created this for my design principles class. 
          It is a pattern created using two letters. Can you see which ones I used? (A & M)"
        >
          <img src={typeasshape} alt="Blending of the letters A and M into a pattern"/>
        </PortfolioPiece>
        <PortfolioPiece 
          title="Poster Project" 
          description="For the final project in my design principles class, we had to incorporate both imagery 
          and typography. As a Doctor Who fan, I have been in love with this quote since Eleven said it. I, too, 
          am a 'dreamer of improbable dreams'. The design is made out of different kinds of cardstock on a piece 
          of foam core. I cut the text out of two colors of card stock to draw more attention to 'improbable'. That 
          is, after all, what the piece is primarily about - the heavy-looking TARDIS resting on a small cloud that 
          is accessed by the broken staircase. I chose to do the piece in greys, blacks, and blues so that it would 
          be peaceful and could encourage pleasant, but wonderful dreams.">
          <img src={doctorwho} alt="Doctor Who themed poster that says Dreamer of Impossible Dreams"/>
        </PortfolioPiece>
      </div>
  </Layout>
)

export default DesignPage;
