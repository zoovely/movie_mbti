Kakao.init('829c01c4d250991785b25cbd8ea9b689'); // 초기화

function sendLink() { // 카카오톡 공유하기
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: 'Movie MBTI',
            description: '내 MBTI로 나만의 무비티아이를 찾아보세요!',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/08/11/00/52/m-ms-2629323_960_720.png',
            link: {
                mobileWebUrl: 'https://zoovely.github.io/movie_mbti/',
                webUrl: 'https://zoovely.github.io/movie_mbti/'
            },
        },
        buttons: [
            {
                title: '지금 찾으러 가기',
                link: {
                    mobileWebUrl: 'https://zoovely.github.io/movie_mbti/',
                    webUrl: 'https://zoovely.github.io/movie_mbti/'
                },
            }
        ]
    })
}