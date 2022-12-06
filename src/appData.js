function Tile(img, title, desc) {

  this.img = img;
  this.title = title;
  this.desc = desc;
}


// Home data 

const hireComponentData = {
  header: {
    title: "HIRE DEDICATED SOFTWARE DEVELOPERS",
    img: 'icons/line-shape-2.png'
  },
  data: [
    new Tile("icons/choose-icon-1.png", "100% TALENTED DEVELOPERS", "We here to serve you the talented developers on your requirement. Check the profiles and skills or if you have some problem tell us, we are here to solve every doubts and make it easy to pick the best developers for your organization."),
    new Tile("icons/choose-icon-2.png", "STRONG TECHNICAL BACKGROUND", "Unlike others, we provide you the strong as pillar developers to your company, we beat the clock for requirements and find out the best remote candidate or teams for your company. Feel free to ask about the technical points and aspect."),
    new Tile("icons/choose-icon-3.png", "AFFORDABLE COSTS", "Bide your time to conduct research on developers rates and compare them to those you are offered. We offer accurate estimations based on the scope of work and product specifications only. No hidden extra expenses."),
  ]
}


const homeServiceComponentData = {
  heading: {
    title: "Our perfect web and app development services suite",
    desc: "Our app development services span the technology transformation progression from the commencement of the project to going live so that you can deliver value unremittingly and meet your users’ expectations, while mitigating risk, upholding control and still leveraging an agile approach. Our scope of services mainly includes:"
  },

  data: [
    new Tile("icons/UI-UX.png", "UI/UX Development", ""),
    new Tile("icons/MobileApp.png", "Mobile App Development", ""),
    new Tile("icons/webDevelopment.png", "Web Application Development", ""),
    new Tile("icons/DataScience.png", "Data Chatbots & Machine Learning", ""),
    new Tile("icons/QA.png", "QA & Testing Services", ""),
    new Tile("icons/support.png", "Support & Maintenance", ""),
  ]

}



const WhatWeDoData = {
  heading: {
    title: "WHAT WE DO",
    img: "icons/line-shape-2.png"
  },

  upperTileData: [
    new Tile("icons/human-centered.svg", "Hire a Developer", "Are you looking for the good developers? Then you are on the right place, here we provide you the top developers who are professionally passionate and dedicated towards their work as well as here we offer you remote and on-site developers to your company."),
    new Tile("icons/digital-strategy.svg", "Hire Program Manager", "Want a responsible person for you company? Who manages the entire program and the abilities to handle all the things? Then, you are on the right place . It’s our responsibility to offload your work and give you the best program manager."),
    new Tile("icons/development.svg", "Hire entire Team", "Wish for the entire remote team? Here your wishes come true. This site gives you entire team of top developers according to your requirements. We are here to help you to choose your dream teams of developers."),
  ],

  lowerTileData: [
    new Tile("fab fa-android", "Android Development", "Our team of top Android developers with 8+ years of experience in android and expertise with Java, Kotlin, Scala & React-Native can build your Android app and deploy within shortest span of time."),
    new Tile("fab fa-apple", "IOS Apps Development", "Our team of top IOS developers with 6+ years of experience in IOS and expertise with Swift, ObjectiveC & React-Native can build your IOS app from scratch and deploy within shortest span of time."),
    new Tile("fab fa-chrome", "Web Apps Development", "Our team of top Web developers with 10+ years of experience in Angular, React, Node, Python, HTML, CSS, Vue, Ember. We had already hit the shortest time of deployment from scratch"),
    new Tile("fab fa-codepen", "MVPS & Ideas", "Our Team can help you to build basic working MVP ( Minimum viable product ) of your Ideas. which can give you a prototype product which can be used to showcase your ideas and raise Angel Fundings."),

  ]


}


