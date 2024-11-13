export const aboutMe = () => {
  const pageContainer = document.getElementById("page-container");
  const aboutMeTemplate = document.getElementById("about-me-template");

  const cloneAboutMeTemplate = aboutMeTemplate.content.cloneNode(true);

  pageContainer.appendChild(cloneAboutMeTemplate);


};
