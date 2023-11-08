import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { register } from "../services/user";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "" && user.firstname !== "" && user.lastname !== "") {
      const res = await register(user);
      if (res.status === 200) {
        // Inscription réussie, vous pouvez ajouter du code ici si nécessaire
      }
    } else {
      alert("Please fill all the fields!");
    }
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <div>
      <Link to="#" onClick={openModal}>
        Register
      </Link>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Register Modal"
      >
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-black-900">
          <h2 className="text-4xl text-black font-bold text-center pb-6">REGISTER</h2>

          <div className="flex flex-col text-black py-1 mb-2">
            <label className="py-1">First Name:</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
              type="text"
              onChange={onChangeHandler}
              value={user.firstname}
              placeholder="Enter your firstname"
              id="firstname"
              required
            />
          </div>

          <div className="flex flex-col text-black py-1 mb-2">
            <label className="py-1">Last Name:</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
              type="text"
              onChange={onChangeHandler}
              value={user.lastname}
              placeholder="Enter your lastname"
              id="lastname"
              required
            />
          </div>

          <div className="flex flex-col text-black py-1 mb-2">
            <label className="py-1">Email:</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
              type="text"
              onChange={onChangeHandler}
              value={user.email}
              placeholder="Enter your email"
              id="email"
              required
            />
          </div>

          <div className="flex flex-col text-black py-1 mb-2">
            <label className="py-1">Password:</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-gray-800 focus:outline-none form-control Cinput"
              type="password"
              onChange={onChangeHandler}
              value={user.password}
              placeholder="Enter your password"
              id="password"
              required
            />
          </div>

          <button
            onClick={onClick}
            className="w-full my-5 py-2 bg-blue shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            Sign Up
          </button>
          <Link to="/Login" className="Clink text-blue-yale">
            <p className="underline md:underline-offset-4">I already have an account!</p>
          </Link>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
