import React from "react";
import { useState, useEffect } from "react"; //Hook 이라는 개념이 추가되었음
//함수형 컴포넌트에 state랑 props가 없어서 사용을 못했는데  Hook이라는 개념이 생기면서
//함수형 컴포넌트에 state랑 props사용이 가능해지면서 현재는 이걸 많이 사용
import axios from "axios"; //Vue에서도 사용한다.

const BoardList = () => {
  //state 사용하는건 맞음
  const [board, setBoard] = useState([]); //board 변수에 배열을 저장함

  //componentDidMount 대신에 useEffect훅을 쓰자
  useEffect(() => {
    console.log("이곳에서 데이터를 불러와야 한다");
   // ...board : 배열의 전개, 앞의 배열에 데이터 덧붙이기
    // setBoard(...board,  [
    //     {id:1, name:"이혁주", email:"lee@daum.net"},
    //     {id:2, name:"어석진", email:"seok@daum.net"},
    //     {id:3, name:"정소연", email:"jsy@daum.net"},
    //     {id:4, name:"최윤지", email:"choi@daum.net"},
    //     {id:5, name:"한상익", email:"han@daum.net"}
    // ]);
  
  //let url = "http://localhost:8090/guestbook"; //backend의 데이터 불러오기
  let url = "http://http://115.85.180.41:8090/guestbook"; //공인 ip
  axios
      .get(url)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        //setBoard(...board, response.data);
        setBoard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
   }, []);

  return (
    <div className="container">
      <h2>게시판 목록</h2>

      <div className="input-group mb-3" style={{ marginTop: "20px" }}>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          선택하세요
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#!">
              제목
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              내용
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              제목+내용
            </a>
          </li>
        </ul>
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn btn-secondary" type="submit">
          Go
        </button>
      </div>

      <table className="table table-hover ">
        <thead className="table-secondary">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {board.map(function (object, i) {
            return (
              <tr key={i}>
                <td>{object.id}</td>
                <td>{object.writer}</td>
                <td>{object.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
 );
};

 export default BoardList;

