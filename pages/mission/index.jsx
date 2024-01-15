import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Step 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              distinctio quisquam voluptatem velit quo nobis ab fugit provident
              modi molestias expedita, quae perspiciatis ratione officiis
              corporis facere obcaecati quidem blanditiis?
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              distinctio quisquam voluptatem velit quo nobis ab fugit provident
              modi molestias expedita, quae perspiciatis ratione officiis
              corporis facere obcaecati quidem blanditiis?
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              distinctio quisquam voluptatem velit quo nobis ab fugit provident
              modi molestias expedita, quae perspiciatis ratione officiis
              corporis facere obcaecati quidem blanditiis?
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 1 ? "active" : ""}`}
            onClick={() => handleStepClick(1)}
          >
            Step 1
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 2 ? "active" : ""}`}
            onClick={() => handleStepClick(2)}
          >
            Step 2
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${currentStep === 3 ? "active" : ""}`}
            onClick={() => handleStepClick(3)}
          >
            Step 3
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">{renderStepContent()}</div>
    </div>
  );
};

export default MultiStepForm;
