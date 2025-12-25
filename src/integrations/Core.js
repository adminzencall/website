// Email configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

// Initialize EmailJS (loaded via CDN in index.html or dynamically)
let emailjsLoaded = false;

const loadEmailJS = () => {
  return new Promise((resolve, reject) => {
    if (emailjsLoaded && window.emailjs) {
      resolve(window.emailjs);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      emailjsLoaded = true;
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      resolve(window.emailjs);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

/**
 * Send email using EmailJS
 * @param {Object} emailData - Email data object
 * @param {string} emailData.to - Recipient email address
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.body - Email body content
 * @param {string} [emailData.from_name] - Sender name
 * @param {string} [emailData.from_email] - Sender email (for reply-to)
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const SendEmail = async (emailData) => {
  try {
    // Load EmailJS if not already loaded
    const emailjs = await loadEmailJS();

    // Prepare template parameters
    const templateParams = {
      to_email: emailData.to,
      from_name: emailData.from_name || 'Website Contact Form',
      from_email: emailData.from_email || 'noreply@zencall.ca',
      reply_to: emailData.from_email || emailData.to,
      subject: emailData.subject,
      message: emailData.body,
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully' };

  } catch (error) {
    console.error('Error sending email:', error);

    // Fallback: Open mailto link if EmailJS fails or is not configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.log('EmailJS not configured. Using mailto fallback.');

      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
      window.open(mailtoLink, '_blank');

      return { success: true, message: 'Opening email client...' };
    }

    throw error;
  }
};
