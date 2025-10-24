import type { Directive } from 'vue'

const ScrollFade: Directive = {
  mounted(el) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  }
}

export default ScrollFade
