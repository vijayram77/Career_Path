"use client"
import axios from 'axios';
import { easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'


const MainComponent = ({baseUrl}) => {
    console.log(baseUrl + "base Url maaawaaaaaaaaaaaaa");
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        linkedinUrl: '',
        githubUrl: '',
        portfolioUrl: '',
        mobileNumber: '',
        birthday: '',
        professionalSummary: '',
        workExperience: [{ role: '', from: '', to: '' }],
        projects: [{ title: '', description: '', demoLink: '' }],
        education: [{ school: '', percentage: '' }],
        skills: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((f) => ({ ...f, [name]: value }));
    };

    // Handle dynamic work experience and projects input fields
    const handleDynamicChange = (index, e, type) => {
        const { name, value } = e.target;
        const updatedList = [...formData[type]];
        updatedList[index][name] = value;
        setFormData({ ...formData, [type]: updatedList });
    };

    // Add new work experience or project
    const addNewField = (type) => {
        setFormData({
            ...formData,
            [type]: [...formData[type], type === 'workExperience' ? { role: '', from: '', to: '', description: '' } : type == "projects" ? { title: '', description: '', demoLink: '' } : { school: '', percentage: '' }],
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${baseUrl}/`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'blob',
                withCredentials: true,
            });
    
            const blob = response.data;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
    
        } catch (error) {
            if (error.response) {
                
                const { status } = error.response;
                // console.log(message);
                
                if (status === 400) {
                    alert("Bad Request: Please check the data you've entered.");
                } else if (status === 401) {
                    alert("Unauthorized: Please log in to access this feature.");
                }
            } else {
                console.error("An unexpected error occurred:", error);
                alert("Network Error: Please check your connection and try again.");
            }
        }
    };
    


    return (
        <div className='w-full min-h-[150vh] relative bg-zinc-950 py-[15vh] px-[5vw]'>
            <motion.div
                initial={{
                    borderTopLeftRadius: "100%",
                    borderTopRightRadius: "100%",
                    borderBottomLeftRadius: "100%",
                    borderBottomRightRadius: "100%",
                }}
                animate={{
                    borderTopLeftRadius: ["100%", "50%", "100%"],
                    borderTopRightRadius: ["100%", "30%", "100%"],
                    borderBottomLeftRadius: ["100%", "60%", "100%"],
                    borderBottomRightRadius: ["100%", "40%", "100%"],
                }}
                transition={{
                    duration: 2,
                    ease: easeInOut,
                    times: [0, 0.5, 1],
                    repeat: Infinity
                }}
                className='top-[40%] left-0 -translate-y-1/2 absolute w-[30vmax] h-[30vmax] rounded-full bg-gradient-to-br shadow-[-60px_-60px_10px_0px_#9D3AE6] from-[#ff3eec] via-[#B538C6] to-[#772699] blur-xl'>
            </motion.div>
            <div className='flex items-center gap-2  pt-6'>
                <div className='w-3 sm:h-[6vmax] h-[15vmax] bg-[#1e9eff] rounded-sm'></div>
                <h1 className='text-[6vmax] font-semibold text-[#cccccc] relative tracking-tighter'>Resume Builder (Beta)</h1>
            </div>
            <h1 className='md:text-2xl text-xl text-[#ccccccb2] relative tracking-tighter py-4'>Let's create an ATS friendly resume, together.</h1>


            <div className="max-w-xl ml-auto p-8 relative">
                <form className="space-y-6 text-zinc-200" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">FULL NAME</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Ben Mark"
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">EMAIL ADDRESS</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ben@rocketship.com"
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        />
                    </div>

                    {/* LinkedIn URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">LINKEDIN URL</label>
                        <input
                            type="url"
                            name="linkedinUrl"
                            value={formData.linkedinUrl}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/benmark"
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        />
                    </div>

                    {/* GitHub URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">GITHUB URL</label>
                        <input
                            type="url"
                            name="githubUrl"
                            value={formData.githubUrl}
                            onChange={handleChange}
                            placeholder="https://github.com/benmark"
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        />
                    </div>

                    {/* Portfolio URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">PERSONAL PORTFOLIO URL</label>
                        <input
                            type="url"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleChange}
                            placeholder="https://benmark.dev"
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">MOBILE NUMBER</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="+1 234 567 890"
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        />
                    </div>

                    {/* Birthday */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">BIRTH YEAR</label>
                        <input
                            type="number"
                            min={1990}
                            max={2005}
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none"
                        />
                    </div>

                    {/* Professional Summary */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">PROFESSIONAL SUMMARY (give appropriate keywords so that AI can understand)</label>
                        <input
                            name="professionalSummary"
                            value={formData.professionalSummary}
                            onChange={handleChange}
                            minLength={30}
                            required
                            placeholder="Tell us about your career journey..."
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none"
                        />
                    </div>

                    {/* Work Experience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">WORK EXPERIENCE</label>
                        {formData.workExperience.map((experience, index) => (
                            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                                <input
                                    type="text"
                                    name="role"
                                    value={experience.role}
                                    onChange={(e) => handleDynamicChange(index, e, 'workExperience')}
                                    placeholder="Job Title"
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                                <input
                                    type="text"
                                    name="description"
                                    placeholder='Description'
                                    minLength={30}
                                    required
                                    value={experience.description}
                                    onChange={(e) => handleDynamicChange(index, e, 'workExperience')}
                                    className=" border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                                <br />
                                <input
                                    type="text"
                                    name="from"
                                    placeholder='start date (jun 2022)'
                                    value={experience.from}
                                    onChange={(e) => handleDynamicChange(index, e, 'workExperience')}
                                    className=" border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                                <input
                                    type="text"
                                    name="to"
                                    placeholder='end date (jun 2024)'
                                    value={experience.to}
                                    onChange={(e) => handleDynamicChange(index, e, 'workExperience')}
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addNewField('workExperience')}
                            className="text-gray-100 border border-purple-700 px-3 py-2 rounded"
                        >
                            Add Another Work Experience
                        </button>
                    </div>

                    {/* Projects */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">PROJECTS</label>
                        {formData.projects.map((project, index) => (
                            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                                <input
                                    type="text"
                                    name="title"
                                    value={project.title}
                                    onChange={(e) => handleDynamicChange(index, e, 'projects')}
                                    placeholder="Project Title"
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                                <input
                                    type="text"
                                    name="description"
                                    value={project.description}
                                    onChange={(e) => handleDynamicChange(index, e, 'projects')}
                                    placeholder="Project Description"
                                    minLength={30}
                                    required
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                                <input
                                    type="url"
                                    name="demoLink"
                                    value={project.demoLink}
                                    onChange={(e) => handleDynamicChange(index, e, 'projects')}
                                    placeholder="Demo Link"
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addNewField('projects')}
                            className="text-gray-100 border border-purple-700 px-3 py-2 rounded"
                        >
                            Add Another Project
                        </button>
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">EDUCATION</label>
                        {formData.education.map((edu, index) => (
                            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                                <input
                                    type="text"
                                    name="school"
                                    value={edu.school}
                                    onChange={(e) => handleDynamicChange(index, e, 'education')}
                                    placeholder="School Name"
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                                <input
                                    type="text"
                                    name="percentage"
                                    value={edu.percentage}
                                    onChange={(e) => handleDynamicChange(index, e, 'education')}
                                    placeholder="Percentage/CGPA"
                                    className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addNewField('education')}
                            className="text-gray-100 border border-purple-700 px-3 py-2 rounded"
                        >
                            Add Another Education
                        </button>
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">SKILLS</label>
                        <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            placeholder="List your skills..."
                            className="w-full border-b bg-transparent border-gray-300 text-zinc-200 focus:outline-none py-1"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="text-gray-100 border border-[#BB38C9] tracking-tighter px-4 py-2 rounded-full font-medium text-lg"
                        >
                            Create My Resume
                        </button>
                        <span className="text-2xl">&rarr;</span>
                    </div>
                </form>
            </div>




        </div>
    )
}

export default MainComponent
