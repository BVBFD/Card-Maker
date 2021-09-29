import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
    // CLICK 할수 있는 창 화면이 뜨게 한다.
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        // 어떤 확장자이든 상관없이 이미지 파일이면 된다.
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No File"}
      </button>
    </div>
  );
};

export default ImageFileInput;
