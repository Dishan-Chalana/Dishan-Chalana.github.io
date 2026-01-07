import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            <div className="skills-grid">
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                const isPercentage = exp.progressPercentage && exp.progressPercentage.includes('%');
                return (
                  <div key={i} className="skill">
                    <p style={{fontWeight: 'bold', marginBottom: '8px'}}>{exp.Stack}</p>
                    {isPercentage ? (
                      <div className="meter">
                        <span style={progressStyle}></span>
                      </div>
                    ) : (
                      <ul style={{fontSize: '14px', color: '#868e96', marginTop: '5px', paddingLeft: '20px', listStyle: 'disc'}}>
                        {exp.progressPercentage.split('•').map((tech, idx) => (
                          <li key={idx} style={{marginBottom: '4px'}}>{tech.trim()}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
