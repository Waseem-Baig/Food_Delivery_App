<?php
  include "auth.php";
  include "config.php";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Users - Admin Panel</title>
    <link href="./styles/output.css" rel="stylesheet" />
  </head>
  <body class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav class="flex-1 mt-6">
        <ul class="space-y-2">
          <li>
            <a
              href="index.html"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="orders.html"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >Orders</a
            >
          </li>
          <li>
            <a
              href="menu.html"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >Menu Management</a
            >
          </li>
          <li>
            <a
              href="users.html"
              class="block px-4 py-2 text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white transition duration-300"
              >Users</a
            >
          </li>
          <li>
            <a
              href="reports.html"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >Reports</a
            >
          </li>
          <li>
            <a
              href="settings.html"
              class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
              >Settings</a
            >
          </li>
        </ul>
      </nav>
      <div class="p-4">
        <!-- I added form tag to button for logout -->
        <form action="logout.php" method="post">
        <button
          class="bg-red-600 hover:bg-red-700 w-full py-2 rounded-lg text-white font-semibold transition duration-300"
        type="submit">
          Logout
        </button></form>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navigation Bar -->
      <header class="bg-white shadow-md p-4 flex items-center justify-between">
        <div class="text-2xl font-semibold text-gray-800">Users</div>
        <button
          class="text-gray-600 hover:text-gray-800 transition duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-6 space-y-6">
        <!-- Users Overview -->
        <section class="bg-white p-6 shadow-lg rounded-lg">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-3xl font-bold text-gray-800">Users</h1>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-300"
              onclick="document.getElementById('add-user-modal').classList.remove('hidden')"
            >
              Add New User
            </button>
          </div>
          <div class="overflow-x-auto">
            <table
              class="min-w-full divide-y divide-gray-200 border border-gray-200"
            >
              <thead class="bg-gray-300">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    User ID
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Example rows, replace with dynamic data -->
                <tr class="bg-gray-50 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap">1</td>
                  <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    john.doe@example.com
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                  <td class="px-6 py-4 whitespace-nowrap text-green-600">
                    Active
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg"
                      onclick="editUser(1)"
                    >
                      Edit
                    </button>
                    <button
                      class="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg ml-2"
                      onclick="confirmDeleteUser(1)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <!-- Repeat rows as needed -->
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>

    <!-- Add/Edit User Modal -->
    <div
      id="add-user-modal"
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 hidden"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-semibold text-gray-800">Add New User</h2>
          <button
            class="text-gray-600 hover:text-gray-800 text-2xl"
            onclick="document.getElementById('add-user-modal').classList.add('hidden')"
          >
            &times;
          </button>
        </div>
        <form id="add-user-form" action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
          <div class="space-y-4">
            <div class="flex flex-col">
              <label
                for="user-name"
                class="text-sm font-medium text-gray-700 mb-1"
                >Name</label
              >
              <input
                type="text"
                id="user-name"
                name="name"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Enter name"
                required
              />
            </div>
            <?php # Did not write the username input and Adress input as well?>
            <!-- start of new code -->
            <div class="flex flex-col">
              <label
                for="username"
                class="text-sm font-medium text-gray-700 mb-1"
                >Username</label
              >
              <input
                type="text"
                name="username"
                id="user-email"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Enter username "
                required
              />
            </div>
            <div class="flex flex-col">
              <label
                for="address"
                class="text-sm font-medium text-gray-700 mb-1"
                >Address</label
              >
              <input
                type="text"
                name="address"
                id="user-email"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Enter address "
                required
              />
            </div>
            <!-- End of new code -->
            <div class="flex flex-col">
              <label
                for="user-email"
                class="text-sm font-medium text-gray-700 mb-1"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="user-email"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Enter user email"
                required
              />
            </div>

            <div class="flex flex-col">
              <label
                for="user-role"
                class="text-sm font-medium text-gray-700 mb-1"
                >Role</label
              >
              <?php # Getting the Data from selection?>
              <select
                id="user-role"
                name="role"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                required
              >
                <option value="0">Admin</option>
                <option value="1">Customer</option>
                <!-- <option>Vendor</option> -->
              </select>
            </div>
            <?php # Unwanted Garbage ?>
            <!-- <div class="flex flex-col">
              <label
                for="user-status"
                class="text-sm font-medium text-gray-700 mb-1"
                >Status</label
              > -->
              
              <!-- <select
                id="user-status"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                required
              >
                <option>Active</option>
                <option>Inactive</option>
              </select> -->
            <!-- </div> -->
            <div class="flex flex-col">
              <label
                for="user-password"
                class="text-sm font-medium text-gray-700 mb-1"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="user-email"
                class="block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm px-3 py-2"
                placeholder="Enter user password"
                required
              />
            </div>
          </div>

          <div class="mt-6 flex justify-end">
            <button
              name="adduser"
              type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>

    <?php # JS removed due to submit problem !!!?>
    <?php 

      #Handel the User add form data
      if(isset($_POST['adduser'])):
        $name=mysqli_real_escape_string($conn,$_POST['name']);
        $username=mysqli_real_escape_string($conn,$_POST['username']);
        $password=mysqli_real_escape_string($conn,sha1($_POST['password']));
        $address=mysqli_real_escape_string($conn,$_POST['address']);
        $role=$_POST['role'];
        $sql="INSERT INTO USER VALUES('{$name}','{$username}','{$address}','{$password}',{$role})";
      endif;
    ?>
  </body>
</html>
