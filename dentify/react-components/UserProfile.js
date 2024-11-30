import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = ({ user }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <img
            src={user.profilePicture || '/default-profile.png'}
            alt={`${user.name}'s profile`}
            className={styles.profileImage}
          />
          <h1 className={styles.userName}>{user.name}</h1>
          <p className={styles.userEmail}>{user.email}</p>
        </div>
        <div className={styles.profileDetails}>
          <h2 className={styles.detailsHeading}>Details</h2>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Contact Number:</span>
            <span>{user.contactNumber}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Date of Birth:</span>
            <span>{user.dob}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Address:</span>
            <span>{user.address}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Gender:</span>
            <span>{user.gender}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Appointments:</span>
            <ul className={styles.appointmentsList}>
              {user.appointments.length > 0 ? (
                user.appointments.map((appointment, index) => (
                  <li key={index} className={styles.appointmentItem}>
                    {appointment}
                  </li>
                ))
              ) : (
                <li>No Appointments</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
