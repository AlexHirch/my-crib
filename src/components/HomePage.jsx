import { useState } from "react";
import { Base } from "../resource";
import "./home-page.scss";

const HomePage = () => {
  const Base1 = Base;
  const [answerviev, setAnswerviev] = useState(0);
  return (
    <>
      <div className="HomePage">
        <header>
          <h1>МИНИСТЕРСТВО ЦИФРОВЫХ ТЕХНОЛОГИЙ РЕСПУБЛИКИ УЗБЕКИСТАН</h1>
          <h2>
            ТАШКЕНТСКИЙ УНИВЕРСИТЕТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ МУХАММАДА
            АЛЬ-ХОРАЗМИ
          </h2>
          <h3>ФЕРГАНСКИЙ ФИЛИАЛ</h3>
        </header>
        {Base1.map((i) => {
          return (
            <section key={i.id}>
              <div className="question" onClick={() => setAnswerviev(i.id)}>
                <h3>Вариант {i.id}</h3>
                <ol>
                  <li>{i.q1}</li>
                  <li>{i.q2}</li>
                  <li>{i.q2}</li>
                </ol>
              </div>
              <div
                className={answerviev == i.id ? "answers active" : "answers"}
              >
                <hr />
                <span
                  onClick={() => {
                    setAnswerviev(0);
                    console.log(answerviev);
                  }}
                >
                  Скрыть
                </span>
                <h3>Ответы:</h3>
                <ol>
                  <li>{`${i.answer1}`}</li>
                  <li>{`${i.answer2}`}</li>
                  <li>!ЭТО НЕ ОТВЕТ А ОБЬЯСНЕНИЕ!
                  <br />!BU JAVOB EMAS TUSHINTIRISH! 
                  <br />
                  {`${i.answer3}`}</li>
                </ol>
              </div>
            </section>
          );
        })}
        <footer>
          <p>
            &copy; 2025 Ташкентский университет информационных технологий. Все
            права защищены.
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
