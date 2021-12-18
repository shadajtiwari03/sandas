import NavBar from '../pages/NavBar'
import MyPic from "../styles/MyPic.png"
import Image from 'next/image';
// TO Run: npm run dev 

const about = () => {
    return ( 
        <div id="main">
            <title>About me</title>

            <NavBar />
            <br />
            
            <section className="container pb-5">

            <div className="text-center">
                <Image src={MyPic}/>
            </div>

                <p>Shadaj is the full name of a Musical Note (Saa) in Hindustani Classical Music. Coming from a Family of Musicians and Artists, I was introduced to music at a very small age. My Mother has always been my inspiration and under her Supervision and Guidance, I learned the Basic Concepts of Hindustani Classical Music. I was elated When I saw her playing Sitar and I decided to learn a String Instrunment.</p>
                
                <p>I started playing the acoustic guitar at the age of 8 years but then I came to know about Western Music and its branches. When I was 13, I decided to learn Theory of Western Music and different Western Playing styles. At that time I came to know about what electric Guitar is and there is how much to explore in it so I switched to Electric Guitar and started learning about Staff Notation and some typical genres like Blues and Funk.</p>
                
                <p>I successfully cleared examinations conducted by some of the Most Reputed Music Institutes in the world :
                <br /><br />
                1. Cleared the Level-1 Award in Graded Examinations in Grade-3 Rock and Pop(Guitar) with Merit in the year 2015<br />
                2. Cleared the Level-2 Award in Graded Examinations in Grade-5 Rock and Pop(Guitar) with Distinction in the year 2016<br />
                3. Cleared the Level-3 Award in Graded Examinations in Grade-8 Rock and Pop(Guitar) with Distinction in the year 2017<br /></p>
                
                <p>I am a knowledgeable musician with selection letters from Berklee School Of Music, Massachusetts and London College of Music, University of West London. Currently contributing to Mizaaj - The Music Band. Simultaneously, I cleared examinations from Prayag Sangit Samiti, Allahabad in Hindustani Calssical Music :
                <br /><br />
                1. Prabhakar in Vocal<br />
                2. Prabhaar in Instrumental(piano)<br />
                3. Senior Diploma in Tabla<br /></p>

                <p>I am currently doing my Bachelor's in Electronics and Communication Engineering. I always wanted to understand the working of Gadgets and New Technologies. Communication is one of my interest and I am looking forward to do something in that field.</p>
            </section>
        </div>

     );
}



export default about;