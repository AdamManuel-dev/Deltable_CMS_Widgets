import twitter from './twitter.ts';
export default {

    data() {
        return {
            href: 'https://twitter.com/sveltejs',
            grid: false,
            lang: undefined,
            showReplies: undefined,
            chrome: undefined,
            theme: undefined,
            width: undefined,
            height: undefined,
            tweetLimit: undefined,
            linkColor: undefined,
            borderColor: undefined,
            ariaPolite: undefined,
            dnt: undefined
        }
    },

    computed: {
        timelineClass: (href, grid) => {
            if (href.indexOf('/timelines/') > -1 && grid) return 'twitter-grid'
            return 'twitter-timeline'
        }
    },

    oncreate() {
        twitter.loadAPI()
    }

}