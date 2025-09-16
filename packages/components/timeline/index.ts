import { App, Plugin } from 'vue'
import timeline from './src/timeline.vue'
import timelineItem from './src/timelineItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MTimeline: Plugin = {
    install(app: App) {
        app.component('MYTimeline', timeline)
    }
}

const MTimelineItem: Plugin = {
    install(app: App) {
        app.component('MYTimeline-item', timelineItem)
    }
}

export const MYTimeline = withInstall(timeline)
export const MYTimelineItem = withInstall(timelineItem)
export { timeline, MTimeline, timelineItem, MTimelineItem }
