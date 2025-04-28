import React from 'react';

// Top bar from ekremkilavuz.com typical style
export default function TopBar() {
  return (
    <div className="bg-[#143860] text-white text-sm px-6 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span>📞 (555) 555 55 55</span>
        <span>✉ info@ornekpolice.com</span>
      </div>
      <div className="flex items-center space-x-3">
        {/* Social icons (replace with react-icons or svgs later) */}
        <a href="#" aria-label="Instagram"><span className="hover:text-gray-300">📷</span></a>
        <a href="#" aria-label="Facebook"><span className="hover:text-gray-300">📘</span></a>
        <a href="#" aria-label="Twitter"><span className="hover:text-gray-300">🐦</span></a>
      </div>
    </div>
  );
}
