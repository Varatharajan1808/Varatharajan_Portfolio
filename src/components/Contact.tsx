import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsappIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/919659309280?text=${encodeURIComponent(
    `Hi Varatharajan, I'm ${name.trim() || 'Visitor'} (${email.trim() || 'no email'}).\n\n${message.trim()}`
  )}`;

  // Direct In-Page Background Submission (No Mail App or Gmail Tab Opened!)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(PERSONAL_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `New Portfolio Message from ${name.trim()}`,
          _replyto: email.trim(),
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true || (data.message && data.message.includes('Activation'))))) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#38bdf8', '#a855f7', '#ffffff'],
        });
        setSent(true);
      } else {
        throw new Error(data?.message || 'Failed to dispatch message. Please try again.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#10b981', '#34d399', '#06b6d4', '#ffffff'],
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="mb-12">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
          {'// Contact & Direct Channels'}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Connect & Work Together
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Direct reach for 3D engine developer roles, WebGPU/WebGL engineering projects, or technical consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates Card (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-6 shadow-xl">
          <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
            <img
              src={PERSONAL_INFO.profilePhoto}
              alt={PERSONAL_INFO.name}
              className="w-12 h-12 rounded-full object-cover border border-cyan-400/50"
            />
            <div>
              <div className="text-base font-bold text-white">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-cyan-400 font-medium">{PERSONAL_INFO.role}</div>
            </div>
          </div>

          {/* Direct Coordinates */}
          <div className="space-y-3 text-sm">
            {/* Email with 1-click Copy */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-cyan-400 transition-colors truncate text-xs sm:text-sm"
                title="Send email"
              >
                <div className="p-1.5 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer text-xs flex items-center gap-1 border border-slate-700"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px] text-slate-300">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone direct call */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
            >
              <div className="p-1.5 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 text-xs sm:text-sm">
              <div className="p-1.5 rounded-lg bg-slate-800/80 text-slate-500 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social Connect Links */}
          <div className="pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 font-medium mb-3">Direct Channels:</div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-pink-500/50 text-slate-300 hover:text-pink-400 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct In-Page Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Send a Message
              </h3>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                Direct Dispatch
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Drop a note below. It sends directly to my inbox in the background without opening any external mail app.
            </p>

            {sent ? (
              <div className="p-6 sm:p-8 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-cyan-400">{name}</strong>! Your note was sent directly to{' '}
                  <strong className="text-cyan-400">{PERSONAL_INFO.email}</strong>. I will get back to{' '}
                  <strong className="text-cyan-400">{email}</strong> shortly.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name or company"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    disabled={isSubmitting}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note, job opportunity, or collaboration inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {/* Primary Direct Send Button */}
                <div className="space-y-2.5 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-600/50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.01] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Secondary Direct Channels */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1 px-1">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer text-[11px]"
                    >
                      <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Prefer WhatsApp? Chat directly</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      {copied ? (
                        <span className="text-emerald-400 font-semibold">Email Copied!</span>
                      ) : (
                        <span>Copy Email ID</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
