export default async function handler(
    request: any,
    response: any
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { email, zipCode, name } = request.body;

    if (!email || typeof email !== 'string') {
        return response.status(400).json({ error: 'Email is required' });
    }

    // Basic email regex for sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return response.status(400).json({ error: 'Invalid email address' });
    }

    // Zip code validation (optional but nice to enforce format if provided)
    if (zipCode && (typeof zipCode !== 'string' || !/^\d{5}$/.test(zipCode))) {
        return response.status(400).json({ error: 'Invalid zip code format' });
    }

    const cleanEmail = email.trim();
    const cleanZip = zipCode ? zipCode.trim() : '';

    // Handle Name splitting for Mailchimp (FNAME/LNAME)
    let FNAME = '';
    let LNAME = '';
    if (name && typeof name === 'string') {
        const parts = name.trim().split(/\s+/);
        FNAME = parts[0] || '';
        LNAME = parts.slice(1).join(' ') || '';
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!apiKey || !listId) {
        console.error('Missing Mailchimp configuration');
        return response.status(500).json({ error: 'Server configuration error' });
    }

    const dataCenter = apiKey.split('-')[1];
    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

    try {
        const mailchimpResponse = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `apikey ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email_address: cleanEmail,
                status: 'subscribed',
                merge_fields: {
                    FNAME: FNAME,
                    LNAME: LNAME,
                    // Send to standard Address field (requires all parts, so we use placeholders)
                    ADDRESS: {
                        addr1: '-',
                        city: '-',
                        state: '-',
                        zip: cleanZip,
                        country: 'US'
                    },
                    // Also send to custom ZIP field as backup/if configured
                    ZIP: cleanZip
                },
            }),
        });

        const data = await mailchimpResponse.json();

        if (!mailchimpResponse.ok) {
            // Check if user is already subscribed
            if (data.title === 'Member Exists') {
                return response.status(400).json({ error: 'You are already on the list!' });
            }
            console.error('Mailchimp API Error:', data);
            return response.status(400).json({ error: 'Could not subscribe. Please try again.' });
        }

        return response.status(200).json({ success: true });
    } catch (error) {
        console.error('Fetch Error:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
