const experiences = [
    {
        image: "",
        title: "Maruti Suzuki India Limited",
        subtitle: "AI Intern | On-site",
        description: "Built offline reconciliation tool and semantic row-matching pipeline.",
        link: "",
        duration: "Jul 2026 - Sep 2026",
        details: [
            "Built a fully offline reconciliation tool that matches Maruti Suzuki GSIS-P inspection Excel data against SMIR/MIS PDF source-of-truth reports, reducing manual validation effort by approximately 25%.",
            "Implemented OCR-based table extraction (RapidOCR / PP-OCRv6) with a Docling fallback engine to parse scanned inspection PDFs, alongside pdfplumber for digital PDF sources.",
            "Designed a semantic row-matching pipeline using sentence-transformers (all-MiniLM-L6-v2) embeddings combined with Needleman-Wunsch sequence alignment to accurately map Excel rows to their corresponding PDF records.",
            "Built a deterministic tolerance and limit parser to validate dimensions, MIN/MAX ranges, and signed deviations, and developed a human-in-the-loop review workflow for flagging and correcting unmatched data.",
            "Wrote a regression test suite covering limit rules and dimension-matching accuracy to ensure reliability before each release."
        ],
    },

];

export default experiences;