const homeDomainData = {
  heading: {
    title: "Our Domain Expertise",
    img: "icons/line-shape-2.png",
    desc: "The BITCS community includes experts from around the globe with expertise in wide variety of software development languages and technologies."
  },

  data: [
    new Tile("icons/domain-1.svg", "Information Technology (IT)", "We are here to serve your company best technologies and the best techniques of application software to enhance your brand name. Ourdomains are- Frontend, backend, Angular, React-Native, and many more."),
    new Tile("icons/domain-2.svg", "Blockchain", "Using the cryptography we build your links to worldwide. It is non-centralized, reliable, and difficult to use for fraudulent purposes and it is a form of database storage."),
    new Tile("icons/domain-3.svg", "E-Commerce", "Our company is based on E-Commerce, and work in worldwide. Provide our service through this technology to build your domain to worldwide."),
    new Tile("icons/domain-4.svg", "Educational Sectors", "Our company also work in educational sectors where we build some unique ideas of building applications on the basis of education. To build our coming generations."),
    new Tile("icons/domain-5.svg", "Health sectors", "Our organization give services to the health sector to build their applications which are for betterment of the doctors as well as patients. Domains are health and medical software."),
    new Tile("icons/domain-2.svg", "Mobility", "To improve your economic status our company enterprise & Social Mobility Apps- JavaScript, Web UI, Native iOS, and native android apps."),
  ]
}


const homeLowerData = {

  title: "WHAT PEOPLE SAY",
  line: "icons/line-shape-2.png",

  logo: "../../assets/logos/bitcs.jpg",
  stars: new Array(5),
  desc: "Rated 5.0/5.0 by our clients for mobile & web app development services on various platforms",

  logos: ["icons/goodfirms.jpg", "icons/crunchbase.png", "icons/clutch.png"]

}




export { hireComponentData, homeServiceComponentData, homeDomainData, WhatWeDoData, homeLowerData }



// Slider Data


function SliderTile(img, name, info, title, desc) {
  this.img = img;
  this.name = name;
  this.info = info;
  this.title = title;
  this.desc = desc
}

const sliderData = [
  new SliderTile("icons/man.png", "Avkasj", " CO-FUNDER ROOMDOTS ", "“They do quality work for a reasonable rate...”", "Well! How I describe the working abilities of this company, my words are very small in front of the hard work and dedication of BITCS. And yeah, what they promise they serve as it is, I’m really happy to part of their work as my company face many problems before in applications and our web development but few back and now there, we are free from all the workload of web and applications. Thanks BITCS."),
  new SliderTile("icons/man.png", "TINA", "PM BRANDWATCH", "“They exceeded our expectations on pace and deliverables...”", "As per the norms and rule. Yes!! They code our ideas. Even they provide us the expert remote workers for our company. You can easily trust BITCS, as the only work with profession."),
  new SliderTile("icons/man.png", "Sebastien P", "CEO &amp; FOUNDER NESTB", "“They're reliable and able to solve difficult technical problems...”", "My experience at BITCS, it’s really good like they are good at their work as profession wise or experience ways. The experts which work this us are really good and they very hard working. And work as they promise, as well as they don’t delay the project and work. They serve their best and all skilled employees to work with different companies, my company was fully satisfied with the work potential of BITCS."),
  new SliderTile("icons/man.png", "CONARD", "VP EXPERTVOICE", '"I valued their responsiveness, honesty, and ability to deliver on time..."', "There no doubt on the working experience and excellent abilities of this company. God! They are so professionals and work like the helping hands for my company. They can handle every single responsibility of the development, even all the time they update us with all the news and features of the applications. I can say we are the Expertvoice but they are the expert in every aspects. Fans of BITCS."),
]

export { sliderData }









// Technology page data 

function techTile(title, desc) {
  this.title = title;
  this.desc = desc;


}

