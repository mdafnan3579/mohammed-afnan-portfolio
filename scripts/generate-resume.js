import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import {
  personalInfo,
  professionalSummary,
  coreCompetencies,
  workExperience,
  projects,
  education,
} from "../src/data/resume.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "resume.pdf");

const ACCENT = "#0a4d66";
const TEXT = "#222222";
const MUTED = "#555555";

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 42, bottom: 42, left: 54, right: 54 },
});
doc.pipe(fs.createWriteStream(outPath));

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function heading(text) {
  doc.moveDown(0.6);
  doc
    .fontSize(12)
    .fillColor(ACCENT)
    .font("Helvetica-Bold")
    .text(text.toUpperCase(), { characterSpacing: 0.6 });
  const y = doc.y + 2;
  doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + pageWidth, y).strokeColor(ACCENT).lineWidth(1).stroke();
  doc.moveDown(0.5);
}

// Header
doc.fontSize(22).fillColor(TEXT).font("Helvetica-Bold").text(personalInfo.name);
doc
  .fontSize(12)
  .fillColor(ACCENT)
  .font("Helvetica")
  .text(personalInfo.title);
doc.moveDown(0.3);
doc
  .fontSize(9.5)
  .fillColor(MUTED)
  .font("Helvetica")
  .text(
    [
      personalInfo.location,
      personalInfo.phone,
      personalInfo.email,
      personalInfo.linkedin,
      personalInfo.github,
    ].join("   |   ")
  );
doc.fontSize(9, ).fillColor(MUTED).text(personalInfo.workAuthorization);

// Summary
heading("Professional Summary");
doc.fontSize(10).fillColor(TEXT).font("Helvetica").text(professionalSummary, {
  align: "justify",
  lineGap: 2,
});

// Core Competencies
heading("Core Competencies");
coreCompetencies.forEach((group) => {
  doc
    .fontSize(10)
    .fillColor(TEXT)
    .font("Helvetica-Bold")
    .text(`${group.category}: `, { continued: true })
    .font("Helvetica")
    .fillColor(MUTED)
    .text(group.skills.join(", "));
  doc.moveDown(0.15);
});

// Work Experience
heading("Work Experience");
workExperience.forEach((job, index) => {
  doc
    .fontSize(11)
    .fillColor(TEXT)
    .font("Helvetica-Bold")
    .text(job.title, { continued: true })
    .font("Helvetica")
    .fillColor(MUTED)
    .text(`    ${job.startDate} - ${job.endDate}`, { align: "left" });
  doc
    .fontSize(10)
    .fillColor(ACCENT)
    .font("Helvetica-Oblique")
    .text(`${job.company} | ${job.location}`);
  doc.moveDown(0.2);
  job.highlights.forEach((point) => {
    doc
      .fontSize(9.5)
      .fillColor(TEXT)
      .font("Helvetica")
      .text(`•  ${point}`, { indent: 10, lineGap: 1.5 });
  });
  if (index < workExperience.length - 1) doc.moveDown(0.5);
});

// Key Projects
heading("Key Projects");
projects.forEach((project) => {
  doc
    .fontSize(10)
    .fillColor(TEXT)
    .font("Helvetica-Bold")
    .text(`${project.title}: `, { continued: true })
    .font("Helvetica")
    .fillColor(MUTED)
    .text(project.description);
  doc.moveDown(0.1);
});

// Education
heading("Education");
education.forEach((edu) => {
  doc
    .fontSize(10)
    .fillColor(TEXT)
    .font("Helvetica-Bold")
    .text(edu.degree, { continued: true })
    .font("Helvetica")
    .fillColor(MUTED)
    .text(`   GPA: ${edu.gpa}`);
  doc
    .fontSize(9.5)
    .fillColor(MUTED)
    .font("Helvetica-Oblique")
    .text(`${edu.school}, ${edu.location} | ${edu.date}`);
  doc.moveDown(0.3);
});

doc.end();

doc.on("end", () => {
  console.log(`Resume written to ${outPath}`);
});
