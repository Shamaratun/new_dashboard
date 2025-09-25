"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

interface UploadedFile {
  id: string;
  name: string;
  url?: string;
}

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        // Add uploaded file to the list
        setUploadedFiles((prev) => [
          ...prev,
          { id: Date.now().toString(), name: file.name, url: data.url },
        ]);
        setFile(null);
      }
      alert(data.message || "File uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Drag & Drop */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive
            ? "Drop the file here..."
            : "Drag & drop a file here, or click to select"}
        </p>
      </div>

      {/* Preview */}
      {file && (
        <div className="mt-2 p-4 border rounded-lg bg-gray-50">
          <p className="text-gray-700 font-medium">📄 {file.name}</p>
          {file.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="mt-2 max-h-40 rounded-lg shadow"
            />
          )}
        </div>
      )}

      {/* Manual Select */}
      <label className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition w-full sm:w-auto">
        <input
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        Choose File
      </label>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className={`w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="font-semibold text-gray-800">Uploaded Files</h3>
          <ul className="space-y-1">
            {uploadedFiles.map((f) => (
              <li
                key={f.id}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
              >
                <span className="truncate">{f.name}</span>
                <button
                  onClick={() => handleRemove(f.id)}
                  className="text-red-600 hover:text-red-800 font-semibold px-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}