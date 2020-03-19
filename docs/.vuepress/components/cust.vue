<template>
  <section>
    <div> Issues </div>
    <ul>
      <li v-for="issue in issues">{{issue.time}} {{issue.usage}}</li>
    </ul>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      issues: []
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