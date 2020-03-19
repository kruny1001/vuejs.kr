---
title: PV
layout: AnotherLayout
---


<script>
export default {
  data () {
      return {
          items: [
            {name: "ESS Prediction", desc:'', link:"/ESS"},
            {name: "ESS Scenario Tree", desc:'', link:"/ST"},
            {name: "PV Aggregation", desc:'', link:"/PV"},
            {name: "Source code", desc:'', link:"/source"}
            
          ]
      }
  } 
}
</script>

<cust2 :issues='items' :desc="desc"/>

# PV

## Aggregation 

1분단위의 데이터를 15분 단위의 데이터로 Aggregation 한다. 
