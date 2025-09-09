const accordions = document.querySelectorAll('[data-accordion]')
if (accordions.length) {
  accordions.forEach(accordion => {
    const rows = accordion.querySelectorAll('[data-accordion-row]') || []

    rows.forEach(row => {
      const header = row.querySelector('[data-accordion-header]')
      const content = row.querySelector('[data-accordion-content]')

      const toggle = () => {
        if (content.style.maxHeight) {
          header.classList.remove('_active')
          content.classList.remove('_active')
          content.style.maxHeight = null
        } else {
          header.classList.add('_active')
          content.classList.add('_active')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      }

      header.addEventListener('click', toggle)
    })
  })
}
