import React from 'react'
import './howWeWork.css'

function StepData(title, desc) {
  this.title = title;
  this.desc = desc;

}

const hwwLadderData = [
  new StepData('Collect the raw materials.', 'We collect all the items related to your project, including all your requirements and next we organize all the pieces in one frame.'),
  new StepData('Make a blueprint.', 'After collecting all the raw materials, we make list according to how the work done. This step of work is the process which help us to justify things in correct manner. And it’s quite easy to divide the work into different departments of the company because BITCS believe in team work.'),
  new StepData('Let’s work on it.', 'After all the planning and plotting, we work according to the plans and the project is like a puzzle, all the pieces should on the right place according to the blueprint. Our team start working on it and complete it on time because of the time management quality we follow for our clients.'),
  new StepData('Preview it', 'The work we do, before it goes to client we check and preview it more than one time and if there is any correction or mistake we complete it on the spot. So that our clients are fully satisfied with our work and easily use the application.'),
  new StepData('Get set go!!', 'After completing and compiling all the four steps, it time to hand over it to the client. And it’s our priority to check and provide the completing the project to you.')

]

export const HowWeWork = () => {
  return (
    <>
      <section className="hww-section">
        <img src={require('../../assets/background/hww-bgi.jpg')} alt="" className="hww-bgi" />
        <div className="hww-container">
          <div className="vertical-line">
          </div>
          <section className="hww-steps left">

            <div className="step">
              <h3>{hwwLadderData[0].title}</h3>
              <p>{hwwLadderData[0].desc}</p>
            </div>
          </section>
          <section className="hww-steps right">

            <div className="step">
              <h3>{hwwLadderData[1].title}</h3>
              <p>{hwwLadderData[1].desc}</p>
            </div>
          </section>
          <section className="hww-steps left">

            <div className="step">
              <h3>{hwwLadderData[2].title}</h3>
              <p>{hwwLadderData[2].desc}</p>
            </div>
          </section>
          <section className="hww-steps right">

            <div className="step">
              <h3>{hwwLadderData[3].title}</h3>
              <p>{hwwLadderData[3].desc}</p>
            </div>
          </section>
          <section className="hww-steps left">

            <div className="step">
              <h3>{hwwLadderData[4].title}</h3>
              <p>{hwwLadderData[4].desc}</p>
            </div>
          </section>
        </div>

      </section>
    </>
  )
}
