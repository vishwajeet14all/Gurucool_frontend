# Multi-Step Form with React and Vite

## Objective
Create a responsive multi-step form with three steps, ensuring data validation, error handling, and navigation controls using React.js and Vite. The form persists data to local storage and enforces sequential completion of steps.

## Requirements
1. **Form Structure**:
    - Step 1: Personal Information (Name, Email, Phone)
    - Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
    - Step 3: Confirmation (Review all entered data)
2. **Navigation and Buttons**:
    - Use tabbed navigation to switch between steps.
    - Disable the back button on the first step.
    - Disable the next button on the last step and replace it with a submit button.
3. **Validation**:
    - Client-side validation to ensure all fields are filled before allowing navigation to the next step.
    - Display appropriate error messages if fields are empty or invalid (e.g., email format).
    - Highlight the fields with errors.
4. **State Management**:
    - Manage form data using React state.
    - Use hooks like `useState` and `useEffect` where appropriate.
    - Ensure state updates reflect user inputs and form navigation.
5. **Local Storage**:
    - Persist entered data to local storage when the user navigates between steps.
    - Retrieve and pre-fill form fields if the user revisits the form.
6. **Responsive Design**:
    - Ensure the form is responsive and works well on desktop, tablet, and mobile screens.
    - Use appropriate CSS and possibly a CSS framework (like Bootstrap) for layout and responsiveness.
7. **Bonus Points (Optional)**:
    - Implement error handling for network requests (e.g., simulate API calls with `setTimeout`).


## Setup Instructions
1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

4. **Build the application**:
    ```sh
    npm run build
    ```

5. **Preview the built application**:
    ```sh
    npm run preview
    ```

6. **Run tests** (if any):
    ```sh
    npm test
    ```

## Project Structure
- `src/`
  - `MultiStepForm.jsx`: Main component that handles the form navigation and state management.
  - `components/`
    - `Step1.jsx`: Component for Step 1: Personal Information.
    - `Step2.jsx`: Component for Step 2: Address Information.
    - `Step3.jsx`: Component for Step 3: Confirmation.
  - `utils/`
    - `validation.js`: Contains validation functions for form fields.   
- `public/`: Static assets.

## Additional Notes
- The form data is persisted to local storage when navigating between steps to ensure data is not lost on page refresh.
- Client-side validation ensures all fields are properly filled before proceeding to the next step.
- Error messages and highlights help guide the user in case of invalid inputs.
- The `submitting` state is used to disable the submit button and show a loading state during the simulated API call.
- CSS transitions provide a smooth user experience when navigating between form steps.
- The form is styled using Bootstrap.

Feel free to reach out if you have any questions or need further assistance.
