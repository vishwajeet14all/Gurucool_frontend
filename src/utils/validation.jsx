export const validateStep = (formData, currentStep, setErrors) => {
    let stepErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.name) stepErrors.name = "Name is required";
        if (!formData.email) stepErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(formData.email))
          stepErrors.email = "Email is invalid";
        if (!formData.phone) stepErrors.phone = "Phone is required";
        break;
      case 2:
        if (!formData.address1)
          stepErrors.address1 = "Address Line 1 is required";
        if (!formData.city) stepErrors.city = "City is required";
        if (!formData.state) stepErrors.state = "State is required";
        if (!formData.zip) stepErrors.zip = "Zip Code is required";
        break;
      default:
        break;
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };