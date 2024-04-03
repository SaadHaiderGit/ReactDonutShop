-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2024 at 01:48 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donutdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `donuts`
--

CREATE TABLE `donuts` (
  `ID` int(11) NOT NULL,
  `Name` varchar(64) NOT NULL,
  `Description` varchar(256) NOT NULL,
  `Price` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donuts`
--

INSERT INTO `donuts` (`ID`, `Name`, `Description`, `Price`) VALUES
(1, 'Custard', 'A donut with chocolate frosting and a custard filling.', '1.29'),
(2, 'Cinnamon', 'A cinnamon-flavored donut in a swirl shape, with frosting on top.', '1.99'),
(3, 'Patriot', 'A donut slathered in blue, red, and white frosting and spinkles.', '1.39'),
(4, 'Chocolate Glazed', 'A chocolate glazed donut. ', '1.29'),
(5, 'Oreo', 'Cookie bits in a chocolate donut.', '1.69');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donuts`
--
ALTER TABLE `donuts`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
