"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";
export default function ContactFormPage() {
  const [timeline, setTimeline] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    project: "",
  });

  type FormErrors = Partial<Record<string, string>>;
  const [errors, setErrors] = useState<FormErrors>({});

  // HANDLE CHANGE + CLEAR ERROR
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // RESET ERRORS
    setErrors({});

    //  1. CAPTCHA FIRST
    if (!captcha) {
      setErrors({ captcha: "please complete the reCAPTCHA" });
      return;
    }

    // 2. FIRST NAME
    if (!formData.firstName.trim()) {
      setErrors({ firstName: "Please enter your first name" });
      return;
    }

    // 3. LAST NAME
    if (!formData.lastName.trim()) {
      setErrors({ lastName: " Please enter your last name" });
      return;
    }

    // 4. EMAIL
    if (!formData.email.trim()) {
      setErrors({ email: "Please enter your email address" });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors({ email: "Invalid email" });
      return;
    }

    // 5. PHONE
    if (!formData.phone.trim()) {
      setErrors({ phone: " Please enter your phone number" });
      return;
    }

    //  6. PROJECT
    if (!formData.project.trim()) {
      setErrors({ project: "Project details required" });
      return;
    }

    //  7. TIMELINE
    if (!timeline) {
      setErrors({ timeline: "Select timeline" });
      return;
    }

    //  8. BUSINESS
    if (!businessType) {
      setErrors({ businessType: "Select business type" });
      return;
    }

    //  9. SOURCE
    if (!source || source === "Select an option") {
      setErrors({ source: "Select source" });
      return;
    }

    // SUCCESS
    alert("Form submitted successfully ");

    console.log({
      ...formData,
      timeline,
      businessType,
      source,
      captcha,
    });
  };

  return (
    <>
      <section className="relative bg-white text-black dark:bg-black dark:text-white py-16 md:py-24 overflow-hidden">
        <span className="absolute top-16 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-600" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm tracking-widest   uppercase text-center mb-3 ">
            Contact with BZ
          </p>

          <h2 className="text-[45px] tracking-[0.5px] sm:text-4xl md:text-5xl font-extrabold text-center mb-6 leading-[54px]">
            Get in touch <br /> with Bz Team
          </h2>

          <p className=" max-w-2xl mx-auto text-center text-[16px] mb-14 leading-[30px] tracking-[0.5px]">
            We’re ready to become your personal guide through the software
            experience as we bring your app or website to life.
          </p>

          <h3 className="text-[27.4864px] font-bold mb-8 text-center leading-[32.9837px] tracking-[0.5px]">
            Your Contact details
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {/* FIRST NAME */}
            <div>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input w-full h-[63px]  ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* LAST NAME */}
            <div>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`input w-full h-[63px] ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input w-full h-[63px] ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input w-full h-[63px] ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="Phone number"
              />
              {errors.phone && (
                <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
                  {errors.phone}
                </p>
              )}
            </div>
          </form>

          <h3 className=" font-extrabold  text-3xl text-center mb-4  leading-[32.9837px] tracking-[0.5px] text-[27.4864px]">
            Project Details
          </h3>

          <div>
            <textarea
              name="project"
              rows={6}
              value={formData.project}
              onChange={handleChange}
              className={` dark:bg-[#101010] bg-[#EAEAEA]  w-full h-[130px] pt-[30px] ps-[30px] pe-[30px] pb-[20px] ${
                errors.project ? "border-red-500" : ""
              }`}
              placeholder="Quick project overview"
            />
            {errors.businessType && (
              <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
                {errors.businessType}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black py-5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* TIMELINE */}
          <h3 className="font-bold text-[16px] tracking-[0.5px] leading-[30px]  mb-4">
            What&apos;s your timeline?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "No timeline", sub: "(just researching)" },
              { title: "Planning", sub: "(looking to start in 6 months)" },
              { title: "Immediate", sub: "(ready to start today)" },
            ].map((item) => (
              <label
                key={item.title}
                className="flex items-center gap-5 justify-center cursor-pointer text-left "
              >
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === item.title}
                  onChange={() => setTimeline(item.title)}
                  className="hidden "
                />

                {/* RADIO */}
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    timeline === item.title
                      ? "bg-orange-500  border-2 border-blue-500  peer-checked:ring-5 peer-checked:ring-orange-500 "
                      : "bg-white dark:border-none border-gray-500"
                  }`}
                >
                  {timeline === item.title && (
                    <span className="w-2.5 h-2.5 bg-amber-600 dark:bg-white rounded-full" />
                  )}
                </span>

                <div className="text-center">
                  <p className="font-medium text-black dark:text-white  text-center ">
                    {item.title}
                  </p>
                  <p className="text-sm  ">{item.sub}</p>
                </div>
              </label>
            ))}
          </div>

          {errors.timeline && (
            <p
              className="
    text-[#FFA500] 
    text-[16px] 
    font-medium 
    tracking-[0.5px] 
    leading-[30px] 
    text-center 
    
  "
            >
              {errors.timeline}
            </p>
          )}

          {/* BUSINESS */}
          <h3 className="mt-12 mb-5 font-bold ">Type of business</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Startup", "Small to medium business", "Enterprise"].map(
              (type) => (
                <label
                  key={type}
                  className="flex items-center gap-4 justify-center cursor-pointer text-left"
                >
                  <input
                    type="radio"
                    name="business"
                    checked={businessType === type}
                    onChange={() => setBusinessType(type)}
                    className="hidden"
                  />

                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      businessType === type
                        ? "bg-orange-500  border-blue-500  peer-checked:ring-8 peer-checked:ring-orange-500 "
                        : "bg-white dark:border-none border-gray-500"
                    }`}
                  >
                    {businessType === type && (
                      <span className="w-2.5 h-2.5 bg-amber-600 dark:bg-white rounded-full" />
                    )}
                  </span>

                  <p className="font-medium text-black mt-2 text-center dark:text-white">
                    {type}
                  </p>
                </label>
              ),
            )}
          </div>

          {errors.businessType && (
            <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
              {errors.businessType}
            </p>
          )}

          <h3 className="mt-12  font-bold ">Where did you hear about us</h3>
          <div className="mt-10 w-full">
            <div
              onClick={() => setOpen(!open)}
              className="w-full h-[60px] flex items-center justify-between px-4 rounded-md cursor-pointer input"
            >
              {source || "Select an option"}
              <span className="text-gray-500">▼</span>
            </div>

            {open && (
              <div className="mt-2 rounded-md overflow-hidden border dark:border-white">
                {[
                  "Select an option",
                  "Social media",
                  "Referral",
                  "Advertisement",
                ].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSource(item);
                      setOpen(false);
                    }}
                    className="px-4 py-3 cursor-pointer 
              bg-[#EAEAEA] dark:bg-black
              text-black dark:text-white
              border-b border-black dark:border-white
              hover:bg-orange-500 hover:text-white transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {errors.source && (
            <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center mb-4">
              {errors.source}
            </p>
          )}

          {/* CAPTCHA + BUTTON */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <div className="">
              <ReCAPTCHA
                key={theme}
                theme={theme === "dark" ? "dark" : "light"}
                sitekey="6Le9lpQsAAAAAO0h298D3eJDXb65MTkU3C-pa-uz"
                onChange={(val) => setCaptcha(val)}
              />
            </div>

            {errors.captcha && (
              <p className="text-[#FFA500] text-[16px] font-medium tracking-[0.5px] leading-[30px] text-center ">
                {errors.captcha}
              </p>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              className="relative overflow-hidden group
        font-bold text-lg 
        px-10 py-4 
        text-white bg-orange-500 mt-3"
            >
              <span
                className="
          absolute left-1/2 top-1/2
          w-[150%] h-0
          bg-white
          -translate-x-1/2 -translate-y-1/2
          rotate-[-25deg]
          transition-all duration-500
          group-hover:h-[400%]
          z-0"
              ></span>

              <span className="relative z-10 group-hover:text-orange-500 transition">
                Submit
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
