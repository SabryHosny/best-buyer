import * as React from 'react';
import { Html, Head, Body, Container, Section, Text, Heading, Hr } from '@react-email/components';

interface ContactFormEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
    name,
    email,
    subject,
    message,
}) => {
    return (
        <Html>
            <Head />
            <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
                <Container>
                    <Section>
                        <Heading style={{ color: '#f59e0b' }}>New Contact Form Submission</Heading>
                        <Text>You have received a new message from your website contact form.</Text>
                        <Hr />
                        <Text><strong>Name:</strong> {name}</Text>
                        <Text><strong>Email:</strong> {email}</Text>
                        <Text><strong>Subject:</strong> {subject}</Text>
                        <Text><strong>Message:</strong></Text>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>This email was sent from the contact form on Best Buyer website.</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactFormEmail;