import { useState } from "react";
import emailjs from "@emailjs/browser"; // library untuk mengirim email
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactForm() {
  // state untuk menyimpan data name, email dan message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // state untuk menyimpan pesan errors
  const [errors, setErrors] = useState({});

  // state untuk menunjukkan apakah pesan sedang dikirim atau tidak
  const [isSending, setIsSending] = useState(false);

  // fungsi ini untuk meng-update formData ketika pengguna mengetik sesuatu di input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // fungsi ini untuk melakukan validasi sebelum data dikirim
  const validate = () => {
    let errors = {};
    // validasi name
    if (!formData.name) errors.name = "Name is required";

    // validasi email
    if (!formData.email) {
      errors.email = "Email is required";

      // jika email tidak dalam format yang benar, muncul "Email is invalid".
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    // validasi message
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // fungsi ini untuk menangani ketika pengguna menekan tombol "kirim"
  const handleSubmit = (e) => {
    e.preventDefault();

    // inisialisasi validasi terhadap data form
    const validationErrors = validate();

    // jika terdapat error pada validasi, tampilkan pesan errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // jika tidak ada error
    } else {
      setErrors({});
      setIsSending(true);

      // fungsi emailjs.send dipanggil untuk mengirim data form ke EmailJS.
      emailjs
        .send(
          "service_95tk1vi",
          "template_s5nezss",
          formData,
          "m3dXp0EkJyQFOfNBE"
        )

        // response jika berhail
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })

        // response jika gagal
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })

        // finally untuk memastikan tombol kembali aktif setelah proses selesai
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <>
      <div className="p-4 lg:w-3/4" id="contact">
        <Toaster />
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
          Let's Connect
        </h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex space-x-4">
            {/* input name */}
            <div className="lg:w-1/2">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              />

              {/* message error name */}
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-sm text-rose-800"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* input email */}
            <div className="lg:w-1/2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              />

              {/* message error email */}
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-sm text-rose-800"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              rows="6"
            />

            {/* message error message */}
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          {/* button send */}
          <button
            type="submit"
            className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            {/* tombol "Send" akan berubah menjadi "Sending..." saat proses pengiriman berlangsung  */}
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"} <FiSend />
            </div>
          </button>
        </motion.form>
      </div>
    </>
  );
}
