import "./Profile.css";


function Profile() {


  return (

    <div className="profile-container">


      <div className="profile-card">


        <div className="profile-header">


          <div className="profile-image">
            <span>
              P
            </span>
          </div>



          <h2>
            Priyanshi Sakariya
          </h2>



          <p>
            Master of Computer Applications
          </p>


        </div>




        <div className="profile-details">


          <div className="detail-box">

            <h4>Email</h4>

            <p>
              priyanshi@gmail.com
            </p>

          </div>



          <div className="detail-box">

            <h4>Enrollment No</h4>

            <p>
              MCA2026001
            </p>

          </div>




          <div className="detail-box">

            <h4>Department</h4>

            <p>
              Computer Application
            </p>

          </div>




          <div className="detail-box">

            <h4>Semester</h4>

            <p>
              Semester 2
            </p>

          </div>




          <div className="detail-box">

            <h4>Phone</h4>

            <p>
              9876543210
            </p>

          </div>



          <div className="detail-box">

            <h4>Project Status</h4>

            <p>
              Active
            </p>

          </div>



        </div>





        <button className="edit-btn">

          Edit Profile

        </button>




      </div>


    </div>

  );

}


export default Profile;