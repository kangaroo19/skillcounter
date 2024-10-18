import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost", // DB 호스트
  user: "root", // DB 사용자 이름
  password: "qweqwe123", // DB 비밀번호
  database: "root", // 연결할 데이터베이스 이름
  port: 8080,
});

pool.getConnection((err, conn) => {
  if (err) console.log("Error connecting to db...");
  else console.log("Connected to db...!");
  conn.release();
});

const executeQuery = (query: any, arrParams: any) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log("Error in executing the query");
          reject(err);
        }
        console.log("------db.jsx------");
        //console.log(data)
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default executeQuery;
