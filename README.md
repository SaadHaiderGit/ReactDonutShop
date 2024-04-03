# React Donut Shop

This is a very simple website for a donut shop website, making use of React components to create a dynamic site that can list various donuts for sale. You can also access a donut database through an adminstrative page, allowing you to make changes to the donut menu.

## Setup

This website was made using XAMPP's Apache server, allowing for PHP and mySQL/MariaDB use. You can download XAMPP at https://www.apachefriends.org/. Make sure to have Apache, MySQL, PHP, and phpMyAdmin checked when  running the installation wizard.

When you want to run a server using XAMPP, simply open up the XAMPP control panel, then click the "Start" action for both Apache and mySQL.

![image](https://github.com/SaadHaiderGit/ReactDonutShop/assets/118562950/67f6a11f-82df-41e3-a466-6bb0567af056)

You will see a port number for your server. Mine runs on port 8080, so I will be using localhost:8080 for accessing the website.

![image](https://github.com/SaadHaiderGit/ReactDonutShop/assets/118562950/46a93920-3e1b-461a-a8e4-a0e9a9d5db3f)

Download the Github repository and save it in xampp\htdocs\Projects. Then access phpMyAdmin through your port (e.g.: http://localhost:8080/phpmyadmin/). You will need to import the donutdb.sql file to get started; you can do this by clicking on "Import" at the top navigation menu, then choosing the sql file to import. After that, click on the Import button at the bottom of the menu, and your SQL database should be good to go.  

## Usage

To access the actual donut shop website, start running your XAMPP server, then access the index.html file. I use the following link: http://localhost:8080/projects/ReactDonutShop/index.html

You can access the admin page by using a similar link, with index.html replaced by admin.html. I use the following link: http://localhost:8080/projects/ReactDonutShop/admin.html

Instructions for manipulating the donut database are found on the admin page, and should be self-explanatory.
