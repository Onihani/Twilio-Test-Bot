// Twilio Request Params
/*
      PARAMETER      |              DESCRIPTION            |                EXAMPLE                 |
=====================================================================================================
    MessageSid       | A 34 character unique identifier    |  SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    |
                     | for the message. May be used to     |                                        |
                     | later retrieve this message from    |                                        |
                     | the REST API.                       |                                        |
-----------------------------------------------------------------------------------------------------
      SmsSid         | Same value as MessageSid.           |  SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    |
                     | Deprecated and included for         |                                        |
                     | backward compatibility.             |                                        |
                     |                                     |                                        |
-----------------------------------------------------------------------------------------------------
    AccountSid       | The 34 character id of the          |  ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    |
                     | Messaging Service associated with   |                                        |
                     | the message.                        |                                        |
                     |                                     |                                        |
-----------------------------------------------------------------------------------------------------
        From         | The phone number or Channel address |  +14017122661                          |
                     | that sent this message.             |                                        |
                     |                                     |                                        |
                     |                                     |                                        |
-----------------------------------------------------------------------------------------------------
        To           | The phone number or Channel address |  +15558675310                          |
                     | of the recipient                    |                                        |
                     |                                     |                                        |
                     |                                     |                                        |
-----------------------------------------------------------------------------------------------------
        Body         | The text body of the message. Up to |  "Ahoy! We can't wait to see what      |
                     | 1600 characters long                |  you build."                           |
                     |                                     |                                        |
                     |                                     |                                        |
-----------------------------------------------------------------------------------------------------
      NumMedia       | The number of media items           |  0                                     |
                     | associated with your message.       |                                        |
                     |                                     |                                        |
                     |                                     |                                        |
-----------------------------------------------------------------------------------------------------
More About Request Params here: https://www.twilio.com/docs/messaging/guides/webhook-request
*/