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
