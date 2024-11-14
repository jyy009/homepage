export const contact = () => {

  const pageContainer = document.getElementById("page-container");
  const footer = document.getElementById("footer")

  const myWorkContainer = document.getElementById("my-work-container")
  const contactTemplate = document.getElementById("contact-template")
  const cloneContactTemplate = contactTemplate.content.cloneNode(true)

  footer.appendChild(cloneContactTemplate)

}