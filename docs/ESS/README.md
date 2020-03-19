---
title: ESS
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
      ],
      items: [
        {name: "Example", desc:'ESS 예제제시', link:"/ess/example"},
        {name: "Description", desc:'ESS 모듈 설명', link:"/ess/example"},
        {name: "Repository", desc:'ESS Source Code', link:"/ess/example"}
      ]
    }
  }
}
</script>

<cust2 :issues='main' :desc="desc"/>

**목차** 

[[toc]]

***

# ESS

+ ismart 데이터는 15분단위의 *Raw Data* 이다. 
+ crawler를 통해 데이터를 축적된다.
+ Cleaning 작업
+ Time Interval Prediction(Today)
+ Time Interval Prediction(Chunk)


## Cleaning Process
+ 타겟 타임 레인지를 96개를 본다.
+ 96개의 데이터는 완벽한 하루의 데이터이다.

+ libs/cleaning.R

**prd.ismart**의 raw데이터의 동작구청(0135159824)의 2019-01-01 부터 2019-11-11의 데이터에 대해서 Cleaning Process를 진행한다. 

```R
source('./libs/cleaning.R')

library(dplyr)
library(anytime)
source('classes/essOld.R')

tz="Asia/Seoul"
Sys.setenv(TZ=tz)
options(scipen=999)

start = "2019-01-01"
end = "2019-11-11"
siteId = '0135159824'
newJoined = generateCleanData(siteId, start, end)
finializeCleanData(siteId, newJoined)
data = read.csv(paste0('./compData/',siteId,'.csv'))
target = data %>% mutate(ts=time, siteId=siteId)%>% select(ts, siteId, usage)
insertTable(siteId, target)
```

96개의 완벽한 데이테로 이루어 져있는지 검사를 하고 빠져 있는 데이터에 대해서 96개의 데이터로 채워 넣는 역활을 한다.

```R
con <-dbConnect(
    RMySQL::MySQL(),
    username = 'admin_henergy',
    password = 'runy1001',
    host = '35.200.10.68',
    dbname = 'research'
)
cleanUsage = tbl(con, 'cleanUsage')

sourceStart.POS = as.POSIXct(start, origin = "1970-01-01", tz=tz)
sourceEnd.POS = as.POSIXct(end, origin = "1970-01-01", tz=tz)
start.ts = as.numeric(sourceStart.POS)
end.ts = as.numeric(sourceEnd.POS)

targetData = cleanUsage %>% 
  filter(time > start.ts && time <= end.ts, siteId == !!siteId) %>% collect()

dd = targetData %>%
  mutate(dateStr = as.Date(anytime(time), tz), date=anytime(time), hour=hour(date), min=minute(date)) %>%  
  mutate( dateStr = 
            ifelse(hour == 0 & min == 0, as.character(as.Date(dateStr-1, tz)), as.character(dateStr))
  )

finalSummary = dd%>% group_by(dateStr) %>% summarise(n=n())
plot(finalSummary$n, ylab="count", main="number of usage for each day")
```

검사한 모든날의 96개의 데이터로 research.cleanUsage 테이블에 저장이 되어있음을 확인 할 수 있다. 



## Time Interval Prediction
**Time Window** : 96개의 하루의 데이터중 현재 이전의 데이터만을 가지고 있는 부분적인 데이터이다. 
예를들어 1부터 20

Time Window의 구간에 있는 과거 Reference 데이터에서 Clustering 기법을 이용하여 같은 Cluster에 포함된 날들의 
현재시점(time interval)이후의 값들의 Median 값을 구한뒤 현재의 시간의 수요량 데이터와 Prediction의 제일 첫점의 차이만큼 더한다.

### [1] Today Pred
오늘을 기준으로 과거 몇일간의 Prediction을 실행 한다. 

+ libs/clusterPred.R

#### RMD 파일 참고 (./clusterPredTest.RMD)
#### Example 

```R
# Import Functions
source('libs/clusterPred.R')

# In order to use Redis
source('./classes/redis.R')

# redis connection
redisObj = Redis$new()

# disconnect All MySQL Database Connection
ile <- length(dbListConnections(MySQL()))
lapply( dbListConnections(MySQL()), function(x) dbDisconnect(x) )

# Set SiteIds
siteList = c("0135159824")

# Database Connection
conn <-dbConnect(
  RMySQL::MySQL(),
  username = 'admin_henergy',
  password = 'runy1001',
  host = '35.200.10.68',
  dbname = 'prd'
)

clusterPred.main(conn, siteList, predDates=1, writeDB=FALSE)
dbDisconnect(conn)

dd = read.csv('./0135159824.csv')
head(dd[, 92:97])
tail(dd[, 1:10])
```

Prediction을 하기 위해서는 Reference Data를 Cache 하기 위해서 Redis연결을 필요하다. 
위의 코드를 실행하면 아래와 같은 로그를 확인 할 수 있다.  

```R
> clusterPred.main(conn, siteList, predDates=1, writeDB=FALSE)
[1] "reference range:  2018-12-26 ~ 2019-10-22"
[1] "0135159824 : prediction is running"
[1] "2019-11-11"
[1] "2019-11-12"
[1] "prediction range:  2019-11-11 ~ 2019-11-12"
[1] "0135159824 today data is ready"
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 
[1] "0  date is done"
[1] "2019-11-10"
[1] "2019-11-11"
[1] "prediction range:  2019-11-10 ~ 2019-11-11"
[1] "0135159824 today data is ready"
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 
[1] "1  date is done"
```

### [2] Time Interval Prediction(Chunk)
+ libs/chunkPred.R

