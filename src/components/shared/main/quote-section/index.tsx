import Image from "next/image";
import React from "react";

type QuoteSectionProps = {
  quotesSection: React.RefObject<HTMLDivElement | null>; // Reference to the quotes section
  imagesQuotes: React.RefObject<HTMLImageElement | null>; // Reference to the background image in quotes
};

const QuoteSection: React.FC<QuoteSectionProps> = ({
  quotesSection,
  imagesQuotes,
}) => {
  return (
    <section
      ref={quotesSection}
      className="quotes-section relative w-full h-[200vh]"
    >
      <Image
        src="/assets/images/bg-quote-2.jpg"
        alt="bg-quote"
        ref={imagesQuotes}
        fill
        className="image-quotes"
      />
      <div className="title-quotes" id="title-quotes">
        <h1>
          &quot;Sometimes it is the people no one can imagine anything of who do
          the things no one can imagine.
        </h1>
        <h3>Alan Turing</h3>
      </div>
    </section>
  );
};

export default QuoteSection;
