import "./aboutMe.css"

export const aboutMe = () => {

  const aboutMeContainer = document.getElementById("about-me-section")
  const aboutMeTemplate = document.getElementById("about-me-template");

  const cloneAboutMeTemplate = aboutMeTemplate.content.cloneNode(true);

  aboutMeContainer.appendChild(cloneAboutMeTemplate);


};
