import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageHeading from '../components/PageHeading';
import SecondaryHeading from '../components/SecondaryHeading';

const writingLinks = [
  { href: '#finding-my-niche', title: 'Finding My Niche' },
  { href: '#on-time', title: 'On Time' },
  { href: '#content-analysis', title: 'Content Analysis' },
];


const WritingPage = () => (
  <Layout>
    <SEO title="Lauren Labs - Writing" />
    <PageHeading heading="Writing" />
    <div className="flex flex-col md:flex-row justify-around items-center py-2 page-links" id="top">
      {writingLinks.map(link => (
        <a key={link.title} href={link.href}>
          {link.title}
        </a>
      ))}
    </div>
    <div id="finding-my-niche" className="border-b">
      <SecondaryHeading heading="Finding My Niche" />
      <h6>March 9, 2015</h6>
      <p>Growing up, I was never one for role models. I admired people for one reason or another, but was never inspired to follow in their footsteps. I can no longer say that there aren’t people who I look up to. I am, as they like to say, standing on the shoulders of giants that have come before me. These giants range from people I’ve never met whose quotes keep me strong, to people I saw speak at a conference once that inspired me to take the first step, to someone who supports me daily even at my lowest. </p>
      <p>Having been told repeatedly starting in middle school that you need a college degree to be successful, I began taking classes for web design because I felt like I needed something solid to stand on when I met people. I didn’t think that, as a woman, I would be taken seriously as a developer without a degree. Three semesters in and I have come to the conclusion that I learn more relevant skills at work than I do at school. </p>
      <p>The technologies they teach are outdated, which is a shame, because it’s fully possible to graduate with an expensive degree and not be qualified for the position you were preparing for. </p>
      <p>For me, school is a technicality; it’s not everything. Building websites for clients is the greatest learning experience I could ever ask for. There has been no greater feeling than fixing a bug in my code after struggling.  Every day is a struggle. Every day I have to push myself and I have to learn. Every day I have to write code, read code, and read about code. </p>
      <p>It’s definitely interesting to be the only female developer at a company (my bosses did give me stick-on mustaches for Christmas last year), but it’s also liberating. </p>
      <p>Working in this field, I don’t feel the need to compete with anyone other than myself. I can put my Funko Pop! Groot and Baymax in the corner of my desk next to my Lego Tardis and little stuffed Dalek and no one calls me a nerd.  I can make CSS puns and I’m not the only one to get them. I can dye my hair bright red and wear jeans to work because the focus is on solving problems, not looking a certain way.</p>
      <p>As children, we are often told that we can be whatever we want to be when we grow up, but I always felt that some careers weren’t really an option. When my parents discovered that I was good with computers, they suggested I find a job as someone’s assistant. It wasn’t until I was twenty-three years old that I realized that I could expect more for myself. I can’t speak for girls everywhere, but I wish I would’ve known this earlier. I am tired of being shy and afraid. I am tired of feeling like an imposter. I have to remember that I am not tricking anyone into thinking that I can do this. I can do this. I have to remind myself every day that this is true, but it’s worth it. </p>
      <p>I leave you with this quote and hope that it will inspire you as it has inspired me:</p>
      <blockquote>“We all feel this self-doubt. The nagging sense that we don’t quite have what it takes. The loss of clarity over why on earth we exist. And if women aren’t empowered to cultivate their uniqueness, we all suffer the loss of beauty, creativity, and resourcefulness they were meant to inject into the world.” (Rebekah Lyons)</blockquote>
      <p><a href="#top">Back to Top</a></p>
    </div>
    <div id="on-time" className="border-b">
      <SecondaryHeading heading="On Time" />
      <h6>December 11, 2014</h6>
      <p>From H.G. Wells’ The Time Machine to the more recent Interstellar, time travel has been a topic of discussion for at least hundreds of years. While The Time Machine deals with someone creating a time machine to go back in time to stop his beloved from being murdered, Interstellar takes a more realistic approach to the theory of time travel and brings up the subject of time relativity.</p>
      <p>In Interstellar, time is referred to as a resource like food and water. The main characters travel through a wormhole to find a new planet for the human race to live on. The trouble comes when they enter the different galaxy where time already moves slower compared to that of time on Earth. Their time-sensitive mission becomes even more difficult when they have to maneuver around a black hole. If they get too close to the black hole, what seems like minutes to them will be decades on Earth.  This takes “time management” to a whole new level.</p>
      <p>Children are often told “a watched pot never boils” by mothers urging their children to not sit around anxiously while waiting for cookies to bake, Santa to come down the chimney, or jell-o to form in the refrigerator. Time does seem to pass slower when one is awaiting a specific event anxiously. Even as adults, a day at work does seem to pass slower than an entire weekend.  If you Google “watched pot never boils”, it auto fills “quantum physics”.  If you’ve ever gone down that rabbit hole before, you know it’s a long, winding path that is very easy to get lost on.</p>
      <p>Einstein is well known for his work dealing with relativity, and while I am no Einstein, I can see how there could be complications.  There is a theory that all of time exists simultaneously, which would make time travel possible and would mean that we live our lives in an infinite loop. I’ve both already written this paper and not begun the semester yet.  As the Doctor said, “Time is a big ball of wibbly-wobbly timey-wimey.”</p>
      <p>On Earth, we define our days as the time it takes for the Earth to rotate one full time. A year is the time it takes for the Earth to complete one revolution around the sun. “A day on Mercury takes 58 days and 15 hours in Earth days.” “A day on Venus is 243 Earth days. Venus’ day is actually longer than its year. It only takes 224.7 Earth days for the planet to orbit the Sun.”</p>
      <p>Only time will tell whether or not humans are capable of developing the technology or understanding of the concept of time. Despite how you measure the passage time, for us, it still passes and our lives come to an end. Even if you could travel through time, you would still age and pass on.  I’ll be spending my time travelling the Earth instead of through time and that’s fine with me.</p>
      <p>Works Cited</p>
      <ul>
        <li>“Albert Einstein and the Fabric of Time.” Everything Forever. N.p., n.d. Web. 1 December 2014.</li>
        <li>Interstellar. Dir. Christopher Nolan, 2014. Film.</li>
        <li>“Days of the Planets.” Universe Today.  Cessna, Abby, 16 August 2009. Web. 1 December 2014.</li>
      </ul>
      <p><a href="#top">Back to Top</a></p>
    </div>
    <div id="content-analysis">
      <SecondaryHeading heading="Content Analysis" />
      <h6>October 30, 2014</h6>
      <p>Technology is integrated into nearly everything that we do today. We live a life that would be unrecognizable to our ancestors. My family first got a computer in 1994. I was four years old. I took my first computer class in pre-school before I even knew how to read or write my name. We can only guess at how deeply this technology affects the developing mind, but some of the changes in our society and noticeably obvious.</p>
      <p>In recent years, scientists of many specialties have begun to do research on this very topic. One such academic “began to study not only what the computer was doing for us, but what it was doing to us, including how it was changing the way we see ourselves, our sense of human identity” (Turkle 38). The results did show that children are “absorbing more than the content of what appears on the screen. They are learning new ways to think about what it means to know and understand” (Turkle 38). This is obviously a positive thing, it is allowing and encouraging growth and progress. Children are growing up and able to look at problems differently than their fathers and are able to come up with different solutions. </p>
      <p>The study also found, though, that “middle school and high school students tend to be willing to provide personal information online with no safeguards, and college students seem uninterested in violations of privacy and in increased governmental and commercial surveillance” (Turkle 39). </p>
      <p>Another negative is that “some children who write narratives for their screen avatars may grow up with too little experience on how to share their real feelings with other people” (Turkle 39). This is what all of the studies on “how technology affects us” boils down to. This is what older generations complain about the most. Twenty-something’s and younger are not as good at communicating in person or at relating to other people. Having parties for socialization and networking has been replaced with social networks.</p>
      <p>While I do believe that the advancement of technology has benefited the world, I find myself agreeing with some of the negatives that are noticed. For example, Carr notes, “Now my concentration often starts to drift after two or three pages. I get fidgety, lose the thread, and begin looking for something else to do” (Carr 45). I have especially begun to notice this over the past few years. Essentially, since I switched to a smartphone, my level of concentration has diminished. I used to be an avid reader. I couldn’t get enough. I would stay up all night reading in my bed and not regret it in the morning because my mind was so hungry. Now, it’s more difficult for me to climb into a story. I skim too much; find myself feeling anxious and not able to sit still. My mind races from topic to topic. I have twenty tabs open in my browser of articles I want to read, but “Even a blog post of more than three to four paragraphs is too much to absorb. I skim it” (Carr 47). </p>
      <p>It’s a revolution in thinking. No longer do we have to memorize things. We don’t have to thumb through a book to find answers. Today, we have Google. The fact that I feel as though I rely on Google to provide me answers on an almost daily basis leads me to see it as an extension of my brain. “In Google’s view, information is a commodity, a utilitarian resource that can be mined and processed with industrial efficiency. The more pieces of information we can “access” and the faster we can extract their gist, the more productive we become as thinkers” (Carr 51). Maybe this is what allows us to be more progressive thinkers; we have all of the facts with us, in our pockets, all the time. Carr makes an interesting point out of this though: “as we come to rely on computers to mediate our understanding of the world, it is our own intelligence that flattens into artificial intelligence” (Carr 53). </p>
      <p>Between working and going to school, it’s amazing that I even have time to have friends. It’s so important to “make friends” and “network”. When it went from being in person to adding individuals to their appropriate social networks, it becomes a different situation. “We live in a time when friendship has become both all and nothing at all…” (Deresiewicz 56). So, you’re already “friends” with everyone went to your high school. Now, you’re in college and you have to start adding people you meet there for networking in the future. You’ve been “friended” by people you’ve met during nights out on the town, fellow interns, and the barista who makes your latte every morning. With so many people to keep up with in our social circles online, there’s hardly time for real friendship. Have a problem? Just post about it on Facebook and ask your “friends” for advice. “In retrospect, it seems inevitable that once we decided to become friends with everyone, we would forget how to be friends with anyone” (Deresiewicz 56). </p>
      <p>I think it probably used to be that people would feel lost without their friends. I suppose that is still partially true today, but a growing number of people admit to feeling lost without their phone in hand. It not only connects individuals, but also holds memories. It holds old numbers, pictures, and messages. Now, when feeling nostalgic, instead of opening a photo book, one can just scroll through the album on their phone. “That interval of my life was simply past, and no one remembered it but me. If I hadn’t had the phone, it might not have ever happened at all” (Gatham 63). Our phones have become so much more than just a phone. “My grandmother died that same week, but I kept her number. There was still something that felt like a connection I didn’t want to delete” (Gatham 65).</p>
      <p>There is some benefit to having our phones with us all of the time. There have been advancements that have come to allow it to be used to pass along urgent messages. “In an emergency, it can be the most effective way of alerting the masses. But at the same time, it as the effect of sterilizing human contact” (67 Stobierski). Instead of calling your friend when you have good news, or calling your uncle in another state, we simply send group text messages or even simpler, post it on Twitter or Facebook. “All of these technologies have served a role in this paradox whereby, as we become more integrated, the gulf between individuals is growing instead of shrinking. We are distancing ourselves at the same time we are exposing ourselves to each other” (68 Stobierski) It has become so easy to type a status update, but almost impossible to talk to someone in person. “We have forgotten how to talk to one another. We have forgotten the etiquette of conversation. We are no longer comfortable speaking, opening ourselves up. We don’t want to give up control. We don’t want to make ourselves vulnerable” (68 Stobierski).</p>
      <p>I feel like this is common among people around my age. I cannot speak for everyone of course, but I am much more comfortable texting someone than speaking to them on the phone or even in person. This was a problem in my last relationship. He actually made the comment once when we were fighting that he’d be waiting for my text message later. I get nervous and tongue tied when I have to speak. It has gotten significantly better over the past few years, but there was a time when the only people I would talk to on the phone was my parents, my best friend, or my boyfriend. I am addicted to my phone much like the people in these stories. It’s a love/hate relationship. I suppose all addictions are like that. Those are the times we live in these days.</p>
      <p>There are pros and cons to everything. We are advancing medicine so that people may live longer, while putting more pressure on Earth to support too many people. Having easy access to the Internet allows us to have better access to news in the event of an emergency. Keeping our phones nearby allows us to call for help when our phones break down. Facebook allows us to keep in touch with people from our past, while it also decreases the need for actual human interaction. These are the things we, as a civilization, will have to figure out as time goes on. </p>

      <p>Works Cited</p>
      <ul>
        <li>Turkle, Sherry "How Computers Change the Way We Think.” The Essay Connection. 10th ed. Boston: Wadsworth, 2013. 37-43. Print.</li>
        <li>Carr , Nicholas "Is Google Making us Stupid? What Internet Is Doing to Our Brains." The Essay Connection. 10th ed. Boston: Wadsworth, 2013. 45-54. Print.</li>
        <li>Deresiewicz, William "Faux Friendship." The Essay Connection. 10th ed. Boston: Wadsworth, 2013. 56-60. Print.</li>
        <li>Gatham, E. Cabell Hankinson "Cell Phones." The Essay Connection. 10th ed. Boston: Wadsworth, 2013. 61-66. Print.</li>
        <li>Stobierski, Timothy "The Paradox." The Essay Connection. 10th ed. Boston: Wadsworth, 2013. 66-68. Print.</li>
      </ul>
      <p><a href="#top">Back to Top</a></p>
    </div>
  </Layout>
)

export default WritingPage
