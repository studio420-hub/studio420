
import React, { useState } from 'react';

const ACCESS_KEY = '866ead41-d90b-474b-acfc-f4aa4de583f3';

const INITIAL_FORM = {
    name: '',
    phone: '',
    email: '',
    message: '',
};

export default function InquiryForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const validate = () => {
        const nextErrors = {};
        const phone = form.phone.trim();
        const email = form.email.trim();
        const digits = phone.replace(/\D/g, '');

        // Validate phone number only
        if (!phone) {
            nextErrors.phone = 'Please enter your contact number.';
        } else if (
            !/^\+?[\d\s().-]+$/.test(phone) ||
            digits.length < 7 ||
            digits.length > 15
        ) {
            nextErrors.phone = 'Enter a valid phone number with 7–15 digits.';
        }

        // Email is optional; validate only when provided
        if (
            email &&
            (email.length > 254 ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
        ) {
            nextErrors.email = 'Please enter a valid email address.';
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: '',
        }));

        if (status) setStatus('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (submitting || !validate()) return;

        setSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    subject: `Studio 420 Inquiry — ${form.name.trim() || 'New Inquiry'}`,
                    from_name: 'Studio 420 Website',
                    name: form.name.trim(),
                    phone: form.phone.trim(),
                    ...(form.email.trim() ? { email: form.email.trim() } : {}),
                    message: form.message.trim(),
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || 'Submission failed. Please try again.'
                );
            }

            setStatus('success');
            setForm(INITIAL_FORM);
            setErrors({});
        } catch (error) {
            setStatus(
                error.message || 'Something went wrong. Please try again later.'
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="inquiry-form"
            className="inquiry-section"
            aria-labelledby="inquiry-heading"
        >
            <div className="container inquiry-container">
                <div className="tag-label">( Start a Conversation )</div>

                <h2 id="inquiry-heading" className="inquiry-title">
                    Tell us what
                    <br />
                    <span>you're building.</span>
                </h2>

                <p className="inquiry-intro">
                    Have a project in mind? Tell us a little about it. We'll get back to
                    you.
                </p>

                <form
                    className="inquiry-form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {/* Honeypot spam protection */}
                    <input
                        type="checkbox"
                        name="botcheck"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    {/* Name — no validation */}
                    <div className="inquiry-field">
                        <label htmlFor="inquiry-name">Your Name</label>
                        <input
                            id="inquiry-name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="name"
                        />
                    </div>

                    {/* Phone — required and validated */}
                    <div className="inquiry-field">
                        <label htmlFor="inquiry-phone">Contact Number *</label>
                        <input
                            id="inquiry-phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your contact number"
                            value={form.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                            maxLength={30}
                            required
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={
                                errors.phone ? 'inquiry-phone-error' : undefined
                            }
                        />
                        {errors.phone && (
                            <p id="inquiry-phone-error" className="inquiry-error">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Email — optional and validated when provided */}
                    <div className="inquiry-field">
                        <label htmlFor="inquiry-email">Email Address (Optional)</label>
                        <input
                            id="inquiry-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="email"
                            maxLength={254}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                                errors.email ? 'inquiry-email-error' : undefined
                            }
                        />
                        {errors.email && (
                            <p id="inquiry-email-error" className="inquiry-error">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Project description — no validation */}
                    <div className="inquiry-field">
                        <label htmlFor="inquiry-message">
                            Tell Us About Your Project
                        </label>
                        <textarea
                            id="inquiry-message"
                            name="message"
                            placeholder="What are you looking to create?"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                        />
                    </div>

                    {/* Submission Status */}
                    {status === 'success' && (
                        <p className="inquiry-success" role="status">
                            Thank you! Your inquiry has been submitted successfully. We'll be
                            in touch soon.
                        </p>
                    )}

                    {status && status !== 'success' && (
                        <p className="inquiry-error" role="alert">
                            {status}
                        </p>
                    )}

                    {/* Submit button only — close using the × in ProfilePage */}
                    <div className="inquiry-actions">
                        <button
                            type="submit"
                            className="inquiry-submit"
                            disabled={submitting}
                        >
                            {submitting ? 'SENDING...' : 'SEND INQUIRY →'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
