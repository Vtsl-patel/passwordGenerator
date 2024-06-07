# Password Generator App

This React application generates random passwords based on user-defined criteria and allows users to copy the generated password to their clipboard.

## Features

- Generate random passwords with customizable length and character options.
- Copy the generated password to the clipboard with a single click.
- Use sliders and checkboxes to adjust password length and character inclusion.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- CSS: Styling the components and layout.
- useRef: Used to access and interact with the password input element.
- useState: Manages state variables such as password length, number inclusion, character inclusion, and generated password.
- useEffect: Used for performing side effects like generating the password whenever there's a change in length or character options.
- useCallback: Memoizes functions like the password generator and copy function to prevent unnecessary re-renders.

## How It Works

1. **Length Slider**: Users can adjust the password length by moving the slider.
2. **Number Checkbox**: Toggle the inclusion of numbers in the generated password.
3. **Character Checkbox**: Toggle the inclusion of special characters in the generated password.
4. **Password Display**: The generated password is displayed in real-time as the user modifies the options.
5. **Copy Button**: Allows users to copy the generated password to their clipboard.

## Setup and Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the app using `npm run dev`.

## Example Usage

1. Adjust the length slider to set the desired password length.
2. Toggle the "Numbers" and "Character" checkboxes based on the required password complexity.
3. The generated password will be displayed in the input field.
4. Click the "Copy" button to copy the password to the clipboard.
