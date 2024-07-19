AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Build REST & GraphQL requests using Postman",
    cardImage: "assets/images/education-page/udemy2.svg",
    moocLink: "https://www.udemy.com/share/104u1G3@ds9rSXU-swPqKnBUCyjeJHIrW5e6fQ6nCIvwKU5qSarM3kaOc35eLTJV9oIIbv33xw==/",
  },
  {
    title: "Business Consultant (Learning Path)",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/learning-paths/implementation-consultant-learning-paths/finance-basic/",
  },
  {
    title: "Application Developer (Learning Path)",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/learning-paths/developer-learning-paths/development/",
  },
  {
    title: "S100 System Installation and Maintenance 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/system-admin/s100-installation-and-site-management-2/",
  },
  {
    title: "F100 Financial Basics 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/fin/f100-financials-basic/",
  },
  {
    title: "F350 Analytical Reports 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/reporting/f350-financials-analytical-reports/",
  },
  {
    title: "I310 Data Retrieval with REST API Basics 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/integration/i310-data-retrieval-with-rest-api-basics/",
  },
  {
    title: "I320 Advanced Data Retrieval with REST API 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/integration/i320-advanced-data-retrieval-with-rest-api/",
  },
  {
    title: "I330 Data Manipulation with REST API 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/integration/i330-data-manipulation-with-rest-api/",
  },
  {
    title: "T210 Customized Forms and Master-Detail Relationship 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t210-development-customized-forms-and-master-detail-relationship/",
  },
  {
    title: "T220 Data Entry and Setup Forms 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t220-development-data-entry-and-setup-forms/",
  },
  {
    title: "T200 Maintenance Forms 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t200-development-maintenance-forms/",
  },
  {
    title: "T240 Processing Forms 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t240-development-processing-forms/",
  },
  {
    title: "W140 Customization Projects 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/reporting/w140-customization-projects/",
  },
  {
    title: "T230 Actions 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t230-development-actions/",
  },
  {
    title: "T250 Inquiry Forms 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t250-development-inquiry-forms/",
  },
  {
    title: "A150 Getting Started with Acumatica ERP 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/a150-getting-started-with-acumatica-erp/",
  },
  {
    title: "F230 Subaccounts, Budgets, and Allocations 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/fin/f230-financials-subaccounts-budgets-and-allocations/",
  },
  {
    title: "W150 Workflows 2023 R1 ",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/reporting/w150-workflows/",
  },
  {
    title: "I300 Data Retrieval with OData 2023 R2",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/integration/i300-web-services-data-retrieval-with-odata/",
  },
  {
    title: "T270 Workflow API 2023 R1",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/courses/development/t270-workflow-api/",
  },
  {
    title: "Application Developer (Learning Path)",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/learning-paths/developer-learning-paths/development/",
  },
  {
    title: "Application Developer (Learning Path)",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/learning-paths/developer-learning-paths/development/",
  },
  {
    title: "Application Developer (Learning Path)",
    cardImage: "assets/images/education-page/acumatica.openuni3.png",
    moocLink: "https://openuni.acumatica.com/learning-paths/developer-learning-paths/development/",
  },
  

  /*
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:
      "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
  */
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
