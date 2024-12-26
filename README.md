<br><br>
-------------------------------
### *.Diary Project*
<br>
<br>
      
      import Button from "../component/Button";
      
      
      const Home = () => {
          return (
              <div>
                  <Button text={"버튼텍스트"}
                  onClick={ () => {
                      alert("hi")
                  }}
                  />
              </div>
          );
      
      };
      
      export default Home;

      
<br>
      버튼이 반응하는 지 확인 하기 위해 랜더링 경고창 확인한다 alert ("hi)
<br><br>


![화면 캡처 2024-12-26 094553](https://github.com/user-attachments/assets/de801b12-ef7b-46f1-ab35-3cbb2ef4a2e1) 

<br>


![화면 캡처 2024-12-26 094617](https://github.com/user-attachments/assets/4cb5d5e7-bd2c-4bf0-a865-551d21d20b57)

<br>

![화면 캡처 2024-12-26 094838](https://github.com/user-attachments/assets/9dd986fc-481b-48d5-a1d0-725b01587d73)

<br>
      
      const Button =({ text, type, onClick}) => {
          const btnType =["positive", "negative"].includes(type) ? type :"default";
          return (
              <button className={["Button", `Button_${btnType}`].join(" ")} 
              onClick={onClick}>
                  {text}
              </button>
          );
      
      };
      export default Button;
      
      
<br><br>
      
      Button.css먼저 추가 수정한 후
      
<br><br>

      
      .Button_default {
          background-color: #ececec;
          color: black;
      }
      
      .Button_positive {
          background-color: #6fb8da;
          color: white;
      }
      
      .Button_negative {
          background-color: #fd565f;
          color: white;
      }
      

<br><br>
      
      
      Home.jsx
      const Home = () => {
          return (
              <div>
                  <Button 
                  text={" Default "}
                  onClick={ () => {
                      alert("default button");
                  }}
                  />
                  <Button 
                  type="positive"
                  text={" 긍정 버튼 "}
                  onClick={ () => {
                      alert("positive button");
                  }}
                  />
                  <Button 
                  type="negative"
                  text={" 부정 버튼 "}
                  onClick={ () => {
                      alert("negative button");
                  }}
                  />
              </div>
          );
      
      };

<br><br>

![화면 캡처 2024-12-26 095830](https://github.com/user-attachments/assets/d76911ba-06dc-48d8-9d13-682e85ecd9ed)

<br>
버튼 종류가 모두 확인 가능한지 확인

<br>

#### 피그마로 디자인 작업

<br>

      
      import { useState } from "react";
      import "./Editor.css"
      
      const Editor =({ initData, onsubmit })=>  {
          const [state , setState] = useState({
              date: "",
              emotionId: 3,
              content: "",
          });
          const handleChangeDate =(e) => {
              setState({
                  ...state,
                  date: e.target.value,
              });
          };
          return(
              <div className="Editor">
                  <div className="editor_section">
                      {/* 날짜 */}
                    <h4>오늘의 날짜</h4>
                    <div className="input_wrapper">
                      <input type="date" value={state.date}
                      onChange={handleChangeDate} />
                    </div>
                  </div>
                  <div className="editor_section">
                      {/* 날짜 */}
                    <h4>오늘의 감정</h4>
                  </div>
                  <div className="editor_section">
                      {/* 날짜 */}
                    <h4>오늘의 일기</h4>
                  </div>
                  <div className="editor_section">
                      {/* 작성 완료, 취소*/}
                  </div>
              </div>
          );
      };
      export default Editor;

      
<br>
<br>

![화면 캡처 2024-12-26 100123](https://github.com/user-attachments/assets/a304b16b-e1dc-4695-a1d1-2b1a8e407fe1)

<br>
      <div className="editor_section bottom_section">
                      <Button text={"취소하기"}/>
                      <Button text={"작성 완료"} type={"positive"}/>
                      {/* 작성 완료, 취소*/}
                  </div>
      
      버튼 추가 해서 작성완료 버튼 만들기

      
<br>
<br>


![화면 캡처 2024-12-26 105331](https://github.com/user-attachments/assets/5223b2ca-f591-4221-9d8f-e28cf26bef9e)

<br>
      후에 기능 구현 코드를 만든다..! 
      ++ 
      
          const handleSubmit = () => {
              onSubmit(state);
          };
      
      
      
      <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit}/>
                      {/* 작성 완료, 취소*/}
                  </div>
      
      
<br>
<br>

      Home.jsx
      const Home = () => {
          return (
              <div>
                  <Editor
                  onSubmit={()=> {
                      alert("작성 완료 버튼을 클릭했어요 ! ")
                  }} />
              </div>
          );
      
      };

      
<br>
<br>

![화면 캡처 2024-12-26 112554](https://github.com/user-attachments/assets/bcecf3be-6c1d-4c31-8748-8c5d28eda4d1)

<br>


![화면 캡처 2024-12-26 113255](https://github.com/user-attachments/assets/05959f2f-aec7-4ccc-b1ec-ec1b583e64ac)

<br>

-------------------------------------------

      
<br>
<br>

      
      Editor.jsx
      
      const handleChangeEmotion =(emotionId) => {
              setState({
                  ...state,
                  emotionId,
              });
          };
      
      
      
<br>
<br>
      
      <h4>오늘의 감정</h4>
                    <div className="input_wrapper emotion_list_wrapper">
                      {emotionList.map((it)=>(
                          <EmotionItem key={it.id}
                          {...it}
                          onClick={handleChangeEmotion}
                          isSelected={state.emotionId === it.id}
                          />
                      ))}
                    </div>
<br>
<br>


![화면 캡처 2024-12-26 123732](https://github.com/user-attachments/assets/ec8193df-5d01-4d08-9b66-4658c5a8ffd0)

<br>


index.css 
#### 아래와 같이 설정하거나 

<br>
<br>
      html,
      body {
       /*  font-family: "Yeon Sung"; */
        margin: 0px;
        width:100px;
        background-color: #f6f6f6;
        display: flex;
        justify-content: center;
        font-family: "Nanum Pen Script";
      }
      
      body{
        height: 100%;
      }
      
      #root {
        margin: 0 auto;
        max-width:  600px;
        width: 100px;
        min-height: 100vh;
        height: 100%;
        background-color: white;
        box-shadow: rgba(100,100,100,0.2)
      }
      


<br>
<br>



      @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap');
      
      body {
       /*  font-family: "Yeon Sung"; */
        margin: 0px;
        
        font-family: "Nanum Pen Script";
      }


<br>

#### 위와 같이 폰트만 설정 할 시에


#### App.css 에서 전체 설정


      .App {
          /* 최대 너비를 500px로 설정 */
          max-width: 1000px;
      
          /* 너비는 100%로 설정하여 화면 크기에 맞게 확장 */
          width: 100%;
      
          /* 왼쪽에 20px 패딩 추가 */
          padding-left: 20px;
      
          /* 경계선은 현재 비활성화됨 (주석 처리) */
      
          /* border: 1px solid gray; */
      
          /* 자식 요소들이 세로 방향으로 배치되도록 설정 */
          display: flex;
      
          /* 자식 요소들 사이에 일정 간격을 둠 */
          flex-direction: column;
      
          /* 자식 요소들 간의 간격을 30px로 설정 */
          gap: 30px;
      }

<br>

#### 아래와 같은 결과창이 나온다..! 
index.css 에서 전체 설정값을 건들여도 가능함.!

<br>

<br>


![화면 캡처 2024-12-26 131543](https://github.com/user-attachments/assets/b4427d34-cd60-4bbd-b618-27b874c7a6b7)


<br>
