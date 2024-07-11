import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { validateStep } from "./utils/validation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (validateStep(formData, currentStep, setErrors)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(formData, currentStep, setErrors)) {
      setTimeout(() => {
        alert("Form submitted successfully!");
      }, 1000);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1 data={formData} handleChange={handleChange} errors={errors} />
        );
      case 2:
        return (
          <Step2 data={formData} handleChange={handleChange} errors={errors} />
        );
      case 3:
        return <Step3 data={formData} />;
      default:
        return null;
    }
  };

  return (
    <Container className="mt-5">
      <h2>Multi-Step Form</h2>
      <div className="steps">{renderStep()}</div>
      <div className="buttons p-2">
        {currentStep > 1 && (
          <Button variant="secondary" onClick={handlePrev}>
            Back
          </Button>
        )}
        {currentStep < 3 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            style={{ marginLeft: "5px" }}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={handleSubmit}
            style={{ marginLeft: "5px" }}
          >
            Submit
          </Button>
        )}
      </div>
    </Container>
  );
};

export default MultiStepForm;
