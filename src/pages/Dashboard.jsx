// import { useAuth } from "@clerk/clerk-react";
// import DashboardLayout from "../layout/DashboardLayout.jsx";
// import { useContext, useEffect, useState } from "react";
// import { UserCreditsContext } from "../context/UserCreditsContext.jsx";
// import axios from "axios";
// import { apiEndpoints } from "../util/apiEndpoints.js";
// import { Loader2 } from "lucide-react";
// import UploadBox from "../component/UploadBox.jsx";
// import RecentFiles from "../component/RecentFiles.jsx";

// const Dashboard = () => {
//   const [files, setFiles] = useState([]);
//   const [uploadFiles, setUploadFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState('');
//   const [remainingUploads, setRemainingUploads] = useState(5);
//   const [loading, setLoading] = useState(false);   // ✅ FIX ADDED
//   const { getToken } = useAuth();
//   const { fetchUserCredits } = useContext(UserCreditsContext);
//   const MAX_FILES = 5;

//   // Fetch recent files
//   useEffect(() => {
//     const fetchRecentFiles = async () => {
//       try {
//         const token = await getToken();
//         const res = await axios.get(apiEndpoints.FETCH_FILES, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const sortedFiles = res.data
//           .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
//           .slice(0, 5);

//         setFiles(sortedFiles);
//       } catch (error) {
//         console.error("Error Fetching recent files:", error);
//       }
//     };

//     fetchRecentFiles();
//   }, [getToken]);

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);

//     if (uploadFiles.length + selectedFiles.length > MAX_FILES) {
//       setMessage(`You can only upload a maximum of ${MAX_FILES} files at once.`);
//       setMessageType('error');
//       return;
//     }

//     setUploadFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
//     setMessage('');
//     setMessageType('');
//   };

//   // Remove a file from the upload list
//   const handleRemoveFile = (index) => {
//     setUploadFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//     setMessage('');
//     setMessageType('');
//   };

//   // Calculate remaining uploads
//   useEffect(() => {
//     setRemainingUploads(MAX_FILES - uploadFiles.length);
//   }, [uploadFiles]);

//   // Upload handler
//   const handleUpload = async () => {
//     if (uploadFiles.length === 0) {
//       setMessage("Please select at least one file.");
//       setMessageType("error");
//       return;
//     }

//     setUploading(true);
//     setMessage("Uploading files...");
//     setMessageType("info");

//     const formData = new FormData();
//     uploadFiles.forEach((file) => formData.append("files", file));

//     // try {
//     //   const token = await getToken();

//     //   const res = await axios.post(apiEndpoints.UPLOAD_FILE, formData, {
//     //     headers: {
//     //       Authorization: `Bearer ${token}`,
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   });

//     //   const sortedFiles = res.data
//     //     .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
//     //     .slice(0, 5);

//     //   setFiles(sortedFiles);

//     //   await fetchUserCredits();

//     //   setMessage("Files uploaded successfully.");
//     //   setMessageType("success");
//     //   setUploadFiles([]);
//     // } catch (error) {
//     //   console.error("Upload error:", error);
//     //   setMessage(
//     //     error.response?.data?.message || "Upload failed. Please try again."
//     //   );
//     //   setMessageType("error");
//     // } finally {
//     //   setUploading(false);
//     // }

//     try {
//   const token = await getToken();

//   const res = await axios.post(apiEndpoints.UPLOAD_FILE, formData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   console.log("UPLOAD RESPONSE:", res.data);

//   const uploadedFiles = res.data.files || res.data;

//   const sortedFiles = uploadedFiles
//     .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
//     .slice(0, 5);

//   setFiles(sortedFiles);

//   await fetchUserCredits();

//   setMessage("Files uploaded successfully.");
//   setMessageType("success");
//   setUploadFiles([]);
// } catch (error) {
//   console.error("Upload error:", error.response?.data || error.message);
//   setMessage(error.response?.data?.message || "Upload failed. Please try again.");
//   setMessageType("error");
// } finally {
//   setUploading(false);
// }

//   };

