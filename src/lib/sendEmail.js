import axios from "axios";


export const sendEmail = async ({
  serviceId,
  templateId,
  publicKey,
  senderName,
  senderEmail,
  recipientEmails,
  message,
  additionalDetails,
}) => {
  const emailList = recipientEmails.map((email) => email.trim());
  const promises = emailList.map(async (recipientEmail) => {
    const data = {
      service_id: 'service_lhibsmg',
      template_id: 'template_23wysyq',
      user_id: 'l1f_f8hjyTWZJ7G6o',
      template_params: {
        from_name: senderName,
        from_email: senderEmail,
        to_email: recipientEmail,
        first_name: details.firstName,
        last_name: details.lastName,
        city_to_buy: details.cityToBuy,
        has_agent: details.hasAgent ? "Yes" : "No",
        looking_to_sell: details.lookingToSell ? "Yes" : "No",
        otp: details.otp,
        phone_number: details.phoneNumber,
        price_range: details.priceRange.join(", "),
        additional_details: details.additionalDetails,
        message: details.message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send", 
        data
      );
      console.log(`Email sent to ${recipientEmail}:`, res);
      return res;
    } catch (error) {
      console.error(`Failed to send email to ${recipientEmail}:`, error);
      throw error;
    }
  });

  return Promise.all(promises);
};
