---
# 💻 Git을 사용한 버전 관리
---

▶ **강의일** : 2022년 1월 15일  
▶ **유형** : Git  
▶ **주차** : 1주차  
▶ **강의유형** : 온라인  
▶ **학습시간** : 7시간 이상  
▶ **진도율** : 100%  

---
## 📖 요약
---

- **Git 특징**
    - 오픈소스이다.
    - 여러 사람이 서로 다른 컴퓨터를 사용하며 협업할 수 있게 한다.
    - 작업한 내용을 커밋으로 만들어 저장한다.
    - **`git version`** : git의 버전 확인
        
        **`git init`** : git저장소 생성
        
        **`git config --global user.name "<이름>"`** : git관련 작업 기록에 남는 이름 수정
        
        **`git config --global user.email "<이름>"`** : git관련 작업 기록에 남는 이름 수정
        
        **`git config --list`** : git 설정 확인
        
    - **`git commit --amend -m "내용"`** : commit 메세지 수정하기
    - **git branch -d `브랜치명`** 은 merge 이후만 삭제가능/ **git branch -D `브랜치명`** 은 merge되나 안되나 강제 삭제
    - ~~git reset (git log해서 해당으로 돌아갈 코드복사 붙여넣기)—hard <커밋 해시>를 사용하면 현재 브랜치를 특정한 커밋으로 이동할 수 있다.~~ => **보류**
    - **`git reset HEAD^`** : 이전 커밋으로 reset하기<br/><br/> 


- **Git 저장소**
    - **미리 만들어진 원격 저장소**를 복사하기 때문에 로컬 저장소를 생성할 필요가 없습니다
    - **작업 순서** : **`git clone`** -> **`git checkout`** -> **커밋 생성** -> **`git push`** <br/><br/>


- **참고**
    - [Git 보충 노션 페이지](https://www.notion.so/AI-4-Git-49fdf97b455c4533b7d87927d5d2ea90)
    - [Git 수련방법](https://github.com/egoingsb/offline/wiki/git#%EC%88%98%EB%A0%A8)
    - [Git 이해하기 관련 게임 사이트](https://learngitbranching.js.org/?locale=ko)