//   return (
//     <DashboardLayout activeMenu="Dashboard">
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-6">My Drive</h1>
//         <p className="text-gray-600 mb-6">Upload, manage, and share your file securly</p>
//         {message &&(
//            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
//             messageType==='error'? 'bg-red-50 text-red-700':
//             messageType==='success'? 'bg-green-50 text-green-700' : 'bg-purple-50 text-purple-700'}`}>
//               {message}
//             </div>
//         )}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Left column */}
//           <div className="w-full md:w-[40%]">
//             <UploadBox 
//               files={uploadFiles}
//               onFileChange={handleFileChange}
//               onUpload={handleUpload}
//               uploading={uploading}
//               onRemoveFile={handleRemoveFile}
//               remainingUploads={remainingUploads}
//             />
//           </div>

//           {/* right column */}
//           <div className="w-full md:w-[60%]">
//             {loading ?(
//               <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
//                 <Loader2 size={40} className="text-purple-500 animate-spin mb-5"/>
//                 <p className="text-gray-500">Loading your files...</p>
//               </div>
//             ):(
//               <RecentFiles files={files} />
//             )}
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;


import { useAuth } from "@clerk/clerk-react";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import { useContext, useEffect, useState } from "react";
import { UserCreditsContext } from "../context/UserCreditsContext.jsx";
import axios from "axios";
import { apiEndpoints } from "../util/apiEndpoints.js";
import { Loader2 } from "lucide-react";
import UploadBox from "../component/UploadBox.jsx";
import RecentFiles from "../component/RecentFiles.jsx";

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [remainingUploads, setRemainingUploads] = useState(5);
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();
  const { fetchUserCredits } = useContext(UserCreditsContext);
  const MAX_FILES = 5;

  // Fetch recent files
  const fetchRecentFiles = async () => {
    try {
      const token = await getToken();

      const res = await axios.get(apiEndpoints.FETCH_FILES, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const sortedFiles = (res.data || [])
        .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
        .slice(0, 5);

      setFiles(sortedFiles);
    } catch (error) {
      console.error("Error fetching recent files:", error);
    }
  };

  useEffect(() => {
    fetchRecentFiles();
  }, [getToken]);

  // File selection
  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);

    if (uploadFiles.length + selected.length > MAX_FILES) {
      setMessage(`You can upload a maximum of ${MAX_FILES} files.`);
      setMessageType("error");
      return;
    }

    setUploadFiles((prev) => [...prev, ...selected]);
    setMessage("");
  };

  // Remove file
  const handleRemoveFile = (index) => {
    setUploadFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Update remaining uploads
  useEffect(() => {
    setRemainingUploads(MAX_FILES - uploadFiles.length);
  }, [uploadFiles]);

  // Upload handler
  const handleUpload = async () => {
    if (uploadFiles.length === 0) {
      setMessage("Please select at least one file.");
      setMessageType("error");
      return;
    }

    setUploading(true);
    setMessage("Uploading files...");
    setMessageType("info");

    const formData = new FormData();
    uploadFiles.forEach((file) => formData.append("files", file));

    try {
      const token = await getToken();

      const res = await axios.post(apiEndpoints.UPLOAD_FILE, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("UPLOAD RESPONSE:", res.data);

      await fetchUserCredits();

      // Re-fetch latest 5 files
      await fetchRecentFiles();

      setMessage("Files uploaded successfully.");
      setMessageType("success");
      setUploadFiles([]);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage(error.response?.data?.message || "Upload failed. Try again.");
      setMessageType("error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My Drive</h1>
        <p className="text-gray-600 mb-6">Upload, manage, and share your file securely</p>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              messageType === "error"
                ? "bg-red-50 text-red-700"
                : messageType === "success"
                ? "bg-green-50 text-green-700"
                : "bg-purple-50 text-purple-700"
            }`}
          >
            {message}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="w-full md:w-[40%]">
            <UploadBox
              files={uploadFiles}
              onFileChange={handleFileChange}
              onUpload={handleUpload}
              uploading={uploading}
              onRemoveFile={handleRemoveFile}
              remainingUploads={remainingUploads}
            />
          </div>

          {/* Right column */}
          <div className="w-full md:w-[60%]">
            {loading ? (
              <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
                <Loader2 size={40} className="text-purple-500 animate-spin mb-5" />
                <p className="text-gray-500">Loading your files...</p>
              </div>
            ) : (
              <RecentFiles files={files} />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

