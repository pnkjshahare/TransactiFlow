# TransactiFlow
# About my project (TransactiFlow)  
🚀 **TransactiFlow** is a MERN Stack-based web application designed to manage and visualize product transaction data. This project aims to provide a seamless user experience with detailed analytics and insightful visualizations. The app includes the following features:  
- **Transaction Listing**: With support for search and pagination, users can easily explore transaction records.  




- **Monthly Statistics**: Provides key sales insights, such as total sales amount, the number of sold and unsold items for a selected month.  
- **Price Range Bar Chart**: Displays the distribution of items within predefined price ranges for the selected month.  
- **Category-wise Pie Chart**: Visualizes the number of items in different categories for the selected month.  
- **Comprehensive API**: Combines data from all the aforementioned features into a single, easy-to-use response.  

This application is perfect for understanding trends, sales performance, and item distributions in a retail or e-commerce setting.

---

# Demo Video and Images  
🎥 **Demo Video**  
  https://github.com/user-attachments/assets/7fce8d68-3133-4d8a-99ae-e410f9631467

📸 **Screenshots**  
- # Transition Details
  ![image](https://github.com/user-attachments/assets/0b441420-12af-4362-8d61-1e5fc9dceb21)

- # Graph on details of month
  ![image](https://github.com/user-attachments/assets/8e422de8-d77d-43a1-814f-a9411118ddc2)

- # database on Mongodb
  ![image](https://github.com/user-attachments/assets/e74feb2b-cee7-44e9-a9fa-561b5828cb79)


---

# Stack Technologies  
### Backend:  
- 🖥️ **Node.js** – JavaScript runtime environment  
- ⚡ **Express.js** – Web framework for Node.js  
- 🗄️ **MongoDB** – NoSQL database for storing transaction data  
- 🔑 **Mongoose** – ODM for MongoDB to simplify database interactions  
- 🔐 **JWT** – JSON Web Token for secure API authentication  
- 📡 **Axios** – For making HTTP requests to external APIs

### Frontend:  
- ⚛️ **React.js** – JavaScript library for building user interfaces  
- 📊 **Chart.js/D3.js** – Libraries for rendering dynamic charts and visualizations  
- 🔗 **Axios** – For making API requests to the backend  
- 🧩 **React Router** – For handling navigation between different views  
- 💅 **CSS/Styled-Components** – For styling the application and creating a responsive design  

---

# Features  
✨ **Key Features**  
- **Transaction Listing**: List of transactions with filtering and pagination capabilities.  
- **Sales Statistics**: Shows total sale amount, total sold items, and not sold items for the selected month.  
- **Price Range Bar Chart**: Categorizes items into different price ranges and displays the count for each range.  
- **Category-wise Pie Chart**: Shows the count of items from each unique category in the selected month.  
- **Month-based Filtering**: All data is filtered based on the selected month, regardless of the year.  

🔍 **Search Functionality**:  
- Search by product title, description, or price in the transaction list.  
- Pagination ensures that large datasets are handled efficiently, showing only a specified number of records per page.  

📊 **Data Visualization**:  
- Bar charts and pie charts help to visualize the distribution of items based on price ranges and categories.  

---

# Install Backend and Frontend  

### Backend Installation:  
1. Clone the repository:  
   `git clone https://github.com/your-repo-link.git`  
2. Navigate to the backend folder:  
   `cd backend`  
3. Install backend dependencies:  
   `npm install`  
4. Set up environment variables:  
   - Create a `.env` file in the backend directory and add the necessary variables like your MongoDB connection URI, JWT secret, etc.  
5. Start the backend server:  
   `npm start`  
   The backend will be accessible at `http://localhost:5000`.

### Frontend Installation:  
1. Navigate to the frontend folder:  
   `cd frontend`  
2. Install frontend dependencies:  
   `npm install`  
3. Start the frontend server:  
   `npm start`  
   The frontend will be accessible at `http://localhost:3000`.


---

# API Endpoints  

### 1. **/api/transactions**  
- **Method**: `GET`  
- **Description**: Fetches all transactions for a selected month. Supports search and pagination.  
- **Parameters**:  
  - `month`: (Required) The month for filtering data.  
  - `page`: (Optional) The page number for pagination (default is 1).  
  - `per_page`: (Optional) Number of records per page (default is 10).  
  - `search`: (Optional) Search term for filtering transactions.  

### 2. **/api/statistics**  
- **Method**: `GET`  
- **Description**: Fetches statistics like total sale amount, total sold, and not sold items for the selected month.  
- **Parameters**:  
  - `month`: (Required) The month for filtering data.  

### 3. **/api/bar-chart**  
- **Method**: `GET`  
- **Description**: Fetches the price range distribution of items for the selected month.  
- **Parameters**:  
  - `month`: (Required) The month for filtering data.  

### 4. **/api/pie-chart**  
- **Method**: `GET`  
- **Description**: Fetches the count of items per category for the selected month.  
- **Parameters**:  
  - `month`: (Required) The month for filtering data.  

### 5. **/api/combined**  
- **Method**: `GET`  
- **Description**: Fetches combined data from all the APIs above.  
- **Parameters**:  
  - `month`: (Required) The month for filtering data.  

---

# Contribution  
🤝 Feel free to contribute to this project by submitting pull requests or raising issues for improvements and bug fixes!  

---

# License  
📄 This project is licensed under the MIT License.

