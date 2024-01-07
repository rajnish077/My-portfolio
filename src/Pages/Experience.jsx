import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            Gayatri Shiksha Niketan Hr. Sec. School, Khargone(M.P.)
          </h2>
          <p>High School </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            School of Computer Science & IT. (D.A.V.V), Indore (M.P.)
          </h2>
          <p>Bachelor's Degree in Comuter Application. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            School of Computer Science & IT. (D.A.V.V), Indore (M.P.)
          </h2>
          <p>Master's Degree in Computer Application. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="3-Months"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            RadicalX, Virtual Internship.
          </h2>
          <p>Internship </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
