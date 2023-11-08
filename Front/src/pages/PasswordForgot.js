import React, { useState } from 'react';
import axios from 'axios';
import Modal from "react-modal"; // Importez react-modal

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

function PasswordForgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('/PasswordForgot', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <button onClick={openModal}>Mot de passe oublié</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Password Forgot Modal"
      >
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-black-900">
          <h2 className="text-4xl dark:text-white font-bold text-center pb-8">
            Mot de passe oublié
          </h2>

          <div className="flex flex-col text-black py-2 mb-2">
            <label className="py-1">Adresse e-mail :</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 py-2 px-4 focus:border-blue-500 focus:bg-black-800 focus:outline-none form-control Cinput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse e-mail"
            />
          </div>

          <button
            className="w-full my-5 py-2 bg-blue shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={handleForgotPassword}
          >
            Demander un lien de réinitialisation
          </button>
          <button
            onClick={closeModal}
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg"
          >
            Fermer
          </button>
        </form>
      </Modal>
      <p>{message}</p>
    </div>
  );
}

export default PasswordForgot;
