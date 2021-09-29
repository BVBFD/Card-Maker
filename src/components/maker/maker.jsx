import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: `1`,
      name: "Mr.Lee1",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "lsevina126@gmail.com",
      message: "go for it",
      fileName: "Lee Seong Eun",
      fileURL: null,
    },

    2: {
      id: `2`,
      name: "Mr.Lee2",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "lsevina126@gmail.com",
      message: "go for it",
      fileName: "Lee Seong Eun",
      fileURL: "ellie.png",
    },

    3: {
      id: `3`,
      name: "Mr.Lee3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "lsevina126@gmail.com",
      message: "go for it",
      fileName: "Lee Seong Eun",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
