# Stack SDK Components Documentation

This documentation focuses on providing detailed information about the various components and functionalities available within a specific Stack SDK. The SDK is structured to support a broad range of features, including authentication, user management, application settings, and more, all aimed at enhancing application development efficiency.

---

## StackProvider

**Type**: Component

**Description**: The `StackProvider` component is crucial as it sets up the context for the Stack application, ensuring that all child components have access to the necessary Stack context.

**Usage**:
```jsx
import { StackProvider } from 'path_to_stack_provider';

function App() {
  return (
    <StackProvider>
      <YourAppComponents />
    </StackProvider>
  );
}
```

**Properties**:
- `children`: `ReactNode` - The child components that will have access to the Stack context.

**Notes**: It's essential to wrap your application's root component with `StackProvider` to ensure that all functionalities like authentication and user state management work seamlessly.

---

## StackHandler

**Type**: Component

**Description**: `StackHandler` is designed to handle various authentication and user management workflows based on the URL paths.

**Usage**:
```jsx
import { StackHandler } from 'path_to_stack_handler';

function App() {
  return <StackHandler />;
}
```

**Notes**: `StackHandler` dynamically renders components depending on the URL routes. It handles routes associated with sign-in, sign-up, account settings, etc., providing a seamless routing experience within the application.

---

## StackTheme

**Type**: Type

**Description**: Defines the theme structure used within the Stack ecosystem.

**Usage**:
```typescript
import { StackTheme } from 'path_to_theme_provider';

const theme: StackTheme = {
  colors: {
    primary: '#000',
    secondary: '#fff'
  }
};
```

**Properties**:
- `colors`: `Record<string, string>` - Defines the colors used across the application.

**Notes**: Customize `StackTheme` to align with your branding requirements.

---

## SignIn

**Type**: Component

**Description**: Renders the sign-in form providing users the ability to log into the application.

**Usage**:
```jsx
import { SignIn } from 'path_to_sign_in';

function Login() {
  return <SignIn />;
}
```

**Properties**:
- `fullPage`: `boolean` (optional) - Determines whether the sign-in page should take up the full viewport.

**Notes**: This component should be used in conjunction with the `StackHandler` to ensure proper routing and state management.

---

## SignUp

**Type**: Component

**Description**: Facilitates user registration by rendering the sign-up form.

**Usage**:
```jsx
import { SignUp } from 'path_to_sign_up';

function Register() {
  return <SignUp />;
}
```

**Properties**:
- `fullPage`: `boolean` (optional) - Specifies if the registration page should consume the full viewport.

**Notes**: Use this component where the application's flow includes user self-registration.

---

## EmailVerification

**Type**: Component

**Description**: Manages the email verification process, offering a UI for users who need to verify their email address post-registration.

**Usage**:
```jsx
import { EmailVerification } from 'path_to_email_verification';

function VerifyEmail() {
  return <EmailVerification />;
}
```

**Properties**:
- `searchParams`: `Record<string, string>` - Contains query parameters including the verification code.
- `fullPage`: `boolean` (optional) - Determines if the component should be displayed as a full-page.

**Notes**: The component reads the email verification code from the URL parameters and proceeds with the verification process.

---

## PasswordReset

**Type**: Component

**Description**: Allows users to reset their password via a user-friendly interface that requests the new password and confirms the reset using a code sent to their email.

**Usage**:
```jsx
import { PasswordReset } from 'path_to_password_reset';

function ResetPassword() {
  return <PasswordReset />;
}
```

**Properties**:
- `searchParams`: `Record<string, string>` - Contains required parameters like the reset code.
- `fullPage`: `boolean` (optional) - If true, renders the reset form in a full-page view.

**Notes**: This component requires integration with server-side API to function correctly, handling requests for resetting passwords based on provided credentials.

---

This documentation is structured to guide developers through the usage, configuration, and integration of various Stack SDK components, enabling enhanced application functionalities seamlessly integrated with the broader technology stack.