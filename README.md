# Dear Diary

This is a personal journaling application that allows users to reflect on their day, track their moods, and get inspired with random facts and reflective questions. There is also a section that includes emergency and mental health resources. The app leverages Firebase for authentication and data storage, and provides a clean, accessible user interface for seamless interaction.

## Features

- **User Authentication**: Users can sign up, log in, and log out using Firebase Authentication.
- **Digital Diary/Mood Tracking**: Users can track their mood and journal entries, and view their mood history.
- **Random Facts**: Users can receive random facts for inspiration. 
- **Responsive Design**: The app is designed to be fully responsive and accessible.
- **Languages**: The app is available both in english and swedish.

## Tech Stack

- **Frontend**: 
  - **React/Typescript**
  - **CSS/Styled Components**
  - **Axios/Fetch**: For making HTTP requests to the backend and third-party APIs.
  
- **Backend**:
  - **Node.js**
  - **Express.js**
  - **Firebase**: Used for user authentication and cloud storage.
  - **CORS**: Middleware for enabling cross-origin resource sharing.

- **Third-party APIs**:
  - **Useless Facts API**: For retrieving random facts. (https://uselessfacts.jsph.pl/)
