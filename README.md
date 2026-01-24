<h1>Personal Portfolio</h1>
<b>Link:</b>
https://sakshithombre.github.io/PersonalPortfolio/
<p>A high-performance, accessible personal portfolio designed to showcase professional engineering projects and technical proficiency. Built with **React**, this site leverages modern frontend advancements to deliver a near-instantaneous user experience with a strict focus on Core Web Vitals.
</p>
<br>
<b>🚀 Key Features</b>
<ul>
  <li>Serverless Contact System: Integrated with EmailJS to facilitate direct communication from the frontend without a backend server.</li>
  <li>**Performance-First:** Optimized for speed and responsiveness.</li>
  <li>**Accessibility:** Designed with inclusive web standards in mind.</li>
  <li>**Modern Stack:** Built using React and bootstrapped with Create React App.</li>
  <li>**Project Showcases:** Dedicated sections for engineering projects and technical skills.</li>
</ul>
<br>
<b>✉️ Contact Integration (EmailJS)</b>
<p>The contact form uses the EmailJS SDK to send messages directly to the developer's inbox. This approach keeps authentication details secure on the server side while allowing client-side triggers.</p>
<br>
<b>Setup Requirements :</b>
To get the contact form working, you need to configure your environment variables in a .env file:
<ol>
  <li>Service ID: Your connected email service (e.g., Gmail).</li>
  <li>Template ID: Your customized email template from the EmailJS dashboard</li>
  <li>Public Key: Your account's API public key. </li>
</ol>
<br>
<b>Security & Environment Variables</b>
<ul>
  <li>To protect sensitive API keys and prevent unauthorized use of your EmailJS account, this project uses environment variables. </li>
  <li>**Important:** Never commit your `.env` file to GitHub.</li>
</ul>
<br>
<p><b>  # .env</b><br>
REACT_APP_EMAILJS_SERVICE_ID=your_service_id<br>
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id<br>
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key<br>
</p><br>
<b>Configure the .gitignore</b>
<p>Ensure your `.gitignore` file includes the following line to prevent your keys from being leaked:<br>
  # .env file containing sensitive EmailJS keys<br>
.env<br>
.env.local<br>
.env.development.local<br>
.env.test.local<br>
.env.production.local<br>
</p>
<br>
<b>🛠️ Getting Started</b>
<p> Prerequisites:Ensure you have [Node.js](nodejs.org) installed on your machine.</p>
<br>
<b>Installation</b>
<ol>
  <li> Clone the repository:
  <br>bash<br>
   git clone github.com
  </li>
  <br>
  <li>Navigate to the project directory:<br>bash<br>
cd PersonalPortfolio </li>
  <br>
  <li>Install dependencies:
  <br>bash<br>
npm install
  </li>
</ol>
<br>
<b>💻 Available Scripts</b>
<p>In the project directory, you can run:<br><br>
<b>npm start</b><br>
Runs the app in development mode.<br>
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.
  <br> <br>
 <b> npm run build</b> <br>
Builds the app for production to the build folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
</p>
