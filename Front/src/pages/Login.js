import React, { useState } from "react";
import Modal from "react-modal"; // Importez react-modal
import { Link } from "react-router-dom";
import { login, getAllUsers } from "../services/user";

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

const Login = () => {
  const [user, setUser] = useState({
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

    if (user.password !== "" && user.email !== "") {
      const allUsers = await getAllUsers();

      if (allUsers.some((u) => u.email === user.email)) {
        const userData = await login(user);

        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userId", userData.user.id);
        localStorage.setItem("userFirstname", userData.user.firstname);
        localStorage.setItem("userLastname", userData.user.lastname);
        
        closeModal(); // Fermez la modal après la connexion réussie
      } else {
        alert("Account doesn't exist !");
      }
    } else {
      alert("Please fill all the fields !");
    }
  };

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <div>
      <Link to="#" onClick={openModal}>Login</Link>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-black-900">
          <h2 className="text-4xl dark:text-white font-bold text-center pb-8">
            Login
          </h2>

          <div className="flex flex-col text-black py-2 mb-2">
            <label className="py-1">Email :</label>
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

          <div className="flex flex-col text-black py-2 mb-2">
            <label className="py-1">Password :</label>
            <input
              className="py-2 px-4 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none form-control Cinput"
              type="password"
              onChange={onChangeHandler}
              value={user.password}
              placeholder="Enter your password"
              id="password"
              required
            />
          </div>

          <button
            className="w-full my-5 py-2 bg-blue shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={onClick}
          >
            Sign In
          </button>
          <button
            onClick={closeModal}
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg"
          >
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
