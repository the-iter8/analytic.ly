// @ts-nocheck
import React from "react";

import styles from "./main.module.css";
import HTML from "../../assets/images/htmk.png";
const statData = [
  { iconContent: "🏆", value: "12,890", label: "YOUR RANK" },
  { iconContent: "📋", value: "37%", label: "PERCENTILE" },
  { iconContent: "✅", value: "07/15", label: "CORRECT ANSWERS" },
];
export default function Main() {
  return (
    <main className={styles.root}>
      <p>Skill Test</p>
      <div>
        <div className={styles.leftAside}>
          <div className={styles.commonContainer}>
            <div className={styles.modalEntryContainer}>
              <div className={styles.modalEntrySubContainer}>
                <div className={styles.htmlImg}>
                  <img src={HTML} alt=' ' className={styles.htmlImg} />
                </div>

                <span>
                  <div className='primary-text' style={{ marginBottom: "5px" }}>
                    Hypertext Markup Language
                  </div>
                  <div className='secondary-text' style={{ marginBottom: "5px" }}>
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </div>
                </span>
              </div>

              <button className={styles.updateBtn}>Update</button>
            </div>
          </div>
          <div className={styles.commonContainer}>
            <div className={styles.quickStatsContainer}>
              <p className='primary-text'>Quick Statistics</p>
              <div className={styles.quickStatsSubContainer}>
                {statData.map((item, index) => (
                  <>
                    <div className={styles.statContainer} key={index}>
                      <div className={styles.statIcon}>
                        <p>{item.iconContent}</p>
                      </div>
                      <div>
                        <p className='large-text' style={{ marginBottom: "5px" }}>
                          {item.value}
                        </p>
                        <p className='secondary-text'>{item.label}</p>
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
                  <p className='primary-text' style={{ marginBottom: "1.25rem" }}>
                    Comparison Graph
                  </p>
                  <p className='secondary-text'>You scored 37% percentile which is lower than the</p>
                  <p className='secondary-text'>average percentile 72% of all the engineers who took this assessment</p>
                </div>
                <div className={styles.statIcon}>📈</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
