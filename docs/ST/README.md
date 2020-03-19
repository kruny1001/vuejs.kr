---
title: 시나리오 트리
description: '시나리오 트리'
layout: AnotherLayout
---

<script>
export default {
  data () {
      return {
        main: [
            {name: "ESS Prediction", desc:'', link:"/ESS"},
            {name: "ESS Scenario Tree", desc:'', link:"/ST"},
            {name: "PV Aggregation", desc:'', link:"/PV"},
            {name: "Source code", desc:'', link:"/source"}
            
          ]
      }
  }
}
</script>

<cust2 :issues='main' :desc="desc"/>

# Scenario Tree

## Unsupervised Learning

### Feature Reduction T-SNE
### 

## Supervised Learning

### SVM

### QDA

### mClust