const techMidData = {
  heading: {
    title: "The quality-driven mobile application technologies that differentiate us from our competitors",
    desc: "Work with perfection is the aim of Bitcs. The technology we use make us more different from our competitors. And the quality of our technology helps you to find the perfect remote develop on this site. We work closely with our clients to deliver high-grade digital products. To accomplish this, we have created our own magic formula."
  },

  tiles: [
    new techTile("Agile methodology", "At BITCS, we make use of an unsurpassed mobile development methodology, including Scrum, Lean, and TDD for all our projects. Our seasoned team of qualified developers works in close cooperation with our clients throughout the development process."),
    new techTile("Result-driven technologies", "100% sure and correct result we provide to your company as well as the technologies we used here are fully protective and secure and also protect the applications and safeguard business and their clientele from the potential jeopardies. So our developers use safe frameworks and libraries."),
    new techTile("Highly-Advanced Architectures", "We use the advanced technologies like MVP and MVVM architectural configurations which empower us to seamlessly write error-free, sustainable, and testable code."),
    new techTile("Customary design doctrines", "Yes!! We fulfill all your customs with regards and respect. Bitcs design and frame your needs according to your requirement, when it comes to application development. These doctrines guarantee that your project is steadfast and considerably decrease the expenditure on modifications."),
    new techTile("Exhaustive code reviews", "Like before it comes to you, we conduct code evaluations as a consistent development run-through to enrich the quality of your app and the expertise of our development squad just to low your workloads and it’s our duty to serve best to our customers."),
    new techTile("Repetitive testing", "Before the final product we hand over you, we do believe in repetitive testing of the functional software application during the initial development lifecycle to quick fix any bug before delivering the final product and it is our duty to provide best and productive applications."),
    new techTile("Uninterrupted integration", "An uninterrupted integration process enables us to identify and resolve snags timely and with no trouble. Once the new code has been seamlessly fused into the product, we implement Jenkins and Gitlab CI to inevitably pull together the builds."),
  ]
}


export { techMidData }



// secvices page data


const devNserData = {
  heading: {
    title: "Our perfect web and app development services suite",
    desc: "Our app development services span the technology transformation progression from the commencement of the project to going live so that you can deliver value unremittingly and meet your users' expectations, while mitigating risk, upholding control and still leveraging an agile approach. Our scope of services mainly includes:"
  },
  tiles: [
    new Tile('icons/webDevelopment.png', 'Web Application Development', 'We here to offer you the best and easily operate web applications and the both front-end and back-end web development services to enhance your business and brand in the market. Our highly-experienced developers hold years of experience working on AngularJS, React, NodeJs, React Native, and Xamarin, to name a few. We ensure you to never let your company down.'),
    new Tile("icons/MobileApp.png", "Mobile Application Development", "We implement pioneering programming languages, result-driven technologies and methodologies to seamlessly enhance and scale our products. Here we provides you the best techniques for Android app development, we hold the knack to create apps ranging from smartphones to wearable."),
    new Tile("icons/UI-UX.png", "UI/UX Design", "We deliver highly-intuitive UI and UX designing, prototyping, and branding solutions for both web and mobile applications. Point to point things are our policy, our approach is quite straightforward- we primarily lay more emphasis on understanding how the targeted audience will respond while using our client’s product."),
    new Tile("icons/quality.png", "Quality Assurance and Testing", "You can trust our quality!! We never compromise with our quality of works as well as we know the quality of your time. Our quality assurance and testing squad undertake a meticulous approach to corroborate that the built functionality equates your business goals and make sure code is fairly free from any sort of bugs by conducting manual and automated testing."),
    new Tile("icons/management.png", "Project Management", "We offer both front-end and back-end web development services to businesses across different industry verticals. Our highly-experienced developers hold years of experience working on AngularJS, React, NodeJs, React Native, and Xamarin, to name a few."),
    new Tile("icons/management.png", "Strategic consulting", "Through our consulting services, we facilitate our clients to reduce upstream delays, decreasing cycle times, radically reducing the time-to-market, maximizing the increase in ROI and assist you to plan to scale up to achieve business goals at right time, increase throughout and reinforce security parameters.")
  ]
}

