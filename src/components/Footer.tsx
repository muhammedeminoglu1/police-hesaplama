import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#143860] text-white text-sm px-6 py-4 text-center">
      <div className="flex justify-center items-center space-x-4 mb-2">
        <a
          href="mailto:muhammetcevik006@icloud.com"
          className="hover:text-gray-300"
        >
          ✉ muhammetcevik006@icloud.com
        </a>
        <a
          href="https://www.instagram.com/mucevik97"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.3 1 .6 1.4 1.1.4.4.8.9 1.1 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.3.6-.6 1-1.1 1.4-.4.4-.9.8-1.4 1.1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.3-1-.6-1.4-1.1-.4-.4-.8-.9-1.1-1.4-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.3-.6.6-1 1.1-1.4.4-.4.9-.8 1.4-1.1.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.5.2-1.8.4-.4.2-.8.5-1.1.8-.3.3-.6.7-.8 1.1-.2.3-.3.8-.4 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.5.4 1.8.2.4.5.8.8 1.1.3.3.7.6 1.1.8.3.2.8.3 1.8.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.5-.2 1.8-.4.4-.2.8-.5 1.1-.8.3-.3.6-.7.8-1.1.2-.3.3-.8.4-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.5-.4-1.8-.2-.4-.5-.8-.8-1.1-.3-.3-.7-.6-1.1-.8-.3-.2-.8-.3-1.8-.4-1.2-.1-1.6-.1-4.7-.1zM12 5.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4zm0 10.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.4-10.8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
          </svg>
        </a>
      </div>
      <div>Tüm Hakları Saklıdır © {new Date().getFullYear()}</div>
    </footer>
  );
}
