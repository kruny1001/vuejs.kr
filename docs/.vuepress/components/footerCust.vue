<template>
  <section class="bottom-0">

    <footer class="lg:px-16 px-8 bg-green-800 py-10 pb-15 shadow-md">
      <div class="container mx-auto flex flex-wrap">
        <div class="w-full md:w-3/6">
          <div class="text-green-100 mb-3 md:mb-0 pr-0 md:pr-10">
            <span class="text-xl text-green-100">Documentation</span>
            <p class="text-sm mt-2">ESS, PV, Balancing Algorithm Implementation Documentation.</p>
            <form class="my-4">
              <span class="text-lg text-green-100">Newsletter</span>
              <div class="flex mt-2">
                <input
                  class="flex-1 shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                >
                <button
                  class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>

          </div>

        </div>
        <div class="w-full md:w-1/6">

          <div class="text-green-100 mb-3 md:mb-0">
            <span class="text-lg"> ESS</span>
            <ul class="">
              <li
                v-for="item in links1"
                class="mt-2"
              >
                <a
                  :href="item.link"
                  class=" text-green-100 hover:text-white"
                >{{item.name}}</a>
              </li>
            </ul>
          </div>

        </div>
        <div class="w-full md:w-1/6">

          <div class="text-green-100 mb-3 md:mb-0">
            <span class="text-lg">PV</span>
            <ul class="">
              <li
                v-for="item in links2"
                class="mt-2"
              >
                <a
                  :href="item.link"
                  class=" text-green-100 hover:text-white"
                >{{item.name}}</a>
              </li>
            </ul>
          </div>

        </div>
        <div class="w-full md:w-1/6">
          <div class="text-green-100 mb-3 md:mb-0">
            <span class="text-lg"> Scenario </span>
            <ul class="">
              <li
                v-for="item in links3"
                class="mt-2"
              >
                <a
                  :href="item.link"
                  class=" text-green-100 hover:text-white"
                >{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      issues: [],
      links1: [
        { link: 'ess', name: 'git repository' },
        { link: 'ess', name: '문서' },
        { link: 'ess', name: 'Evaluation' },
        { link: 'ess', name: 'Issues' },
        { link: 'ess', name: 'Comments' },
        { link: 'ess', name: 'Clustering' },
      ],
      links2: [
        { link: 'ess', name: 'git repository' },
        { link: 'ess', name: '문서' },
        { link: 'ess', name: 'Evaluation' },
        { link: 'ess', name: 'Issues' },
        { link: 'ess', name: 'Comments' },
        { link: 'ess', name: 'Clustering' },
      ],
      links3: [
        { link: 'ess', name: 'git repository' },
        { link: 'ess', name: '문서' },
        { link: 'ess', name: 'Evaluation' },
        { link: 'ess', name: 'Issues' },
        { link: 'ess', name: 'Comments' },
        { link: 'ess', name: 'Clustering' },
      ],
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