import {
  Lock,
  Unlock,
  Copy,
  FileText,
  FileVideo,
  FileAudio,
  FileImage,
  FileArchive,
  FileDown,
} from "lucide-react"; // Import more file icons you want
import axios from "axios";
import { apiEndpoints } from "../util/apiEndpoints";
import { useAuth } from "@clerk/clerk-react";

const RecentFiles = ({ files }) => {
  const { getToken } = useAuth();

  const formatSize = (bytes) => {
    if (!bytes) return "--";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  // Dynamic icon based on file extension
  const getFileIcon = (file) => {
    const name = file.fileName || file.name || "";
    const ext = name.split(".").pop().toLowerCase();

    switch (ext) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-500" />; // Use FileText for PDF
      case "doc":
      case "docx":
        return <FileText className="w-5 h-5 text-blue-600" />; // Word doc icon
      case "xls":
      case "xlsx":
        return <FileText className="w-5 h-5 text-green-600" />; // Excel icon
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "bmp":
      case "svg":
        return <FileImage className="w-5 h-5 text-purple-600" />; // Image icon
      case "mp4":
      case "mov":
      case "avi":
      case "mkv":
        return <FileVideo className="w-5 h-5 text-pink-600" />; // Video icon
      case "mp3":
      case "wav":
      case "ogg":
        return <FileAudio className="w-5 h-5 text-yellow-600" />; // Audio icon
      case "zip":
      case "rar":
      case "7z":
        return <FileArchive className="w-5 h-5 text-gray-600" />; // Archive icon
      default:
        return <FileDown className="w-5 h-5 text-gray-400" />; // Default generic file icon
    }
  };

  const toggleSharing = async (fileId, currentStatus) => {
  try {
    const token = await getToken();
    console.log("Using token:", token);
    console.log("Toggling file:", fileId, "From:", currentStatus);

    const response = await axios.patch(
      apiEndpoints.TOGGLE_FILE(fileId),
      { status: currentStatus === "private" ? "public" : "private" },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("Toggle response:", response.data);

    window.location.reload();
  } catch (error) {
    console.error("Share toggle error:", error.response?.data || error.message);
  }
};


  const copyLink = (fileId) => {
    const link = `${window.location.origin}/file/${fileId}`;
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Files</h2>

      {files.length === 0 ? (
        <p className="text-gray-500">No files uploaded yet.</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="pb-2">Name</th>
              <th className="pb-2">Size</th>
              <th className="pb-2">Uploaded By</th>
              <th className="pb-2">Modified</th>
              <th className="pb-2">Sharing</th>
            </tr>
          </thead>

          <tbody>
            {files.map((file) => {
              const status =
                file.shareStatus ||
                (file.isPublic ? "public" : "private") ||
                "private";

              return (
                <tr
                  key={file._id || file.id || file.fileName}
                  className="border-b last:border-none"
                >
                  <td className="py-3 flex items-center gap-3 max-w-[240px]">
                    {/* Dynamic file icon */}
                    {getFileIcon(file)}
                    <span className="truncate">{file.fileName || file.name}</span>
                  </td>

                  <td className="py-3 text-sm text-gray-600">
                    {formatSize(file.size)}
                  </td>

                  <td className="py-3 text-sm text-gray-600">You</td>

                  <td className="py-3 text-sm text-gray-600">
                    {file.uploadedAt
                      ? new Date(file.uploadedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "--"}
                  </td>

                  <td className="py-3">
                    {status === "public" ? (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleSharing(file._id, "public")}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1 text-sm"
                        >
                          <Unlock size={14} /> Public
                        </button>

                        <button
                          onClick={() => copyLink(file._id)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Copy size={15} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleSharing(file._id, "private")}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full flex items-center gap-1 text-sm"
                      >
                        <Lock size={14} /> Private
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecentFiles;



// import { Lock, Unlock, Copy } from "lucide-react";
// import axios from "axios";
// import { apiEndpoints } from "../util/apiEndpoints";
// import { useAuth } from "@clerk/clerk-react";

// const RecentFiles = ({ files }) => {
//   const { getToken } = useAuth();

//   const formatSize = (bytes) => {
//     if (!bytes) return "--";
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(1024));
//     return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
//   };

//   const toggleSharing = async (fileId, currentStatus) => {
//     try {
//       const token = await getToken();

//       // Correct endpoint usage
//       await axios.patch(
//         apiEndpoints.TOGGLE_FILE(fileId),
//         { status: currentStatus === "private" ? "public" : "private" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       window.location.reload(); // refresh updated list
//     } catch (error) {
//       console.error("Share toggle error:", error);
//     }
//   };

//   const copyLink = (fileId) => {
//     const link = `${window.location.origin}/file/${fileId}`;
//     navigator.clipboard.writeText(link);
//     alert("Link copied to clipboard!");
//   };

//   return (
//     <div className="bg-white shadow rounded-lg p-6">
//       <h2 className="text-lg font-semibold mb-4">Recent Files</h2>

//       {files.length === 0 ? (
//         <p className="text-gray-500">No files uploaded yet.</p>
//       ) : (
//         <table className="w-full text-left">
//           <thead>
//             <tr className="text-gray-500 text-sm border-b">
//               <th className="pb-2">Name</th>
//               <th className="pb-2">Size</th>
//               <th className="pb-2">Uploaded By</th>
//               <th className="pb-2">Modified</th>
//               <th className="pb-2">Sharing</th>
//             </tr>
//           </thead>

//           <tbody>
//             {files.map((file) => {
//               // Fallback: some DBs return isPublic instead of shareStatus
//               const status =
//                 file.shareStatus ||
//                 (file.isPublic ? "public" : "private") ||
//                 "private";

//               return (
//                 <tr
//                   key={file._id || file.id || file.fileName}
//                   className="border-b last:border-none"
//                 >
//                   {/* File Name */}
//                   <td className="py-3 flex items-center gap-3">
//                     <img
//                       src="/file-icon.png"
//                       alt="icon"
//                       className="w-6 h-6 opacity-70"
//                     />
//                     <span className="truncate max-w-[180px]">
//                       {file.fileName || file.name}
//                     </span>
//                   </td>

//                   {/* Size */}
//                   <td className="py-3 text-sm text-gray-600">
//                     {formatSize(file.size)}
//                   </td>

//                   {/* Uploaded by */}
//                   <td className="py-3 text-sm text-gray-600">You</td>

//                   {/* Modified */}
//                   <td className="py-3 text-sm text-gray-600">
//                     {file.uploadedAt
//                       ? new Date(file.uploadedAt).toLocaleDateString("en-GB", {
//                           day: "numeric",
//                           month: "short",
//                           year: "numeric",
//                         })
//                       : "--"}
//                   </td>

//                   {/* Sharing Column */}
//                   <td className="py-3">
//                     {status === "public" ? (
//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() => toggleSharing(file._id, "public")}
//                           className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1 text-sm"
//                         >
//                           <Unlock size={14} /> Public
//                         </button>

//                         <button
//                           onClick={() => copyLink(file._id)}
//                           className="p-1 hover:bg-gray-200 rounded"
//                         >
//                           <Copy size={15} />
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => toggleSharing(file._id, "private")}
//                         className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full flex items-center gap-1 text-sm"
//                       >
//                         <Lock size={14} /> Private
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default RecentFiles;



