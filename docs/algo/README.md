---
title: Vue 튜토리얼
description: '실제로 쓰이는 뷰 튜토리얼'
layout: AnotherLayout
---

# 2/1 코딩 문제

## 01 앞뒤가 같은 10진수 만들기 
[문제] 10진수, 2진수, 8진수 그 어느 것으로 표현하여도 대칭수가 되는 수 중, 10진수의 10 이상에서의 최솟값을 구하라. 

ex 

9(10진수) = 1001(2진수) = 11(8진수)

예시는 10진수에서 10미만이므로 대상 외 

대칭수(회문수)란? 
level과 같은 단어를 대칭이라고 한다. 앞으로 또는 뒤에서 부터 읽어도 같은 단어가 된다. 
예) 123454321

## 02 수열의 사칙연산 
1234 -> 1 + 2 * 3 - 4 = 3
9876 -> 9 * 87 + 6 = 789

완성된 식을 계산한 결과 '원래 수를 거꾸로 나열한 숫자'가 되는 것을 생각해본다. 또한 계산순서는 수학에서 통용되는 순서로 합니다. 

100 ~ 999의 경우 다음 세가지가 있다. 

351 -> 3 * 51 = 153
621 -> 6 * 21 = 126
886 -> 8 * 86 = 688

[문제] 1000 ~ 9999중에서 앞의 조건을 만족하는 수를 구해 보세요.

JavaScript `eval` 함수를 사용한다

