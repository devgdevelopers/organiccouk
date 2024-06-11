import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email, phoneNum, message } = await req.json();

    // Check if the request is from the new form
    if (email && !name && !phoneNum && !message) {
        // Handle the new form submission
        return handleNewsletterForm(email);
    } else if (name && email && phoneNum && message) {
        // Handle the existing contact form submission
        return handleContactForm({ name, email, phoneNum, message });
    } else {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}

async function handleContactForm({ name, email, phoneNum, message }) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email options for the contact form
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'as77468@gmail.com',
        subject: 'Message from Organiccouk',
        text: `this message is sent by \n Username: ${name}\n Email: ${email}\n Phone Number: ${phoneNum}\n Message: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}

async function handleNewsletterForm(email) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email options for the newsletter form
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'as77468@gmail.com', // Change this to the appropriate email address for newsletter
        subject: 'Newsletter Subscription from Organiccouk',
        text: `New newsletter subscription from: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }
}
