# Service Configuration Guide

This guide explains how to configure and use the external services integrated into your Digital Xceeded website: **Brevo** (email), **Sendy** (newsletters), and **Google Tag Manager** (tracking).

## Quick Setup

### 1. Copy Environment Variables Template

```bash
cp .env.example .env.local
```

### 2. Configure Your Services

Edit the `.env.local` file and add your API keys:

```env
# Brevo Configuration (Email for Contact Form)
BREVO_API_KEY=your_brevo_api_key_here
BREVO_SENDER_EMAIL=noreply@digitalxceeded.com
BREVO_SENDER_NAME=Digital Xceeded

# Sendy Configuration (Email Newsletter Signup)
SENDY_API_URL=https://your-sendy-domain.com/api
SENDY_API_KEY=your_sendy_api_key_here
SENDY_LIST_ID=your_sendy_list_id_here

# Google Tag Manager
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXXXX

# Analytics & Tracking
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### 3. Restart Development Server

```bash
npm run dev
```

---

## Service Configuration Details

### 🔷 Brevo (Email Service)

**Used for:** Contact form submissions and user notifications

**Getting Your API Key:**
1. Go to [Brevo Settings](https://app.brevo.com/settings/keys/api)
2. Copy your API key
3. Add it to `.env.local` as `BREVO_API_KEY`

**Configuration Variables:**
- `BREVO_API_KEY` - Your API key (required)
- `BREVO_SENDER_EMAIL` - Sender email address (required)
- `BREVO_SENDER_NAME` - Sender name (required)

**Features:**
- Sends admin notifications when users submit the contact form
- Sends confirmation emails to users
- Tracks form submissions in Google Tag Manager
- Includes error handling with user-friendly messages

**Code Location:** `src/components/ContactForm.tsx`

---

### 📧 Sendy (Newsletter Service)

**Used for:** Newsletter signup in the footer

**Getting Your Credentials:**
1. Log in to your Sendy account
2. Go to **Settings** → **API**
3. Copy your API key and list ID
4. Note your Sendy URL (e.g., `https://your-sendy-domain.com`)

**Configuration Variables:**
- `SENDY_API_URL` - Your Sendy instance URL + `/api` (required)
- `SENDY_API_KEY` - Your API key (required)
- `SENDY_LIST_ID` - The list ID for subscribers (required)

**Features:**
- Newsletter signup form in footer with real-time validation
- Success/error messages
- Tracks newsletter signups in Google Tag Manager
- Works with your Sendy automation sequences

**Code Location:** `src/components/Footer.astro`

**Example Usage:**
```typescript
import { sendyService } from '../config/services';

// Subscribe user to newsletter
const result = await sendyService.subscribe('user@example.com', 'John Doe');

if (result.success) {
  console.log('Subscription successful!');
} else {
  console.error('Error:', result.error);
}
```

---

### 📊 Google Tag Manager (Tracking & Analytics)

**Used for:** Event tracking, conversions, and analytics

**Getting Your Container ID:**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container
3. Copy the Container ID (format: `GTM-XXXXXXXXX`)
4. Add it to `.env.local` as `GOOGLE_TAG_MANAGER_ID`

**Configuration Variables:**
- `GOOGLE_TAG_MANAGER_ID` - Your GTM container ID (required)
- `GOOGLE_ANALYTICS_ID` - Optional Google Analytics ID

**Features:**
- Automatically loads GTM script on all pages
- Tracks key events:
  - Form submissions
  - Newsletter signups
  - User interactions
- Respects cookie consent settings

**Code Location:** `src/layouts/Layout.astro`

**Tracking Events:**
```typescript
import { gtmService } from '../config/services';

// Push custom event to GTM
gtmService.pushEvent('form_submit', {
  'form_type': 'contact',
  'service': 'Web Development',
  'budget': '$50,000 - $100,000'
});
```

---

## Configuration File Structure

### `src/config/services.ts`

The main configuration file that manages all external services.

**Exports:**
- `getServicesConfig()` - Get all service configurations
- `isServiceConfigured(service)` - Check if a service is properly set up
- `brevoService` - Brevo email utilities
- `sendyService` - Sendy newsletter utilities
- `gtmService` - Google Tag Manager utilities

