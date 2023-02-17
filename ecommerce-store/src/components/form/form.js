import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header/header";
import './form.css'
const Form = () => {
  const navigate = useNavigate();

  const [allData, setAllData] = useState({
    gameName: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const loadFile = (event) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };

  const handleValue = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (imageURL) {
      fetch("http://localhost:2525/addGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: allData.gameName,
          price: allData.price,
          description: allData.description,
          postImage: imageURL,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error("Error While Posting");
          } else {
            toast.success("Post Successful");
            navigate("/");
          }
        })
        .catch((err) => alert("Please fill all the fields"));
    }
  }, [imageURL]);

  const handlePost = () => {
    const data = new FormData();
    data.append("file", image);
    if (!image) {
      alert("Please Add image");
    }
    data.append("upload_preset", "Game-store");
    data.append("cloud_name", "cloudsundi");

    toast.info("Uploading image...", { autoClose: true });
    fetch("https://api.cloudinary.com/v1_1/cloudsundi/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      //send url to contant
      // .then((data) => setimageURL(data.url))
      .then((data) => {
        toast.dismiss();
        setImageURL(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="form-container">
        <section className="first-sec">
          <img
            id="output"
            src="https://t4.ftcdn.net/jpg/02/17/88/73/360_F_217887350_mDfLv2ootQNeffWXT57VQr8OX7IvZKvB.jpg"
            alt="upload img"
          />

          <input
            type="file"
            onChange={(e) => {
              loadFile(e);
              setImage(e.target.files[0]);
            }}
            accept="image/*"
          />
        </section>

        <section className="second-sec">
          <input
            className="input-tag1"
            type="text"
            onChange={handleValue}
            name="gameName"
            placeholder="Game Name"
          />

          <input
            className="input-tag2"
            placeholder="Enter Price"
            type="text"
            name="price"
            onChange={handleValue}
          />

          <input
            className="input-tag3"
            placeholder="Description"
            type="text"
            name="description"
            onChange={handleValue}
          />
        <section className="form-btn-sec">
          <button onClick={handlePost}>Post</button>
        </section>
        </section>

      </div>
    </>
  );
};

export default Form;
