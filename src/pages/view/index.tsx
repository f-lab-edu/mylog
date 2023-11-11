import React from "react";
import styles from "../../styles/View.module.css";
import Line from "../../components/common/Line";
import Button from "../../components/common/Button";

export default function View() {
  return (
    <>
      <div className={styles.view_head}>
        <h1 className={styles.view_head_title}>View Title</h1>
        <div className={styles.view_head_detail}>
          <span>지유</span>
          <span>2023.11.11. 11:11</span>
          <Button text={"Edit"} onClick={() => alert("edit!")} type={"edit"} />
          <Button
            text={"Delete"}
            onClick={() => alert("delete!")}
            type={"delete"}
          />
        </div>
        <Line />
      </div>
      <div className={styles.view_main_content}>
        <img
          src={process.env.PUBLIC_URL + `/assets/wave2.jpg`}
          alt="view_img"
          className={styles.view_img}
        />
        <p>
          품었기 이상의 피는 끝에 싹이 봄바람을 것이다. 천지는 목숨이
          관현악이며, 그들의 너의 시들어 피가 꽃이 방지하는 부패뿐이다. 얼마나
          이것을 원질이 그러므로 소리다.이것은 힘차게 시들어 끝에 봄바람이다.
          그들의 피어나는 설산에서 용감하고 것이다. 방황하였으며, 가치를 이성은
          황금시대다. 찾아다녀도, 설산에서 황금시대를 그들의 속에 평화스러운
          철환하였는가? 착목한는 피가 가진 두손을 품고 아니다. 이상은 평화스러운
          희망의 새가 이상을 긴지라 놀이 이상의 가슴에 부패뿐이다. 시들어
          용감하고 품고 이 꽃 낙원을 때문이다. 있는 낙원을 노년에게서 앞이
          찬미를 사막이다. 청춘 현저하게 원대하고, 수 가는 말이다. 현저하게 이는
          사랑의 구할 위하여, 인간의 힘차게 피어나는 것이다. 눈이 얼마나 끓는
          그것은 부패를 그들은 따뜻한 피는 이상의 뿐이다. 안고, 그들은 우리의
          오아이스도 우리 황금시대다. 청춘의 열매를 이 같은 것이다. 봄날의
          같으며, 되는 만물은 붙잡아 때문이다. 때에, 끓는 있을 갑 불러 없는
          모래뿐일 거선의 그리하였는가? 귀는 튼튼하며, 인생에 황금시대를 하여도
          장식하는 가는 방황하였으며, 운다. 피가 바이며, 할지라도 충분히
          노래하며 모래뿐일 그들의 곧 때문이다. 할지니, 설산에서 평화스러운
          위하여 가치를 곳이 피는 행복스럽고 일월과 있는가? 인생을 뼈 때까지
          목숨을 부패를 무엇이 우는 부패뿐이다. 때에, 위하여 두손을 심장의 곳이
          봄바람이다. 청춘의 그들은 가는 못할 보라. 용감하고 전인 인도하겠다는
          관현악이며, 보배를 것이다. 창공에 황금시대를 그들의 청춘을 눈이
          풍부하게 때까지 없는 평화스러운 말이다. 바이며, 못할 크고 노년에게서
          가치를 소금이라 오아이스도 위하여서 철환하였는가? 뭇 같지 있는
          스며들어 충분히 칼이다. 끓는 대중을 사랑의 군영과 얼음이 천하를
          반짝이는 같은 것이다.
        </p>
      </div>
    </>
  );
}
