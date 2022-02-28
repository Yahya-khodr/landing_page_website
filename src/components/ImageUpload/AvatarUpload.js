
import { Avatar, Button as MuiButton, Typography } from "@mui/material";

import { spacing } from "@mui/system";
import React, { createRef, useState } from "react";
import { styled } from "@mui/system";

const Button = styled(MuiButton)(spacing);


const CenteredContent = styled("div")({
  textAlign: "center",
});
const BigAvatar = styled(Avatar)({
  width: "100px",
  height: "100px",
  margin: "0 auto",
  marginBottom: "20px",
});

const AvatarUpload = () => {
  const [image, setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setNewImage = (newImage) => {
    if (image) {
      cleanup();
    }
    setImage(newImage);
    
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setNewImage(URL.createObjectURL(newImage));
    }
  };

  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return (
    <CenteredContent>
      <BigAvatar
        
        alt="Avatar"
        src={image || "/static/img/avatars/default-profile.svg"}
        imgProps={{
          style: {
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",
            
          },
        }}
      />
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="avatar-image-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
          mb={2}
          onClick={handleClick}
        >
          {image ? "Remove" : "Upload"}
        </Button>
      </label>
    </CenteredContent>
  );
};
export default AvatarUpload;
