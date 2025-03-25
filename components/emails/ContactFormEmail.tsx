import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr } from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({ name, email, message }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={heading}>New Contact Form Submission</Heading>
          </Section>

          <Section style={body}>
            <Text style={paragraph}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This message was sent from your portfolio website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f8f9fa",
  fontFamily: "Inter, Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const header = {
  padding: "20px 0",
  borderBottom: "1px solid #e5e7eb",
};

const heading = {
  color: "#2A5C99",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0",
};

const body = {
  padding: "20px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#1E1E24",
  margin: "0 0 16px 0",
};

const messageText = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#4b5563",
  backgroundColor: "#f3f4f6",
  padding: "16px",
  borderRadius: "4px",
};

const hr = {
  border: "none",
  borderTop: "1px solid #e5e7eb",
  margin: "20px 0",
};

const footer = {
  padding: "20px 0 0 0",
  borderTop: "1px solid #e5e7eb",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};
