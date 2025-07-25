import { App, Plugin } from 'vue'
import carousel from './src/carousel.vue'
import carouselItem from './src/carouselItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MCarousel: Plugin = {
    install(app: App) {
        app.component('MYCarousel', carousel)
    }
}

const MCarouselItem: Plugin = {
    install(app: App) {
        app.component('MYCarousel-item', carouselItem)
    }
}

export const MYCarousel = withInstall(carousel)
export const MYCarouselItem = withInstall(carouselItem)
export { carousel, carouselItem, MCarousel, MCarouselItem }
