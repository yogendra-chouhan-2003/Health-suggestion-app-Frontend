import React from "react";
import "./SuggestionModal.css"; // Import CSS for styling

const SuggestionModal = ({ symptom, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{symptom.name} Suggestions</h2>

        {symptom.suggestions && symptom.suggestions.length > 0 ? (
          <ul>
            {symptom.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        ) : (
          <p>No suggestions available for this symptom.</p>
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SuggestionModal;