const hwwData = {
  heading: {
    title: 'How do we work?',
    desc: 'we work for your companies and to manage your market values with our work. We strive to build strong associations with our clients by performing three things: being responsible for our projects, bring in transparency in our processes, and delivering exceptional outcomes.'
  },
  tiles: [
    new Tile("icons/agile.png", "Agile approach", "We approach the best technologies and techniques in our work. We ensure to incorporate only scalable and agile methodologies so as to decrease the possibilities of inaccuracies and increase the probabilities of developing end products faster to serves you the best outcome."),
    new Tile("icons/exchange.png", "Consistent exchange of dialogue", "Keep in touch!! Our experts always keep exchanging the thoughts and work progress with you through voice call, video calls, E-mail, as well as in chats. We consistently keep you update with our work and you are always welcome to ask for anything you want. Bitcs always ready to help their clients."),
    new Tile("icons/performance.png", "Detailed performance reports", "During the whole working cycle of the product we give each and every single detail of the program to your company. We active 24/7 in your service and give you each and every news related to your project."),
    new Tile("icons/quality.png", "Dedicated assistance", "You get all dedicated assistances over here. We never disappoint your expectations. As clock works, our client managers also there at their service and provides them all possible aspect according to their requirements."),
    new Tile("icons/postLaunch.png", "Post-launch support", "We are here, even after the launch of the applications and webs our team always with you. At Bitcs, we never left our clients after the launching of the projects, here we take care of all the maintenance and further requirements of your company.")
  ]


}


export { devNserData, hwwData };


// clients Page data


const linksData = [
  {
    text: "ENTERPRISE CLIENTS",
    id: "enterprises"
  }, {
    text: "STARTUPS",
    id: "startUps"
  },
  {
    text: "MVPS",
    id: "mvps"
  },
]

const clientsData = {

  header: {
    title: 'BITCS',
    desc: "BITCS has provided elite talent for some of the most exciting start-ups and companies in Silicon Valley, New York City, London, Germany, Japan, Switzerland, and more. Our focus on challenging, tier-one projects attracts top freelancers across the globe"
  },

  data: {
    enterprises: [
      new Tile("icons/ExpertVoice.png", "ExpertVoice", "Expertvoice is building THE social network for helping people decide what to buy. We are connecting category experts with brands and their products because we believe experts help people make better and efficient buying decisions"),
      new Tile("icons/fanduel.jpg", "FanDuel", "FanDuel is a U.S. daily fantasy sports provider and bookmaker based in New York City. Originally founded in 2009, the service is the second-largest DFS service in the country based on entry fees and user base"),
      new Tile("icons/oie_transparent-4.png", "BrandWatch", "Brandwatch is a social media monitoring company headquartered in Brighton, England. Brandwatch sells three different products: Analytics, Audiences, and Vizia"),
    ],
    startUps: [
      new Tile("icons/eyeo.jpg", "Eyeo", "With the help of an international community of volunteers, eyeo develops open source software that millions of people use every day to have a better online experience"),
      new Tile("icons/adzuna.jpg", "Adzuna", "Adzuna is a search engine for job advertisements. The company operates in 16 countries worldwide and the UK website aggregates job ads from several thousand sources"),
      new Tile("icons/viki.jpg", "Viki", "Viki is a video streaming website headquartered in San Francisco. The company also has offices in Singapore, Tokyo, and Seoul. The name Viki s the words video and Wiki, drawing similarities to those companies"),
    ],
    mvps: [
      new Tile("icons/nestb.jpg", "Nestb.com", "Nestb want to simplify, digitise and drive transparency when buying, renting and selling property. Utilising our smart technology to turn the traditional business model upside down to empower Buyers, Sellers and Estate Agencies"),
      new Tile("icons/ramdots.jpg", "Roomdots", "RoomDots is focused on pricing short-term rentals automatically, just like hotels dynamically price their rooms."),
      new Tile("icons/drip.jpg", "Drip", "Drip is the first asset-backed digital currency where you choose the assets. The portfolio of chosen assets is managed by an advanced portfolio management system that reduce cost and optimize performance"),
    ]
  }
}


export { clientsData, linksData };
