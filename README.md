# We go Up!

> [한강물 측정기](https://hangang.ivlis.kr/) 홈페이지에서 영감을 받아 만든 웹페이지

// gif 추가 예정

## Project Outline

-   국내 해외의 증권시장의 상황(주가 및 나라별 뉴스)을 한 곳에서 파악하기 위해 만든 웹 개발 프로젝트
-   개발 인원: 1명(FrontEnd)
-   프로젝트 기획 및 개발: 2021.4 ~ 2021.6
-   다양한 API를 활용하여 Restful한 개발
-   `React` + `Typescript` 를 기반으로 한 정적타이핑 개발
-   `Redux-saga` 를 활용한 데이터 비동기 전역 상태관리
-   `Emotion.js`을 이용한 Css-in-js 스타일링 및 반응형 웹 페이지 개발
-   `apexchart`를 이용한 실시간 Candle 차트 구현

## Main Feature

-   국내, 해외, 비트코인 종목코드를 검색 시
    -   실시간 주식 가격(시가, 상한가, 하한가) 렌더링 & 빨간색, 파란색 글씨로 상승과 하락 표시
    -   실시간 비트코인 가격(200분 전 ~ 현재)의 데이터 수신 및 차트 렌더링
-   국내 주식, 해외 주식, 비트코인 페이지를 따로 만들어 관심있는 정보를 볼 수 있도록 만듦
    -   국내, 해외 주식: 각 나라 별 명언, 주가 검색창, 뉴스
    -   비트코인: 비트코인 검색창 및 차트
-   국내 or 해외 증권시장 오픈시간에 따라 다른 컴포넌트 구현
-   반응형 웹 페이지

## Project Structure

```bash
├── node_modules
├── public
├── build
├── src
│   ├── api
│   │   ├── bitcoin.ts
│   │   ├── krstocks.ts
│   │   ├── usstocks.ts
│   │   └── news.ts
│   ├── backgroundImg
│   │   ├── Anapji.jpg
│   │   ├── Hangang-night.jpg
│   │   ├── Hangang.jpg
│   │   ├── Jeju.jpg
│   │   └── Myeongdong.jpg
│   ├── components
│   │   ├── Advice
│   │   │   ├── KRAdvice.tsx
│   │   │   └── USAdvice.tsx
│   │   ├── Bitcoin
│   │   │   ├── ChartCandlesInfo.tsx
│   │   │   └── SearchBitcoinform.tsx
│   │   ├── News
│   │   │   ├── NewsItem.tsx
│   │   │   └── NewsList.tsx
│   │   └── Stocks
│   │       ├── KRStockLoader.tsx
│   │       ├── USStockLoader.tsx
│   │       ├── StockInfo.tsx
│   │       └── SearchStockForm.tsx
│   ├── container
│   │   ├── Main.tsx
│   │   ├── About.tsx
│   │   ├── KrBusiness.tsx
│   │   ├── UsBusiness.tsx
│   │   ├── Bitcoin.tsx
│   │   └── Header.tsx
│   ├── key
│   │   └──  apikey.ts
│   ├── modules
│   │   ├── krstocks
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   ├── saga.ts
│   │   │   └── types.ts
│   │   ├── usstocks
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   ├── saga.ts
│   │   │   └── types.ts
│   │   ├── news
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   ├── saga.ts
│   │   │   └── types.ts
│   │   ├── bitcoin
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   ├── saga.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── setupProxy.js
├── README.md
├── LICENSE
├── package.json
├── tsconfig.json
├── yarn.lock
└── .gitignore
```

## Requirements

-   Library
      <details> 
      <summary>접기/펼치기 버튼</summary>
      <div markdown="1">
      "typescript": "^4.1.2"<br/>
        "react": "^17.0.2"<br/>
        "@types/react": "^17.0.0" <br/>
        "axios": "^0.21.1"<br/>
        "redux": "^4.1.0" <br/>
        "react-redux": "^7.2.4"<br/>
        "@types/react-redux": "^7.1.16"<br/>
        "redux-saga": "^1.1.3"<br/>
        "typesafe-actions": "^5.1.0"<br/>
        "react-router-dom": "^5.2.0"<br/>
        "@types/react-router-dom": "^5.1.7"<br/>
        "react-icons-kit": "^1.3.1"<br/>
          "apexcharts": "^3.27.1"<br/>
          "react-apexcharts": "^1.3.9"<br/>
          "react-moment": "^1.1.1"<br/>
          "@emotion/core": "^11.0.0"<br/>
      "@emotion/styled": "^11.3.0"<br/>
      "http-proxy-middleware": "^2.0.0"<br/>
      </div>
    </details>

-   API
      <details> 
      <summary>접기/펼치기 버튼</summary>
      <div markdown="1">
      <a href="https://marketstack.com/documentation" target="_blank">Market Stack API</a>(실시간 국내 주가)<br/>
      <a href="https://iexcloud.io/docs/api/" target="_blank">IEX OPEN API</a>(실시간 해외 주가)<br/>
      <a href="https://upbit.com/service_center/open_api_guide" target="_blank">Upbit Open API</a>(실시간 비트코인 캔들 차트)<br/>
      <a href="https://newsapi.org/" target="_blank">News API</a>(국내, 해외 경제관련 뉴스)<br/>
      <a href="https://api.qwer.pw/docs/helpful_text" target="_blank">한국 명언 API</a>(한강물 측정기 개발자 분께 직접 API 요청 및 개발)<br/>
      <a href="https://api.adviceslip.com/advice" target="_blank">Advice Slip JSON API</a>(해외 명언)<br/>
      </div><br/>
      </details>

## Technical Issue

// 업데이트 예정
