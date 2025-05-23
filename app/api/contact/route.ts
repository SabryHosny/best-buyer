import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/app/emails/ContactFormEmail';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // Validate the form data
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: `${formData.name} <contact@bestbuyerss.com>`, // Using Resend's default sender
            // to: 'support@bestbuyerss.com', // The email that receives form submissions
            to: 'bestbuyermail@gmail.com', // Changed to the verified email address that owns the Resend account
            subject: `Contact Form: ${formData.subject}`,
            replyTo: formData.email,
            react: ContactFormEmail({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            }) as React.ReactElement,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}