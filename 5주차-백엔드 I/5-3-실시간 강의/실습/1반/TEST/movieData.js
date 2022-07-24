const movieData = [
    {
      id: 0,
      name: "모가디슈",
      img: "https://movie-phinf.pstatic.net/20210728_297/1627455490166xkeCf_JPEG/movie_image.jpg?type=f125",
      summary:
        "내전으로 고립된 낯선 도시, 모가디슈\n지금부터 우리의 목표는 오로지 생존이다!\n      \n대한민국이 UN가입을 위해 동분서주하던 시기\n1991년 소말리아의 수도 모가디슈에서는 일촉즉발의 내전이 일어난다.\n통신마저 끊긴 그 곳에 고립된 대한민국 대사관의 직원과 가족들은\n총알과 포탄이 빗발치는 가운데, 살아남기 위해 하루하루를 버텨낸다.\n그러던 어느 날 밤, 북한 대사관의 일행들이 도움을 요청하며 문을 두드리는데…\n      \n목표는 하나, 모가디슈에서 탈출해야 한다!",
    },
    {
      id: 1,
      name: "방법: 재차의",
      img: "https://movie-phinf.pstatic.net/20210719_225/1626671578245ptE5v_JPEG/movie_image.jpg?type=f125",
      summary:
        "되살아난 시체 '재차의'(在此矣)가 살인을 저질렀다!\n \n살인사건 현장에서 피해자와 함께 용의자도 사체로 발견된다.\n그러나 용의자의 시신은 이미 3개월 전 사망한 것으로 밝혀져 경찰은 혼란에 빠진다.\n        ",
    },
    {
      id: 2,
      name: "더 수어사이드 스쿼드",
      img: "https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg?type=f125",
      summary:
        "“우리는 격하게 세상을 구하고 싶다!”\n살고 싶다면 무조건 성공시켜라!\n최강 우주 빌런에 맞선, 자살특공대에게 맡겨진 ‘더’ 대책 없는 작전.\n팀플레이가 ‘더’ 불가능한 최악의 안티히어로들.\n최고의 팀워크를 기대한다면 “죽.는.다!”",
    },
    {
      id: 3,
      name: "보스 베이비2",
      img: "https://movie-phinf.pstatic.net/20210622_174/1624324910624JhEq2_JPEG/movie_image.jpg?type=f125",
      summary:
        "가족 같은 회사로 모십니다\n베이비 주식회사의 레전드 보스 베이비에서 인생 만렙 CEO가 된 ‘테드’.\n베이비인 줄 알았던 조카 ‘티나’가 알고 보니 베이비 주식회사 소속 임원으로 밝혀진다.\n뉴 보스 베이비 ‘티나’의 지시로 다시 베이비로 돌아간 ‘테드’와 형 ‘팀’에게 주어진 시간은 48시간!\n\n세상을 구하기 위한 미션을 무사히 완수할 수 있을 것인가?",
    },
    {
      id: 4,
      name: "정글 크루즈",
      img: "https://movie-phinf.pstatic.net/20210715_64/1626327374894hunxa_JPEG/movie_image.jpg?type=f125",
      summary:
        "<캐리비안의 해적> 디즈니 제작! 이번엔 아마존이다!\n미지의 세계 아마존에서 관광객들에게 최고의 스릴을 선사하는\n재치 넘치는 크루즈 선장 프랭크(드웨인 존슨).\n전설을 믿는다면 저주도 믿어야 한다!\n         ",
    },
    {
      id: 5,
      name: "더 그레이트 샤크",
      img: "https://movie-phinf.pstatic.net/20210715_95/1626338192428gTnJl_JPEG/movie_image.jpg?type=f125",
      summary:
        "행복한 휴가를 떠난 5명의 여행객.\n그러나 우연히 상어에 의해 훼손된 시체를 발견하고\n그들의 여행은 순식간에 공포에 휩싸인다.",
    },
    {
      id: 6,
      name: "극장판 도라에몽: 진구의 신공룡",
      img: "https://movie-phinf.pstatic.net/20210805_35/1628142193088hCOyc_JPEG/movie_image.jpg?type=f125",
      summary:
        "도라에몽 50주년 기념대작!\n오리지널 스토리로 돌아온 진구와 쌍둥이 공룡의 대모험!",
    },
    {
      id: 7,
      name: "그린 나이트",
      img: "https://movie-phinf.pstatic.net/20210728_155/16274361314942FPXi_JPEG/movie_image.jpg?type=f125",
      summary:
        "”녹색 기사의 목을 잘라 명예를 지켜라”\n크리스마스 이브, 아서왕과 원탁의 기사들 앞에 나타난 녹색 기사,\n“가장 용맹한 자, 나의 목을 내리치면 명예와 재물을 주겠다”고 제안한다.\n단, 1년 후 녹색 예배당에 찾아와 똑같이 자신의 도끼날을 받는다는 조건으로.",
    },
    {
      id: 8,
      name: "블랙 위도우",
      img: "https://movie-phinf.pstatic.net/20210617_272/1623906098516QjpeS_JPEG/movie_image.jpg?type=f125",
      summary:
        '"모든 것을 바꾼 그녀의 선택”\n1어벤져스의 운명을 바꾼 블랙 위도우, 그녀의 진짜 이야기가 시작된다!',
    },
    {
      id: 9,
      name: "싱크홀",
      img: "https://movie-phinf.pstatic.net/20210726_114/1627265960693kkM0B_JPEG/movie_image.jpg?type=f125",
      summary:
        "사.상.초.유! 도심 속 초대형 재난 발생!\n“한 500m 정도는 떨어진 것 같아”\n“우리… 나갈 수 있을까요?”",
    },
  ];
  
  module.exports = {
    movieData: movieData,
  };