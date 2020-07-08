export default function initAccordion() {
  const accordion = document.querySelectorAll("[data-anime='accordion'] dt");

  function handleEvent(event) {
    event.currentTarget.classList.toggle("ativo");
    event.currentTarget.nextElementSibling.classList.toggle("ativo");
  }
  if (accordion.length) {
    accordion[0].classList.add("ativo");
    accordion[0].nextElementSibling.classList.add("ativo");

    accordion.forEach((item) => {
      item.addEventListener("click", handleEvent);
    });
  }
}
