import { useState, useEffect } from "react";

const LinkShareModal = ({ isOpen, onClose, shareLink }) => {
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState("");

  // Update local link when modal opens or prop changes
  useEffect(() => {
    if (shareLink) setLink(shareLink);
  }, [shareLink]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    // ✅ Use backdrop blur instead of black overlay
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Share File</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-3">
          Share this link with others to give them access to this file:
        </p>

        {/* Link Box */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
          <input
            type="text"
            value={link || ""}
            readOnly
            className="flex-grow bg-transparent outline-none text-blue-600 text-sm"
          />
          <button
            onClick={handleCopy}
            className="ml-2 px-4 py-1.5 text-white text-sm font-medium rounded-md bg-purple-600 hover:bg-purple-700"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-3">
          Anyone with this link can access this file.
        </p>

        {/* Footer */}
        <div className="flex justify-end mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkShareModal;
