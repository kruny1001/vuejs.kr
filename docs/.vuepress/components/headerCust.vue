<template>
  <section class="bottom-0">
    <header class="lg:px-16 px-8 bg-green-700 shadow-md py-4 md:py-0">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex-1 flex justify-between items-center">
          <a href="/"
            class="text-xl font-semibold text-green-100 hover:text-white tracking-normal"
          >
            Vue 배우자 </a>
        </div>

        <label
          for="menu-toggle"
          class="pointer-cursor md:hidden block"
        >

          <svg
            class="fill-current text-gray-300 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>

        </label>

        <input
          class="hidden"
          type="checkbox"
          id="menu-toggle"
        />

        <div
          class="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >

          <nav>
            <ul class="md:flex items-center justify-between text-base pt-4 md:pt-0">
              <li v-for="item in links"><a
                  class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800"
                  :href="item.link"
                > {{item.name}} </a></li>

              <!-- <li class="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                <a class="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800 inline-flex items-center">
                  <span class="mr-1">Dropdown</span>
                  <svg
                    class="fill-current h-4 w-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </a>
                <ul class="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg">
                  <li class=""><a
                      class="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                      href=""
                    >Testing Link One</a>
                  </li>
                  <li class=""><a
                      class="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                      href=""
                    >Testing Link
                      Two</a>
                  </li>
                  <li class=""><a
                      class="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                      href=""
                    > Testing Link Three, Nice!</a></li>
                </ul>
              </li> -->
              <!-- <li>
                <a
                  href=""
                  class="md:ml-4 flex items-center justify-start pointer-cursor"
                >
                  <img
                    class="rounded-full w-6 h-6 bg-green-800"
                    src="https://unavatar.now.sh/dalton@sutton.io"
                  >
                </a>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      issues: [],
      links: [
        { name: 'ESS', link: 'ESS' },
        { name: 'PV', link: 'PV' }
      ]
    }
  },
  created () {
  },
  mounted () {
    this.getIssues()
  },
  methods: {
    getIssues () {
      axios
        .get('http://222.106.53.85:51511/cleanUsage?start=2019-06-01&end=2019-06-02').then(res => {
          this.issues = res.data.result
        })
    }
  }
}
</script>

<style>
</style>