
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const QuestionAns = ({
    title,
    faqs = [],
    en_Or_bn,
    limit = 5,
    bg = ''
}) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const visibleFaqs = showAll ? faqs : faqs.slice(0, limit);

    const toggleFaq = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="relative flex flex-col gap-y-3 overflow-hidden" lang={en_Or_bn === 'bn' ? 'bn' : 'en'}>
            <h2 className="text-2xl sm:text-[34px] font-bold leading-[120%] tracking-normal">
                {title}
            </h2>

            <div data-aos="zoom-out-left">
                <div className="flex flex-col gap-y-3 rounded-xl overflow-hidden relative">
                    {visibleFaqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={`${item.q}-${index}`}
                                className={`relative p-4 rounded-[14px] ${en_Or_bn === 'bn' ? 'bg-[#FFFFFF]' : 'border border-[#D6E5E2]'
                                    } ${bg === 'white' ? 'bg-white' : ''}`}
                            >
                                <button
                                    type="button"
                                    className="w-full flex justify-between items-center py-4 font-semibold transition-colors text-left cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-start gap-1 relative flex-1 pr-3">
                                        <div className="flex justify-center mt-1 items-center">
                                            <h3 className="text-[18px] text-left sm:text-[15px]">
                                                {item.q}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex h-6 w-6 text-white shrink-0 items-center justify-center rounded-full bg-[#DF266F]">
                                        {isOpen ? (
                                            <Minus className="h-4 w-4" />
                                        ) : (
                                            <Plus className="h-4 w-4" />
                                        )}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="overflow-hidden transition-all duration-300 ease-in-out">
                                        <p className="text-[#626773] text-sm sm:pl-4 pt-1 pb-2 leading-7">
                                            {item.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {faqs.length > limit && (
                    <button
                        type="button"
                        onClick={() => {
                            setShowAll((prev) => !prev);
                            setOpenIndex(null);
                        }}
                        className="mt-4 inline-flex items-center gap-2 p-4 rounded-[10px] border border-[#CC0166] bg-white text-[#CC0166] text-sm font-semibold cursor-pointer transition-all hover:bg-[#FFF1F6]"
                    >
                        {showAll ? (
                            <>
                                {en_Or_bn === "bn" ? 'কম প্রশ্ন দেখুন' : 'Show Less'} <FaArrowUp size={12} />
                            </>
                        ) : (
                            <>
                                {en_Or_bn === "bn" ? 'আরও প্রশ্ন দেখুন' : 'Show more questions'} <FaArrowDown size={12} />
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuestionAns;
