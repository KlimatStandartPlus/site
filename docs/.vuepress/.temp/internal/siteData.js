export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"uk-UA\",\"title\":\"ТОВ «Клімат Стандарт Плюс»\",\"description\":\"Проєетування. монтаж та обслуговування вентиляційних систем, систем кондиціювання та опалення.\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
