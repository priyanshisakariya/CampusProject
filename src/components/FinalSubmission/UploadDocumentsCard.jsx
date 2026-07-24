import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileArchive,
  FaDatabase,
  FaFilePowerpoint,
} from "react-icons/fa";

function UploadDocumentsCard() {
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
          accept=".pdf"
        />
      </div>

      <div className="form-group">
        <label>
          <FaFileArchive className="input-icon" />
          Source Code (ZIP)
        </label>

        <input
          type="file"
          accept=".zip"
        />
      </div>

      <div className="form-group">
        <label>
          <FaDatabase className="input-icon" />
          Database (.sql)
        </label>

        <input
          type="file"
          accept=".sql"
        />
      </div>

      <div className="form-group">
        <label>
          <FaFilePowerpoint className="input-icon" />
          Presentation (PPT / PPTX / PDF)
        </label>

        <input
          type="file"
          accept=".ppt,.pptx,.pdf"
        />
      </div>

    </div>
  );
}

export default UploadDocumentsCard;