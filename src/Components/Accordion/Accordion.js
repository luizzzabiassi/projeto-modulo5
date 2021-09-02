import React from "react";
import Chevron from "./Chevron";
import style from "./Accordion.module.css";

const Accordion = (props) => {
  const [ativo, setAtivo] = React.useState("");
  const [altura, setAltura] = React.useState("0px");
  const [rotacao, setRotacao] = React.useState(style.icon);


  const content = React.useRef(null);

  function toggleAccordion() {
    setAtivo(ativo === "" ? "active" : "");
    setAltura(ativo === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotacao(
      ativo === "active" ? style.icon : style.icon + " " + style.rotate
    );
  }

  return (
    <section className={style.section}>
      <button
        className={style.accordion + " " + ativo}
        onClick={toggleAccordion}
      >
        <p className={style.titulo}>{props.title}</p>
        <Chevron className={`${rotacao}`} width={10} fill={"#101010"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${altura}` }}
        className={style.conteudo}
      >
        <p
          className={style.texto}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </section>
  );
};

export default Accordion;