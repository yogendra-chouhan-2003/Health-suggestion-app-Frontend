import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import EndPoint from "../../apis/EndPoint";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // for lists, tables, strikethrough etc.

const MedicalReport = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reportSummary, setReportSummary] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a report file first!");
    setLoading(true);

    try {
      let formData = new FormData();
      formData.append("report", file);

      const res = await axios.post(EndPoint.REPORT_ANALYZE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });

      setReportSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      setReportSummary("⚠️ Failed to analyze the report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
        <div className="row align-items-center w-100">
          {/* Left Button */}
          <div className="col d-flex justify-content-start">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-primary mt-3 rounded-circle"
            >
              Back
            </button>
          </div>

          {/* Center Title */}
          <div className="col text-center">
            <h2 className="fw-bold mt-5 display-5">
              📄 Medical Report Analyzer
            </h2>
          </div>

          {/* Right Button */}
          <div className="col d-flex justify-content-end">
            <button
              onClick={() => navigate(-2)}
              className="btn btn-primary mt-3 rounded-circle"
            >
              Next
            </button>
          </div>
        </div>

        <p className="text-center text-muted fs-5">
          Upload your medical report (PDF, JPG, PNG) and let AI analyze it instantly!
        </p>
        {/* Upload Card */}
        <Card
          className=" shadow-lg text-center"
          style={{ maxWidth: "600px", width: "40%", borderRadius: "20px" }}
        >
          <div className="mb-4">
            <span style={{ fontSize: "50px" }}>📤</span>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="form-control mt-3"
              onChange={handleFileChange}
            />
          </div>
          <Button
            variant="success"
            size="lg"
            className="px-5 py-2 rounded-pill"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" animation="border" className="me-2" /> Analyzing...
              </>
            ) : (
              "Upload & Analyze"
            )}
          </Button>
        </Card>

        {/* Report Summary */}
{reportSummary && (
  <Card
    className="mt-5 p-5 shadow-lg text-start"
    style={{ maxWidth: "700px", width: "100%", borderRadius: "20px" }}
  >
    <h4 className="fw-bold mb-4 display-6 text-center">🩺 AI Insights</h4>

    <div className="fs-5 text-dark" style={{ lineHeight: "1.8" }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {reportSummary}
      </ReactMarkdown>
    </div>
  </Card>
)}
      </div>

      <Footer />
    </>
  );
};

export default MedicalReport;
