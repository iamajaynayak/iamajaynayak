import ALORON from "../../assets/project_image/aloron.png";
import FACEDETECTPC from "../../assets/project_image/fdpc.png";
import MYCATFRIEND from "../../assets/project_image/mycatfriend.png";
import FOODAPP from "../../assets/project_image/foodApp.png";
import BACKGROUNDCOLOR from "../../assets/project_image/background.png";
import FASHIONSTORE from "../../assets/project_image/fashionstore.png";

const projectData = [
  {
    id: 1,
    name: "Online Fashion Store",
    pc: FASHIONSTORE,
    source: "https://github.com/iamajaynayak/fashion_store",
    projectlink: "https://anstore.herokuapp.com/",
    description:
      "This is my Biggest React Project. I build this App while learning advanced react topics and different tools like - Redux, Dynamic-Route, Firebase etc.",
  },
  {
    id: 2,
    name: "Aloron - My diary",
    pc: ALORON,
    source: "https://github.com/iamajaynayak/aloron",
    projectlink: "https://aloron.herokuapp.com/",
    description:
      "Besides being a Javascript developer, I love reading and writing stuff. My love for literature led me to build this app. It is like a diary for my writings.",
  },
  {
    id: 3,
    name: "Face Detecting App",
    pc: FACEDETECTPC,
    source: "https://github.com/iamajaynayak/facedetectapp",
    projectlink: "https://iamajaynayak.github.io/facedetectapp/",
    description:
      "This app can detect human face. I build this project using Clarifai API, ParticlesJS, React-tilt for the logo and Tachyons.",
  },
  {
    id: 4,
    name: "My Cat Friends",
    pc: MYCATFRIEND,
    source: "https://github.com/iamajaynayak/nerd-cats",
    projectlink: "https://iamajaynayak.github.io/nerd-cats/",
    description:
      "This is my very first react project, here I'm making an API call to fetch user data and conditionally rendering them according to the user search input.",
  },
  {
    id: 5,
    name: "Food App Template",
    pc: FOODAPP,
    source: "https://github.com/iamajaynayak/foodApp_template",
    projectlink: "https://iamajaynayak.github.io/foodApp_template/",
    description:
      "One of my first projects where I learned responsive css, media queries, different css units, and most importantly I learnd how to Structure a page.",
  },
  {
    id: 6,
    name: "Background Color Generator",
    pc: BACKGROUNDCOLOR,
    source: "https://github.com/iamajaynayak/backgroundcolor-generator",
    projectlink: "https://iamajaynayak.github.io/backgroundcolor-generator/",
    description:
      "My first ever github project. Here user can select any two colors and based on that the linear-gradient codes will be generated.",
  },
];

export default projectData;
