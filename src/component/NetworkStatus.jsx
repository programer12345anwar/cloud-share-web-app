import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";
import { checkBackendHealth } from "../util/apiClient";

const NetworkStatus = () => {
  const [backendStatus, setBackendStatus] = useState("checking"); // 'checking', 'healthy', 'down'
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await checkBackendHealth();
        setBackendStatus("healthy");
        setShowBanner(false);
      } catch (error) {
        setBackendStatus("down");
        setShowBanner(true);
      }
    };

    // Check on mount
    checkHealth();

    // Check every 30 seconds
    const interval = setInterval(checkHealth, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <WifiOff size={20} className="flex-shrink-0" />
          <div>
            <p className="font-semibold">Server Connection Issue</p>
            <p className="text-sm text-red-100">
              Unable to reach our servers. Some features may be unavailable. Please refresh the page.
            </p>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-white text-red-600 px-4 py-2 rounded font-medium text-sm hover:bg-red-50 transition whitespace-nowrap flex-shrink-0"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NetworkStatus;
