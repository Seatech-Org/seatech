/**
 * Utility to send formatted emails using Web3Forms
 */
export const sendFormEmail = async (formName: string, formData: Record<string, any>) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        console.warn("VITE_WEB3FORMS_ACCESS_KEY is not defined. Email will not be sent.");
        return { success: false, message: "Email configuration missing." };
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New Submission: ${formName} from Seatech Website`,
                from_name: "Seatech Website Alerts",
                ...formData
            }),
        });

        const result = await response.json();
        if (result.success) {
            console.log("Email sent successfully!");
            return { success: true, message: "Email sent." };
        } else {
            console.error("Web3Forms error:", result);
            return { success: false, message: result.message || "Failed to send email." };
        }
    } catch (error) {
        console.error("Failed to send email via Web3Forms", error);
        return { success: false, message: "An error occurred while sending the email." };
    }
};

/**
 * Utility to send transactional outgoing emails directly to customers using EmailJS
 */
import emailjs from '@emailjs/browser';

export const sendCustomerEmail = async (toEmail: string, toName: string, subject: string, message: string) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS configuration missing. Outgoing customer email aborted.");
        return { success: false, message: "EmailJS credentials missing." };
    }

    try {
        // EmailJS expects template variables that match your dashboard setup
        // Common variables: to_email, to_name, subject, message
        const templateParams = {
            to_email: toEmail,
            to_name: toName || 'Customer',
            subject: subject,
            message: message,
            reply_to: 'admin@seatech.com', // Optional: your official reply address
        };

        const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

        console.log("Customer status email sent successfully!", response.status, response.text);
        return { success: true, message: "Status email sent to customer." };
    } catch (error) {
        console.error("Failed to send outgoing email via EmailJS", error);
        return { success: false, message: "Failed to send customer email." };
    }
};
