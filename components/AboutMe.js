import React from "react";
import '@components/AboutMe.css';
import Chloe from '@components/chloepic.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Airbus from '@components/photo2.PNG'
import Card from 'react-bootstrap/Card';



function AboutMe() {

return (
    <div class="container">
<div class="row align-items-start">
<Card border="dark" className="mx-auto" style={{ width: '18rem' }}>
        <Card.Header>Reviews</Card.Header>
        <Card.Body>
          
          <Card.Text>
            "Chloe has been training our German Shepherd on a weekly basis since he was 3y/o and is extremely well socialized and behaved due to her very professional method of training. We are confident in taking him everywhere and people are truly amazed at his demeanor and response to commands. We still love that she takes him for hikes with others dogs, on leash and off leash. We trust that he will be safe and respected while in her care. He loves being with her on outings to local trails, lakes, and streams. We highly recommend Chloe if you are looking for a well-behaved and well-trained dog!"
          </Card.Text>
          <Card.Title>-Bruce and Mary Conklin</Card.Title>
          
          <Card.Text>
            "I was so excited to learn Chloe was starting her own training business. She is truly the best and I cannot recommend her enough!!! She has a way with dogs like I've never seen and we affectionately call her the dog whisperer in our house. She's trained our German Shpherd since she came home from the breeder and has helped to mold the best fur family member I could ever ask for! Our little yorkie loves her too! Our pups love and respect Chloe beyond words. She's the best person to help you become the leadrer of your pack and have a social and well mannered fur friend. I don't know where we'd be without Chloe but I am so blessed we found her and I give my ffill trust in her and cannot recommend her enough!"
          </Card.Text>
          <Card.Title>-Debbie Gertie</Card.Title>
        </Card.Body>
      </Card>
      <br/>

    <div class="col">
    <p id="introParagraph">Welcome to my site, I'm Chloe, and I created The Traveler's K9 in 2022 after working professionally with dogs (and other animals) for 6 years. I'm a balanced dog trainer who focuses on all quadrants of operant conditioning. You may be wondering where "Traveler's" come's from- I run a mobile business that allows me to be in remote locations; having a broad array of clients. My passion's include dog sports, thru hikes, and of course traveling with my dog. My mission it to create a profound bond between human and dog, resulting in a well mannered environment. </p>
<img src={Chloe} className="img-fluid" id="chloeAndAirbus" alt="Chloe and Airbus"/>
    </div>
    <div class="col" id="trainingPics">
    <img src={Airbus} id="training" />
    </div>
</div>
<div>
</div>
</div>
)
}

export default AboutMe;
