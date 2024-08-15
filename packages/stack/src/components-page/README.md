# Stack SDK Component Documentation

This documentation provides detailed information about each of the components and hooks exported from the Stack SDK, specifically from the components-page, hooks, and components folders. These components and hooks are designed to facilitate the development of authentication and user management features in applications using the Stack SDK.

---

## AccountSettings

**Type**: Component

**Description**: This component allows users to manage their account settings, including profile details, password, email verification, and multi-factor authentication settings.

**Usage**:
```jsx
<AccountSettings fullPage={true} />
```

**Properties**:
- `fullPage`: `boolean` - Specifies whether the component should be rendered as a full-page component.

**Notes**: This component uses the `SidebarLayout` to provide a navigation panel for different settings sections.

---

## AuthPage

**Type**: Component

**Description**: Serves as a central authentication page allowing users to sign-in or sign-up using different methods like OAuth, magic link, or credentials.

**Usage**:
```jsx
<AuthPage fullPage={true} type='sign-in' />
```

**Properties**:
- `fullPage`: `boolean` - Determines if the layout is rendered as full-page.
- `type`: `'sign-in' | 'sign-up'` - Specifies the type of authentication action, either 'sign-in' or 'sign-up'.
- `automaticRedirect`: `boolean` - If true, automatically redirects on successful sign-in/sign-up.

**Notes**: The component dynamically adjusts available forms and options based on configuration settings like `signUpEnabled`, `credentialEnabled`, etc.

---

## EmailVerification

**Type**: Component

**Description**: Handles the flow for verifying a user's email via a code sent to their email.

**Usage**:
```jsx
<EmailVerification searchParams={{ code: 'your_verification_code' }} fullPage={true} />
```

**Properties**:
- `searchParams`: `{ code?: string }` - Contains the verification code needed for the email verification.
- `fullPage`: `boolean` - Whether to render this in full page mode.

**Notes**: Uses caching for the verification process to enhance performance.

---

## ForgotPassword

**Type**: Component

**Description**: Allows users to initiate a password reset process by entering their email to receive a reset link.

**Usage**:
```jsx
<ForgotPassword fullPage={true} />
```

**Properties**:
- `fullPage`: `boolean` - Specifies if the component should occupy the whole page.

---

## MagicLinkCallback

**Type**: Component

**Description**: Manages the callback process for a magic link authentication, handling scenarios like expired or already used links.

**Usage**:
```jsx
<MagicLinkCallback searchParams={{ code: 'magic_link_code' }} fullPage={true} />
```

**Properties**:
- `searchParams`: `{ code: string }` - Parameters received from the URL which include the magic link code.
- `fullPage`: `boolean` - Whether to render this in full page mode.

---

## OAuthCallback

**Type**: Component

**Description**: A callback handler for OAuth authentication processes, managing success or error states post OAuth flow.

**Usage**:
```jsx
<OAuthCallback fullPage={true} />
```

**Properties**:
- `fullPage`: `boolean` - Determines if the layout needs to be rendered as full-page.

**Notes**: Handles redirection and error display post OAuth authentication.

---

## PasswordReset

**Ty