import { createPool } from "mysql2";
export const db = createPool({
  host: "localhost", // DB 호스트
  user: "root", // DB 사용자 이름
  password: "qweqwe123", // DB 비밀번호
  database: "root", // 연결할 데이터베이스 이름
  port: 8080,
});
