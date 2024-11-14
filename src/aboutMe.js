export const aboutMe = () => {

  const portfolioContainer = document.getElementById("portfolio-section")
  const aboutMeTemplate = document.getElementById("about-me-template");

  const cloneAboutMeTemplate = aboutMeTemplate.content.cloneNode(true);

  portfolioContainer.appendChild(cloneAboutMeTemplate);


};
