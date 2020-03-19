<template>
  <section style="margin: 10px 0px;">
    <ul class="grid">
      <li v-for="(item, idx) in issues">
        <div class="shadow-md">
          <a :href="item.link">
            <div>{{item.name}}</div>
            <span style="font-size:12px; font-weight:400;">{{item.desc}}</span>
          </a>
        </div>
      </li>
    </ul>
    <pre class="text-sm"> {{desc}} </pre>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    issues: Array,
    desc: String
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
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
<style scoped>
.grid {
  overflow: hidden;
  padding: 0.5em 0 0 0.5em;
  max-width: 76em;
  margin: 0 auto;
}
.grid li {
  padding: 0 0.2em 0.2em 0;
  height: 100px;
  height: 100%;
}
.grid li > div {
  background: white;
  padding: 0.4em 0.4em;
  text-align: center;
}
.grid li a {
  color: black;
  font-weight: bold;
}

@media all and (min-width: 27em) {
  .grid li {
    width: 50%;
    float: left;
  }
}

@media all and (min-width: 40em) {
  .grid li {
    width: 33.3333333%;
  }
  .grid li.wide {
    width: 66.666666%;
  }
}
@media all and (min-width: 60em) {
  .grid li {
    width: 25%;
  }
  .grid li.wide {
    width: 50%;
  }
}
</style>

