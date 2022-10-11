# 📚 Medusa Bookstore

### Bookstore E-Commerce Platform
* An open source book buying platform made using [Medusa](https://medusajs.com)

### 🌱 Project Structure
* **Storefront**
    - It is the web app that customers have access to (for viewing/purchasing orders, etc)
    - Storefront REST API - [https://docs.medusajs.com/api/store/](https://docs.medusajs.com/api/store/)
* **Admin**
    - For admins (storing collections of items)
    - All the items stored here will be used for retrieving & fetching items to the Storefront.
    - Admin REST API - [https://docs.medusajs.com/api/admin](https://docs.medusajs.com/api/admin/)
* **Backend**
    - The main component, which provides the services to fetch/manipulate data from Admin.

### ⚒ Local Setup
* Start off by installing `medusa` client globally on your system
```bash
$ yarn global add @medusajs/medusa-cli
```
> 📌 Quick Note (By default)
>
> * Admin runs on PORT - 7000
> * Storefront runs on PORT - 8000
> * Backend runs on PORT - 9000
* Install all the dependencies of each directory (assuming you are in root directory (`medusa-bookstore`))
```bash
$ cd backend
$ yarn
```
* The backend server should be running in the background while developing the application!

### 👤 Creating new Admin user
* `cd` into the `backend` directory and run the following command
```bash
$ medusa user -e some@email.com -p somepassword
```
* This will create a new user which can be used to access the dashboard