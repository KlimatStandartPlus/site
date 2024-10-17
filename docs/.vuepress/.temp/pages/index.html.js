import comp from "C:/work/web/klimat/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"uk-UA\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>Сайт в розробці.</p>\\n<p>По всіх питаннях дзвоніть по телефону +380 67 850-91-00</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