**Example:**
```typescript
import { getServicesConfig, isServiceConfigured } from '../config/services';

// Get all configurations
const config = getServicesConfig();
console.log(config.brevo.senderEmail);

// Check if Brevo is configured
if (isServiceConfigured('brevo')) {
  console.log('Brevo is ready to use');
}
```

---

## Environment Variables

The `.env.local` file is required for production. Variables are read from:

1. **Local Development:** `.env.local`
2. **Production:** Cloudflare Environment Variables (Dashboard → Settings → Environment Variables)

**Important:** Never commit `.env.local` to GitHub. Use `.env.example` as a template.

### Setting Environment Variables in Cloudflare

1. Go to your Cloudflare Pages project
2. Navigate to **Settings** → **Environment Variables**
3. Add production variables for your domain

---

## Troubleshooting

### "Service is not properly configured" Warning

This warning appears if API keys are missing. Check:
1. `.env.local` file exists
2. All required variables are filled in
3. Restart the development server after adding env variables

### Contact Form Not Sending Emails

1. Verify `BREVO_API_KEY` is correct
2. Check that sender email matches your Brevo-verified email
3. Check browser console for error messages
4. Test with Brevo directly to ensure the API key works

### Newsletter Signup Not Working

1. Verify `SENDY_API_URL` includes `/api` at the end
2. Check that `SENDY_LIST_ID` matches your Sendy list
3. Ensure your Sendy instance is accessible
4. Test the API key in Sendy settings

### GTM Not Tracking Events

1. Verify `GOOGLE_TAG_MANAGER_ID` is in format `GTM-XXXXXXXXX`
2. Check that GTM container is active in Google Tag Manager dashboard
3. Ensure cookies are enabled and not blocked by ad blocker
4. Check GTM preview mode for debugging

---

## Best Practices

### 1. Security
- ✅ Store API keys in environment variables only
- ✅ Never commit `.env.local` to Git
- ✅ Use different API keys for different environments
- ✅ Rotate API keys regularly

### 2. Error Handling
- ✅ Always check response status before using data
- ✅ Show user-friendly error messages
- ✅ Log errors to console/monitoring service
- ✅ Test error scenarios regularly

### 3. Performance
- ✅ Defer non-critical scripts (GTM loads asynchronously)
- ✅ Use client-side rendering for forms only
- ✅ Cache API responses when appropriate
- ✅ Minimize API calls

### 4. Monitoring
- ✅ Monitor form submission rates
- ✅ Track email delivery failures
- ✅ Review GTM events regularly
- ✅ Set up alerts for API failures

---

## Integration Examples

### Using Brevo in Custom Components

```typescript
import { brevoService } from '../config/services';

async function sendCustomEmail() {
  const result = await brevoService.sendEmail(
    'recipient@example.com',
    'Subject Line',
    '<h1>HTML Email Content</h1>',
    'reply-to@example.com'
  );

  if (result.success) {
    console.log('Email sent:', result.messageId);
  } else {
    console.error('Error:', result.error);
  }
}
```

### Using GTM Events in Custom Components

```typescript
import { gtmService } from '../config/services';

// Track button clicks
document.getElementById('my-button').addEventListener('click', () => {
  gtmService.pushEvent('button_click', {
    'button_id': 'my-button',
    'button_text': 'Call to Action'
  });
});
```

### Checking Service Status

```typescript
import { isServiceConfigured } from '../config/services';

// Show features only if configured
if (isServiceConfigured('sendy')) {
  // Show newsletter signup form
}

if (isServiceConfigured('googleTagManager')) {
  // Track events
}
```

---

## Support & Documentation

- [Brevo API Documentation](https://developers.brevo.com/reference/send-a-transactional-email)
- [Sendy API Documentation](https://sendy.co/api)
- [Google Tag Manager Guide](https://support.google.com/tagmanager/answer/6102821)

---

## Migration & Updates

### Updating API Keys

1. Generate new API keys in the service dashboard
2. Update `.env.local` with new keys
3. Redeploy to Cloudflare
4. Test all services before going live
5. Deactivate old API keys after confirmation

### Changing Services

If you want to switch email providers or analytics platforms:

1. Create new service utilities in `src/config/services.ts`
2. Update components to use new service
3. Test thoroughly before deploying
4. Keep old service for fallback temporarily

---

**Last Updated:** January 19, 2026
