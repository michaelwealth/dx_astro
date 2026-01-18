/**
 * Service Configuration
 * Centralized configuration for external services (Brevo, Sendy, Google Tag Manager, etc.)
 * All API keys should be stored in environment variables
 */

interface BrevoConfig {
  apiKey: string;
  senderEmail: string;
  senderName: string;
}

interface SendyConfig {
  apiUrl: string;
  apiKey: string;
  listId: string;
}

interface GoogleTagManagerConfig {
  containerId: string;
}

interface AnalyticsConfig {
  googleAnalyticsId?: string;
}

interface ServicesConfig {
  brevo: BrevoConfig;
  sendy: SendyConfig;
  googleTagManager: GoogleTagManagerConfig;
  analytics: AnalyticsConfig;
}

/**
 * Validate that required environment variables are set
 */
function validateConfig(): void {
  const requiredEnvVars = [
    'BREVO_API_KEY',
    'BREVO_SENDER_EMAIL',
    'SENDY_API_URL',
    'SENDY_API_KEY',
    'SENDY_LIST_ID',
    'GOOGLE_TAG_MANAGER_ID'
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn(
      `⚠️  Missing environment variables: ${missingVars.join(', ')}. Some features may not work correctly.`
    );
  }
}

/**
 * Get services configuration from environment variables
 */
export function getServicesConfig(): ServicesConfig {
  validateConfig();

  return {
    brevo: {
      apiKey: import.meta.env.BREVO_API_KEY || '',
      senderEmail: import.meta.env.BREVO_SENDER_EMAIL || 'noreply@digitalxceeded.com',
      senderName: import.meta.env.BREVO_SENDER_NAME || 'Digital Xceeded'
    },
    sendy: {
      apiUrl: import.meta.env.SENDY_API_URL || '',
      apiKey: import.meta.env.SENDY_API_KEY || '',
      listId: import.meta.env.SENDY_LIST_ID || ''
    },
    googleTagManager: {
      containerId: import.meta.env.GOOGLE_TAG_MANAGER_ID || ''
    },
    analytics: {
      googleAnalyticsId: import.meta.env.GOOGLE_ANALYTICS_ID
    }
  };
}

/**
 * Check if a service is properly configured
 */
export function isServiceConfigured(service: keyof ServicesConfig): boolean {
  const config = getServicesConfig();
  const serviceConfig = config[service];

  if (typeof serviceConfig !== 'object' || serviceConfig === null) {
    return false;
  }

  // Check if all required values in the service config are non-empty strings
  return Object.values(serviceConfig).every(
    (value) => typeof value === 'string' && value.trim().length > 0
  );
}

/**
 * Brevo-specific utilities
 */
export const brevoService = {
  /**
   * Send email via Brevo
   * @param recipientEmail - Recipient email address
   * @param subject - Email subject
   * @param htmlContent - HTML email content
   * @param replyTo - Optional reply-to email
   */
  async sendEmail(
    recipientEmail: string,
    subject: string,
    htmlContent: string,
    replyTo?: string
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const config = getServicesConfig();

    if (!isServiceConfigured('brevo')) {
      return {
        success: false,
        error: 'Brevo is not properly configured. Please check your environment variables.'
      };
    }

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': config.brevo.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: {
            name: config.brevo.senderName,
            email: config.brevo.senderEmail
          },
          to: [
            {
              email: recipientEmail
            }
          ],
          subject: subject,
          htmlContent: htmlContent,
          replyTo: replyTo
            ? {
                email: replyTo
              }
            : undefined
        })
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Failed to send email via Brevo'
        };
      }

      const data = await response.json();
      return {
        success: true,
        messageId: data.messageId
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email'
      };
    }
  }
};

/**
 * Sendy-specific utilities
 */
export const sendyService = {
  /**
   * Subscribe email to Sendy list
   * @param email - Email address to subscribe
   * @param name - Optional subscriber name
   * @param customFields - Optional custom fields object
   */
  async subscribe(
    email: string,
    name?: string,
    customFields?: Record<string, string>
  ): Promise<{ success: boolean; message?: string; error?: string }> {
    const config = getServicesConfig();

    if (!isServiceConfigured('sendy')) {
      return {
        success: false,
        error: 'Sendy is not properly configured. Please check your environment variables.'
      };
    }

    try {
      const formData = new FormData();
      formData.append('api_key', config.sendy.apiKey);
      formData.append('email', email);
      formData.append('list', config.sendy.listId);

      if (name) {
        formData.append('name', name);
      }

      if (customFields) {
        Object.entries(customFields).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }

      const response = await fetch(`${config.sendy.apiUrl}/subscribers/add`, {
        method: 'POST',
        body: formData
      });

      const text = await response.text();

      // Sendy returns 1 for success
      if (text === '1') {
        return {
          success: true,
          message: 'Successfully subscribed to newsletter'
        };
      }

      // Handle Sendy error responses
      return {
        success: false,
        error: text || 'Failed to subscribe to newsletter'
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Subscription failed'
      };
    }
  }
};

/**
 * Google Tag Manager utilities
 */
export const gtmService = {
  /**
   * Get GTM container ID
   */
  getContainerId(): string {
    const config = getServicesConfig();
    return config.googleTagManager.containerId;
  },

  /**
   * Check if GTM is configured
   */
  isConfigured(): boolean {
    return isServiceConfigured('googleTagManager');
  },

  /**
   * Push event to GTM data layer
   */
  pushEvent(eventName: string, eventData?: Record<string, any>): void {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
    }
  }
};

export default getServicesConfig;
