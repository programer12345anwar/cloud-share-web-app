import { FileIcon, FileText, Globe, Image, Music, VideoIcon } from "lucide-react";
import { useState } from "react";

const FileCard = ({ file }) => {
    const [showActions, setShowActions] = useState(false);

    const getFileIcon = () => {
        const extension = file.name.split('.').pop().toLowerCase();
        
        if(['jpg','png','jpeg','gif','svg','webp'].includes(extension)){
            return <Image size={24} className="text-purple-500"/>
        }

        if(['mp4','webm','mov','avi','mkv'].includes(extension)){
            return <VideoIcon size={24} className="text-blue-500"/>
        }

        if(['mp3','wav','ogg','flac','m4a'].includes(extension)){
            return <Music size={24} className="text-green-500"/>
        }

        if(['pdf','doc','docx','txt','rtf'].includes(extension)){
            return <FileText size={24} className="text-amber-500"/>
        }

        return <FileIcon size={24} className="text-purple-500"/>
    };

    const formatFileSize=(bytes)=>{
        if(bytes<1024) return bytes + '  B';
        else if(bytes<1048576) return (bytes/1024).toFixed(1) + ' KB';
        else return (bytes/1048576).toFixed(1) + ' MB';
    }

    const formatDate=(dateString)=>{
        const date=new Date(dateString);
        return date.toLocaleDateString(undefined,{year: 'numeric', month: 'short', day: 'numeric'});
    }

    return (
        <div 
        onMouseEnter={()=>setShowActions(true)}
        onMouseLeave={()=>setShowActions(false)}
        className="relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">

            {/* File preview area */}

            <div className="h-32 bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-4">
                {getFileIcon()}
            </div>

            {/* public/private badge */}
            <div className="absolutetop-2 right-2">
                <div className={`rounded-full p-1.5 ${file.isPublic ? 'bg-green-100': 'bg-gray-100'}`} title={file.isPublic ? "Public":"Private"}>
                    {file.isPublic ? (
                        <Globe size={14} className="text-green-600" />
                    ):(
                        <Lock size={14} className="text-gray-600"/>
                    )}
                </div>
            </div>

            {/* file info */}
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <div className="overflow-hidden">
                        <h3 title={file.name} className="font-medium text-gray-900 truncate">
                            {file.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                            {formatFileSize(file.size)}.{formatDate(file.uploadedAt)}
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FileCard;
