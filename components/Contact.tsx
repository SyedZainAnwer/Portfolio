
"use client"

import { motion } from "framer-motion";
import SectionHeading from "./shared/Section-Heading";
import useSectionInView from "@/hooks/useSectionInView";
import { sendEmail } from "@/lib/actions/sendEmail";
import Button from "./shared/Button";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {

    const { ref } = useSectionInView("Contact");

    const [ formData, setFormData ] = useState({
        senderEmail: '',
        message: ''
    });

    const handleSubmit = async(e: any) => {

        const formDataObject = new FormData();
        formDataObject.append('senderEmail', formData.senderEmail);
        formDataObject.append('message', formData.message);

        const { data, error } = await sendEmail(formDataObject);

        if (error) {
            toast.error(error);
            return;
        }
    
        toast.success('Email sent successfully!');
    
        setFormData({
            senderEmail: '',
            message: '',
        });
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    };

    return (
        <motion.section 
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
            initial={{ opacity:0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading heading="Contact me"/>
            <p className="text-gray-700 -mt-6">Please contact me directly at {" "} 
                <a className="underline" href="mailto:zainanwer24@gmail.com">zainanwer24@gmail.com</a>{" "}
                or through this form
            </p>

            <form 
                className="mt-10 flex flex-col"
                action={handleSubmit}
            >
                <input 
                    type="email"
                    name="senderEmail"
                    placeholder="Your email"
                    required
                    maxLength={500}
                    onChange={handleChange}
                    className="h-14 rounded-lg borderBlack px-4"
                />
                <textarea 
                    className="h-52 my-3 rounded-lg borderBlack p-4" 
                    placeholder="Your message"
                    name="message"
                    required
                    onChange={handleChange}
                    maxLength={500}
                />
                <Button />
            </form>
        </motion.section>
    )
}

export default Contact;