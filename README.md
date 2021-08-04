# 📽 나에게 딱 맞는 Movie MBTI!
## 📌 개요
사용자의 MBTI와 선호 장르를 통한 영화 추천 사이트입니다. 추천 받은 영화를 따로 선택하여 모아볼 수 있으며, 추천하는 영화 목록 중에서 검색도 가능합니다. HTML5, CSS3, JavaScript, jQuery를 사용하여 반응형 웹사이트로 제작하였고 영화 정보는 json 형식의 파일을 사용하였습니다. VS Code와 Chrome 브라우저로 개발하였으므로 해당 환경에서 실행하는 것을 추천 드립니다!

_[🎬 DEMO](https://zoovely.github.io/movie_mbti/)_
## 📌 상세 설명
### 1. Movie MBTI
웹사이트의 메인 화면입니다. 환영 문구와 함께 배경에는 유튜브 영상 5개 중 한 개가 자동 재생됩니다. 이는 jQuery 플러그인을 사용하였습니다. PC 화면에서는 오른쪽 중앙의 버튼을 이용하거나 왼쪽 상단의 내비게이션으로 페이지 간 이동이 가능합니다. 또한 어느 페이지에서든 로고를 클릭하면 메인 페이지로 돌아오게 됩니다. 모바일 화면에서는 햄버거 버튼 클릭 시 내비게이션이 나타납니다.

_[🧑‍💻 사용한 jQuery 플러그인](https://www.seanmccambridge.com/tubular/)_
<div align="center">
  <img width="1438" alt="스크린샷 2021-07-31 오후 11 41 03" src="https://user-images.githubusercontent.com/84768491/127743483-6d35c99a-0d5b-46b2-92da-3f290b07d3e2.png">
  <img width="488" alt="스크린샷 2021-07-31 오후 11 42 16" src="https://user-images.githubusercontent.com/84768491/127743479-de529286-6fbe-4e23-9c6a-2f3afdc9df29.png"> 
</div> <hr>

### 2. Movie MBTI : ABOUT
사이트 안내 페이지로, 각 페이지의 기능을 설명합니다. PC 화면에서는 오른쪽 중앙의 버튼을 이용하여 MOVIE 페이지로 이동 할 수 있습니다. 페이지 하단의 '친구한테 사이트 공유하기' 버튼을 클릭하면 카카오톡 공유하기 기능으로 메시지를 전송할 수 있습니다. 이는 카카오 오픈 API를 사용하였습니다.

_[🧑‍💻 카카오 오픈 API](https://developers.kakao.com/product/message)_
<div align="center">
  <img width="1438" alt="스크린샷 2021-07-31 오후 11 41 03" src="https://user-images.githubusercontent.com/84768491/127807716-f6404562-f641-43d3-9ba5-11098a29e9f2.PNG">
  <img width="488" alt="스크린샷 2021-07-31 오후 11 42 16" src="https://user-images.githubusercontent.com/84768491/127807746-7271ba22-8d31-4628-97ea-31e61d4da9e0.PNG">
</div> <hr>

### 3. Movie MBTI : MOVIE
사용자의 MBTI, 선호 장르에 따른 추천 영화를 보여주는 페이지입니다. MBTI를 먼저 선택 한 후 선호 장르를 선택하면 조합에 맞는 추천 영화가 보여집니다. 영화 포스터를 클릭하면 해당 영화 정보가 나타나고, 'ADD WISH' 버튼을 누른 영화들은 WISH 페이지에서 모아볼 수 있습니다.
<div align="center">
  <img width="1438" alt="스크린샷 2021-07-31 오후 11 41 03" src="https://user-images.githubusercontent.com/84768491/128143533-0eaa3955-c1e0-4bdf-9aba-b25f08d8bd1c.PNG">
  <img width="488" alt="스크린샷 2021-07-31 오후 11 42 16" src="https://user-images.githubusercontent.com/84768491/128147106-4fb35a41-3ac3-419a-8361-286f4082fad3.PNG">
</div> <hr>

### 4. Movie MBTI : WISH
MOVIE 페이지에서 'ADD WISH' 버튼을 누른 영화들을 보여주는 페이지입니다. MOVIE 페이지에서와 같이 영화 포스터를 클릭하면 해당 영화 정보가 나타나고 사라집니다.
<div align="center">
  <img width="1438" alt="스크린샷 2021-07-31 오후 11 41 03" src="https://user-images.githubusercontent.com/84768491/128152213-0697ae22-462a-444d-ae7c-251cd8abfbcf.PNG">
  <img width="488" alt="스크린샷 2021-07-31 오후 11 42 16" src="https://user-images.githubusercontent.com/84768491/128152189-adfaa009-efad-4d6f-a988-34e83e877d23.PNG">
</div> <hr>

### 5. Movie MBTI : SEARCH
원하는 영화를 제목으로 검색할 수 있는 페이지입니다. MBTI나 장르에 상관없이 모든 영화 목록에서 검색되며, 검색한 단어를 포함하는 영화 제목을 가진 영화들이 결과로 나타납니다. 검색 결과로 나온 영화 포스터를 클릭할 시 다른 페이지에서와 같이 해당 영화 정보가 보여집니다. 검색하기 전에는 랜덤으로 네개의 영화가 추천되며 이 또한 포스터 클릭 시 영화 정보를 확인할 수 있습니다.
<div align="center">
  <img width="1438" alt="스크린샷 2021-07-31 오후 11 41 03" src="https://user-images.githubusercontent.com/84768491/128153358-86802d14-73e3-405a-9704-74a230b88126.PNG">
  <img width="488" alt="스크린샷 2021-07-31 오후 11 42 16" src="https://user-images.githubusercontent.com/84768491/128153347-85b9ced0-a299-4ebe-a9c1-851a227248c0.PNG">
</div> <br>
