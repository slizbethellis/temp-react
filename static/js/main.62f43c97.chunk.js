(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){e.exports=n(687)},35:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},683:function(e,t,n){},684:function(e,t,n){},685:function(e,t,n){},686:function(e,t,n){},687:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),o=n.n(r),i=(n(35),n(6)),c=n(7),s=n(9),m=n(8),u=n(5),h=n(10),d=n(2),g=n(29),p=function(e){var t=e.shouldShow,n=e.timeout,a=e.classNames,r=e.children;return l.a.createElement(g.CSSTransition,{timeout:n,classNames:a,in:t},r)},E=function(e){var t=e.href,n=e.children;return l.a.createElement("a",{href:"".concat(t),target:"_blank",rel:"noopener noreferrer"},n)},b=(n(52),function(e){var t=e.children;return l.a.createElement("div",{className:"footer text-center t-light"},t)}),f=function(e){return l.a.createElement("p",{className:"text-faded small my-auto"},e.children)},v=function(e){var t=e.size,n=e.align,a=e.color,r=e.margin,o=e.children;return l.a.createElement("div",{className:"".concat(t.split(" ").map(function(e){return"col-"+e}).join(" ")," text-").concat(n," t-").concat(a," ").concat(r)},o)},k=function(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)},w=function(e){var t=e.children;return l.a.createElement("div",{className:"content-section-heading text-center"},t)},T=function(e){var t=e.fluid,n=e.gutters,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":""," ").concat(n)},a)},j=(n(53),function(e){var t=e.color,n=e.children;return l.a.createElement("section",{className:"content-section ".concat(t||"")},n)}),y=function(e){var t=e.children;return l.a.createElement("div",{className:"ml-5"},l.a.createElement("ul",null,t))},S=function(e){var t=e.head,n=e.em,a=e.children;return l.a.createElement("li",null,t?l.a.createElement("h5",{className:"text-faded mb-0"},t):"",n?l.a.createElement("p",{className:"text-faded mb-0"},l.a.createElement("em",null,n)):"",l.a.createElement("p",{className:"text-faded mb-0"},a))},N=function(e){var t=e.children;return l.a.createElement("ul",{className:"list-inline ml-3"},t)},z=function(e){return l.a.createElement("li",{className:"list-inline-item"},e.children)},C=(n(54),function(e){var t=e.children;return l.a.createElement("header",{className:"masthead d-flex"},l.a.createElement("div",{className:"container text-center t-light my-auto"},t))}),x=(n(28),function(e){var t=e.children;return l.a.createElement("nav",{id:"sidebar-wrapper"},t)}),F=function(e){return l.a.createElement("button",Object.assign({},e,{className:"menu-toggle rounded"}),e.children)},O=function(e){var t=e.children;return l.a.createElement("ul",{className:"sidebar-nav"},t)},A=function(e){return l.a.createElement("li",{className:"sidebar-nav-item"},e.children)},M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).scrollTo=function(e){"top"===n.props.to?n.scrollToTop():d.scroller.scrollTo(e,{duration:1e3,delay:0,smooth:"easeInOutQuint"})},n.scrollToTop=n.scrollToTop.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){d.Events.scrollEvent.register("begin",function(){console.log("begin",arguments)}),d.Events.scrollEvent.register("end",function(){console.log("end",arguments)})}},{key:"scrollToTop",value:function(){d.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this;return l.a.createElement(d.Link,{activeClass:"active",to:"".concat(this.props.to),onClick:function(){return e.scrollTo(e.props.to)}},this.props.children)}}]),t}(a.Component),B=n(3),L=(n(683),function(e){var t=e.projectTitle,n=e.github,a=e.website,r=e.technologies,o=e.description,i=e.img,c=e.imgAlt;return l.a.createElement(v,{size:"lg-6"},l.a.createElement("div",{className:"portfolio-item"},l.a.createElement("span",{className:"caption"},l.a.createElement("span",{className:"caption-content"},l.a.createElement("div",{className:"btn-box"},n?l.a.createElement("a",{className:"btn btn-outline-light rounded",href:n,target:"_blank",rel:"noopener noreferrer"},"GitHub ",l.a.createElement(B.FaCodeFork,null)):"",a?l.a.createElement("a",{className:"btn btn-outline-light rounded",href:a,target:"_blank",rel:"noopener noreferrer"},"Website ",l.a.createElement(B.FaChain,null)):""),l.a.createElement("h2",null,t),l.a.createElement("p",{className:"mb-0"},l.a.createElement("small",null,l.a.createElement("em",null,r))),l.a.createElement("p",{className:"mb-0"},l.a.createElement("small",null,o)))),l.a.createElement("img",{className:"img-fluid",src:i,alt:c})))}),q=(n(18),function(e){var t=e.href,n=e.children;return l.a.createElement("a",{className:"social-link rounded-circle text-white mr-3",href:"".concat(t),target:"_blank",rel:"noopener noreferrer"},n)}),D=function(e){var t=e.src,n=e.alt;return l.a.createElement("img",{className:"rounded-circle img-fluid headshot",src:"".concat(t),alt:"".concat(n)})},G=function(e){return l.a.createElement("span",{className:"skill-icon rounded-circle mx-auto mb-3 text-center"},e.children)},R=(n(684),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).scrollTo=function(e){"top"===n.props.to?n.scrollToTop():d.scroller.scrollTo(e,{duration:1e3,delay:0,smooth:"easeInOutQuint"})},n.scrollToTop=n.scrollToTop.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){d.Events.scrollEvent.register("begin",function(){console.log("begin",arguments)}),d.Events.scrollEvent.register("end",function(){console.log("end",arguments)})}},{key:"scrollToTop",value:function(){d.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this;return l.a.createElement(d.Link,{className:"btn btn-".concat(this.props.color," btn-xl"),activeClass:"active",to:"".concat(this.props.to),onClick:function(){return e.scrollTo(e.props.to)}},this.props.children)}}]),t}(a.Component)),Q=(n(685),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e)))._setCurrentSection=function(){var e=n.state.showBtn,t=n.state.firstScroll;window.pageYOffset>100?(e=!0,t=!0):e=!1,n.setState({showBtn:e,firstScroll:t})},n.state={firstScroll:!1,showBtn:!1},n.scrollToTop=n.scrollToTop.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){d.Events.scrollEvent.register("begin",function(){console.log("begin",arguments)}),d.Events.scrollEvent.register("end",function(){console.log("end",arguments)}),this._setCurrentSection(),window.addEventListener("scroll",this._setCurrentSection)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._setCurrentSection)}},{key:"scrollToTop",value:function(){d.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this;return l.a.createElement(p,{timeout:400,classNames:"btnFade",shouldShow:this.state.showBtn},l.a.createElement("button",{className:"scroll-to-top rounded ".concat(this.state.firstScroll?"":"d-none"),onClick:function(){return e.scrollToTop()}},l.a.createElement(B.FaAngleUp,null)))}}]),t}(a.Component)),H=(n(686),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).update=function(e){e.preventDefault(),n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1},n.update=n.update.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F,{onClick:this.update},this.state.isOpen?l.a.createElement(B.FaClose,null):l.a.createElement(B.FaBars,null)),l.a.createElement(p,{timeout:400,classNames:"sidebar",shouldShow:this.state.isOpen},l.a.createElement(x,null,l.a.createElement(O,null,l.a.createElement(A,null,l.a.createElement(M,{to:"top"},"Home")),l.a.createElement(A,null,l.a.createElement(M,{to:"about"},"About")),l.a.createElement(A,null,l.a.createElement(M,{to:"skills"},"Education and Skills")),l.a.createElement(A,null,l.a.createElement(M,{to:"portfolio"},"Portfolio")),l.a.createElement(A,null,l.a.createElement(M,{to:"contact"},"Contact")),l.a.createElement(A,null,l.a.createElement("a",{href:"https://www.dropbox.com/s/ji8n9wwfrrzf32u/Sarah%20Ellis.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"},"Resume"))))),l.a.createElement(C,null,l.a.createElement("h1",{className:"mb-1"},"Sarah Ellis"),l.a.createElement("h3",{className:"mb-5"},l.a.createElement("em",null,"Full Stack Web Developer")),l.a.createElement(R,{to:"about",color:"primary"},"Learn More About Me")),l.a.createElement(d.Element,{name:"about"},l.a.createElement(j,{color:"bg-light",id:"about"},l.a.createElement(k,null,l.a.createElement(T,null,l.a.createElement(v,{size:"lg-10",align:"center",color:"dark",margin:"mx-auto"},l.a.createElement("h1",{className:"mb-5"},"About"),l.a.createElement("p",null,"I have recently finished a 24 week Coding Boot Camp program in full stack development at University of Kansas - Edwards Campus. I consider myself equally comfortable on the frontend and backend...versatility has always been one of my biggest strengths. My previous education includes foreign languages and biological sciences. I still have a strong interest in languages and biology, and an ideal position for me would include elements of all three. I take my hobbies very seriously, as evidenced by having several of my original patterns published in major knitting magazines, such as Knitscene and Knitty. Although pattern design does involve creative skills, there is also technical skill required in writing a pattern that others can work from. Much like code, if there is a syntax error or a math error in the instructions, it could potentially make a pattern impossible to use."),l.a.createElement(R,{to:"skills",color:"dark"},"What I Can Do")))))),l.a.createElement(d.Element,{name:"skills"},l.a.createElement(j,{color:"text-white skills"},l.a.createElement(k,null,l.a.createElement(w,null,l.a.createElement("h2",{className:"mb-5"},"Education and Skills")),l.a.createElement(T,null,l.a.createElement(v,{size:"lg-4 md-6",margin:"mb-5 mb-lg-0"},l.a.createElement(G,null,l.a.createElement(B.FaGraduationCap,null)),l.a.createElement("h4",{className:"text-center"},l.a.createElement("strong",null,"Education")),l.a.createElement("ul",null,l.a.createElement(S,{head:"March 2018",em:"University of Kansas-Edwards Campus"},"Full Stack Coding Bootcamp"),l.a.createElement(S,{head:"May 2013",em:"Austin Community College (Austin, Texas)"},"Associate of Arts in Foreign Languages-Spanish"))),l.a.createElement(v,{size:"lg-4 md-6",margin:"mb-5 mb-lg-0"},l.a.createElement(G,null,l.a.createElement(B.FaDesktop,null)),l.a.createElement("h4",{className:"text-center"},l.a.createElement("strong",null,"Front End")),l.a.createElement(y,null,l.a.createElement(S,null,"HTML5"),l.a.createElement(S,null,"CSS3"),l.a.createElement(S,null,"Bootstrap"),l.a.createElement(S,null,"JavaScript"),l.a.createElement(S,null,"jQuery"),l.a.createElement(S,null,"React.js"))),l.a.createElement(v,{size:"lg-4 md-6",margin:"mb-5 mb-lg-0"},l.a.createElement(G,null,l.a.createElement(B.FaServer,null)),l.a.createElement("h4",{className:"text-center"},l.a.createElement("strong",null,"Back End")),l.a.createElement(y,null,l.a.createElement(S,null,"Node.js"),l.a.createElement(S,null,"Express.js"),l.a.createElement(S,null,"MySQL/Sequelize"),l.a.createElement(S,null,"MongoDB/Mongoose"),l.a.createElement(S,null,"Git/GitHub")))),l.a.createElement(v,{size:"sm-12",align:"center",margin:"mx-auto mt-2"},l.a.createElement(R,{to:"portfolio",color:"light"},"Look at My Projects"))))),l.a.createElement(d.Element,{name:"portfolio"},l.a.createElement(j,null,l.a.createElement(k,null,l.a.createElement(w,null,l.a.createElement("h3",{className:"text-secondary mb-0"},"Portfolio"),l.a.createElement("h2",{className:"mb-5 t-dark"},"Recent Projects")),l.a.createElement(T,{gutters:"no-gutters"},l.a.createElement(L,{projectTitle:"Haloroundmyhead Knits",github:"https://github.com/slizbethellis/test-gatsby-blog",website:"https://www.haloroundmyhead.studio",technologies:"Gatsby (static generator for React), Sass, GraphQL",description:"Blog and pattern portfolio for my craft projects",img:"/img/haloroundmyhead-knits.png",imgAlt:"Haloroundmyhead Knits (screenshot)"}),l.a.createElement(L,{projectTitle:"React Portfolio",github:"https://github.com/slizbethellis/react-portfolio",website:"https://slizbethellis.github.io/react-portfolio",technologies:"Front End: React.js, React animations, gh-pages",description:"Portfolio template from Start Bootstrap rebuilt in React.js",img:"/img/react-portfolio.png",imgAlt:"React Portfolio (screenshot)"}),l.a.createElement(L,{projectTitle:"The Quizard of Ahhhs (group project)",github:"https://github.com/jennbono/quizard-of-ahhhs",website:"https://quizard-of-ahhhs.herokuapp.com/",technologies:"Full Stack: React.js, MongoDB, Mongoose, MaterialUI, timers",description:"Timed quiz app drawing from an api, with logins and leaderboards",img:"/img/quizard.png",imgAlt:"The Quizard of Ahhhs (screenshot)"}),l.a.createElement(L,{projectTitle:"NYT Archive Search",github:"https://github.com/slizbethellis/nyt-react",website:"https://arcane-woodland-54131.herokuapp.com/",technologies:"Full Stack: React.js, MongoDB, Mongoose",description:"Searches the NYT archives and allows users to save articles",img:"/img/nyt-react.png",imgAlt:"NYT Archive Search (screenshot)"}),l.a.createElement(L,{projectTitle:"mongo-technica",github:"https://github.com/slizbethellis/mongo-technica",website:"https://mongo-technica.herokuapp.com/",technologies:"Full Stack: Express.js, MVC, MongoDB, Mongoose",description:"Scrapes articles from Ars Technica and adds them to a Mongo database",img:"/img/mongo-technica.png",imgAlt:"mongo-technica (screenshot)"}),l.a.createElement(L,{projectTitle:"Trail Mix (group project)",github:"https://github.com/slizbethellis/trail-mix",website:"https://shrouded-beach-16284.herokuapp.com/",technologies:"Full Stack: Express.js, MVC, MySQL, Sequelize, okta",description:"Choose-your-own-adventure game themed around food",img:"/img/trail-mix.png",imgAlt:"Trail Mix (screenshot)"}),l.a.createElement(L,{projectTitle:"Pasta Burger, the Sequel",github:"https://github.com/slizbethellis/Pasta-Burger-sequel",website:"https://serene-lake-98068.herokuapp.com/",technologies:"Full Stack: Express.js, MVC, MySQL, Sequelize",description:"Restaurant app that lets users pick unusual burgers they'd like to eat",img:"/img/pasta-burger-sequel.png",imgAlt:"Pasta Burger, the Sequel (screenshot)"}),l.a.createElement(L,{projectTitle:"Friend Finder",github:"https://github.com/slizbethellis/Friend-Finder",website:"https://evening-waters-23864.herokuapp.com/",technologies:"Full Stack: Express.js, back end logic",description:"Compatibility quiz that matches users",img:"/img/friend-finder.png",imgAlt:"Friend Finder (screenshot)"}),l.a.createElement(L,{projectTitle:"Bamazon",github:"https://github.com/slizbethellis/Bamazon",technologies:"Command Line: Node.js, MySQL",description:"Command line 'commerce' application with customer and manager interfaces",img:"/img/bamazon.png",imgAlt:"Bamazon"}),l.a.createElement(L,{projectTitle:"Across the Streams (group project)",github:"https://github.com/markverbeck/across-the-streams",website:"https://markverbeck.github.io/across-the-streams",technologies:"Front End: Firebase, Firebase OAuth, APIs",description:"Save TV shows and find where to watch them",img:"/img/across-the-streams.png",imgAlt:"Across the Streams (screenshot)"}),l.a.createElement(L,{projectTitle:"Dalek Trivia Game",github:"https://github.com/slizbethellis/TriviaGame",website:"https://slizbethellis.github.io/TriviaGame/",technologies:"Front End: jQuery, timers (Warning: contains sound effects)",description:"Trivia game with timers and custom questions",img:"/img/dalek-trivia-game.png",imgAlt:"Dalek Trivia Game (screenshot)"}),l.a.createElement(L,{projectTitle:"Hangman: Sheep Breeds Edition",github:"https://github.com/slizbethellis/Hangman-Game",website:"https://slizbethellis.github.io/Hangman-Game/",technologies:"Front End: JavaScript logic, no jQuery",description:"Browser game of hangman with sheep-themed words",img:"/img/hangman.png",imgAlt:"Hangman: Sheep Breeds Edition (screenshot)"}))))),l.a.createElement(d.Element,{name:"contact"},l.a.createElement(b,null,l.a.createElement(k,null,l.a.createElement(w,null,l.a.createElement("h2",{className:"mb-5"},"Contact"),l.a.createElement(v,{size:"lg-3 md-3",margin:"mx-auto"},l.a.createElement(D,{src:"/img/headshot.png",alt:"Sarah Ellis"}),l.a.createElement("h4",null,"Sarah Ellis"),l.a.createElement("p",{className:"lead"},"Full Stack Web Developer"))),l.a.createElement(T,null,l.a.createElement(v,{size:"lg-12"},l.a.createElement(N,null,l.a.createElement(z,null,l.a.createElement(q,{href:"https://github.com/slizbethellis/"},l.a.createElement(B.FaGithub,null))),l.a.createElement(z,null,l.a.createElement(q,{href:"https://www.linkedin.com/in/slizbethellis/"},l.a.createElement(B.FaLinkedin,null))),l.a.createElement(z,null,l.a.createElement(q,{href:"mailto:slizbethellis@gmail.com"},l.a.createElement(B.FaEnvelope,null)))))),l.a.createElement(f,null,"Copyright \xa9 Sarah Ellis 2018"),l.a.createElement(f,null,"This page is built from React.js components I made based on a ",l.a.createElement(E,{href:"https://startbootstrap.com/template-overviews/stylish-portfolio/"},"Start Bootstrap")," template."),l.a.createElement(f,null,"And do take a look at my ",l.a.createElement(E,{href:"https://github.com/slizbethellis/react-portfolio"},"GitHub repo")," for this portfolio.")))),l.a.createElement(Q,null))}}]),t}(a.Component)),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(H,null),document.getElementById("page-top")),function(){if("serviceWorker"in navigator){if(new URL("/react-portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-portfolio","/service-worker.js");I?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):P(e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.62f43c97.chunk.js.map