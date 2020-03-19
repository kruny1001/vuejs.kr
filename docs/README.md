---
title: Vue 튜토리얼
description: 'Vue.js 뷰 튜토리얼'
layout: AnotherLayout
---

# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?

```
console.log(123)
```

# Blog

# Pro 맴버쉽

# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?

# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?

# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?

# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?

# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?
# 자주 받는 질문
+ Computed와 Watch의 차이점은 무엇인가요?
+ Vuex는 왜 사용하는가요?
+ 컴포넌트를 잘 사용하려면 어떻게 해야 할까요?
+ Mixin은 무엇인가요?
<!-- <div id="logo" style="width:100px;"> Logo </div> -->

<!-- {{ $page }} -->

<script>
import gsap from 'gsap'
export default {
  created(){
    console.log(gsap)
  },
  methods:{
    animate(){
      gsap.to("#logo", {duration: 1, rotation:0, scale:1, x: 100});
    },
    animateBack(){
      gsap.to("#logo", {duration: 1, rotation:360, scale:1.5, x: 200});
    }
  },
  data () {
      return {
          items: [
            {name: "알고리즘", desc:'', link:"/algo"},
            // {name: "ESS Scenario Tree", desc:'', link:"/ST"},
            // {name: "PV Aggregation", desc:'', link:"/PV"},
            // {name: "Source code", desc:'', link:"/source"}
          ],
          scenarioTree : [
            // {name: "Unsupervised Learning", desc:'코드 예제', link:"/ess/example"},
            // {name: "Supervised Learning", desc:'코드 예제', link:"/ess/example"},
          ],
          essTreeDock: [
            // {name: "일 단위 클러스터링", desc:'코드 예제', link:"/ess/example"},
            // {name: "n 분단위 클러스터링", desc:'코드 예제', link:"/ess/example"},
          ],
          desc: '클릭 세부문서',
          // start: '2019-10-29'
      }
  } 
}
</script>

<!-- <div style="width:200px; text-align:center; border:1px solid lightgray; padding:4px 8px; font-size:2rem; background:white;" @click="animate"> animate </div>
<div style="width:200px; text-align:center; border:1px solid lightgray; padding:4px 8px; font-size:2rem; background:white;" @click="animateBack"> animate back </div> -->

<!-- <cust2 :issues='items' :desc="desc"/> -->

<!-- ***  -->

<!-- # 알고리즘  -->

<!-- 매주 2가지 문제를 다룬다  -->


<!-- ## ESS 기본 알고리즘

### 데이터
iSmart 데이터 포멧을 기본으로 한다. 
하루 96개의 데이터를 완벽한 데이터로 본다.

### 클러스터링 Clustering 

1. 15분 단위의 **target data range**를 선정하고 과거와 현재의 데이터를 축출 
2. 위에서 만들어진 데이터셋을 날짜별로 clustering 한다. 
3. 현재데이터를 포함 한 클러스터를 찾고 해당 클러스터에 포함된 날짜를 축출
4. 축출된 날의 target data range 이후의 데이터로 **median, mean**으로 값을 구한다.
5. 현재 데이터에서 가장 최근 포인트와 위에서 만들어진 median 값의 차이를 더해서 첫 시작점을 최근 데이터에 마추어 준다. 

### 가능한 사용법

+ n분 단위 Clustering 
+ 일(daily) 단위 Clustering 

### 

<cust2 :issues='essTreeDock' :desc="desc"/>

### 시나리오트리 Scenario Tree

클러스터링 기법을 이용한 시나리오트리 기법은 새벽시간대의 비슷한 패턴을 가진 사이트에 효과적이다. 
Root 노드에서 부터 마지막 Child 노드까지 높이가 늘어 날 수록 복잡도가 높아지던 기존의 트리와 비교하여
많은 컴퓨팅 시간을 절약할 수 있다. 

#### ESS 사업장 시나리오 트리 생성

+ **Unsupervised learning**
  + 완벽한 96개의 과거 데이터에 대해서 시간대별 Cluster Id를 찾는다. 
  + t1 ~ t8 (3시간단위의 Interval)
  1. 각 날짜별 96개의 데이터들의 Cluster Id를 cluster 방법을 통해 찾는다.
  2. 데이터베이스에 저장

+ **Supervised learning**
  + 만들어진 시간대별 구역의 class이름을 이용하여 시간구간별 Classification 모델을 만든다. 
  + 

<cust2 :issues='scenarioTree' :desc="desc"/>

*** 




# 개발환경

R을 기본 언어로 사용한다. 

```

```

## 라이브러리


# 소스코드

+ 세부 알고리즘
구간별 클러스터링을 한뒤 같은 클러스터 그룹에 포함된 데이터들을 비슷한 데이터라고 본다. 
+ 사용하는 기반 기술 
사용된 Libraries 
dplyr 
base 
+ 조정 변수 
클러스터의 갯수 
+ 소스코드 
+ 예제

# ess [link](/ESS/) -->

<!-- # pv 
+ pv/preprocess.R
중요도 5

pv/genCompDataEss.R
중요도 3

pv/PVoutlierHandler.R ()
중요도 4
generateCompPV to generate report 

pv/GenPreds.R
pv/pvDataAPI2.R
henergy pv 

pv/pvDataAPI.R

pv/class/essClass.R
pv/class/pvClass.R
pv/pvNormalize.R

# genPred
genPred/todayPred.R 
genPred/stree.R 

# Project
각각의 프로젝트 repository는 알고리즘 

+ ## algorithm-report-gen

+ ## algorithm-utility

+ ## Model 

```
# ess.R
clusterLabel 
cleanData table ref -> filter(targetDateRange, targetTimeRange)
    
```


+ algorithm-compute
+ algorithm-postech-api



## Utility
+ https://source.cloud.google.com/henergy-dershare/scenario-tree-api

## Scenario Tree
+ https://source.cloud.google.com/henergy-dershare/scenario-tree-api

## iSmart
+ https://source.cloud.google.com/henergy-dershare/ismart-crawler

## GOOGLE Cloud Functions 
+ https://source.cloud.google.com/henergy-dershare/gcf-api

## APP dershare
+ https://source.cloud.google.com/henergy-dershare/dershare-pwa

## ESS compute docker 
Prediction, Clustering, Data Cleaning

+ https://source.cloud.google.com/henergy-dershare/ess-compute

## Henergy.xyz
+ https://source.cloud.google.com/henergy-dershare/dershare-doc

***

## Plan

계획

### 10월 계획 

### 11월 계획
+ 시나리오 Supervised Learning 
    + SVM 
    + QDA
+ Classification Model Evaluation 
    + Evaluation 1 

### 12월 계획 
+ Evaluation Tool 

***

## Git Repo

## Issue List 

## Blogs  -->
