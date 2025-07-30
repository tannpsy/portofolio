import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_portfolio",
        "template_tq874d4",
        form.current,
        "h3gnBRHZflCJpM7t_"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setName("");
          setEmail("");
          setSubject(""); 
          setMessage("");
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-start items-center px-4 md:px-12 py-16 bg-[#FFFFFF]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4C5B5C]">
        Let’s Collaborate
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-start gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left mt-20">
          <div className="flex items-start gap-3 mt-10">
            <FiMapPin className="text-3xl text-[#0097A7] mt-1" />
            <div>
              <h3 className="font-semibold text-[#4C5B5C]">Address</h3>
              <p className="text-[#4C5B5C]">Cikarang Selatan, Bekasi, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-5">
            <FiPhone className="text-3xl text-[#0097A7] mt-1" />
            <div>
              <h3 className="font-semibold text-[#4C5B5C]">Phone</h3>
              <p className="text-[#4C5B5C]">+62 812-9724-4751</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-5">
            <FiMail className="text-3xl text-[#0097A7] mt-1" />
            <div>
              <h3 className="font-semibold text-[#4C5B5C]">Email</h3>
              <p className="text-[#4C5B5C]">pasyaintan@gmail.com</p>
              <p className="text-[#4C5B5C]">intan.pasya@student.president.ac.id</p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-[#FFFFFF] border border-[#4C5B5C] rounded-2xl shadow-[0_0_15px_rgba(76,91,92,0.15)] p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#4C5B5C]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#FFFFFF] border border-[#0097A7] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4C5B5C] text-[#4C5B5C] placeholder-[#4C5B5C]/50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#4C5B5C]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. johndoe@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#FFFFFF] border border-[#0097A7] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4C5B5C] text-[#4C5B5C] placeholder-[#4C5B5C]/50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#4C5B5C]">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Project Collaboration"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#FFFFFF] border border-[#0097A7] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4C5B5C] text-[#4C5B5C] placeholder-[#4C5B5C]/50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#4C5B5C]">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#FFFFFF] border border-[#0097A7] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4C5B5C] text-[#4C5B5C] placeholder-[#4C5B5C]/50"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading || !name || !email || !subject || !message}
            className={`mt-4 w-full px-4 py-2 rounded-lg font-semibold transition shadow-[0_0_10px_rgba(0,151,167,0.3)] ${
              loading || !name || !email || !subject || !message
                ? "bg-gray-300 cursor-not-allowed text-gray-500"
                : "bg-[#0097A7] text-black hover:bg-[#007F8A]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-[#0097A7] text-center mt-2 font-semibold">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
