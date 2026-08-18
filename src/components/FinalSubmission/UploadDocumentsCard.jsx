import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileArchive,
  FaDatabase,
} from "react-icons/fa";

function UploadDocumentsCard({ formData, setFormData }) {

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files[0] || null,
    }));
  };

  return (
    <div className="submission-card">

      <h2 className="card-title">
        <FaCloudUploadAlt className="card-icon" />
        Upload Documents
      </h2>

      <div className="form-group">
        <label>
          <FaFilePdf className="input-icon" />
          Final Report (PDF)
        </label>

        <input
          type="file"
          name="finalReportFile"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />
      </div>

      <div className="form-group">
        <label>
          <FaFileArchive className="input-icon" />
          Source Code (ZIP)
        </label>

        <input
          type="file"
          name="sourceCodeFile"
          accept=".zip"
          onChange={handleFileChange}
          required
        />
      </div>

      <div className="form-group">
        <label>
          <FaDatabase className="input-icon" />
          Database (.sql)
        </label>

        <input
          type="file"
          name="databaseFile"
          accept=".sql"
          onChange={handleFileChange}
          required
        />
      </div>

    </div>
  );
}

export default UploadDocumentsCard;