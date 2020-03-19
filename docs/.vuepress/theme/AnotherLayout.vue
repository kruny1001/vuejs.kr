<template>
  <div
    class="flex flex-col"
    style="height:100vh"
  >
    <headerCust class="bottom-0 "></headerCust>
    <!-- <socialBtn></socialBtn> -->
    <!-- <imageGrid1 /> -->
    <Content class="main-content container mx-auto my-5 bg-green-100 lg:px-16 px-8 bg-white 
      shadow-md py-4 md:py-3 flex-1 text-gray-600" />
    <footerCust class="bottom-0"></footerCust>
  </div>
</template>

<script>
import cust from '../components/cust'
import cust2 from '../components/cust2'
import headerCust from '../components/headerCust'
import socialBtn from '../components/social/socialBtn'
import footerCust from '../components/footerCust'


export default {
  cerated () { },
  components: {
    cust, footerCust, headerCust, socialBtn, cust2
  },

  computed: {

    isSingleProject () {
      const worksRoute = '/works/'
      const path = this.$route.path
      if (path.includes('works') && path.length >= (worksRoute.length + 1)) {
        return true
      }
    },

    isSingleJournal () {
      const journalRoute = '/journal/'
      const path = this.$route.path
      if (path.includes('journal') && path.length >= (journalRoute.length + 1)) {
        return true
      }
    }
  },

  updated () {
    document.querySelectorAll('p img').forEach(image => {
      var wrapper = image.parentNode
      let children = wrapper.children
      let fragment = document.createDocumentFragment()
      Array.from(children).forEach(child => {
        fragment.appendChild(child)
      })
      wrapper.parentNode.replaceChild(fragment, wrapper)
    })
  }

}
</script>
<style>
h1 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h2 {
  margin-top: 16px;
  margin-bottom: 10px;
}
h3 {
  margin-top: 12px;
  margin-bottom: 10px;
}
h4 {
  margin-top: 6px;
  margin-bottom: 10px;
}
h1,
h2,
h3,
h4 {
  font-weight: bold;
}
hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
.main-content ol {
  margin-left: 20px;
  list-style-type: upper-roman;
}

.main-content ul {
  margin-left: 20px;
  list-style-type: circle;
}
pre {
  margin-top: 20px;
  margin-bottom: 20px;
}
.language-r {
  border: 1px solid black;
  padding: 20px;
  background: white;
  color: black;
  font-size: 10px;
  overflow-x: auto;
}
</style>
<style src="prismjs/themes/prism-solarizedlight.css"></style>
