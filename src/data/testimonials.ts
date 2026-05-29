// Client testimonials — verbatim excerpts from Upwork (Expert-Vetted profile,
// 100% Job Success, $500K+ across 32 engagements). Trimmed for the web, wording
// preserved. Attribution kept generic to respect client privacy.

export interface Testimonial {
    quote: string;
    attribution: string;
    /** The trait this quote demonstrates — ties back to the "understanding" thesis. */
    proves: string;
    featured?: boolean;
}

export const testimonials: Testimonial[] = [
    {
        quote:
            "He understood our entire project, with all its complexity, in 7 minutes — it usually takes 30 to 90 minutes to fully understand it. What a solution architect, literally the GOAT. I'm writing this from my heart: he had a real impact on our entire company.",
        attribution: "Founder — Advisory engagement",
        proves: "Understands fast",
        featured: true,
    },
    {
        quote:
            "Sina was more than an experienced professional — he was a mentor. He provided a great explanation and was able to simplify complex information. His communication was top-notch.",
        attribution: "Founder — Strategy & PM",
        proves: "Simplifies complexity",
        featured: true,
    },
    {
        quote:
            "His strong technical background and deep experience meant I had to spend very little time explaining what I needed. He delivered a high-quality plan in very little time.",
        attribution: "Founder — Technical project",
        proves: "Needs little explaining",
        featured: true,
    },
    {
        quote:
            "He understood the concept straight away and quickly found ways to simplify things — instead of just stitching tools together, he swapped them for cleaner solutions that worked better overall.",
        attribution: "Startup founder — MVP build",
        proves: "Reframes the problem",
    },
    {
        quote:
            "We expected it to take two to three months. Thanks to Sina's experience, we now have a clear action plan — after only three online meetings.",
        attribution: "Operations lead — Internal projects",
        proves: "Cuts to clarity",
    },
    {
        quote:
            "He worked brilliantly through the ambiguous detail at the start and eventually delivered a strategy brief. Great attitude — highly recommend.",
        attribution: "Founder — B2B platform strategy",
        proves: "Works through ambiguity",
    },
    {
        quote:
            "Sina is not just a project manager — he gives advice and solutions, helps with tools and methods, and has a certain humour and spirit that makes working with him very smooth.",
        attribution: "Director — Digital transformation",
        proves: "Easy to work with",
    },
    {
        quote:
            "He is not only the best person I have ever hired, he has become a friend. Don't miss out on this diamond in the rough.",
        attribution: "Founder — Head of Product engagement",
        proves: "Builds trust",
    },
];

export interface ProofStat {
    value: string;
    label: string;
}

export const proofStats: ProofStat[] = [
    { value: "20+ yrs", label: "building & stabilizing systems" },
    { value: "32", label: "engagements as an independent architect" },
    { value: "100%", label: "job success score" },
];

/** Domains where correctness is not optional — the credibility spine. */
export const domains = [
    "Banking & core banking",
    "Payments (EMV, EFT switch, reconciliation)",
    "Online brokerage",
    "Identity & KYC",
    "Agentic AI & LLM systems",
];
