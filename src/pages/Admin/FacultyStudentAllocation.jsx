import "./FacultyStudentAllocation.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function FacultyStudentAllocation() {
  const studentData = [
    {
      groupNo: 1,
      student1Enroll: "25CI2110086",
      student1Name: "PRAJAPATI KOMAL MANSUKHBHAI",
      student2Enroll: "25CI2110091",
      student2Name: "RAJPUT GREESHMA JAGDISHBHAI",
      student3Enroll: "25CI2110035",
      student3Name: "JANI AESHA AVINASHBHAI",
      facultyGuide: "Sonia Verma",
    },
    {
      groupNo: 2,
      student1Enroll: "25CI2110133",
      student1Name: "YADAV NIKITA ARVINDKUMAR",
      student2Enroll: "25CI2110106",
      student2Name: "SHAIKH BUSHRA USMAN",
      student3Enroll: "25CI2110132",
      student3Name: "YADAV CHANDNI SHRAVANKUMAR",
      facultyGuide: "Kunjan Jesingani",
    },
    {
      groupNo: 3,
      student1Enroll: "25CI2110126",
      student1Name: "VAGHELA VRUND KANUBHAI",
      student2Enroll: "25CI2110075",
      student2Name: "PATEL HET KANUBHAI",
      student3Enroll: "25CI2110051",
      student3Name: "MANIYA HASTI ASHOKBHAI",
      facultyGuide: "Unnati Parmar",
    },
    {
      groupNo: 4,
      student1Enroll: "25CI2110117",
      student1Name: "TYAGI PRERNA RAVIKANT",
      student2Enroll: "25CI2110135",
      student2Name: "ZARANI BHUMI YOGESHBHAI",
      student3Enroll: "25CI2110021",
      student3Name: "DHOBI SONAL DINESHBHAI",
      facultyGuide: "Aaska Bhatt",
    },
    {
      groupNo: 5,
      student1Enroll: "25CI2110104",
      student1Name: "SHAH UDIT PREMALKUMAR",
      student2Enroll: "25CI2110120",
      student2Name: "VADERA TANVI HIMANSHUBHAI",
      student3Enroll: "25CI2110089",
      student3Name: "PRAJAPATI RAHUL DEVABHAI",
      facultyGuide: "Dipti Bhatt",
    },
    {
      groupNo: 6,
      student1Enroll: "25CI2110039",
      student1Name: "KALARIYA HELI RATILAL",
      student2Enroll: "25CI2110029",
      student2Name: "GOSWAMI URVASHI PRADIPGIRI",
      student3Enroll: "25CI2110055",
      student3Name: "MEVCHA HIYA RAMESHBHAI",
      facultyGuide: "Tinal Parikh",
    },
  ];

  // Download PDF
  const downloadPDF = () => {
    // Landscape A4 because the table has many columns
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // PDF title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(75, 46, 131);

    doc.text(
      "Faculty Student Allocation",
      148.5,
      15,
      { align: "center" }
    );

    // Small subtitle
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);

    doc.text(
      "Faculty and Student Group Allocation",
      148.5,
      22,
      { align: "center" }
    );

    // Table headers
    const tableHeaders = [
      [
        "Group No",
        "1st Student\nEnrollment No",
        "1st Student Name",
        "2nd Student\nEnrollment No",
        "2nd Student Name",
        "3rd Student\nEnrollment No",
        "3rd Student Name",
        "Faculty Guide",
      ],
    ];

    // Table rows
    const tableRows = studentData.map((student) => [
      student.groupNo,
      student.student1Enroll,
      student.student1Name,
      student.student2Enroll,
      student.student2Name,
      student.student3Enroll,
      student.student3Name,
      student.facultyGuide,
    ]);

    // Generate PDF table
    autoTable(doc, {
      head: tableHeaders,
      body: tableRows,

      startY: 28,

      theme: "grid",

      styles: {
        font: "helvetica",
        fontSize: 7,
        textColor: [40, 40, 40],
        cellPadding: 3,
        valign: "middle",
        halign: "center",
        lineColor: [210, 210, 210],
        lineWidth: 0.2,
      },

      headStyles: {
        fillColor: [91, 63, 140],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 7.5,
        halign: "center",
        valign: "middle",
        cellPadding: 3,
      },

      bodyStyles: {
        minCellHeight: 14,
      },

      alternateRowStyles: {
        fillColor: [250, 250, 250],
      },

      columnStyles: {
        0: {
          cellWidth: 15,
        },
        1: {
          cellWidth: 28,
        },
        2: {
          cellWidth: 43,
        },
        3: {
          cellWidth: 28,
        },
        4: {
          cellWidth: 43,
        },
        5: {
          cellWidth: 28,
        },
        6: {
          cellWidth: 43,
        },
        7: {
          cellWidth: 25,
        },
      },

      didParseCell: function (data) {
        // Make student names bold
        if (
          data.section === "body" &&
          (data.column.index === 2 ||
            data.column.index === 4 ||
            data.column.index === 6)
        ) {
          data.cell.styles.fontStyle = "bold";
        }
      },

      margin: {
        left: 8,
        right: 8,
      },
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();

    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);

      doc.text(
        `Faculty Student Allocation | Page ${i} of ${pageCount}`,
        148.5,
        202,
        { align: "center" }
      );
    }

    // Download
    doc.save("Faculty_Student_Allocation.pdf");
  };

  return (
    <div className="faculty-allocation-container">

      {/* Header Section */}
      <div className="allocation-header">

        <h1 className="table-title">
          Faculty Student Allocation
        </h1>

        <button
          className="download-pdf-btn"
          onClick={downloadPDF}
        >
          <span className="download-icon">↓</span>
          Download PDF
        </button>

      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="allocation-table">

          <thead>
            <tr>
              <th>Group No</th>

              <th>
                1st Student
                <br />
                Enrollment No
              </th>

              <th>
                1st Student Name
              </th>

              <th>
                2nd Student
                <br />
                Enrollment No
              </th>

              <th>
                2nd Student Name
              </th>

              <th>
                3rd Student
                <br />
                Enrollment No
              </th>

              <th>
                3rd Student Name
              </th>

              <th>
                Faculty Guide
              </th>
            </tr>
          </thead>

          <tbody>
            {studentData.map((student) => (
              <tr key={student.groupNo}>

                <td>
                  {student.groupNo}
                </td>

                <td>
                  {student.student1Enroll}
                </td>

                <td>
                  {student.student1Name}
                </td>

                <td>
                  {student.student2Enroll}
                </td>

                <td>
                  {student.student2Name}
                </td>

                <td>
                  {student.student3Enroll}
                </td>

                <td>
                  {student.student3Name}
                </td>

                <td>
                  {student.facultyGuide}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default FacultyStudentAllocation;