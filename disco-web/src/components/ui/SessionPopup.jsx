'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, LocateIcon, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SessionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if current date is past November 21st, 2025 11:59 PM
    const deadline = new Date('2025-11-21T23:59:59');
    const now = new Date();

    if (now > deadline) {
      return; // Don't show popup after deadline
    }

    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('sessionPopupShown');

    if (!popupShown) {
      // Show popup on first load
      setIsOpen(true);
      // Mark as shown for this session
      sessionStorage.setItem('sessionPopupShown', 'true');
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-lg bg-opacity-50 z-50"
        onClick={closePopup}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[60] p-4">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-[70] transition-colors p-2 cursor-pointer"
        >
          <XCircle className="w-6 h-6" />
        </button>

        {/* Mobile: Image + Bottom Bar */}
        <div className="lg:hidden bg-white rounded-xl shadow-2xl overflow-hidden max-w-sm">
        <a
                href="https://srilankafitnessexpo.lk/events/community-run"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePopup}
        >
          <Image
            src="/Run.jpg"
            width={400}
            height={300}
            className="w-full h-auto"
            alt="Run for Change"
            priority
          /></a>
          <div className="bg-cranberry p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-white text-s">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Nov 22
                </span>
                <span className="flex items-center gap-1">
                  <LocateIcon className="w-3 h-3" />
                  SLECC
                </span>
              </div>
              <a
                href="https://srilankafitnessexpo.lk/events/community-run"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/3"
                onClick={closePopup}
              >
                <Button className="bg-white text-cranberry w-full hover:bg-gray-100 px-3 py-1 text-xs font-medium">
                  REGISTER
                </Button>
            </a>
            </div>
          </div>
        </div>


        {/* Desktop: Image + Bottom Bar */}
        <a
            href="https://srilankafitnessexpo.lk/events/community-run"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
        >
        <div className="hidden lg:block bg-white rounded-xl shadow-2xl overflow-hidden max-w-lg">
          <Image
            src="/Run.jpg"
            width={500}
            height={350}
            className="w-full h-auto"
            alt="Run for Change"
            priority
          />
          <div className="bg-cranberry py-4 px-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-white">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Nov 22, 2025
                </span>
                <span className="flex items-center gap-2">
                  <LocateIcon className="w-4 h-4" />
                  SLECC
                </span>
              </div>

                <Button className="bg-white text-cranberry hover:bg-gray-100 px-6 py-2 font-medium cursor-pointer">
                  REGISTER NOW
                </Button>
            </div>
          </div>
        </div>
        </a>
      </div>
    </>
  );
}
