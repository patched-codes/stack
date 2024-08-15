# Stack SDK Exports Documentation

The Stack SDK provides a robust set of components, hooks, and utilities designed primarily for handling authentication and user management within React applications. This documentation focuses on exports that are relevant to the current SDK folder structure, principally dealing with user authentication processes, settings management, and user interface components that are utilized within the stack environment.

---

## StackProvider

**Type**: Component

**Description**: This component provides a React context for Stack SDK functionality. It is responsible for wrapping the root component and managing the lifecycle and state of the SDK for child components.

**Usage**:
```jsx
import { StackProvider } from 'path-to-stack-sdk';

<StackProvider settings={{ apiKey: 'your_api_key_here' }}>
  <App />
</StackProvider>
```

**Properties**:
- `settings`: `Object` - Configuration options for the Stack SDK.

**Notes**: The `settings` object can include API key, project ID, and other necessary configuration details.

---

## useUser

**Type**: Hook

**Description**: Custom React hook to access user-related data.

**Usage**:
```jsx
import { useUser } from 'path-to-stack-sdk';

function UserProfile() {
  const user = useUser();
  return user ? (
    <div>Welcome, {user.name}</div>
  ) : (
    <div>No user data available.</div>
  );
}
```

**Returns**: `User | null` - Returns the current user object or null if no user is authenticated.

**Notes**: Should be used inside components encapsulated by `StackProvider`.

---

## useStackApp

**Type**: Hook

**Description**: Hook to access Stack app specific functionalities like redirects.

**Usage**:
```jsx
import { useStackApp } from 'path-to-stack-sdk';
const app = useStackApp();

// Usage example to redirect
function LoginRedirect() {
  app.redirectToSignIn();
}
```

**Returns**: `Object` - Provides functionalities related to the Stack app like direct urls and action calls for redirections.

---

## StackHandler

**Type**: Component

**Description**: A handler component for routing and handling different authentication states and pages within an app.

**Usage**:
```jsx
import { StackHandler } from 'path-to-stack-sdk';

function AppRouting() {
  return (
    <Route path="/auth/:action" component={StackHandler} />
  );
}
```

**Properties**: None directly; uses URL parameters for conditional rendering logic.

**Notes**: It dynamically handles routes like sign-in, sign-up, password resets based on the URL parameters.

---

## SignIn

**Type**: Component

**Description**: Renders a sign-in page component.

**Usage**:
```jsx
import { SignIn } from 'path-to-stack-sdk';

<SignIn />
```

**Properties**:
- `fullPage`: `boolean` - Optional. If true, the signin page takes up the full page.

---

## SignUp

**Type**: Component

**Description**: Component for rendering a sign-up form interface.

**Usage**:
```jsx
import { SignUp } from 'path-to-stack-sdk';

<SignUp />
```

**Properties**:
- `fullPage`: `boolean` - Determines if the signup form should be rendered as a full page.

**Notes**: Uses internal Stack SDK hooks for handling creation of new user accounts.

---

## EmailVerification

**Type**: Component

**Description**: Renders an email verification component that handles verification processes.

**Usage**:
```jsx
import { EmailVerification } from 'path-to-stack-sdk';

<EmailVerification />
```

**Properties**:
- `searchParams`: `Object` - Parameters that should include the verification code.

**Notes**: Expected to receive the verification code through search params or URL parameters.

---

## PasswordReset

**Type**: Component

**Description**: Component to handle password reset functionality.

**Usage**:
```jsx
import { PasswordReset } from 'path-to-stack-sdk';

<PasswordReset />
```

**Properties**:
- `searchParams`: `Object` - Contains the reset code necessary for processing the password reset.

---

## ForgotPassword

**Type**: Component

**Description**: Provides a user interface for initiating a password reset process.

**Usage**:
```jsx
import { ForgotPassword } from 'path-to-stack-sdk';

<ForgotPassword />
```

**Properties**:
- `fullPage`: `boolean` - Renders the component in a full page layout if set to true.

**Notes**: This component is used when a user has forgotten their password and needs to initiate a reset process.

---

## OAuthButton

**Type**: Component

**Description**: Renders OAuth provider buttons for user authentication.

**Usage**:
```jsx
import { OAuthButton } from 'path-to-stack-sdk';

<OAuthButton />
```

**Properties**:
- `provider`: `string` - Specifies the OAuth provider.

**Notes**: Supports multiple OAuth providers including Google, Facebook, etc.

### Notes
Additional functionalities, including various user interface elements and deeper integration aspects, are described in their specific subsections, following the higher-level overview provided here. The comprehensive nature of the Stack SDK ensures that most needs related to user management and authentication within a modern web application can be met efficiently.