### 데이터베이스
- 관계형 데이터베이스(Relational DB), MySQL, 오라클, MariaDB, MSSQL, DB2, PostgreSQL => 스키마(정해진 데이터 형식) 구조
- 비관계형 데이터베이스( 메모리, 분산형, 그래프, NoSQL) : MongoDB => 스키마가 없다.
    - But MongoDB에서 스키마를 쓰는 이유
        - 스키마가 없다는 건 자유도가 높은 DB고 자유도가 높다면 난잡하게 데이터가 들어가서 나중에 데이터를 조회해도 항상 다른 데이터가 나올 수 있다. 따라서 몽고DB에서 임의로 스키마를 정해준 것!

### PASSPORT
- passport를 사용하기 위해 구현해야 하는 것들
    - **`Strategy`**
    - **`serialize`**
    - **`deserialize`**