import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section>
        <NavLink to={"/view/:id"}>
          <article className={styles.section_article}>
            <img
              src={process.env.PUBLIC_URL + `/assets/wave2.jpg`}
              alt="home_img"
              className={styles.home_img}
            />
            <div className={styles.section_article_text}>
              <h3>평화스러운 위하여서 인생을 사막이다.</h3>
              <p>
                타오르고 행복스럽고 위하여 우리 붙잡아 우리는 주며, 하는 칼이다.
                얼음에 봄바람을 이상, 무엇을 커다란 우리 봄날의 위하여, 것이다.
                그와 청춘은 바이며, 그들의 가는 석가는 것이다. 기쁘며, 뜨고,
                스며들어 만천하의 그것을 생생하며, 미인을 청춘의 끝에 위하여서.
                열매를 그와 사라지지 풀이 끓는다.
              </p>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/view/:id"}>
          <article className={styles.section_article}>
            <img
              src={process.env.PUBLIC_URL + `/assets/wave2.jpg`}
              alt="home_img"
              className={styles.home_img}
            />
            <div className={styles.section_article_text}>
              <h3>평화스러운 위하여서 인생을 사막이다.</h3>
              <p>
                타오르고 행복스럽고 위하여 우리 붙잡아 우리는 주며, 하는 칼이다.
                얼음에 봄바람을 이상, 무엇을 커다란 우리 봄날의 위하여, 것이다.
                그와 청춘은 바이며, 그들의 가는 석가는 것이다. 기쁘며, 뜨고,
                스며들어 만천하의 그것을 생생하며, 미인을 청춘의 끝에 위하여서.
                열매를 그와 사라지지 풀이 끓는다.
              </p>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/view/:id"}>
          <article className={styles.section_article}>
            <img
              src={process.env.PUBLIC_URL + `/assets/wave2.jpg`}
              alt="home_img"
              className={styles.home_img}
            />
            <div className={styles.section_article_text}>
              <h3>평화스러운 위하여서 인생을 사막이다.</h3>
              <p>
                타오르고 행복스럽고 위하여 우리 붙잡아 우리는 주며, 하는 칼이다.
                얼음에 봄바람을 이상, 무엇을 커다란 우리 봄날의 위하여, 것이다.
                그와 청춘은 바이며, 그들의 가는 석가는 것이다. 기쁘며, 뜨고,
                스며들어 만천하의 그것을 생생하며, 미인을 청춘의 끝에 위하여서.
                열매를 그와 사라지지 풀이 끓는다.
              </p>
            </div>
          </article>
        </NavLink>
      </section>
    </>
  );
};

export default Home;
