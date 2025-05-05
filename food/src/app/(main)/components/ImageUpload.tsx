import { uploadimage } from "@/utils/image-upload";
import React, { ChangeEvent, useState } from "react";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file);
  const handleOnclick = async (file?: File) => {
    if (!file) {
      console.log("File oruulaagui baina ");

      return;
    }
    const imageURL = await uploadimage(file);
  };

  return (
    <div>
      <input onChange={handleFileChange} type="file" />
      <button onClick={() => handleOnclick(file)}>Upload</button>
    </div>
  );
};
