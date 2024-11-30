import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = ({ User }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <h1 className={styles.userName}>{User.name}</h1>
          <p className={styles.userEmail}>{User.email}</p>
        </div>
        <div className={styles.profileDetails}>
          <h2 className={styles.detailsHeading}>Details</h2>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Contact Number:</span>
            <span>{User.contactNumber}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Date of Birth:</span>
            <span>{User.dob}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Address:</span>
            <span>{User.address}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Gender:</span>
            <span>{User.gender}</span>
          </div>
          {/* <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Appointments:</span>
            <ul className={styles.appointmentsList}>
              {User.appointments.length > 0 ? (
                User.appointments.map((appointment, index) => (
                  <li key={index} className={styles.appointmentItem}>
                    {appointment}
                  </li>
                ))
              ) : (
                <li>No Appointments</li>
              )}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
