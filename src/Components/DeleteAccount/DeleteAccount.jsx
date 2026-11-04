import React, { useState } from "react";

export const meta = () => [
    { title: 'Delete account | Utshob.xyz' },
    { name: 'description', content: 'Submit a delete account request for your Utshob profile. Review the steps and support information for account removal.' },
    { name: 'robots', content: 'index, follow' },
    { tagName: 'link', rel: 'canonical', href: 'https://www.utshob.xyz/delete-account' },
];

const DeleteAccount = () => {
    const [reason, setReason] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [otherReason, setOtherReason] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();


        setSubmitted(true);
    };

    return (
        <div className="flex justify-center  pt-20  items-center min-h-screen bg-gradient-to-br  from-gray-100 ">
            <div className="w-full max-w-md bg-white rounded-xl  p-3 sm:p-5 shadow  transition-opacity duration-500">
                {!submitted ? (
                    <>
                        <div className="txt  text-center p-2 rounded-t-lg text-xl font-semibold">
                            Delete Account
                        </div>
                       
                        <p className="text-start text-sm text-gray-600 mt-1 mb-6">
                            Deleting your account will automatically remove  all of your info after 30 days. You will be  able ro retrieve your account by logging back within the timeline.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-medium text-gray-700">
                                    Reason for account deletion <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a reason
                                    </option>
                                    <option value="no_use">No Longer Using the Service</option>
                                    <option value="privacy">Privacy Concerns</option>
                                    <option value="unsatisfactory">Unsatisfactory Experience</option>
                                    <option value="duplicate">Account Duplication</option>
                                    <option value="other">Other (please specify below)</option>
                                </select>
                            </div>

                            {reason === "other" && (
                                <div className="flex flex-col">
                                    <label className="mb-1 text-sm font-medium text-gray-700">
                                        Type Your Reason <span className="text-gray-400 text-xs">(max 200 chars)</span>
                                    </label>
                                    <textarea
                                        className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none resize-none h-20 text-sm"
                                        value={otherReason}
                                        maxLength={200}
                                        onChange={(e) => setOtherReason(e.target.value)}
                                        placeholder="Enter your reason..."
                                    />
                                </div>
                            )}

                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none text-sm"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-medium text-gray-700">
                                    Email Address <span className="text-gray-400 text-xs">(optional)</span>
                                </label>
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-semibold p-3 rounded-md transition-colors"
                            >
                                Submit Request
                            </button>
                        </form>

                    </>
                ) : (
                    <div className="text-center">
                        <div className="text-green-500 text-6xl mb-4">&#10003;</div>
                        <div className="text-green-600 text-2xl font-semibold mb-2">Success</div>
                        <div className="text-gray-700 text-lg">
                            Your request has been submitted successfully.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteAccount;
