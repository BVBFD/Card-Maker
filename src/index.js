import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";
import { firebaseApp } from "./service/firebase";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
// 확장성 강화를 위해서 props => (...props) 추가
// components prop인 경우 대문자로 시작함

ReactDOM.render(
  <React.StrictMode>
    <App
      cardRepository={cardRepository}
      authService={authService}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
