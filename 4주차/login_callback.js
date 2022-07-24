// id와 password를 받아서 로그인을 시도하고,
// 로그인이 성공한다면 로그인한 유저의 역할을 받아오는 프로그램
// db를 받아온다고 가정하고 db랑 비교함

function loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
        const userDB = [
            {
                id: "paul",
                pw: "pw1",
            },
            {
                id: "tom",
                pw: "pw2",
            },
            {
                id: "gray",
                pw: "pw3",
            },
        ];

        for (let i = 0; i < userDB.length; i++) {
            if (
                userDB[i].id === id && //
                userDB[i].pw === password
            ) {
                onSuccess(id);
                return;
            }
        }
        onError();
    }, 2000); //db에서 받아오는 시간이 2초가 걸린다고 가정
}

function getRoles(id, onSuccess, onError) {
    setTimeout(() => {
        const roleDB = [
            { id: "paul", role: "admin" },
            { id: "tom", role: "user" },
        ];

        for (let i = 0; i < roleDB.length; i++) {
            if (roleDB[i].id === id) {
                onSuccess(roleDB[i]);
                return;
            }
        }
        onError(`${id}의 role이 db에 존재하지 않습니다!`);
    }, 1000);
}
let id = "gray"; //입력받을 id
let password = "pw3"; //입력받을 pw

loginUser(
    id, //사용자에게 입력받은 id
    password, //사용자에게 입력받은 pw
    function (user) {
        console.log("로그인 성공!");
        getRoles(
            user,
            function (userWithRole) {
                console.log(userWithRole);
            },
            function (errorMsg) {
                console.log(errorMsg);
            }
        );
    },
    function () {
        console.log("아이디와 패스워드가 맞지 않습니다!");
    }
);