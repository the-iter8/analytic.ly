import React, { useState, ChangeEvent } from "react";
import styles from "./main.module.css";
import HTML from "../../assets/images/htmk.png";
import { statData, syllabusData } from "../../utils/constants";
import LineElementC from "../../components/Charts/LineElementC";
import DonutChart from "../../components/Charts/DonutChart";
import ProgressBar from "@ramonak/react-progress-bar";
import useLocalStorage from "use-local-storage";

import Modal from "../../components/Modal";

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useLocalStorage("data", {
    rank: 1280,
    percentile: 37,
    score: 7,
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <main className={styles.root}>
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          inputData={data}
          setLocalData={setData}
        />
      )}
      <p>Skill Test</p>
      <div className={styles.lower}>
        <div className={styles.aside}>
          <div className={styles.commonContainer}>
            <div className={styles.modalEntryContainer}>
              <div className={styles.modalEntrySubContainer}>
                <div className={styles.htmlImg}>
                  <img src={HTML} alt=" " className={styles.htmlImg} />
                </div>

                <span>
                  <div className="primary-text" style={{ marginBottom: "5px" }}>
                    Hypertext Markup Language
                  </div>
                  <div
                    className="secondary-text"
                    style={{ marginBottom: "5px" }}
                  >
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </div>
                </span>
              </div>

              <button className={styles.updateBtn} onClick={toggleModal}>
                Update
              </button>
            </div>
          </div>
          <div className={styles.commonContainer}>
            <div className={styles.quickStatsContainer}>
              <p className="primary-text">Quick Statistics</p>
              <div className={styles.quickStatsSubContainer}>
                {statData.map((item, index) => (
                  <>
                    <div className={styles.statContainer} key={index}>
                      <div className={styles.statIcon}>
                        <p>{item.iconContent}</p>
                      </div>
                      <div>
                        <p
                          className="large-text"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* @ts-ignore */}
                          {data[item.value]} {index === 2 && "/ 15"}
                        </p>
                        <p className="secondary-text">{item.label}</p>
                      </div>
                    </div>
                    {index != 2 && <div className={styles.verticalLine}></div>}
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.commonContainer}>
            <div className={styles.comparisonGraphContainer}>
              <div className={styles.comparisonGraphSubContainer}>
                <div>
                  <p className="title-text" style={{ marginBottom: "1.25rem" }}>
                    Comparison Graph
                  </p>
                  <p className="title-text">
                    You scored 37% percentile which is lower than the
                  </p>
                  <p className="title-text">
                    average percentile 72% of all the engineers who took this
                    assessment
                  </p>
                </div>
                <div className={styles.statIcon}>📈</div>
              </div>
              <div>
                <LineElementC customValue={data.percentile} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aside}>
          <div className={styles.commonContainer}>
            <div className={styles.syllabusContainer}>
              <p className="primary-text" style={{ marginBottom: "1.25rem" }}>
                Syllabus wise Analysis
              </p>
              <div className={styles.syllabusSubContainer}>
                {syllabusData.map((item, index) => (
                  <div className={styles.syllabusItem} key={index}>
                    <div>{item.topic}</div>
                    <div className={styles.percentage}>
                      <ProgressBar
                        width="197px"
                        height="10px"
                        completed={item.percentage}
                        bgColor={item.bg}
                        maxCompleted={100}
                        isLabelVisible={false}
                        className={styles.progressBar}
                      />
                      <p className="primary-text" style={{ color: item.bg }}>
                        {item.percentage}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.commonContainer}>
            <div className={styles.donutContainer}>
              <div className={styles.donutHeadings}>
                <p className="primary-text">Questions Analysis</p>
                <p className={styles.donutHeadingBlue}>{data.score}/15</p>
              </div>
              <p className="title-text">
                <span className="span-text">
                  You scored {data.score} question correct out of 15.
                </span>{" "}
                However it still needs some improvements
              </p>
              <div className={styles.donutParent}>
                <div className={styles.actualDonut}>
                  <DonutChart value={data.score} />
                </div>
                <div className={styles.donutTarget}>🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
