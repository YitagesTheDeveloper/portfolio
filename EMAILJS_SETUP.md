# EmailJS Setup Guide

The contact form now uses EmailJS to send emails directly to your inbox (yitagesadane88@gmail.com).

## Setup Instructions

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (200 emails/month on free tier)

### 2. Add an Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail recommended)
- Follow the setup instructions to connect your email account
- **Note:** Copy the **Service ID** (you'll need it later)

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use the following template variables in your email template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

- **Important:** Make sure to set the "To Email" field to: `yitagesadane88@gmail.com`
- Save the template and copy the **Template ID**

### 4. Get Your Public Key
- Go to **Account** → **General** in the EmailJS dashboard
- Copy your **Public Key**

### 5. Configure Environment Variables
Create a `.env` file in the root of your project (portfolio folder) with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual credentials from EmailJS.

### 6. Restart Your Development Server
After creating the `.env` file, restart your dev server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (yitagesadane88@gmail.com) for the message

## Troubleshooting
- Make sure all environment variables are set correctly
- Verify your EmailJS service is connected and active
- Check the browser console for any error messages
- Ensure your email template has the correct variable names


