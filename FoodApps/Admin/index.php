<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Login</title>
    <link href="styles/output.css" rel="stylesheet" />
    <style>
      body {
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f0f4f8; /* Background color */
        overflow: hidden; /* Prevent scrollbars due to fixed dimensions */
      }
      .container {
        background-image: url("/assets/login_page_bg.jpg");
        background-size: cover; /* Cover the entire container */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Prevent tiling of the image */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
      }
      .login-card {
        background: rgba(255, 255, 255, 1); /* Semi-transparent background */
        border-radius: 1rem;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        width: 40vw;
        max-width: auto;
        height: auto; /* Allow height to adjust based on content */
        padding: 2rem;
        text-align: center;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        backdrop-filter: blur(
          10px
        ); /* Optional: adds a blur effect behind the card */
      }
      .login-card::before {
        content: "";
        position: absolute;
        top: -20%;
        left: -20%;
        width: 140%;
        height: 140%;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0) 70%
        );
        transform: rotate(-30deg);
        z-index: 0;
      }
      .login-card h1 {
        padding-top: 3vh;
        color: black;
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 700;
        position: relative;
        z-index: 1;
      }
      .login-card label {
        font-size: 0.875rem;
        color: #555;
        margin-bottom: 0.5rem;
        display: block;
        text-align: left;
        position: relative;
        z-index: 1;
        width: 100%; /* Make label occupy full width */
      }
      .login-card input {
        border: 1px solid #ddd;
        border-radius: 0.75rem;
        padding: 0.75rem;
        width: 100%;
        margin-bottom: 1rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        z-index: 1;
        background-color: #fff; /* Background color of input */
        font-size: 1rem; /* Font size of input text */
      }
      .login-card input:focus {
        border-color: #0072ff;
        box-shadow: 0 0 0 3px rgba(0, 114, 255, 0.2);
        outline: none;
      }
      .login-card button {
        background-color: #ff3b3b; /* Red background color */
        color: white;
        border: none;
        border-radius: 0.75rem;
        padding: 0.75rem;
        width: 70%;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        z-index: 1;
      }
      .login-card button:hover {
        background-color: #e03e3e; /* Darker red on hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .login-card footer {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 0.75rem;
        color: #555;
        position: relative;
        z-index: 1;
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .login-card {
          width: 90vw;
          padding: 1.5rem;
        }
        .login-card h1 {
          font-size: 1.5rem;
        }
        .login-card input {
          padding: 0.5rem;
        }
        .login-card button {
          font-size: 1rem;
          padding: 0.75rem;
        }
      }

      @media (max-width: 480px) {
        .login-card {
          width: 95vw;
          padding: 1rem;
        }
        .login-card h1 {
          font-size: 1.25rem;
        }
        .login-card input {
          padding: 0.5rem;
        }
        .login-card button {
          font-size: 1rem;
          padding: 0.75rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="login-card">
        <h1>Admin Login</h1>
        <form action="login.php" method="post">
          <label for="username">User Id</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter your user Id"
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />

          <button type="submit" name="login">Login</button>
        </form>
        <footer>
          <p>&copy; 2024 Delivery Dost. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </body>
</html>
