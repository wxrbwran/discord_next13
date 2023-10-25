"use client";
import React from "react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  return <div>FileUpload</div>;
};

export default FileUpload;
