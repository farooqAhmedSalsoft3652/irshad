import React, { useEffect, useMemo, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import Styles from "./UploadAndDisplayImage.module.css";
import './style.css'

const UploadAndDisplayImages = ({
  images = [],
  className,
  label,
  required = false,
  onChange,
  numberOfFiles = 3,
  allowSameImageUpload = true,
  showNumberOfImagesText = false,
  errorFromParent = "",
  height = "",
  id = "0",
  imgId,
}) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [initialized, setInitialized] = useState(false); // New flag

  // useEffect(() => {
  //   console.log("Images updated:", images);
  //   if (images.length === 0) {
  //     console.log("Resetting files...");
  //     setFiles([]);
  //   }
  // }, [images]);

  
  // Memoize images array
  const memoizedImages = useMemo(() => images, [images]);


  // Initialize files from parent images only once
  useEffect(() => {
    if (memoizedImages.length && !initialized) {
      setFiles(memoizedImages);
    }
    setInitialized(true);
  }, [memoizedImages, initialized]);

  // Call onChange when files are updated, but skip initialization case
  useEffect(() => {
    if (initialized && onChange) {
      onChange(files);
    }
  }, [files, initialized]);

  useEffect(() => {
    setError(errorFromParent);
  }, [errorFromParent]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validImageTypes = ["image/jpeg", "image/jpg", "image/webp", "image/gif", "image/png"];

    e.target.value = null; // Reset input to allow selecting the same file again

    const allValid = selectedFiles.every((file) => validImageTypes.includes(file.type));

    if (!allValid) {
      setError("Only image files (jpg, jpeg, webp, gif, png) are allowed.");
      return;
    }

    if (selectedFiles.length + files.length > numberOfFiles) {
      setError(`You can only upload up to ${numberOfFiles} files.`);
      return;
    }

    const newFiles = allowSameImageUpload ? selectedFiles : selectedFiles.filter((file) => !files.some((f) => f.name === file.name && f.size === file.size));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    setError("");
  };

  // const handleRemoveFile = (index) => {
  //   setError("");
  //   if (typeof files[index] === "string") {
  //     let newFiles = [...files];
  //     newFiles.splice(index, 1);
  //     setFiles(newFiles);
  //   } else {
  //     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  //   }
  // };

  const handleRemoveFile = (imgId, index) => {
    console.log(imgId, "indexxxxxxxxxxxxxxxxx");
    setError(""); // Clear error message

    if (imgId) {
      const storedToBeDelete =
        JSON.parse(localStorage.getItem("toBeDelete")) || [];

      const updatedToBeDelete = [...storedToBeDelete, imgId];
      localStorage.setItem("toBeDelete", JSON.stringify(updatedToBeDelete));
    }

    // if (imgId) {
    //   const abc = [];
    //   abc.push(imgId);
    //   localStorage.setItem(abc);
    // }

    if (Array.isArray(files)) {
      // Check if files is an array
      const updatedFiles = files.filter((_, i) => i !== index); // Remove the file at the given index
      // If only one file is left, set it as a single file; otherwise, keep it as an array
      setFiles(updatedFiles.length === 1 ? updatedFiles[0] : updatedFiles);
    } else {
      setFiles([]); // If files is a single file, clear it
    }
  };


//   const handleRemoveFile = (imageId, index) => {
//   console.log("Removed Image ID:", imageId);

//   setError(""); // Clear error message

//   // Store removed image ID in localStorage
//   if (imageId) {
//     const storedToBeDelete = JSON.parse(localStorage.getItem("toBeDelete")) || [];
//     const updatedToBeDelete = [...storedToBeDelete, imageId];
//     localStorage.setItem("toBeDelete", JSON.stringify(updatedToBeDelete));
//   }

//   setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
// }; 


  return (
    <div style={{ position: "relative" }} className={`${Styles[className]} mb-3`}>
      <p className={Styles.imageUploaderLabel}>
        {label}
        {required ? <span className="text-danger">*</span> : ""}
      </p>

      {/* Conditionally render the selected image(s) */}
      {!!(Array.isArray(files) ? files.length : files ? 1 : 0) && (
        <div className={`d-flex justify-content-start gap-2 mb-3 display-uploader ${Styles.displayImages}`}>
          {(Array.isArray(files) ? files : [files]).map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img style={{ height: height }} src={typeof image === "string" ? image : URL.createObjectURL(image)} alt="Uploaded" className={`uploadImage ${Styles.uploadedImage}`} />
              <button
                type="button"
                className={Styles.imageRemoveButton}
                onClick={() => {
                  handleRemoveFile(imgId, index);
                }}
              >
                <FaXmark />
              </button>
            </div>
          ))}
        </div>
      )}

      {(Array.isArray(files) ? files.length : files ? 1 : 0) <
        numberOfFiles && (
        <label style={{ height: height }} htmlFor={`myImage${id}`} className={`imageUploadArea`}>
          <div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-2 UploadArea">
              <HiOutlineUpload size={32} color="#333" />
              <p>Upload Image{numberOfFiles > 1 ? "(s)" : ""}</p>
            </div>
            {numberOfFiles > 1 && showNumberOfImagesText ? <p style={{ color: "#999", fontSize: "12px" }}>Minimum 1 Maximum {numberOfFiles} Images</p> : null}
          </div>
        </label>
      )}

      <input
        id={`myImage${id}`}
        style={{ opacity: 0, position: "absolute", bottom: 0, cursor: "pointer", zIndex: -1 }}
        type="file"
        multiple={numberOfFiles > 1}
        // required={required}
        name="image"
        accept="image/jpeg,image/jpg,image/webp,image/gif,image/png"
        onChange={handleFileChange}
      />
      {error && (
        <p style={{ color: "red" }} className="mb-0 mt-1 error-message red-text">
          {error}
        </p>
      )}
    </div>
  );
};

export default UploadAndDisplayImages;
