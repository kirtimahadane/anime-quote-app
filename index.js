 
 const container=document.querySelector('#container');
 container.style.display="none";
 document.querySelector('.btn').addEventListener('click',()=>{
  getRandomAnime();
 } );

const url='https://animechan.vercel.app/api/random';

const getRandomAnime=async()=>{
const response= await fetch(url);
const data= await response.json();
console.log(data);
const html=`
<h4> Name:${data.anime}</h4>
<p> Character:${data.character}</p>
<h6> Quote:${data.quote}<h6>
`;
container.innerHTML=html;
container.style.display="block";
}


