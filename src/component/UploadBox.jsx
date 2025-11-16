import { useRef } from "react";
import { Upload, X } from "lucide-react";

const UploadBox = ({
    files,
    onFileChange,
    onUpload,
    uploading,
    onRemoveFile,
    remainingCredits,
    isUploadDisabled
}) => {
const fileInputRef = useRef();

    return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Heading + Credit Count */}
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
            <Upload size={20} /> Upload Files
        </h2>
        <p className="text-sm text-gray-600">{remainingCredits} credits remaining</p>
        </div>

        {/* Drag & Drop Box */}
        <div
        onClick={() => fileInputRef.current.click()}
        className="
            bg-[#fff3ff]
            border border-dashed border-purple-300
            rounded-xl p-10 text-center cursor-pointer
            transition-colors duration-200 shadow-sm
            hover:border-blue-500 
  
        "
        >
        <div className="flex flex-col items-center justify-center">
            <div
            className="
                w-12 h-12 rounded-full bg-purple-100 
                flex items-center justify-center mb-4
            "
            >
            <Upload size={28} className="text-purple-600" />
            </div>

            <p className="text-gray-700 font-medium">Drag and drop files here</p>
            <p className="text-gray-500 text-sm mt-1">
            or click to browse ({remainingCredits} credits remaining)
            </p>
        </div>

        <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileChange}
            className="hidden"
        />
        </div>


    {/* Selected Files List */}
    {files.length > 0 && (
        <div className="mt-6 bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="font-medium mb-3">Selected Files</h3>

            <ul className="space-y-2">
            {files.map((file, index) => (
                <li
                key={index}
                className="
                    flex items-center justify-between
                    bg-gray-50 px-4 py-2 rounded
                    border
                "
                >
                <span className="text-sm text-gray-700">{file.name}</span>

                <button
                    onClick={() => onRemoveFile(index)}
                    className="text-red-500 hover:text-red-700"
                >
                <X size={18} className="cursor-pointer"/>
                </button>
                </li>
            ))}
            </ul>

          {/* Upload Button */}
            <button
            onClick={onUpload}
            disabled={isUploadDisabled || uploading}
            className="
                w-full mt-4 py-2 rounded-lg text-white font-medium
                bg-blue-600 hover:bg-blue-700 
                disabled:bg-gray-300 disabled:cursor-not-allowed
            "
            >
            {uploading ? "Uploading..." : "Upload Files"}
        </button>
        </div>
        )}
    </div>
    );
};

export default UploadBox;
