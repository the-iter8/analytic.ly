// @ts-nocheck

import styles from "./main.module.css";
import HTML from "../../assets/images/htmk.png";
import { statData, syllabusData } from "../../utils/constants";
import LineElementC from "../../components/Charts/LineElementC";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Main() {
  return (
    <main className={styles.root}>
      <p>Skill Test</p>
      <div className={styles.lower}>
        <div className={styles.aside}>
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
              <div>
                <LineElementC customValue={98} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aside}>
          <div className={styles.commonContainer}>
            <div className={styles.syllabusContainer}>
              <p className='primary-text' style={{ marginBottom: "1.25rem" }}>
                Syllabus wise Analysis
              </p>
              <div className={styles.syllabusSubContainer}>
                {syllabusData.map((item, index) => (
                  <div className={styles.syllabusItem} key={index}>
                    <div>{item.topic}</div>
                    <div className={styles.percentage}>
                      <ProgressBar
                        width='12rem'
                        height='10px'
                        completed={50}
                        bgColor={item.bg}
                        maxCompleted={100}
                        isLabelVisible={false}
                        margin='0 5.875rem 0 0'
                      />
                      <p className='primary-text' style={{ color: item.bg }}>
                        {item.percentage}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.commonContainer}></div>
        </div>
      </div>
    </main>
  );
}
