import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ForgotPasswordEmailProps = {
  username: string;
  resetUrl: string;
  userEmail: string;
};

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  const { username, resetUrl, userEmail } = props;

  return (
    <Html dir="ltr" lang="en">
  <Tailwind>
    <Head />
    <Preview>Reset your password - Action required</Preview>

    <Body className="bg-gray-100 py-10 font-sans">
      <Container className="mx-auto max-w-[600px] rounded-lg bg-white p-10 shadow-sm">

        {/* Header */}
        <Section className="mb-8 text-center">
          <Heading className="m-0 mb-2 text-2xl font-bold text-gray-900">
            Reset Your Password
          </Heading>
          <Text className="m-0 text-base text-gray-600">
            We received a request to reset your password
          </Text>
        </Section>

        {/* Main */}
        <Section className="mb-8">
          <Text className="m-0 mb-4 text-base leading-6 text-gray-700">
            Hello, {username}
          </Text>

          <Text className="m-0 mb-4 text-base leading-6 text-gray-700">
            We received a password reset request for your account associated with
            <strong> {userEmail}</strong>.
          </Text>

          <Text className="m-0 mb-6 text-base leading-6 text-gray-700">
            Click the button below to create a new password. This link will expire in
            24 hours for security reasons.
          </Text>
        </Section>

        {/* Button */}
        <Section className="mb-8 text-center">
          <Button
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white"
            href={resetUrl}
          >
            Reset Password
          </Button>
        </Section>

        {/* Alternative Link */}
        <Section className="mb-8">
          <Text className="m-0 mb-2 text-sm leading-5 text-gray-600">
            If the button doesn’t work, copy and paste this link into your browser:
          </Text>

          <Link
            className="break-all text-sm text-blue-600"
            href={resetUrl}
          >
            {resetUrl}
          </Link>
        </Section>

        {/* Security Notice */}
        <Section className="mb-8 rounded-lg bg-gray-50 p-5">
          <Text className="m-0 mb-2 text-sm font-semibold text-gray-700">
            Security Notice:
          </Text>

          <Text className="m-0 mb-2 text-sm leading-5 text-gray-600">
            • If you didn’t request this password reset, please ignore this email
          </Text>

          <Text className="m-0 mb-2 text-sm leading-5 text-gray-600">
            • This link will expire in 24 hours
          </Text>

          <Text className="m-0 text-sm leading-5 text-gray-600">
            • For security, never share this link with anyone
          </Text>
        </Section>

        {/* Help */}
        <Section className="mb-8">
          <Text className="m-0 text-sm leading-5 text-gray-600">
            Need help? Contact our support team at{" "}
            <Link className="text-blue-600" href="mailto:support@company.com">
              support@company.com
            </Link>
          </Text>
        </Section>

        {/* Footer */}
        <Section className="border-t border-gray-200 pt-6">
          <Text className="m-0 mb-2 text-xs leading-4 text-gray-500">
            This email was sent to {userEmail}
          </Text>
          <Text className="m-0 mb-2 text-xs leading-4 text-gray-500">
            Company Name, 123 Business Street, City, State 12345
          </Text>
          <Text className="m-0 text-xs leading-4 text-gray-500">
            © 2025 Company Name. All rights reserved.{" "}
            <Link className="text-gray-500" href="#">
              Unsubscribe
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Tailwind>
</Html>

  );
};

export default ForgotPasswordEmail;