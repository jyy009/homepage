export const contact = () => {
  const contactTemplate = document.getElementById("contact-template")
  const cloneContactTemplate = contactTemplate.content.cloneNode(true)

  footer.appendChild(cloneContactTemplate)

}