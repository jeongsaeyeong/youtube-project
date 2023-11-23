# 나만의 음악 유튜브 사이트 만들기
- 유튜브 API를 이용해 음악을 들을 수 있는 사이트를 만들어본다.
평소 가사 있는 노래보다도 가사 없는 음악을 즐겨 이러한 사이트를 만들어보았다.
- I will make a site where I can listen to music using YouTube API.
I made these sites by enjoying music without lyrics rather than songs with lyrics.

## 설치
`npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

- `axios`: HTTP 요청을 쉽게 만들고 처리하는 JavaScript 라이브러리로, 브라우저 및 Node.js에서 동작한다.
- `react` : Facebook에서 제작한 사용자 인터페이스를 구축하기 위한 선언적이고 효율적인 JavaScript 라이브러리로, 단일 페이지 애플리케이션 개발에 주로 사용된다.
- `react-dom`: React 애플리케이션에서 가상 DOM을 실제 DOM에 렌더링하는 데 사용되는 라이브러리로, 웹 애플리케이션의 UI를 브라우저에 표시한다.
- `react-helmet-async`: React 애플리케이션에서 헤드 태그의 메타데이터를 동적으로 변경할 수 있게 하는 라이브러리로, SEO 및 웹페이지 공유에 유용한다.
- `react-icon`: 다양한 아이콘을 React 애플리케이션에 쉽게 통합할 수 있게 해주는 라이브러리로, 다양한 아이콘 라이브러리를 지원한다.
- `react-player`: 동영상 및 음악 파일을 재생하기 위한 간단한 React 컴포넌트를 제공하는 라이브러리로, 다양한 미디어 소스를 지원한다.
- `react-router-dom`: React 애플리케이션에서 라우팅을 관리하기 위한 라이브러리로, 다양한 라우팅 및 내비게이션 기능을 제공한다.
- `react-scripts`: Create React App에서 사용되는 스크립트 및 설정을 포함하는 패키지로, React 애플리케이션을 쉽게 시작하고 관리할 수 있도록 도와준다.
- `sass`: CSS의 확장인 SCSS 문법을 지원하는 스타일 시트 언어로, 변수, 중첩, 믹스인 등을 활용하여 스타일을 구조화하고 재사용성을 높일 수 있다.
- `swiper`: 모바일 및 데스크톱에서 동작하는 터치 슬라이드 라이브러리로, 이미지 갤러리, 배너 및 콘텐츠 슬라이드 쇼 등을 만들 수 있다.

### .env 파일
- 유튜브 API 키는 노출되면 안 되기 때문에 .환경변수로 저장해둔다.

### useParams

- useParams는 React Router 라이브러리에서 제공되는 훅 중 하나로, 라우트 매개변수(route parameters)를 가져오기 위해 사용한다. 라우트 매개변수는 동적으로 변하는 부분적인 URL 세그먼트를 나타내며, 주로 경로의 일부를 동적으로 처리해야 할 때 쓴다.

-  useParams를 사용하는 경우는 아래와 같다.
1) 동적인 URL을 가진 라우트
2) 라우트의 ID나 식별자 처리

### useState 

- const { videos, setVideos } = useState([]);
- 돔 구조를 가지기 때문에 이런 형태를 사용한다.

### postman

- Postman은 API 개발을 보다 쉽게 만들어주는 협업 도구 및 개발 환경. Postman은 다양한 API 테스트 및 개발 작업을 지원하며, 주로 다음과 같은 기능을 제공한다.

1) API 테스트
2) API 개발 및 디자인
3) 환경 변수 및 데이터 저장
4) 콜렉션
5) 자동화 및 테스트 스크립트


### api.js

- 매 페이지마자 youtube api를 가져오는 코드를 작성하는 건 상당히 비효율적인 일이다. 때문에 계속해서 사용할 수 있도록 따로 처리해두었다.

## 겪었던 어려움

### Loading 사용
#### Loading의 사용 목적 
- 기본적으로 api는 데이터를 요청하여 가져온다. 즉, 내가 가지고 있는 데이터가 아니기 때문에 받아오는 과정에서 시간이 걸린다. 때문에 데이터를 받아오기 전까지 대기하는 시간이 필요했고, 그것을 위해 Loading을 사용하기로 했다. 

#### Loading 사용 방법
자세한 코드는 src>page>Search.jsx에 존재한다. 

1) Loading은 useState를 사용하여 true로 값을 설정한다. 데이터를 받아오는 중이거나(true) 받아오는 게 끝났거나(false) 둘 중 하나이기 때문에 boolean을 사용한다. 
2) fetchFromAPI를 통해 데이터를 다 받아온 후, Loading의 값을 false로 바꿔준다. 데이터가 전부 들어왔으며 로딩이 끝났음을 의미한다.
3) 가상 돔 구성이므로 채널Id가 바뀔 때마다 Loading의 값을 true로 변경시켜준다.
4) try와 then을 사용하는 것에 따라 그 형태가 달라지므로 주의해서 사용해야 한다.

#### 어려웠던 점

- Search.jsx .then 방식으로 변경하는 것.
> Search 페이지는 하나의 페이지에서 내용만 바뀌는 전형적인 가상 돔의 구조를 취하고 있다. 그래서 채널 아이디가 바뀔 때마다 그것을 인식하여 loading의 값을 true로 변경시켜줘야 한다. 이 과정에서 loading의 값을 확인하고 onClick할 때 바뀌게 하는 등 새롭게 들어가야하는 부분이 많았다.

### nextpage 만들기
#### nextpage 구현 이유 
- api에서 영상을 가져올 때 max-results를 48개로 지정해뒀다. 하지만 영상 결과는 48개 이상이기 때문에 더보기 버튼을 만들어 매 페이지마다 48개씩 영상을 불러오도록 작업해야 했다.

#### nextpage 구현 방법
자세한 코드는 src>page>Search.jsx에 존재한다. 

1) nextpageToken은 useState를 사용하되, 처음에는 null로 값을 잡아준다.
2) 영상을 받아오는 과정에서 query(searchId)와 pageToken을 받아온다. 각각 q(검색어) pageToken에 들어갈 수 있도록 작업한다.
3) 그리고 setNextPageToken에 data 속 nextPageToken을 넣어준다. setVideos에는 preVideos(이전 비디오)와 전체 데이터를 모두 불러올 수 있도록 배열로 저장한다.

#### 어려웠던 점
- nextPageToken은 어디서 오는가에 대한 풀리지 않는 의문

### Home에서 video 슬라이드 만들기
#### video 슬라이드 만들기
- 특정 인물에 대한 비디오를 가져올 수 있도록 만들었다. 