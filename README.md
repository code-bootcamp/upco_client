# **Upco**

### 배포 주소 및 깃 주소
**[https://upco.space](https://upco.space)**
<br>
**[UPCO GitHubServer](https://github.com/code-bootcamp/seb11_team02_server)**
<br>
**[UPCO GitHubClient](https://github.com/code-bootcamp/upco_client)**

<br><hr><br>
![UPCO](https://user-images.githubusercontent.com/120009393/231974424-29c4d83b-c6fa-4710-9a5c-f8a8c7ed9c4d.png)

<br><hr><br>

### 업코 네이밍

'upco'는, '엎'어지면 '코'닿는 곳에서 만나는 사람들의 준말로,
가볍고 튀는 네이밍으로 사람들에게 쉽게 다가가고자 했습니다.

<br><hr><br>

### 기획의도

- 우리 'Upco'는 '위치기반 동네친구 찾기 서비스'입니다. 이미 우리 서비스와 비슷한 특성을 가진 서비스는 많지만, 기존 시장에 나와 있는 '친구 찾기' 서비스가 단순 남녀 관계에 초점을 가지고 있는 경우가 많아 건전하게 사용할 수 없었고, 신뢰할 수 없는 단순 명시적인 거리로 근처 유저를 추천해주는 것에 대해 불편함을 느낄 수밖에 없었습니다.
- 때문에 저희는 이를 보완하여, 명시적인 거리가 아닌 지도 상에서 사용자와 가깝고 연령대와 공감대가 비슷한 유저들의 위치를 보여주며, 동시에 서로를 오프라인 만남으로까지 연결시킬 수 있는 서비스를 만들게 되었습니다.
  <br><br>

<br><hr><br>

### 프론트엔드 팀원 소개

![프론트엔드](https://user-images.githubusercontent.com/120009393/231981416-fbe3e1c3-6689-4431-9b27-b18909bb0dcf.png)
| 이름 | 주소 |
| ------ | -------------------------------- |
| 최현규 | https://github.com/chlgusrb97 |
| 김덕렬 | https://github.com/kkasol |
| 문성진 | https://github.com/eggmun98 |

<br><hr><br>

### 기술스택

![기술스택](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyhzQI%2Fbtr725mBy5N%2F1JJTfOTFpPeI9KMcdkUmgk%2Fimg.png)

<br><hr><br>

### 기술 스택 선택 이유

| 기술                   | 이유                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React                  | 실시간 채팅, 화상 채팅, 그리고 실시간 GPS 서비스는 자주 화면 렌더링을 필요로 합니다. 이에 더불어, 사용자와 서버 간의 빠른 상호작용이 매우 중요합니다. 이러한 이유로 렌더링 성능이 최적화된 리액트를 선택하여 사용자 경험을 높이고자 선택하였습니다.                                                                                                                                                                                                         |
| Next.js                | React를 사용하면 초기 페이지 로딩 속도가 느려질 수 있습니다. 이에 반해, Next.js는 SSR을 지원하여 초기 페이지 로딩 속도를 개선할 수 있습니다. 또한 Next.js는 프레임워크이기 때문에, 프로젝트 구성 및 설정이 간단합니다. 또한 다양한 기능과 플러그인을 제공하여 개발 생산성을 높일 수 있습니다. 따라서 저희 프로젝트에서는 초기 페이지 로딩 속도 개선 및 개발 생산성 향상을 위해 Next.js를 선택하였습니다.                                                    |
| Soket.io               | 소켓 IO는 실시간 채팅, 화상 채팅 등 실시간 서비스를 구현하기 위해 사용하였습니다. 소켓 IO는 WebSocket 프로토콜을 기반으로 동작하며, 클라이언트와 서버 간의 실시간 양방향 통신을 지원합니다. 이를 통해 빠른 상호작용과 실시간 업데이트가 가능해지며, 채팅과 같은 실시간 서비스를 구현하는 데 적하기 때문에 소켓 IO를 이용하였습니다..                                                                                                                        |
| WebRtc                 | 화상 채팅을 구현하기 위해 사용하였습니다. 웹RTC는 브라우저 간의 통신을 위한 기술로, 피어 투 피어(P2P) 방식으로 미디어 스트리밍을 지원합니다. 이를 통해 브라우저 간의 화상 통화를 구현할 수 있어 사용하였습니다.                                                                                                                                                                                                                                             |
| Geolocation API        | 실시간 GPS 기능을 구현하기 위해 사용하였습니다 Geolocation은 브라우저에서 위치 정보를 얻기 위한 API로, 사용자의 위치 정보를 받아와 실시간 위치 추적 등의 서비스를 구현하는 데에 이용됩니다.                                                                                                                                                                                                                                                                 |
| Emotion                | React에서 스타일링을 위해 사용하였습니다. Emotion은 CSS-in-JS 라이브러리로, JavaScript에서 CSS를 작성할 수 있도록 지원합니다. 이를 통해 CSS 작성 및 관리가 용이해지며, React 컴포넌트의 재사용성과 유지보수성을 향상시킬 수 있어 사용하였습니다.                                                                                                                                                                                                            |
| GraphQL & ApolloClient | 클라이언트와 서버 간의 데이터 통신을 위해 사용하였습니다. GraphQL은 REST API와 달리, 클라이언트에서 필요한 데이터를 요청하는 방식으로 작동하며, 필요한 데이터만을 요청하여 불필요한 데이터 전송을 방지할 수 있습니다. ApolloClient는 GraphQL 클라이언트 라이브러리로, GraphQL API를 사용하는 클라이언트 애플리케이션을 쉽게 작성할 수 있도록 지원합니다. 이를 통해 데이터 통신 관리가 용이해지며, 클라이언트 개발 생산성을 향상시킬 수 있어 사용하였습니다. |

<br><hr><br>

### 시연 자료
