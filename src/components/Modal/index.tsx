import styles from "./modal.module.css";
import HTML from "../../assets/images/htmk.png";
import React, { useState, ChangeEvent } from "react";
interface ModalProps {
  toggleModal: () => void;
  inputData: any;
  setLocalData: any;
}
interface InputData {
  rank: string;
  percentile: string;
  score: string;
  [key: string]: string;
}

function Modal({ toggleModal, inputData, setLocalData }: ModalProps) {
  const [data, setData] = useState<InputData>(inputData);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof InputData
  ) => {
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const inputFields = [
    { label: "rank", name: "Rank" },
    { label: "percentile", name: "Percentile" },
    { label: "score", name: "Score" },
  ];

  return (
    <>
      <div className={styles.root}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeadings}>
            <p>Update Scores</p>
            <div className={styles.htmlImg}>
              <img src={HTML} alt=" " className={styles.htmlImg} />
            </div>
          </div>
          <div className={styles.modalInputs}>
            {inputFields.map((field, index) => (
              <div className={styles.modalInputItem} key={index}>
                <div className={styles.modalInputItemRank}>
                  <div className={styles.modalInputItemNumber}>
                    <p>{index + 1}</p>
                  </div>
                  <p className={styles.modalInputItemName}>
                    Update your{" "}
                    <span className={styles.modalInputItemSpanName}>
                      {field.name}
                    </span>
                  </p>
                </div>
                <input
                  type="number"
                  className={styles.modalInputField}
                  value={data[field.label]}
                  onChange={(e) => handleChange(e, field.label)}
                />
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <button className={styles.btn} onClick={toggleModal}>
              Cancel
            </button>
            <button
              className={styles.btn}
              onClick={() => {
                setLocalData(data);
              }}
            >
              Save{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
